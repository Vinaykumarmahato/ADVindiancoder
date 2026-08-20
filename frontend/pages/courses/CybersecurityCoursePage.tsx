import React, { useState } from 'react';
import CoursePageLayout from '../../components/CoursePageLayout';
import { Shield, Code, BookOpen, Lightbulb, FileText, Cpu, Layers, ShieldAlert, Zap, Lock, Check, AlertTriangle } from 'lucide-react';
import CodeBlock from '../../components/CodeBlock';
import MermaidDiagram from '../../components/MermaidDiagram';

interface CybersecurityTopic {
    id: string;
    title: string;
    definition: string;
    example?: string;
    syntax?: string;
    realLifeScenario?: string;
    codeSnippet?: string | null;
    content: React.ReactNode;
}

const CybersecurityCoursePage = () => {
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const courseData: CybersecurityTopic[] = [
        // ==================== BEGINNER TIER ====================
        {
            id: 'cyber-intro-cia-triad',
            title: '1. [Beginner] Introduction & Core Concepts (CIA Triad)',
            definition: 'Cybersecurity protects computer networks, systems, and data from cyber threats, governed by the CIA Triad: Confidentiality (encryption), Integrity (hashing), and Availability (failover).',
            syntax: `# CIA Triad Core Objectives Blueprint:\nConfidentiality ──> AES-256 / RSA Encryption (Prevents Unauthorized Reading)\nIntegrity       ──> SHA-256 Hashing & Digital Signatures (Prevents Data Tampering)\nAvailability    ──> Redundant Failover & DDoS Mitigation (Ensures Uptime)`,
            codeSnippet: `import hashlib\nimport os\n\n# Password Hashing using PBKDF2 HMAC SHA-256 with Salt\ndef hash_password_securely(password: str) -> str:\n    salt = os.urandom(16) # 16-byte random salt\n    key = hashlib.pbkdf2_hmac('sha256', password.encode('utf-8'), salt, 100000)\n    return salt.hex() + ":" + key.hex()\n\nhashed_entry = hash_password_securely("SuperSecretPass123!")\nprint("Secure Salted Hash:", hashed_entry[:45], "...")`,
            realLifeScenario: 'Fintech platforms and healthcare networks enforce PBKDF2 hashing and AES-256 encryption to protect customer payment details and medical records.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            The CIA Triad forms the foundational model for cybersecurity policies. It ensures <code className="text-cyan-600 font-mono">Confidentiality</code> (data privacy), <code className="text-cyan-600 font-mono">Integrity</code> (data accuracy), and <code className="text-cyan-600 font-mono">Availability</code> (data access).
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Think of a bank vault. Confidentiality is the safe&apos;s combination lock. Integrity is the tamper-evident seal on the money bags. Availability is the bank being open during business hours.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram
                            chart={`graph TD
    A[CIA Triad] --> B(Confidentiality)
    A --> C(Integrity)
    A --> D(Availability)
    B --> E[Encryption/Access Control]
    C --> F[Hashing/Digital Signatures]
    D --> G[Redundancy/Backups]`}
                        />
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-red-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`import hashlib\nimport os\n\ndef hash_password_securely(password: str) -> str:\n    salt = os.urandom(16)\n    key = hashlib.pbkdf2_hmac('sha256', password.encode('utf-8'), salt, 100000)\n    return salt.hex() + ":" + key.hex()\n\nhashed_entry = hash_password_securely("SuperSecretPass123!")\nprint("Secure Salted Hash:", hashed_entry[:45], "...")`} lang="python" filename="hashing.py" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Fintech applications enforce these principles to protect customer payment details (Confidentiality), ensure transaction records aren&apos;t modified (Integrity), and maintain 24/7 server uptime (Availability).
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl">
                            <h4 className="text-lg font-bold flex items-center mb-3">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" />
                                Advantages
                            </h4>
                            <ul className="list-disc list-inside space-y-2 text-sm">
                                <li>Provides a clear framework for security policies.</li>
                                <li>Comprehensive coverage of core security concepts.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl">
                            <h4 className="text-lg font-bold flex items-center mb-3">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside space-y-2 text-sm">
                                <li>Sometimes <code className="text-cyan-400 font-mono">Confidentiality</code> and <code className="text-cyan-400 font-mono">Availability</code> conflict (e.g., locking down access vs easy access).</li>
                                <li>Does not explicitly cover non-repudiation or accountability.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'cyber-networking-fundamentals',
            title: '2. [Beginner] Networking Fundamentals for Security (OSI Model)',
            definition: 'Security analysts inspect network packet flows across OSI 7-Layer & TCP/IP models, understanding protocols: HTTP (80), HTTPS (443), SSH (22), FTP (21), and DNS (53).',
            syntax: `# Standard Protocol Security Port Matrix Blueprint:\nPort 22  ──> SSH (Secure Encrypted Shell)\nPort 80  ──> HTTP (Unencrypted Plain Text)\nPort 443 ──> HTTPS (TLS/SSL Encrypted)\nPort 53  ──> DNS (Domain Name Resolution)`,
            codeSnippet: `# Wireshark / TShark Packet Inspection CLI Command\n$ tshark -i eth0 -f "tcp port 443" -c 5\n\n# Inspecting Listening Network Ports via Netstat / SS\n$ ss -tulpn | grep LISTEN`,
            realLifeScenario: 'Security Operations Centers (SOC) monitor Wireshark network packet dumps to detect unauthorized data exfiltration over non-standard network ports.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Networking fundamentals outline how data moves between devices using protocols and port numbers. The OSI model provides a standard way to map these communications for security analysis.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Ports are like doors in an apartment building. An open Port 80 (HTTP) is an unlocked door where anyone can see what you carry inside. Port 443 (HTTPS) is a secure, locked door where only authorized personnel can understand the contents.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram
                            chart={`graph TD
    A[Application Layer 7] -->|HTTP, DNS| B[Transport Layer 4]
    B -->|TCP, UDP| C[Network Layer 3]
    C -->|IP Packets| D[Data Link Layer 2]
    D -->|Frames| E[Physical Layer 1]
    E -.->|Network Cables| E`}
                        />
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-red-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`# Check open ports on your system\nsudo netstat -tulpn\n\n# Capture packets on eth0 for port 443\nsudo tcpdump -i eth0 port 443`} lang="bash" filename="net_commands.sh" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Security teams use packet sniffers (like Wireshark) to inspect network traffic and identify anomalies such as plain-text passwords traversing the network or unauthorized outbound connections.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl">
                            <h4 className="text-lg font-bold flex items-center mb-3">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" />
                                Advantages
                            </h4>
                            <ul className="list-disc list-inside space-y-2 text-sm">
                                <li>Provides deep visibility into network activities.</li>
                                <li>Helps pinpoint where an attack is occurring in the OSI model.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl">
                            <h4 className="text-lg font-bold flex items-center mb-3">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside space-y-2 text-sm">
                                <li>Encrypted traffic (TLS) makes deep packet inspection difficult.</li>
                                <li>Analyzing high-volume traffic requires specialized hardware.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'cyber-authentication-access-control',
            title: '3. [Beginner] Authentication & Access Control (MFA, RBAC vs ABAC)',
            definition: 'Authentication verifies user identity (MFA, Passwords). Authorization controls access permissions using Role-Based Access Control (RBAC) or Attribute-Based Access Control (ABAC).',
            syntax: `# Access Control Paradigm Comparison:\nRBAC ──> Grant access based on User Role (e.g. "Admin", "Editor")\nABAC ──> Grant access dynamically based on Attributes (Role, Time, Location, Device)`,
            codeSnippet: `from functools import wraps\n\n# Role-Based Access Control (RBAC) Decorator\ndef require_role(allowed_roles):\n    def decorator(func):\n        @wraps(func)\n        def wrapper(user, *args, **kwargs):\n            if user.get("role") not in allowed_roles:\n                raise PermissionError("403 Forbidden: Insufficient Role Permissions")\n            return func(user, *args, **kwargs)\n        return wrapper\n    return decorator\n\n@require_role(["Admin"])\ndef delete_database(user):\n    return "Database Purged Successfully"\n\nuser_session = {"username": "vinay", "role": "User"}\ntry:\n    delete_database(user_session)\nexcept PermissionError as e:\n    print("RBAC Interception:", e)`,
            realLifeScenario: 'Enterprise Identity Providers (Okta, Azure AD) require Multi-Factor Authentication (MFA) to stop password-spraying attacks.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Authentication proves WHO you are, while authorization determines WHAT you can do. Using <code className="text-cyan-600 font-mono">RBAC</code> (roles) or <code className="text-cyan-600 font-mono">ABAC</code> (attributes) enforces least privilege.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Authentication is like showing your ID at a club entrance. Authorization is the bouncer checking if you have a VIP bracelet (Role) to enter the VIP section.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram
                            chart={`graph LR
    A[User] -->|Provides Credentials| B(Authentication)
    B -->|MFA Success| C(Authorization)
    C -->|RBAC/ABAC check| D{Access Granted?}
    D -->|Yes| E[Protected Resource]
    D -->|No| F[403 Forbidden]`}
                        />
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-red-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`@require_role(["Admin"])\ndef delete_database(user):\n    return "Database Purged Successfully"\n\nuser_session = {"username": "vinay", "role": "User"}\ntry:\n    delete_database(user_session)\nexcept PermissionError as e:\n    print("Access Denied:", e)`} lang="python" filename="rbac.py" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Organizations use Identity Providers like Okta to enforce MFA. ABAC is used to restrict access if an employee tries to log in from an unusual geographic location.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl">
                            <h4 className="text-lg font-bold flex items-center mb-3">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" />
                                Advantages
                            </h4>
                            <ul className="list-disc list-inside space-y-2 text-sm">
                                <li>MFA stops 99% of automated credential stuffing attacks.</li>
                                <li>RBAC simplifies permission management for large teams.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl">
                            <h4 className="text-lg font-bold flex items-center mb-3">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside space-y-2 text-sm">
                                <li><code className="text-cyan-400 font-mono">RBAC</code> can lead to &quot;role explosion&quot; if too many specific roles are created.</li>
                                <li>MFA can introduce friction for end users.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'cyber-threats-attacks-malware',
            title: '4. [Beginner] Common Cyber Threats & Attacks (Phishing, DDoS)',
            definition: 'Identify threat vectors: Malware (Ransomware, Trojans, Worms), Social Engineering (Phishing), Man-in-the-Middle (MitM) eavesdropping, and Denial of Service (DDoS).',
            syntax: `# Common Attack Vectors Checklist:\n[!] Ransomware   -> Encrypts local files, demanding cryptocurrency ransom\n[!] Phishing     -> Deceptive emails stealing login credentials\n[!] DDoS Attack  -> Floods servers with botnet traffic to disrupt service`,
            codeSnippet: `# Mitigating Rate-Limit DDoS Attacks in Flask / Express Middleware\n# Reject IPs exceeding 100 requests per minute!`,
            realLifeScenario: 'Organizations conduct regular simulated phishing tests to educate employees against clicking suspicious email attachments.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Understanding common threats like Malware, Phishing, and DDoS is essential for building defensive measures and identifying indicators of compromise.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            A DDoS attack is like thousands of fake customers crowding a store entrance, preventing real customers from getting inside. Phishing is like a con artist calling you pretending to be your bank to steal your PIN.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram
                            chart={`graph TD
    A[Attacker] -->|Phishing Email| B[Employee]
    B -->|Clicks Link| C[Malware Downloaded]
    C -->|Executes Payload| D[Ransomware Encrypts Files]
    D --> E[Demands Bitcoin Ransom]`}
                        />
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-red-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`const rateLimit = require('express-rate-limit');\n\nconst limiter = rateLimit({\n  windowMs: 15 * 60 * 1000, // 15 minutes\n  max: 100 // limit each IP to 100 requests per windowMs\n});\n\n// Apply to all requests to mitigate simple DoS\napp.use(limiter);`} lang="javascript" filename="server.js" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Cloudflare and AWS Shield provide network-level DDoS protection to absorb massive botnet attacks before they reach application servers.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl">
                            <h4 className="text-lg font-bold flex items-center mb-3">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" />
                                Advantages
                            </h4>
                            <ul className="list-disc list-inside space-y-2 text-sm">
                                <li>Knowing threat actors helps prioritize security budgets.</li>
                                <li>Simulated attacks improve employee security awareness.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl">
                            <h4 className="text-lg font-bold flex items-center mb-3">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside space-y-2 text-sm">
                                <li>Zero-day threats cannot be detected by traditional signature-based antiviruses.</li>
                                <li>Humans remain the weakest link in social engineering attacks.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },

        // ==================== INTERMEDIATE TIER ====================
        {
            id: 'cyber-owasp-top-10-web-security',
            title: '5. [Intermediate] Web Application Security & OWASP Top 10',
            definition: 'Understand the OWASP Top 10 web vulnerabilities: SQL Injection (SQLi), Cross-Site Scripting (XSS), CSRF, Broken Access Control, and Insecure Deserialization.',
            syntax: `/* SQL Injection Defense: Always use Parameterized Queries! */\n-- VULNERABLE:\nSELECT * FROM users WHERE username = '$userInput' AND password = '$userPassword';\n\n-- SECURE PREPARED STATEMENT:\nSELECT * FROM users WHERE username = ? AND password = ?;`,
            codeSnippet: `import sqlite3\n\n# Defending against SQL Injection using Parameterized Binding\nconn = sqlite3.connect(":memory:")\ncursor = conn.cursor()\ncursor.execute("CREATE TABLE users (id INT, username TEXT, role TEXT)")\ncursor.execute("INSERT INTO users VALUES (1, 'admin', 'SuperAdmin')")\n\n# SECURE Parameterized Query (Neutralizes SQLi payload: ' OR '1'='1)\nuserInput = "' OR '1'='1"\ncursor.execute("SELECT * FROM users WHERE username = ?", (userInput,))\nresult = cursor.fetchall()\n\nprint("Queried Result (0 Rows Returned -> SQLi Defeated!):", result)`,
            realLifeScenario: 'Web Application Firewalls (WAF) inspect incoming HTTP request strings, blocking malicious SQLi (`UNION SELECT`) and XSS payload inputs.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            The OWASP Top 10 represents the most critical security risks to web applications. Preventing these involves input validation, output encoding, and proper session management.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            SQL Injection is like giving a bank teller a note that says &quot;Deposit this check, AND ALSO empty the vault.&quot; A parameterized query treats the note strictly as data, not as an executable command.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram
                            chart={`graph LR
    A[Attacker] -->|Malicious Script| B[Vulnerable App]
    B -->|Stored in DB| C[(Database)]
    C -->|Served to User| D[Victim's Browser]
    D -->|Executes Script| E[Session Cookie Stolen]`}
                        />
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-red-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`// Preventing XSS by encoding output in React (done automatically)\nconst UserBio = ({ bio }) => {\n  // React escapes HTML inherently\n  return <div>{bio}</div>;\n};\n\n// Dangerously setting HTML (Vulnerable if bio contains malicious <script>)\nconst VulnerableBio = ({ bio }) => {\n  return <div dangerouslySetInnerHTML={{ __html: bio }} />;\n};`} lang="jsx" filename="XSS_Defense.jsx" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Modern ORMs (like Prisma or Sequelize) automatically parameterize SQL queries to prevent SQLi. Frontend frameworks like React sanitize text to block Reflected/Stored XSS.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl">
                            <h4 className="text-lg font-bold flex items-center mb-3">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" />
                                Advantages
                            </h4>
                            <ul className="list-disc list-inside space-y-2 text-sm">
                                <li>Following OWASP guidelines blocks the vast majority of web attacks.</li>
                                <li>Creates a standardized security baseline for development teams.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl">
                            <h4 className="text-lg font-bold flex items-center mb-3">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside space-y-2 text-sm">
                                <li>Vulnerabilities in third-party libraries (Supply Chain) are harder to track.</li>
                                <li>Legacy codebases often require massive refactoring to become secure.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'cyber-cryptography-pki-tls',
            title: '6. [Intermediate] Cryptography, PKI & TLS/SSL Handshake',
            definition: 'Cryptography secures communication: Symmetric Encryption (AES-256 fast), Asymmetric Encryption (RSA, ECC), Hashing (SHA-256), PKI Digital Certificates, and TLS 1.3 Handshake.',
            syntax: `# TLS 1.3 Cryptographic Handshake Blueprint:\nClient ──> ClientHello [Cipher Suites] ──> Server\nServer ──> ServerHello [Digital Certificate + Public Key] ──> Client\nClient ──> Verify Certificate Authority (CA) & Derive Shared Session Key ──> Encrypted HTTPS Traffic`,
            codeSnippet: `from cryptography.fernet import Fernet\n\n# Symmetric AES-256 Encryption / Decryption using Fernet\nkey = Fernet.generate_key()\ncipher_suite = Fernet(key)\n\nplain_text = b"Confidential Financial Payload Data"\ncipher_text = cipher_suite.encrypt(plain_text)\ndecrypted_text = cipher_suite.decrypt(cipher_text)\n\nprint("Encrypted Bytes:", cipher_text[:30], "...")\nprint("Decrypted String:", decrypted_text.decode('utf-8'))`,
            realLifeScenario: 'HTTPS websites use Public Key Infrastructure (PKI) digital certificates issued by Let\'s Encrypt to establish encrypted TLS sessions.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Cryptography uses math to obfuscate data. <code className="text-cyan-600 font-mono">PKI</code> (Public Key Infrastructure) uses Digital Certificates to prove server identities and establish secure TLS connections.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Symmetric encryption is a lockbox with a single key. Asymmetric encryption is a mailbox—anyone can drop a letter in (public key), but only you can open it to read (private key).
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram
                            chart={`sequenceDiagram
    participant Client
    participant Server
    Client->>Server: ClientHello (Cipher Suites)
    Server->>Client: ServerHello (Certificate + Public Key)
    Client->>Client: Verifies Cert Authority
    Client->>Server: Key Exchange (Creates Symmetric Key)
    Server->>Client: Finished
    Note over Client,Server: Secure Encrypted Communication`}
                        />
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-red-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`from cryptography.hazmat.primitives.asymmetric import rsa\n\n# Generate RSA Private & Public Keys\nprivate_key = rsa.generate_private_key(public_exponent=65537, key_size=2048)\npublic_key = private_key.public_key()\n\nprint("Generated 2048-bit Asymmetric Keys for PKI")`} lang="python" filename="crypto.py" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Every time you visit a website with HTTPS, your browser and the server execute a TLS handshake using asymmetric cryptography to securely exchange a fast symmetric key.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl">
                            <h4 className="text-lg font-bold flex items-center mb-3">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" />
                                Advantages
                            </h4>
                            <ul className="list-disc list-inside space-y-2 text-sm">
                                <li>Ensures data in transit cannot be read by Man-in-the-Middle attackers.</li>
                                <li>Certificates guarantee that you are talking to the real server.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl">
                            <h4 className="text-lg font-bold flex items-center mb-3">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside space-y-2 text-sm">
                                <li>Certificate management and expiration can cause outages if not automated.</li>
                                <li>Asymmetric cryptography is computationally heavy compared to symmetric.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'cyber-network-security-firewalls-waf',
            title: '7. [Intermediate] Network Security, Firewalls & WAF (IDS/IPS)',
            definition: 'Protect network perimeters using Stateful Firewalls, Web Application Firewalls (WAF), Intrusion Detection/Prevention Systems (IDS/IPS - Snort/Suricata), and VPN tunnels.',
            syntax: `# Linux iptables Stateful Firewall Rule Blueprint:\n$ iptables -A INPUT -p tcp --dport 22 -s 192.168.1.0/24 -j ACCEPT\n$ iptables -A INPUT -p tcp --dport 80 -j ACCEPT\n$ iptables -A INPUT -j DROP`,
            codeSnippet: `# Linux UFW (Uncomplicated Firewall) Rules CLI Setup\n$ sudo ufw default deny incoming\n$ sudo ufw default allow outgoing\n$ sudo ufw allow 22/tcp\n$ sudo ufw allow 443/tcp\n$ sudo ufw enable\n$ sudo ufw status verbose`,
            realLifeScenario: 'Intrusion Prevention Systems (IPS) monitor network traffic signatures in real time, dropping malformed packets automatically.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Firewalls filter traffic based on IP/Ports. A <code className="text-cyan-600 font-mono">WAF</code> filters Layer 7 HTTP payloads to stop web attacks. <code className="text-cyan-600 font-mono">IDS/IPS</code> rely on threat signatures to detect and block malicious behavior.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            A Firewall is a security guard checking IDs at the gate. An IPS is a security camera equipped with AI that tackles anyone trying to pick a lock.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram
                            chart={`graph TD
    A[Internet Traffic] --> B[Firewall / Router]
    B --> C[Intrusion Prevention System - IPS]
    C -->|Drops Malicious| D[Blackhole]
    C -->|Allows Clean| E[Web Application Firewall - WAF]
    E --> F[Internal Web Server]`}
                        />
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-red-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`# Simple Snort IDS Rule to detect Nmap scanning\nalert tcp any any -> any any (msg:"NMAP TCP Scan Detected"; sid:1000001; rev:1;)`} lang="bash" filename="snort.rules" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Enterprises route their traffic through Palo Alto Next-Gen Firewalls and F5 WAFs to automatically drop known bad IPs and inspect payloads for SQL injections.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl">
                            <h4 className="text-lg font-bold flex items-center mb-3">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" />
                                Advantages
                            </h4>
                            <ul className="list-disc list-inside space-y-2 text-sm">
                                <li>Provides a hardened defense-in-depth perimeter.</li>
                                <li>Automated threat blocking reduces manual analyst workloads.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl">
                            <h4 className="text-lg font-bold flex items-center mb-3">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside space-y-2 text-sm">
                                <li>High false-positive rates in IDS can cause alert fatigue.</li>
                                <li>Complex rule sets can degrade network performance.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'cyber-os-hardening-least-privilege',
            title: '8. [Intermediate] Operating System & System Hardening',
            definition: 'Harden Linux and Windows servers: Enforce Least Privilege, file permission lockdown (`chmod 600`), disable root SSH logins, apply security patches, and disable unused services.',
            syntax: `# Linux SSH Server Hardening Config (/etc/ssh/sshd_config):\nPermitRootLogin no\nPasswordAuthentication no\nX11Forwarding no\nMaxAuthTries 3`,
            codeSnippet: `# Secure Linux File Permissions Lockdown CLI\n$ chmod 700 ~/.ssh\n$ chmod 600 ~/.ssh/authorized_keys\n$ chown -R root:root /etc/shadow\n\n# Disabling Unnecessary Background Systemd Services\n$ systemctl stop bluetooth.service\n$ systemctl disable bluetooth.service`,
            realLifeScenario: 'System administrators apply CIS (Center for Internet Security) Benchmarks to harden server operating systems prior to production deployment.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Hardening involves reducing a system&apos;s attack surface by removing unnecessary software, applying secure configurations, and enforcing the <code className="text-cyan-600 font-mono">Principle of Least Privilege</code>.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Hardening a server is like bulletproofing a car: you remove the windows you don&apos;t need, reinforce the doors, and ensure only authorized people have the keys to drive.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram
                            chart={`graph TD
    A[Default OS Install] --> B[Remove Unused Software]
    B --> C[Configure Firewall / Ports]
    C --> D[Enforce Strong Passwords / MFA]
    D --> E[Disable Root Logins]
    E --> F[Apply CIS Benchmarks]
    F --> G[Hardened Server]`}
                        />
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-red-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`# Update all packages to fix known vulnerabilities\nsudo apt-get update && sudo apt-get upgrade -y\n\n# Configure fail2ban to block IP after 3 failed SSH attempts\nsudo systemctl enable fail2ban`} lang="bash" filename="harden.sh" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Before a new Linux VM goes into production, automated tools like Ansible run scripts to strip away vulnerable default settings and enforce strict file permissions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl">
                            <h4 className="text-lg font-bold flex items-center mb-3">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" />
                                Advantages
                            </h4>
                            <ul className="list-disc list-inside space-y-2 text-sm">
                                <li>Significantly reduces the potential attack surface.</li>
                                <li>Prevents lateral movement if an attacker breaches one service.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl">
                            <h4 className="text-lg font-bold flex items-center mb-3">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside space-y-2 text-sm">
                                <li>Over-hardening can break application functionality.</li>
                                <li>Requires continuous maintenance as new patches are released.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },

        // ==================== ADVANCED TIER ====================
        {
            id: 'cyber-ethical-hacking-pentesting',
            title: '9. [Advanced] Ethical Hacking & Penetration Testing (Metasploit, Nmap)',
            definition: 'Penetration testing executes authorized simulated attacks following 5 methodology steps: Reconnaissance, Scanning (Nmap), Exploitation (Metasploit, Burp Suite), Post-Exploitation, and Reporting.',
            syntax: `# Nmap Network Port Scanning Blueprint:\n$ nmap -sV -sC -T4 192.168.1.1       # Service version & default script scan\n$ nmap -p- 10.10.10.5                # Full 65,535 port scan`,
            codeSnippet: `# Metasploit Framework (msfconsole) CLI Execution Blueprint\n$ msfconsole\nmsf6 > use exploit/multi/http/apache_mod_cgi_bash_env_exec\nmsf6 exploit(...) > set RHOSTS 192.168.1.50\nmsf6 exploit(...) > set PAYLOAD linux/x86/shell_reverse_tcp\nmsf6 exploit(...) > run`,
            realLifeScenario: 'Red Teams conduct authorized penetration tests to discover security vulnerabilities before malicious hackers exploit them.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Ethical Hacking involves probing systems for weaknesses using the same tools as malicious hackers, but with explicit permission. The goal is to patch flaws before they are exploited.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Pen testing is like a bank hiring professional lockpickers to try and break into their vault overnight. When the lockpickers succeed, they give the bank a report on how to fix the locks.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram
                            chart={`graph LR
    A[Reconnaissance] --> B[Scanning/Nmap]
    B --> C[Vulnerability Analysis]
    C --> D[Exploitation/Metasploit]
    D --> E[Post-Exploitation]
    E --> F[Reporting]`}
                        />
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-red-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`# Simple Bash script for subnet ping sweep reconnaissance\nfor ip in $(seq 1 254); do\n  ping -c 1 192.168.1.$ip | grep "bytes from" | cut -d " " -f 4 | tr -d ":" &\ndone`} lang="bash" filename="ping_sweep.sh" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Bug Bounty programs and third-party security firms use tools like Burp Suite and Metasploit to perform rigorous audits on web applications before major releases.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl">
                            <h4 className="text-lg font-bold flex items-center mb-3">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" />
                                Advantages
                            </h4>
                            <ul className="list-disc list-inside space-y-2 text-sm">
                                <li>Uncovers hidden vulnerabilities automated scanners might miss.</li>
                                <li>Provides actionable proof of concept for risks.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl">
                            <h4 className="text-lg font-bold flex items-center mb-3">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside space-y-2 text-sm">
                                <li>Aggressive scanning or exploitation can crash production servers.</li>
                                <li>It is only a snapshot in time; systems evolve constantly.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'cyber-siem-soc-splunk-elk',
            title: '10. [Advanced] SIEM & Security Operations Center (Splunk / ELK)',
            definition: 'Security Information & Event Management (SIEM) aggregates logs from firewalls, servers, and endpoints into central dashboards (Splunk, Elastic Security) for automated correlation alerts.',
            syntax: `/* Splunk Search Processing Language (SPL) Query Blueprint: */\nindex=firewall action=blocked \n| stats count by src_ip \n| where count > 1000 \n| sort - count`,
            codeSnippet: `// Elastic Security KQL (Kibana Query Language) Alert Rule\nevent.category : "authentication" AND event.outcome : "failure" AND user.name : "root"`,
            realLifeScenario: 'SOC analysts use SIEM correlation rules to flag brute-force SSH login attempts when 100 failed logins occur within 60 seconds.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            A <code className="text-cyan-600 font-mono">SIEM</code> collects, parses, and normalizes logs from thousands of devices into a central dashboard. SOC analysts use these platforms to detect complex, distributed cyber attacks.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            A SIEM is like a giant command center with hundreds of camera feeds. Instead of watching every screen, smart AI alerts the guards when it sees someone wearing a ski mask on Camera 4.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram
                            chart={`graph TD
    A[Firewall Logs] --> D(SIEM Aggregator / Splunk)
    B[Server Logs] --> D
    C[Endpoint Antivirus] --> D
    D -->|Correlation Engine| E{Suspicious Pattern?}
    E -->|Yes| F[Trigger Alert to SOC Analyst]
    E -->|No| G[Store for Audit]`}
                        />
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-red-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`// Logstash pipeline configuration to ingest JSON logs\ninput {\n  file {\n    path => "/var/log/app/*.json"\n    codec => "json"\n  }\n}\nfilter {\n  date {\n    match => [ "timestamp", "ISO8601" ]\n  }\n}\noutput {\n  elasticsearch { hosts => ["localhost:9200"] }\n}`} lang="ruby" filename="logstash.conf" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Fortune 500 companies use Splunk to correlate a user logging in from New York and downloading 50GB of files from China five minutes later (impossible travel alert).
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl">
                            <h4 className="text-lg font-bold flex items-center mb-3">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" />
                                Advantages
                            </h4>
                            <ul className="list-disc list-inside space-y-2 text-sm">
                                <li>Provides single-pane-of-glass visibility into enterprise security.</li>
                                <li>Automated correlation spots attacks humans would miss.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl">
                            <h4 className="text-lg font-bold flex items-center mb-3">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside space-y-2 text-sm">
                                <li>Ingesting terabytes of logs daily is extremely expensive.</li>
                                <li>Requires skilled engineers to write effective correlation rules.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'cyber-incident-response-threat-hunting',
            title: '11. [Advanced] Incident Response & Threat Hunting (NIST IR)',
            definition: 'Execute the NIST Incident Response lifecycle: 1. Preparation, 2. Detection & Analysis, 3. Containment, 4. Eradication, 5. Recovery, and 6. Lessons Learned.',
            syntax: `# Incident Response Lifecycle Blueprint:\nPreparation ──> Detection & Analysis ──> Containment ──> Eradication ──> Recovery ──> Post-Incident Review`,
            codeSnippet: `# Isolation Containment Step Command (Isolating Compromised Host)\n$ sudo iptables -A INPUT -j DROP\n$ sudo iptables -A OUTPUT -j DROP\n# Keep only SOC Analysis IP connection open!`,
            realLifeScenario: 'Incident Response (IR) retainer teams isolate compromised servers immediately to contain ransomware propagation across corporate subnets.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Incident Response is the structured process of handling a breach to minimize damage. Threat Hunting is proactively searching networks for undetected threats before they trigger an alert.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Incident Response is like firefighters arriving to put out a burning building. Threat Hunting is a fire marshal proactively walking around with thermal cameras looking for hidden electrical shorts.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram
                            chart={`graph LR
    A[Preparation] --> B[Detection/Analysis]
    B --> C[Containment]
    C --> D[Eradication]
    D --> E[Recovery]
    E --> F[Lessons Learned]
    F -.-> A`}
                        />
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-red-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`# Simple Threat Hunting script checking for weird open ports\n# Looking for reverse shells or unauthorized listeners\nnetstat -tulpn | awk '{print $4, $7}' | grep -v '80\\|443\\|22'`} lang="bash" filename="hunt.sh" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            When ransomware strikes, IR teams immediately pull network cables on infected machines (Containment) to stop lateral movement across the domain controller.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl">
                            <h4 className="text-lg font-bold flex items-center mb-3">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" />
                                Advantages
                            </h4>
                            <ul className="list-disc list-inside space-y-2 text-sm">
                                <li>Structured methodologies reduce panic and mistakes during a breach.</li>
                                <li>Reduces recovery time and minimizes data loss.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl">
                            <h4 className="text-lg font-bold flex items-center mb-3">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside space-y-2 text-sm">
                                <li>High stress and fatigue can lead to analyst burnout.</li>
                                <li>Without proper logging/SIEM, IR teams operate completely blind.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'cyber-digital-forensics-volatility',
            title: '12. [Advanced] Digital Forensics & Memory Forensics (Volatility)',
            definition: 'Digital Forensics investigates digital evidence maintaining strict Chain of Custody, extracting RAM artifacts via Volatility and analyzing disk images.',
            syntax: `# Volatility 3 Memory Forensics CLI Blueprint:\n$ vol -f memory.raw windows.pslist    # List running processes in RAM dump\n$ vol -f memory.raw windows.netscan   # Extract active network connections`,
            codeSnippet: `# Verifying Forensic Image Integrity Hash (SHA-256)\n$ sha256sum disk_image.E01\ne3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855  disk_image.E01`,
            realLifeScenario: 'Forensic investigators extract volatile RAM dumps before shutting down compromised servers to capture encryption keys and unwritten malware processes.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Digital forensics is the science of acquiring and analyzing electronic data for legal evidence. Memory forensics specifically looks at volatile RAM to find stealthy, fileless malware.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Forensics is like dusting a crime scene for fingerprints. Creating a cryptographic hash of the hard drive ensures the evidence hasn&apos;t been tampered with before it goes to court.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram
                            chart={`graph TD
    A[Compromised System] --> B[Capture RAM / Memory]
    A --> C[Clone Hard Drive Disk Image]
    B --> D[Volatility Framework Analysis]
    C --> E[Autopsy Disk Analysis]
    D --> F[Identify Root Cause/Malware]
    E --> F`}
                        />
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-red-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`# Using dd to create a bit-by-bit raw image copy of a drive\n# NOTE: Always use a hardware write-blocker in real scenarios!\nsudo dd if=/dev/sda of=/mnt/usb/evidence.img bs=4M status=progress`} lang="bash" filename="forensics.sh" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Law enforcement agents use write-blockers to copy a suspect&apos;s hard drive without modifying timestamps, ensuring the evidence holds up under cross-examination in court.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl">
                            <h4 className="text-lg font-bold flex items-center mb-3">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" />
                                Advantages
                            </h4>
                            <ul className="list-disc list-inside space-y-2 text-sm">
                                <li>Uncovers the exact root cause and timeline of a breach.</li>
                                <li>Maintains chain of custody for legal prosecution.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl">
                            <h4 className="text-lg font-bold flex items-center mb-3">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside space-y-2 text-sm">
                                <li>Highly time-consuming; analyzing terabytes of data takes weeks.</li>
                                <li>If a system is rebooted before a RAM dump, volatile memory evidence is lost forever.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },

        // ==================== PROFESSIONAL TIER ====================
        {
            id: 'cyber-cloud-security-aws-iam',
            title: '13. [Professional] Cloud Security & AWS IAM (Shared Responsibility)',
            definition: 'Secure cloud infrastructure (IaaS, PaaS, SaaS) under the Shared Responsibility Model, enforcing granular AWS IAM least privilege policies and Cloud Security Posture Management (CSPM).',
            syntax: `/* AWS IAM Least Privilege JSON Policy Blueprint: */\n{\n  "Version": "2012-10-17",\n  "Statement": [{\n    "Effect": "Allow",\n    "Action": ["s3:GetObject"],\n    "Resource": "arn:aws:s3:::my-bucket/*"\n  }]\n}`,
            codeSnippet: `// AWS Security Best Practices Configuration\n// 1. Enforce S3 Block Public Access across all storage buckets\n// 2. Enable AWS CloudTrail for continuous API audit logging\n// 3. Mandate MFA for Root Account Logins`,
            realLifeScenario: 'Misconfigured S3 storage buckets exposing public read access account for over 50% of cloud data breach incidents.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Cloud Security follows a Shared Responsibility Model where AWS/Azure secures the hardware layer, but the customer is responsible for configuring secure Identity and Access Management (<code className="text-cyan-600 font-mono">IAM</code>) and data encryption.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Renting a storage unit: The facility manager secures the gates and cameras (AWS), but if you leave your specific unit&apos;s padlock open, anyone can take your belongings (Your responsibility).
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram
                            chart={`graph TD
    A[Cloud Provider - AWS/Azure] --> B[Physical Data Centers]
    A --> C[Networking Hardware]
    D[Customer] --> E[Customer Data Encryption]
    D --> F[IAM Policies & Roles]
    D --> G[OS Patching/Updates]`}
                        />
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-red-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`// Terraform block to ensure an S3 bucket is strictly private\nresource "aws_s3_bucket_public_access_block" "secure_bucket" {\n  bucket = aws_s3_bucket.my_bucket.id\n\n  block_public_acls       = true\n  block_public_policy     = true\n  ignore_public_acls      = true\n  restrict_public_buckets = true\n}`} lang="hcl" filename="s3_secure.tf" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Organizations use AWS CloudTrail to monitor every API call made in their environment, triggering alerts if someone changes a bucket policy to &apos;Public&apos;.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl">
                            <h4 className="text-lg font-bold flex items-center mb-3">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" />
                                Advantages
                            </h4>
                            <ul className="list-disc list-inside space-y-2 text-sm">
                                <li>Cloud providers handle physical security, saving immense capital.</li>
                                <li>IAM allows hyper-granular access controls via JSON policies.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl">
                            <h4 className="text-lg font-bold flex items-center mb-3">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside space-y-2 text-sm">
                                <li>Misconfigurations are incredibly easy to make and highly damaging.</li>
                                <li>Complex IAM hierarchies can lead to privilege escalation flaws.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'cyber-devsecops-sast-dast',
            title: '14. [Professional] Secure Software Development (DevSecOps)',
            definition: 'Integrate security into CI/CD build pipelines (DevSecOps) via Static Analysis (SAST - SonarQube), Dynamic Analysis (DAST - ZAP), and Dependency Scanning (Snyk).',
            syntax: `# DevSecOps GitHub Actions Pipeline Blueprint:\n- name: Run Snyk Security Scan for Vulnerable Dependencies\n  uses: snyk/actions/node@master\n  env:\n    SNYK_TOKEN: \${{ secrets.SNYK_TOKEN }}`,
            codeSnippet: `/* DevSecOps Shift-Left Security Pipeline Stages */\nCode Commit ──> SAST Linting ──> Dependency Scan (Snyk) ──> DAST Scan (OWASP ZAP) ──> Secure Deployment`,
            realLifeScenario: 'DevSecOps pipelines block pull requests containing known vulnerable npm package dependencies automatically.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            <code className="text-cyan-600 font-mono">DevSecOps</code> shifts security left, integrating automated testing tools like <code className="text-cyan-600 font-mono">SAST</code> (Static code scanning) and <code className="text-cyan-600 font-mono">DAST</code> (Dynamic running app scanning) into the CI/CD pipeline.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Instead of doing quality control on cars right before they leave the factory (traditional security), you inspect the engine parts as they are being built on the assembly line (DevSecOps).
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram
                            chart={`graph LR
    A[Developer Commits Code] --> B[SAST Source Code Scan]
    B --> C[SCA Dependency Scan]
    C --> D[Container Image Scan]
    D --> E[Deploy to Staging]
    E --> F[DAST Dynamic Scan]
    F --> G[Deploy to Prod]`}
                        />
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-red-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`# Check for vulnerable npm packages before building\nnpm audit --audit-level=critical\n\n# If it exits with an error code, the CI pipeline fails and blocks merging`} lang="bash" filename="ci_script.sh" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Teams use GitHub Actions to automatically run Snyk and SonarQube on every pull request, preventing a developer from accidentally committing hardcoded AWS API keys into the repository.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl">
                            <h4 className="text-lg font-bold flex items-center mb-3">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" />
                                Advantages
                            </h4>
                            <ul className="list-disc list-inside space-y-2 text-sm">
                                <li>Catching bugs early in development is 100x cheaper than fixing them in production.</li>
                                <li>Automated pipelines enforce security without slowing down developers.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl">
                            <h4 className="text-lg font-bold flex items-center mb-3">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside space-y-2 text-sm">
                                <li>SAST tools are notorious for generating thousands of false positives.</li>
                                <li>Integrating multiple scanners complexifies the CI/CD pipeline infrastructure.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'cyber-zero-trust-architecture',
            title: '15. [Professional] Zero Trust Architecture (Never Trust, Always Verify)',
            definition: 'Zero Trust eliminates implicit trust assumptions. Enforce 3 core tenets: Never Trust Always Verify, Identity as the Perimeter, and Micro-segmentation.',
            syntax: `/* Zero Trust Evaluation Pipeline: */\nUser Request ──> Verify Identity (MFA) ──> Verify Device Posture ──> Evaluate Micro-segmentation Context ──> Grant Ephemeral Access`,
            codeSnippet: `# Zero Trust Network Access (ZTNA) Verification Logic\ndef evaluate_zero_trust_request(user_token, device_health, location_ip):\n    if not is_valid_mfa(user_token): return False\n    if not device_health.is_encrypted: return False\n    if location_ip in Blacklisted_IPs: return False\n    return True`,
            realLifeScenario: 'Enterprise organizations replace traditional corporate VPNs with Zero Trust Network Access (ZTNA) micro-tunnels.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            <code className="text-cyan-600 font-mono">Zero Trust</code> is a strategic framework stating that no user or device is trusted by default, even if they are inside the corporate network. Every access request is strongly authenticated and continuously validated.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Traditional VPNs are like a moat around a castle: once inside, you can go into any room. Zero Trust is putting a smart card reader on every single door inside the castle.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram
                            chart={`graph TD
    A[Remote User] --> B{ZTNA Policy Engine}
    B -->|Checks MFA| C[Identity Provider]
    B -->|Checks OS Updates| D[Endpoint Management]
    B -->|If all Pass| E[Micro-tunnel to App 1]
    B -->|Deny| F[No Access to Network]`}
                        />
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-red-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`// Concept of evaluating context before access\nfunction checkZeroTrustContext(request) {\n  if (!request.mfaVerified) return false;\n  if (request.devicePosture !== "COMPLIANT") return false;\n  if (request.geoVelocity > MAX_SPEED) return false;\n  return true;\n}`} lang="javascript" filename="ztna.js" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Google implemented this as &quot;BeyondCorp&quot;, shifting access controls from the network perimeter to individual users and devices, allowing employees to work securely from public coffee shops without a VPN.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl">
                            <h4 className="text-lg font-bold flex items-center mb-3">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" />
                                Advantages
                            </h4>
                            <ul className="list-disc list-inside space-y-2 text-sm">
                                <li>Drastically limits the blast radius of a compromised credential.</li>
                                <li>Secures the modern hybrid remote-workforce efficiently.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl">
                            <h4 className="text-lg font-bold flex items-center mb-3">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside space-y-2 text-sm">
                                <li>Extremely complex and time-consuming to retrofit into legacy networks.</li>
                                <li>Requires high integration maturity between IAM, endpoint security, and networking.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'cyber-grc-compliance-frameworks',
            title: '16. [Professional] Governance, Risk & Compliance (GRC & ISO 27001)',
            definition: 'Manage Enterprise GRC: Cybersecurity Frameworks (NIST CSF 2.0, ISO 27001, CIS Controls) and Regulatory Compliance mandates (GDPR, HIPAA, PCI-DSS).',
            syntax: `# NIST Cybersecurity Framework (CSF 2.0) Core Functions:\n1. GOVERN   ──> Organizational Risk Strategy\n2. IDENTIFY ──> Asset & Risk Management\n3. PROTECT  ──> Safeguards & Access Control\n4. DETECT   ──> Anomaly Monitoring\n5. RESPOND  ──> Incident Mitigation\n6. RECOVER  ──> Resilience & Restoration`,
            codeSnippet: `/* GRC Compliance Mandate Mapping */\nGDPR    -> EU Data Privacy & Right to be Forgotten\nHIPAA   -> US Protected Health Information (PHI) Security\nPCI-DSS -> Credit Card Data Storage Security Standards`,
            realLifeScenario: 'E-commerce companies undergo annual PCI-DSS audits to maintain compliance authorization to process credit card payments.',
            content: (
                <div className="space-y-6">
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-cyan-800 dark:text-cyan-300 flex items-center mb-2">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Definition
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Governance, Risk, and Compliance (<code className="text-cyan-600 font-mono">GRC</code>) ensures an organization aligns its IT operations with business objectives, manages risk effectively, and stays compliant with industry regulations.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-blue-800 dark:text-blue-300 flex items-center mb-2">
                            <Lightbulb className="w-5 h-5 mr-2" />
                            Real-Life Analogy &amp; Example
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            GRC is like the health inspector at a restaurant. Governance is the recipe book. Risk management is ensuring raw chicken isn&apos;t stored above salad. Compliance is passing the health inspection.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-4">
                            <Layers className="w-5 h-5 mr-2 text-indigo-500" />
                            Visual Explanation
                        </h4>
                        <MermaidDiagram
                            chart={`graph TD
    A[Enterprise GRC] --> B[Governance: Policies]
    A --> C[Risk: Threat Modeling]
    A --> D[Compliance: Regulatory]
    B --> E[ISO 27001 ISMS]
    C --> F[NIST CSF]
    D --> G[GDPR / HIPAA / PCI-DSS]`}
                        />
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                            <Code className="w-5 h-5 mr-2 text-red-500" />
                            Sample Code
                        </h4>
                        <CodeBlock code={`// Implementing Data Privacy (GDPR Right to Be Forgotten)\nasync function deleteUserData(userId) {\n  // Delete from main database\n  await db.users.delete({ where: { id: userId } });\n  // Anonymize in analytics logs\n  await analytics.anonymizeUser(userId);\n  return "User Data Erased for GDPR Compliance";\n}`} lang="javascript" filename="gdpr.js" />
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg">
                        <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center mb-2">
                            <Cpu className="w-5 h-5 mr-2" />
                            Real-World Application
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            To sell software to the US Government, tech companies must achieve FedRAMP compliance, proving they implement strict NIST 800-53 security controls.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl">
                            <h4 className="text-lg font-bold flex items-center mb-3">
                                <Check className="w-5 h-5 mr-2 text-emerald-400" />
                                Advantages
                            </h4>
                            <ul className="list-disc list-inside space-y-2 text-sm">
                                <li>Builds trust with B2B customers through third-party audits (SOC 2).</li>
                                <li>Avoids massive regulatory fines (like GDPR&apos;s 4% global revenue penalty).</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl">
                            <h4 className="text-lg font-bold flex items-center mb-3">
                                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                                Disadvantages / Limitations
                            </h4>
                            <ul className="list-disc list-inside space-y-2 text-sm">
                                <li>Compliance does not automatically equal security (checklist mentality).</li>
                                <li>Audits are extremely expensive and resource-intensive for small businesses.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    const topics = courseData.map(topic => topic.title);
    const activeTopic = courseData[activeTopicIndex];

    return (
        <CoursePageLayout
            title="Cybersecurity Masterclass Course"
            description="Master Cybersecurity from CIA Triad, OSI Networking, and OWASP Top 10 to Cryptography, Penetration Testing, SIEM, DevSecOps, and Zero Trust."
            topics={topics}
            icon={Shield}
            colorClass="red"
            activeTopicIndex={activeTopicIndex}
            onTopicClick={setActiveTopicIndex}
        >
            <div className="space-y-8">
                {activeTopic.content}
            </div>
        </CoursePageLayout>
    );
};

export default CybersecurityCoursePage;
