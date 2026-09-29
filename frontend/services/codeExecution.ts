import axios from 'axios';

export interface CodeExecutionRequest {
    language: string;
    code: string;
    stdin?: string;
}

export interface CodeExecutionResponse {
    success: boolean;
    stdout: string;
    stderr: string;
    compileOutput: string;
    executionTimeMs?: number;
    error?: string;
}

const JUDGE0_LANG_IDS: Record<string, number> = {
    python: 71,
    java: 62,
    c: 50,
    cpp: 54,
    javascript: 63,
};

const ONECOMPILER_LANG_MAP: Record<string, { name: string; ext: string; fileName: string }> = {
    python: { name: 'python', ext: 'py', fileName: 'main.py' },
    java: { name: 'java', ext: 'java', fileName: 'Main.java' },
    c: { name: 'c', ext: 'c', fileName: 'main.c' },
    cpp: { name: 'cpp', ext: 'cpp', fileName: 'main.cpp' },
    javascript: { name: 'javascript', ext: 'js', fileName: 'index.js' },
};

const b64Encode = (str: string): string => {
    try {
        return btoa(unescape(encodeURIComponent(str)));
    } catch {
        return btoa(str);
    }
};

const b64Decode = (str: string): string => {
    if (!str) return '';
    try {
        return decodeURIComponent(escape(atob(str)));
    } catch {
        try {
            return atob(str);
        } catch {
            return str;
        }
    }
};

/**
 * Execute code via OneCompiler API
 */
async function executeViaOneCompiler(
    language: string,
    code: string,
    stdin: string = ''
): Promise<CodeExecutionResponse> {
    const config = ONECOMPILER_LANG_MAP[language.toLowerCase()];
    if (!config) {
        throw new Error(`Language '${language}' is not supported.`);
    }

    const payload = {
        name: config.name,
        title: config.name,
        version: 'latest',
        mode: config.name,
        description: null,
        extension: config.ext,
        languageType: 'programming',
        active: true,
        properties: {
            language: config.name,
            files: [
                {
                    name: config.fileName,
                    content: code,
                },
            ],
            stdin: stdin || '',
        },
    };

    const res = await axios.post('https://onecompiler.com/api/code/exec', payload, {
        headers: { 'Content-Type': 'application/json' },
        timeout: 15000,
    });

    const data = res.data;
    const stdout = data?.stdout || '';
    const stderr = data?.stderr || '';
    const exception = data?.exception || '';
    const isError = Boolean(exception || stderr);

    return {
        success: !isError,
        stdout: stdout,
        stderr: stderr || exception,
        compileOutput: '',
        executionTimeMs: data?.executionTime,
    };
}

/**
 * Execute code via Judge0 CE API
 */
async function executeViaJudge0(
    language: string,
    code: string,
    stdin: string = ''
): Promise<CodeExecutionResponse> {
    const langId = JUDGE0_LANG_IDS[language.toLowerCase()];
    if (!langId) {
        throw new Error(`Judge0 does not support language: ${language}`);
    }

    const res = await axios.post(
        'https://ce.judge0.com/submissions?base64_encoded=true&wait=true',
        {
            language_id: langId,
            source_code: b64Encode(code),
            stdin: b64Encode(stdin),
        },
        {
            headers: { 'Content-Type': 'application/json' },
            timeout: 12000,
        }
    );

    const data = res.data;
    const statusId = data?.status?.id;
    const stdout = b64Decode(data?.stdout || '').trim();
    const stderr = b64Decode(data?.stderr || '').trim();
    const compileOutput = b64Decode(data?.compile_output || '').trim();
    const messageOutput = data?.message || '';

    const isSuccess = statusId === 3;
    const errMsg = stderr || compileOutput || messageOutput;

    return {
        success: isSuccess,
        stdout: stdout,
        stderr: errMsg,
        compileOutput: compileOutput,
        executionTimeMs: data?.time ? Math.round(Number(data.time) * 1000) : undefined,
    };
}

/**
 * Robust code execution runner with multi-engine fallback:
 * 1. Attempts OneCompiler (fast, zero auth, ultra-reliable)
 * 2. Falls back to Judge0 CE if OneCompiler is unreachable
 */
export async function executeCode(req: CodeExecutionRequest): Promise<CodeExecutionResponse> {
    const lang = req.language.toLowerCase();
    const stdin = req.stdin || '';

    try {
        return await executeViaOneCompiler(lang, req.code, stdin);
    } catch (primaryErr: any) {
        console.warn('OneCompiler failed, attempting Judge0 fallback:', primaryErr?.message || primaryErr);
        try {
            return await executeViaJudge0(lang, req.code, stdin);
        } catch (fallbackErr: any) {
            console.error('All code execution engines failed:', fallbackErr);
            throw new Error(
                `Code execution servers unavailable. Details: ${primaryErr?.message || fallbackErr?.message || 'Network error'}`
            );
        }
    }
}
