import { COMPETITIVE_EXAMS } from '../data/examHubData';
import fetch from 'node-fetch';

async function seedData() {
    console.log(`Found ${COMPETITIVE_EXAMS.length} exams in examHubData.ts`);
    console.log('Seeding All Exams into the backend...');
    
    // Transform arrays to JSON strings for backend compatibility
    const backendPayload = COMPETITIVE_EXAMS.map(exam => ({
        id: exam.id,
        title: exam.title,
        fullName: exam.fullName,
        category: exam.category,
        description: exam.description,
        icon: exam.icon,
        yearsAvailable: exam.yearsAvailable,
        totalMCQs: exam.totalMCQs,
        aiPredictionAccuracy: exam.aiPredictionAccuracy,
        examDate: exam.examDate,
        subjectsJson: exam.subjects ? JSON.stringify(exam.subjects) : JSON.stringify([]),
        questions: exam.questions.map(q => ({
            id: q.id,
            year: String(q.year),
            subject: q.subject,
            topic: q.topic,
            question: q.question,
            optionsJson: q.options ? JSON.stringify(q.options) : JSON.stringify([]),
            correctOptionIndex: q.correctOptionIndex,
            explanation: q.explanation,
            aiTip: q.aiTip,
            difficulty: q.difficulty || 'Medium'
        }))
    }));

    try {
        const response = await fetch('http://localhost:8080/api/exams/bulk', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(backendPayload)
        });

        if (response.ok) {
            const msg = await response.text();
            console.log('Success:', msg);
        } else {
            console.error('Failed:', response.status, await response.text());
        }
    } catch (error: any) {
        console.error('Error connecting to backend:', error.message);
    }
}

seedData();
