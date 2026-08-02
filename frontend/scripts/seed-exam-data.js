import fs from 'fs';
import path from 'path';

// Define some real past questions
const EXAM_DATA = [
    {
        id: 'upsc-cse',
        title: 'UPSC Civil Services Exam (IAS / IPS)',
        fullName: 'Union Public Service Commission - Civil Services Examination',
        category: 'UPSC & State PCS',
        description: 'India\'s most prestigious exam for Civil Services. Practice past 5 years GS Prelims papers.',
        icon: 'Shield',
        yearsAvailable: '2020 - 2024',
        totalMCQs: 4500,
        aiPredictionAccuracy: 96.2,
        examDate: 'May 2026',
        subjectsJson: JSON.stringify(['Indian Polity', 'Geography', 'History', 'Economy', 'Environment', 'Science & Tech']),
        questions: [
            {
                id: 'upsc-2023-1',
                year: '2023',
                subject: 'Polity',
                topic: 'Constitutional Bodies',
                question: 'Consider the following statements in respect of the Constitution Day:\n1. The Constitution Day is celebrated on 26th November every year to promote constitutional values among citizens.\n2. On 26th November 1949, the Constituent Assembly of India set up a Drafting Committee under the Chairmanship of Dr. B.R. Ambedkar to prepare a Draft Constitution of India.\nWhich of the statements given above is/are correct?',
                optionsJson: JSON.stringify(['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2']),
                correctOptionIndex: 0,
                explanation: 'Statement 1 is correct. Constitution Day is celebrated on 26th Nov. Statement 2 is incorrect because the Drafting Committee was set up on 29th August 1947, not 1949. On 26th Nov 1949, the Constitution was adopted.',
                aiTip: 'UPSC frequently swaps dates or events in statement-based questions.',
                difficulty: 'Medium'
            },
            {
                id: 'upsc-2022-1',
                year: '2022',
                subject: 'Economy',
                topic: 'Banking',
                question: 'With reference to the Indian economy, what are the advantages of "Inflation-Indexed Bonds (IIBs)"?\n1. Government can reduce the coupon rates on its borrowing by way of IIBs.\n2. IIBs provide protection to the investors from uncertainty regarding inflation.\n3. The interest received as well as capital gains on IIBs are not taxable.',
                optionsJson: JSON.stringify(['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3']),
                correctOptionIndex: 0,
                explanation: 'IIBs protect savings from inflation. Interest received and capital gains on IIBs are taxable, so statement 3 is incorrect.',
                aiTip: 'Taxability of financial instruments is a recurring theme in UPSC Economy.',
                difficulty: 'Hard'
            },
            {
                id: 'upsc-2021-1',
                year: '2021',
                subject: 'History',
                topic: 'Modern History',
                question: 'In the first quarter of the seventeenth century, in which of the following was/were the factory/factories of the English East India Company located?\n1. Broach\n2. Chicacole\n3. Trichinopoly',
                optionsJson: JSON.stringify(['1 only', '1 and 2', '3 only', '2 and 3']),
                correctOptionIndex: 0,
                explanation: 'By the first quarter of the 17th century, the English East India Company had established factories at Surat, Broach, Ahmedabad, Agra, and Masulipatnam. Thus, only Broach is correct.',
                aiTip: 'Mapping factory locations of European powers is crucial for Modern History.',
                difficulty: 'Medium'
            }
        ]
    },
    {
        id: 'gate-cse',
        title: 'GATE CSE & IT',
        fullName: 'Graduate Aptitude Test in Engineering - Computer Science',
        category: 'Engineering',
        description: 'Master GATE CSE with actual past questions on Data Structures, Algorithms, OS, and DBMS.',
        icon: 'Code',
        yearsAvailable: '2020 - 2024',
        totalMCQs: 1500,
        aiPredictionAccuracy: 94.5,
        examDate: 'Feb 2026',
        subjectsJson: JSON.stringify(['Data Structures', 'Algorithms', 'Operating Systems', 'DBMS', 'Computer Networks']),
        questions: [
            {
                id: 'gate-2023-1',
                year: '2023',
                subject: 'Operating Systems',
                topic: 'Process Synchronization',
                question: 'Consider a system with 3 processes that share 4 instances of the same resource type. Each process can request a maximum of K instances. Resource instances can be requested and released only one at a time. The largest value of K that will always avoid deadlock is:',
                optionsJson: JSON.stringify(['1', '2', '3', '4']),
                correctOptionIndex: 1,
                explanation: 'For N processes and R resources, deadlock is avoided if N * (K - 1) + 1 <= R. Here N=3, R=4. 3*(K-1) + 1 <= 4 => 3*(K-1) <= 3 => K-1 <= 1 => K <= 2. Max value is 2.',
                aiTip: 'Deadlock avoidance using resource allocation formulas is highly repeated.',
                difficulty: 'Medium'
            },
            {
                id: 'gate-2022-1',
                year: '2022',
                subject: 'Data Structures',
                topic: 'Trees',
                question: 'What is the maximum number of edges in a bipartite graph on 12 vertices?',
                optionsJson: JSON.stringify(['36', '48', '12', '24']),
                correctOptionIndex: 0,
                explanation: 'A bipartite graph with partitions of size x and y has max edges x*y, where x+y = 12. Maximize x*y subject to x+y=12. Max occurs when x=6, y=6. Edges = 6*6 = 36.',
                aiTip: 'Graph theory maximum/minimum bounds are common GATE 1-mark questions.',
                difficulty: 'Easy'
            }
        ]
    },
    {
        id: 'neet-ug',
        title: 'NEET UG (Medical)',
        fullName: 'National Eligibility cum Entrance Test (Undergraduate)',
        category: 'Medical',
        description: 'Actual past 5 years NEET questions from Physics, Chemistry, and Biology (Botany & Zoology).',
        icon: 'Stethoscope',
        yearsAvailable: '2020 - 2024',
        totalMCQs: 3000,
        aiPredictionAccuracy: 98.1,
        examDate: 'May 2026',
        subjectsJson: JSON.stringify(['Physics', 'Chemistry', 'Botany', 'Zoology']),
        questions: [
            {
                id: 'neet-2023-1',
                year: '2023',
                subject: 'Botany',
                topic: 'Cell Biology',
                question: 'Which of the following stages of meiosis involves division of centromere?',
                optionsJson: JSON.stringify(['Metaphase I', 'Metaphase II', 'Anaphase II', 'Telophase I']),
                correctOptionIndex: 2,
                explanation: 'Splitting of the centromere and separation of sister chromatids occur during Anaphase II of meiosis.',
                aiTip: 'Cell cycle and meiosis stages are guaranteed to appear every year in NEET Biology.',
                difficulty: 'Easy'
            },
            {
                id: 'neet-2022-1',
                year: '2022',
                subject: 'Physics',
                topic: 'Electromagnetism',
                question: 'A copper wire of length 10 m and radius (10^-2 / pi) m has electrical resistance of 10 ohm. The current density in the wire for an electric field strength of 10 (V/m) is:',
                optionsJson: JSON.stringify(['10^4 A/m^2', '10^6 A/m^2', '10^-5 A/m^2', '10^5 A/m^2']),
                correctOptionIndex: 3,
                explanation: 'J = sigma * E = (1/rho) * E. We know R = rho * (L/A) => rho = R*A/L. Area A = pi*r^2. Calculate J to get 10^5 A/m^2.',
                aiTip: 'Direct formula application of Current Density (J) and Conductivity (sigma) is standard in NEET Physics.',
                difficulty: 'Medium'
            }
        ]
    }
];

async function seedData() {
    console.log('Seeding Exam Data into the backend...');
    
    try {
        const response = await fetch('http://localhost:8080/api/exams/bulk', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(EXAM_DATA)
        });

        if (response.ok) {
            const msg = await response.text();
            console.log('Success:', msg);
        } else {
            console.error('Failed:', response.status, await response.text());
        }
    } catch (error) {
        console.error('Error connecting to backend:', error.message);
    }
}

seedData();
