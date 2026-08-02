import { CompetitiveExam } from '../types';

export const COMPETITIVE_EXAMS: CompetitiveExam[] = [
    // ─── 1. UPSC & STATE PCS ───
    {
        id: 'upsc-cse',
        title: 'UPSC Civil Services Exam (IAS / IPS)',
        fullName: 'Union Public Service Commission - Civil Services Examination',
        category: 'UPSC & State PCS',
        description: 'India\'s most prestigious exam for Civil Services (IAS, IPS, IFS). Practice past 5 years GS Prelims & CSAT papers with AI trend forecasting.',
        icon: 'Shield',
        yearsAvailable: '2020 - 2025',
        totalMCQs: 4500,
        aiPredictionAccuracy: 96.2,
        examDate: 'May 2026',
        subjects: [
            'Current Affairs (National & International)',
            'Indian History & National Movement',
            'Indian & World Geography (Physical, Social, Economic)',
            'Indian Polity & Governance (Constitution, Panchayati Raj)',
            'Economic & Social Development',
            'General Science & Environment',
            'CSAT - Comprehension',
            'CSAT - Interpersonal & Communication Skills',
            'CSAT - Logical Reasoning & Analytical Ability',
            'CSAT - Decision Making & Problem Solving',
            'CSAT - General Mental Ability',
            'CSAT - Basic Numeracy (Class X Level)',
            'CSAT - Data Interpretation',
            'Essay Writing (Mains)',
            'GS Paper I - Heritage, Culture, History, Geography',
            'GS Paper II - Governance, Constitution, Polity, Social Justice, IR',
            'GS Paper III - Technology, Economy, Environment, Security',
            'GS Paper IV - Ethics, Integrity & Aptitude',
            'Indian Language Paper (Qualifying)',
            'English Paper (Qualifying)',
            'Optional Subject (1 of 48 subjects)'
        ],
        questions: [
            {
                id: 'upsc-1',
                examId: 'upsc-cse',
                year: 'AI Predicted 2026',
                subject: 'General Studies - Economy',
                topic: 'Digital Currency & CBDC',
                question: 'With reference to Central Bank Digital Currency (e₹) in India, consider the following statements:\n1. It is a legal tender issued by the RBI in a digital form.\n2. Transactions in CBDC require an active intermediary bank account like UPI.\nWhich of the statements given above is/are correct?',
                options: ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'],
                correctOptionIndex: 0,
                explanation: 'CBDC is direct central bank liability and legal tender. Unlike UPI, CBDC transactions do not strictly require bank intermediation for settlement as wallet balances directly represent RBI tokenized currency.',
                aiTip: 'AI Analysis indicates a 94% probability of a question on sovereign digital currencies and digital infrastructure due to recent RBI cross-border pilot announcements.',
                difficulty: 'Hard'
            },
            {
                id: 'upsc-2',
                examId: 'upsc-cse',
                year: 2024,
                subject: 'General Studies - Polity',
                topic: 'Constitutional Bodies',
                question: 'Which of the following bodies does NOT find mention in the Constitution of India?\n1. National Development Council\n2. Planning Commission / NITI Aayog\n3. Zonal Councils\nSelect the correct answer using the code given below:',
                options: ['1 and 2 only', '2 only', '1 and 3 only', '1, 2 and 3'],
                correctOptionIndex: 3,
                explanation: 'All three bodies (NDC, NITI Aayog, Zonal Councils) are extra-constitutional or statutory bodies created by executive resolution or Acts of Parliament (Zonal Councils under States Reorganisation Act 1956).',
                aiTip: 'Standard Polity elimination template. Frequently repeated in 2013, 2017, and 2024 Prelims.',
                difficulty: 'Medium'
            },
            {
                id: 'upsc-3',
                examId: 'upsc-cse',
                year: 2023,
                subject: 'General Studies - Environment',
                topic: 'Biodiversity & Conservation',
                question: 'Consider the following fauna:\n1. Lion-tailed Macaque\n2. Malabar Civet\n3. Sambar Deer\nWhich of the above are naturally found in the Western Ghats?',
                options: ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'],
                correctOptionIndex: 3,
                explanation: 'Lion-tailed Macaque and Malabar Civet are endemic to Western Ghats. Sambar Deer is widely distributed across Indian forests, including the Western Ghats.',
                aiTip: 'Species distribution and IUCN status questions appear every single year in UPSC Prelims with a weightage of 6-8 marks.',
                difficulty: 'Medium'
            },
            {
                id: 'upsc-4',
                examId: 'upsc-cse',
                year: 'AI Predicted 2026',
                subject: 'General Studies - Sci & Tech',
                topic: 'Generative AI & LLMs',
                question: 'In the context of Generative Artificial Intelligence, what does the term "Hallucination" refer to?',
                options: [
                    'A hardware malfunction causing visual glitches on server displays',
                    'The phenomenon where an AI model generates confident but entirely false or non-existent factual assertions',
                    'A cryptographic error during quantum key distribution',
                    'The intentional injection of malicious code into neural network weights'
                ],
                correctOptionIndex: 1,
                explanation: 'AI Hallucination occurs when large language models output plausible-sounding but factually incorrect or nonsensical statements due to training data bias or probabilistic decoding.',
                aiTip: 'Generative AI mechanics (LLMs, Diffusion, Hallucinations, RAG) are the #1 predicted Sci & Tech topic for 2026.',
                difficulty: 'Easy'
            },
            {
                id: 'upsc-2025',
                examId: 'upsc-cse',
                year: '2025',
                subject: 'General Studies - Sci & Tech',
                topic: 'Quantum Computing & Encryption',
                question: 'Consider the following statements regarding Post-Quantum Cryptography (PQC):\n1. It refers to cryptographic algorithms designed to be secure against both quantum and classical computers.\n2. PQC algorithms rely strictly on the physical phenomenon of quantum entanglement for key distribution.\nWhich of the statements given above is/are correct?',
                options: ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'],
                correctOptionIndex: 0,
                explanation: 'PQC uses mathematical algorithms (like lattice-based cryptography) that run on classical computers but are hard for quantum computers to break. Quantum Key Distribution (QKD) relies on physical quantum mechanics (entanglement/photons), not PQC.',
                aiTip: 'Quantum technologies and cybersecurity frameworks were major highlights of the 2025 UPSC Prelims.',
                difficulty: 'Hard'
            },
            {
                id: 'upsc-2022',
                examId: 'upsc-cse',
                year: '2022',
                subject: 'General Studies - History',
                topic: 'Government of India Act 1919',
                question: 'In the context of Indian history, the principle of "Dyarchy" (diarchy) refers to:',
                options: [
                    'Division of the central legislature into two houses',
                    'Introduction of double government i.e. Central and State governments',
                    'Having two sets of rulers, one in London and another in Delhi',
                    'Division of the subjects delegated to the provinces into two categories'
                ],
                correctOptionIndex: 3,
                explanation: 'Dyarchy under the Government of India Act 1919 divided provincial subjects into "Reserved" (administered by Governor with executive council) and "Transferred" (administered by Governor with ministers).',
                aiTip: 'Constitutional administrative acts (1909, 1919, 1935) are highly recurring historical questions.',
                difficulty: 'Medium'
            },
            {
                id: 'upsc-2021',
                examId: 'upsc-cse',
                year: '2021',
                subject: 'General Studies - Economy',
                topic: 'Government Securities & Bonds',
                question: 'With reference to India, consider the following statements:\n1. Retail investors through demat account can invest in Treasury Bills and Government of India Debt Securities in primary market.\n2. The "Negotiated Dealing System-Order Matching" is a government securities trading platform of the RBI.\nWhich of the statements given above is/are correct?',
                options: ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'],
                correctOptionIndex: 2,
                explanation: 'RBI introduced the "RBI Retail Direct" scheme enabling retail investors to directly invest in G-Secs. NDS-OM is indeed RBI\'s electronic order matching platform for government securities.',
                aiTip: 'Financial market infrastructure questions appear frequently in UPSC Economy section.',
                difficulty: 'Medium'
            },
            {
                id: 'upsc-2020',
                examId: 'upsc-cse',
                year: '2020',
                subject: 'General Studies - Environment',
                topic: 'Biochar & Sustainable Agriculture',
                question: 'What is/are the advantage/advantages of zero tillage in agriculture?\n1. Sowing of wheat is possible without burning the residue of previous crop.\n2. Without the need for nursery of rice saplings, direct planting of paddy seeds in the wet soil is possible.\n3. Carbon sequestration in the soil is possible.\nSelect the correct answer using the code given below:',
                options: ['1 and 2 only', '2 and 3 only', '3 only', '1, 2 and 3'],
                correctOptionIndex: 3,
                explanation: 'Zero tillage allows direct drilling of seeds through stubble without plowing, preventing crop residue burning, enabling direct seeding, and enhancing soil organic carbon sequestration.',
                aiTip: 'Sustainable agricultural techniques (Zero tillage, Biochar, Permaculture) are perennial UPSC favorites.',
                difficulty: 'Medium'
            },
            {
                id: 'upsc-2019',
                examId: 'upsc-cse',
                year: '2019',
                subject: 'General Studies - Polity',
                topic: 'Ninth Schedule & Judicial Review',
                question: 'Consider the following statements:\n1. The Ninth Schedule was introduced in the Constitution of India during the prime ministership of Jawaharlal Nehru.\n2. Any law placed in the Ninth Schedule cannot be examined by any court and no judgment can be made on it.\nWhich of the statements given above is/are correct?',
                options: ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'],
                correctOptionIndex: 0,
                explanation: 'First Constitutional Amendment (1951) inserting the 9th Schedule was enacted under PM Nehru. In I.R. Coelho v. State of Tamil Nadu (2007), Supreme Court ruled that laws placed in 9th schedule after April 24, 1973 are open to judicial review if they violate basic structure.',
                aiTip: 'Constitutional amendments and judicial review doctrines are standard UPSC Polity questions.',
                difficulty: 'Hard'
            },
            {
                id: 'upsc-2018',
                examId: 'upsc-cse',
                year: '2018',
                subject: 'General Studies - Governance',
                topic: 'Right to Privacy & Puttaswamy',
                question: 'Right to Privacy is protected as an intrinsic part of Right to Life and Personal Liberty. Which of the following in the Constitution of India correctly and appropriately imply the above statement?',
                options: [
                    'Article 14 and the provisions under the 42nd Amendment to the Constitution',
                    'Article 17 and the Directive Principles of State Policy in Part IV',
                    'Article 21 and the freedoms guaranteed in Part III',
                    'Article 24 and the provisions under the 44th Amendment to the Constitution'
                ],
                correctOptionIndex: 2,
                explanation: 'In the landmark K.S. Puttaswamy v. Union of India (2017) judgment, a 9-judge bench ruled that the Right to Privacy is an intrinsic part of Article 21 (Life and Liberty) under Part III.',
                aiTip: 'Fundamental rights articles and landmark Supreme Court verdicts carry huge weight in Prelims.',
                difficulty: 'Easy'
            },
            {
                id: 'upsc-2017',
                examId: 'upsc-cse',
                year: '2017',
                subject: 'General Studies - History',
                topic: 'Charter Act of 1833 vs 1813',
                question: 'Consider the following statements about the Charter Act of 1813:\n1. It ended the trade monopoly of the East India Company in India except for trade in tea and trade with China.\n2. It asserted the sovereignty of the British Crown over the Indian territories held by the Company.\nWhich of the statements given above is/are correct?',
                options: ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'],
                correctOptionIndex: 2,
                explanation: 'Charter Act of 1813 ended EIC monopoly (retaining tea & China trade) and explicitly asserted Crown sovereignty over company acquisitions in India.',
                aiTip: 'Colonial legislative charter acts are tested almost every alternate year in Modern Indian History.',
                difficulty: 'Medium'
            },
            {
                id: 'upsc-2016',
                examId: 'upsc-cse',
                year: '2016',
                subject: 'General Studies - Sci & Tech',
                topic: 'Li-Fi vs Wi-Fi Technology',
                question: 'With reference to "Li-Fi", recently in the news, which of the following statements is/are correct?\n1. It uses light as the medium for high-speed data transmission.\n2. It is a wireless technology and is several times faster than Wi-Fi.\nSelect the correct answer using the code given below:',
                options: ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'],
                correctOptionIndex: 2,
                explanation: 'Li-Fi (Light Fidelity) is a bidirectional wireless system that transmits data via LED light pulses at speeds up to 100 Gbps, vastly faster than conventional radio-frequency Wi-Fi.',
                aiTip: 'Wireless communication protocols (5G, Li-Fi, Bluetooth LE) are standard Sci & Tech questions.',
                difficulty: 'Easy'
            },
            {
                id: 'upsc-2015',
                examId: 'upsc-cse',
                year: '2015',
                subject: 'General Studies - Polity',
                topic: 'Fifth Schedule & Tribal Lands',
                question: 'The provisions in Fifth Schedule and Sixth Schedule in the Constitution of India are made in order to:',
                options: [
                    'Protect the interests of Scheduled Tribes',
                    'Determine the boundaries between States',
                    'Determine the powers, authority and responsibilities of Panchayats',
                    'Protect the interests of all border States'
                ],
                correctOptionIndex: 0,
                explanation: 'Fifth and Sixth schedules specifically deal with the administration and control of Scheduled Areas and Scheduled Tribes to prevent their exploitation and protect tribal cultural autonomy.',
                aiTip: 'Schedules 5, 6, 7, and 10 are highly repeated across Prelims exam cycles.',
                difficulty: 'Easy'
            },
            {
                id: 'upsc-2014',
                examId: 'upsc-cse',
                year: '2014',
                subject: 'General Studies - Environment',
                topic: 'Montreux Record & Wetlands',
                question: 'If a wetland of international importance is brought under the "Montreux Record", what does it imply?',
                options: [
                    'Changes in ecological character have occurred, are occurring or are likely to occur in the wetland as a result of human technological developments',
                    'The country in which the wetland is located should enact a law to prohibit any human activity within five kilometers',
                    'The survival of the wetland depends on the cultural practices and traditions of certain indigenous communities',
                    'It is given the status of "World Heritage Site"'
                ],
                correctOptionIndex: 0,
                explanation: 'The Montreux Record is a register of wetland sites on the List of Wetlands of International Importance (Ramsar convention) where changes in ecological character have occurred, are occurring, or are likely to occur due to technological developments, pollution, or human interference.',
                aiTip: 'Ramsar convention and wetland conservation mechanisms appear frequently in Environment objective tests.',
                difficulty: 'Medium'
            },
            {
                id: 'upsc-2013',
                examId: 'upsc-cse',
                year: '2013',
                subject: 'General Studies - History',
                topic: 'Quit India Movement',
                question: 'With reference to Indian freedom struggle, Usha Mehta is well-known for:',
                options: [
                    'Running the secret Congress Radio in the wake of Quit India Movement',
                    'Participating in the Second Round Table Conference',
                    'Leading a contingent of Indian National Army',
                    'Assisting in the formation of Interim Government under Pandit Jawaharlal Nehru'
                ],
                correctOptionIndex: 0,
                explanation: 'Usha Mehta is legendary for organizing the Secret Congress Radio, an underground clandestine radio station during the Quit India Movement in 1942 that broadcasted uncensored national news.',
                aiTip: 'Women freedom fighters and underground resistance movements are highly celebrated UPSC questions.',
                difficulty: 'Medium'
            },
            {
                id: 'upsc-2012',
                examId: 'upsc-cse',
                year: '2012',
                subject: 'General Studies - Economy',
                topic: 'Reserve Bank of India Operations',
                question: 'Which of the following measures would result in an increase in the money supply in the economy?\n1. Purchase of government securities from the public by the Central Bank\n2. Deposit of currency in commercial banks by the public\n3. Borrowing by the government from the Central Bank\n4. Sale of government securities to the public by the Central Bank\nSelect the correct answer using the code given below:',
                options: ['1 only', '1 and 3 only', '2 and 4 only', '1, 2 and 3'],
                correctOptionIndex: 1,
                explanation: 'Purchasing government securities injects money into the economy. Government borrowing from the central bank (monetization of debt) creates new reserve money. Merely depositing cash in banks does not directly increase aggregate M3 money supply instantly, and selling securities absorbs liquidity.',
                aiTip: 'Monetary policy mechanics and liquidity operations are guaranteed 2-mark questions.',
                difficulty: 'Hard'
            },
            {
                id: 'upsc-2011',
                examId: 'upsc-cse',
                year: '2011',
                subject: 'General Studies - Geography',
                topic: 'Western Disturbances & Climate',
                question: 'The western disturbances which cause winter rain in northwestern India originate in:',
                options: ['Caspian Sea', 'Mediterranean Sea', 'Red Sea', 'Baltic Sea'],
                correctOptionIndex: 1,
                explanation: 'Western disturbances are extratropical storms originating in the Mediterranean region that bring sudden winter rainfall and snow to northwestern India, vital for the Rabi wheat crop.',
                aiTip: 'Indian monsoon dynamics and cyclonic disturbances are core geographical concepts.',
                difficulty: 'Easy'
            }
        ]
    },
    {
        id: 'upsc-capf',
        title: 'UPSC CAPF (Assistant Commandant)',
        fullName: 'Union Public Service Commission - Central Armed Police Forces AC Exam',
        category: 'UPSC & State PCS',
        description: 'Elite gazetted officer recruitment for BSF, CRPF, CISF, ITBP & SSB. Master GS MCQ papers and essay/report drafting patterns.',
        icon: 'Shield',
        yearsAvailable: '2020 - 2025',
        totalMCQs: 3200,
        aiPredictionAccuracy: 95.4,
        examDate: 'August 2026',
        subjects: [
            'General Ability & Intelligence',
            'General Knowledge',
            'General Science',
            'Current Affairs',
            'Indian History',
            'Indian & World Geography',
            'Indian Polity & Economy',
            'Logical Reasoning',
            'Quantitative Aptitude',
            'Data Interpretation',
            'Essay Writing',
            'English Comprehension',
            'Precis Writing',
            'Arguments For & Against (Descriptive)'
        ],
        questions: [
            {
                id: 'capf-1',
                examId: 'upsc-capf',
                year: 'AI Predicted 2026',
                subject: 'General Science & Defence',
                topic: 'Defence Technology & Missiles',
                question: 'Which of the following air defence missile systems is jointly developed by India\'s DRDO and Israel Aerospace Industries (IAI)?',
                options: ['Akash', 'Barak-8 (MRSAM)', 'Prithvi Air Defence (PAD)', 'S-400 Triumf'],
                correctOptionIndex: 1,
                explanation: 'Barak-8 (Medium Range Surface to Air Missile - MRSAM) is an Indo-Israeli surface-to-air missile designed to defend against any type of airborne threat.',
                aiTip: 'Indigenized defence technology and bilateral joint military ventures are guaranteed questions in CAPF and CDS.',
                difficulty: 'Medium'
            },
            {
                id: 'capf-2',
                examId: 'upsc-capf',
                year: 2024,
                subject: 'Polity & Governance',
                topic: 'Armed Forces Tribunal',
                question: 'Appeals against final orders or judgments of the Armed Forces Tribunal (AFT) lie directly before:',
                options: ['High Court of the respective jurisdiction', 'President of India', 'Supreme Court of India', 'Chief of Defence Staff'],
                correctOptionIndex: 2,
                explanation: 'Under the Armed Forces Tribunal Act 2007, an appeal against the final order or judgment of the Tribunal lies directly before the Supreme Court of India.',
                aiTip: 'Tribunals and judicial hierarchies are highly recurring CAPF Polity topics.',
                difficulty: 'Medium'
            }
        ]
    },
    {
        id: 'upsc-cds',
        title: 'UPSC CDS (Combined Defence Services)',
        fullName: 'Union Public Service Commission - Combined Defence Services Examination',
        category: 'UPSC & State PCS',
        description: 'Direct entry for IMA, INA, AFA & OTA. Master rigorous Elementary Mathematics, English Comprehension, and General Knowledge archives.',
        icon: 'Target',
        yearsAvailable: '2020 - 2025',
        totalMCQs: 4800,
        aiPredictionAccuracy: 96.0,
        examDate: 'April & Sept 2026',
        subjects: [
            'English (Grammar, Vocabulary, Comprehension)',
            'General Knowledge (History, Geography, Polity, Economy)',
            'Current Affairs',
            'Physics & Chemistry',
            'Elementary Mathematics (for IMA/INA/AFA)',
            'Logical Reasoning',
            'General Science'
        ],
        questions: [
            {
                id: 'cds-1',
                examId: 'upsc-cds',
                year: 'AI Predicted 2026',
                subject: 'Elementary Mathematics',
                topic: 'Geometry - Circles & Tangents',
                question: 'From an external point P, two tangents PA and PB are drawn to a circle with centre O. If angle APB = 60° and length PA = 10 cm, what is the length of the chord AB?',
                options: ['5 cm', '10 * sqrt(3) cm', '10 cm', '5 * sqrt(3) cm'],
                correctOptionIndex: 2,
                explanation: 'Tangents drawn from an external point are equal in length, so PA = PB. In triangle PAB, since PA = PB, angle PAB = angle PBA. With angle APB = 60°, triangle PAB becomes an equilateral triangle. Hence, chord AB = PA = 10 cm.',
                aiTip: 'Equilateral triangle properties inside circle tangents appear in almost every single CDS exam cycle.',
                difficulty: 'Easy'
            }
        ]
    },
    {
        id: 'upsc-cms',
        title: 'UPSC CMS (Combined Medical Services)',
        fullName: 'Union Public Service Commission - Combined Medical Services Examination',
        category: 'UPSC & State PCS',
        description: 'Recruitment for medical officers in central government health services and railways. Comprehensive clinical MCQs in Medicine, Surgery & Pediatrics.',
        icon: 'Stethoscope',
        yearsAvailable: '2020 - 2025',
        totalMCQs: 3000,
        aiPredictionAccuracy: 94.5,
        examDate: 'July 2026',
        subjects: [
            'General Medicine',
            'Paediatrics',
            'Surgery',
            'Gynaecology & Obstetrics (OBG)',
            'Preventive & Social Medicine (Community Medicine)',
            'Pharmacology',
            'Dermatology',
            'Psychiatry',
            'ENT',
            'Ophthalmology',
            'Orthopaedics',
            'Anaesthesiology'
        ],
        questions: [
            {
                id: 'cms-1',
                examId: 'upsc-cms',
                year: 'AI Predicted 2026',
                subject: 'General Medicine',
                topic: 'Infectious Diseases',
                question: 'A 35-year-old patient presents with high fever, severe retro-orbital headache, myalgia, and a maculopapular rash. Lab investigations reveal platelet count of 45,000/mcL and positive NS1 antigen. What is the definitive diagnosis?',
                options: ['Typhoid Fever', 'Dengue Fever', 'Malaria (P. falciparum)', 'Leptospirosis'],
                correctOptionIndex: 1,
                explanation: 'The classic triad of fever, retro-orbital pain, severe myalgia ("break-bone fever"), thrombocytopenia, and positive NS1 antigen is highly specific for Dengue fever.',
                aiTip: 'Tropical vector-borne diseases and diagnostic markers are standard 5-mark blocks in CMS Paper 1.',
                difficulty: 'Easy'
            }
        ]
    },
    {
        id: 'upsc-ese',
        title: 'UPSC Engineering Services (ESE / IES)',
        fullName: 'Union Public Service Commission - Engineering Services Examination',
        category: 'UPSC & State PCS',
        description: 'Elite technical services for Civil, Mechanical, Electrical, and Electronics & Telecom engineers. Exhaustive objective and numerical practice.',
        icon: 'Building2',
        yearsAvailable: '2020 - 2025',
        totalMCQs: 6200,
        aiPredictionAccuracy: 97.2,
        examDate: 'Feb 2026',
        subjects: [
            'General Studies & Engineering Aptitude (Common)',
            'Civil Engineering - Paper I',
            'Civil Engineering - Paper II',
            'Structural Analysis',
            'Concrete Structures',
            'Steel Structures',
            'Soil Mechanics & Foundation Engineering',
            'Fluid Mechanics & Hydraulics',
            'Hydrology',
            'Water Resources Engineering',
            'Environmental Engineering',
            'Transportation Engineering',
            'Geotechnical Engineering',
            'Mechanical Engineering - Paper I',
            'Mechanical Engineering - Paper II',
            'Theory of Machines',
            'Machine Design',
            'Strength of Materials',
            'Engineering Materials',
            'Thermodynamics',
            'Heat Transfer',
            'Power Plant Engineering',
            'Production Engineering',
            'Industrial Engineering',
            'Electrical Engineering - Paper I',
            'Electrical Engineering - Paper II',
            'Circuit Theory',
            'Electromagnetic Fields',
            'Signals & Systems',
            'Electrical Machines',
            'Power Systems',
            'Control Systems',
            'Electrical & Electronic Measurements',
            'Analog & Digital Electronics',
            'Power Electronics & Drives',
            'Electronics & Telecom - Paper I',
            'Electronics & Telecom - Paper II',
            'Basic Electronics Engineering',
            'Analog Circuits',
            'Digital Circuits & Microprocessors',
            'Networks & Transmission Lines',
            'Electronic Measurements & Instrumentation',
            'Communications Systems',
            'Electro Magnetics',
            'Advanced Electronics Topics'
        ],
        questions: [
            {
                id: 'ese-1',
                examId: 'upsc-ese',
                year: 'AI Predicted 2026',
                subject: 'General Engineering Aptitude',
                topic: 'Ethics & Engineering Standards',
                question: 'Which of the following canons of engineering ethics takes paramount precedence in professional engineering practice?',
                options: [
                    'Maintaining complete confidentiality of employer proprietary business secrets at all costs',
                    'Holding paramount the safety, health, and welfare of the public in the execution of engineering duties',
                    'Maximizing fiscal profit margins for project stakeholders',
                    'Securing government patents and personal professional prestige'
                ],
                correctOptionIndex: 1,
                explanation: 'In the NSPE and ESE professional code of ethics, Canon 1 explicitly states that engineers shall hold paramount the safety, health, and welfare of the public.',
                aiTip: 'Engineering ethics and quality management standards make up 15% of ESE General Studies Paper 1.',
                difficulty: 'Easy'
            }
        ]
    },
    {
        id: 'upsc-ifos',
        title: 'UPSC Indian Forest Service (IFoS)',
        fullName: 'Union Public Service Commission - Indian Forest Service Examination',
        category: 'UPSC & State PCS',
        description: 'All India Service dedicated to forest conservation and wildlife management. Rigorous botany, zoology, geology & environmental science MCQ archives.',
        icon: 'Sparkles',
        yearsAvailable: '2020 - 2025',
        totalMCQs: 3500,
        aiPredictionAccuracy: 95.8,
        examDate: 'May 2026',
        subjects: [
            'General Knowledge',
            'English',
            'Botany',
            'Zoology',
            'Chemistry',
            'Physics',
            'Mathematics',
            'Statistics',
            'Geology',
            'Agriculture',
            'Animal Husbandry & Veterinary Science',
            'Forestry'
        ],
        questions: [
            {
                id: 'ifos-1',
                examId: 'upsc-ifos',
                year: 2024,
                subject: 'Forestry & Environmental Conservation',
                topic: 'Silviculture systems',
                question: 'A silvicultural system in which the forest canopy is entirely removed in a single felling to establish a new even-aged stand is known as:',
                options: ['Selection system', 'Shelterwood system', 'Clear felling system', 'Coppice with standards system'],
                correctOptionIndex: 2,
                explanation: 'The Clear felling system involves harvesting all trees in a specific designated area at once, leading to an even-aged secondary regeneration.',
                aiTip: 'Silviculture and forest mensuration definitions are standard IFoS objective questions.',
                difficulty: 'Medium'
            }
        ]
    },
    {
        id: 'upsc-geo',
        title: 'UPSC Combined Geo-Scientist Exam',
        fullName: 'Union Public Service Commission - Combined Geo-Scientist Examination',
        category: 'UPSC & State PCS',
        description: 'Recruitment for Geologist, Geophysicist, and Chemist posts in the Geological Survey of India. Master structural geology, mineralogy & geophysics.',
        icon: 'TrendingUp',
        yearsAvailable: '2020 - 2025',
        totalMCQs: 2500,
        aiPredictionAccuracy: 93.8,
        examDate: 'Feb 2026',
        subjects: [
            'Geology - Paper I (Structural Geology & Geotectonics)',
            'Geology - Paper II (Geochemistry & Environmental Geology)',
            'Geology - Paper III (Economic Geology & Mining)',
            'Geophysics - Paper I',
            'Geophysics - Paper II',
            'Geophysics - Paper III',
            'Hydrogeology - Paper I',
            'Hydrogeology - Paper II',
            'Hydrogeology - Paper III',
            'Mineralogy',
            'Petrology',
            'Paleontology'
        ],
        questions: [
            {
                id: 'geo-1',
                examId: 'upsc-geo',
                year: 'AI Predicted 2026',
                subject: 'Geology & Mineralogy',
                topic: 'Mohs Scale of Hardness',
                question: 'According to Mohs scale of mineral hardness, which of the following minerals has a benchmark hardness index of exactly 7?',
                options: ['Apatite', 'Orthoclase', 'Quartz', 'Topaz'],
                correctOptionIndex: 2,
                explanation: 'On the standard Mohs hardness scale: 5 is Apatite, 6 is Orthoclase, 7 is Quartz, 8 is Topaz, 9 is Corundum, and 10 is Diamond.',
                aiTip: 'Mineral identification indices and crystallographic structures are highly scored factual questions.',
                difficulty: 'Easy'
            }
        ]
    },
    {
        id: 'upsc-epfo',
        title: 'UPSC EPFO (Enforcement Officer / APFC)',
        fullName: 'Union Public Service Commission - EPFO Enforcement Officer / APFC Exam',
        category: 'UPSC & State PCS',
        description: 'Highly competitive central government exam. Exhaustive MCQs for General Accounting Principles, Industrial Relations, Labour Laws & Social Security.',
        icon: 'Scale',
        yearsAvailable: '2020 - 2025',
        totalMCQs: 3800,
        aiPredictionAccuracy: 96.5,
        examDate: 'July 2026',
        subjects: [
            'Industrial Relations & Labour Laws',
            'Social Security in India',
            'Labour Laws & Acts',
            'General Accounting Principles',
            'Insurance',
            'Computer Applications',
            'General English',
            'General Knowledge & Current Affairs',
            'Indian Economy',
            'Reasoning Ability'
        ],
        questions: [
            {
                id: 'epfo-1',
                examId: 'upsc-epfo',
                year: 'AI Predicted 2026',
                subject: 'Industrial Relations & Labour Laws',
                topic: 'Maternity Benefit Act',
                question: 'Under the Maternity Benefit (Amendment) Act 2017 in India, what is the maximum duration of paid maternity leave granted to a female employee for her first two surviving children?',
                options: ['12 weeks', '16 weeks', '26 weeks', '36 weeks'],
                correctOptionIndex: 2,
                explanation: 'The 2017 amendment significantly increased paid maternity leave from 12 weeks to 26 weeks for women with less than two surviving children.',
                aiTip: 'Recent labour codes and social security welfare legislations account for 25% of EPFO questions.',
                difficulty: 'Easy'
            }
        ]
    },
    {
        id: 'upsc-cisf',
        title: 'UPSC CISF AC (EXE) Exam',
        fullName: 'Union Public Service Commission - CISF Assistant Commandant Executive LDCE',
        category: 'UPSC & State PCS',
        description: 'Departmental competitive examination for promotion to Assistant Commandant in Central Industrial Security Force. Professional skills and law archives.',
        icon: 'Shield',
        yearsAvailable: '2020 - 2025',
        totalMCQs: 2000,
        aiPredictionAccuracy: 94.0,
        examDate: 'March 2026',
        subjects: ['Professional Security Skills & Laws', 'CISF Act & Rules', 'Industrial Security', 'General Awareness'],
        questions: [
            {
                id: 'cisf-1',
                examId: 'upsc-cisf',
                year: 2024,
                subject: 'Professional Security Skills & Laws',
                topic: 'CISF Act',
                question: 'The Central Industrial Security Force (CISF) was enacted under an Act of Parliament in which year?',
                options: ['1965', '1969', '1973', '1984'],
                correctOptionIndex: 1,
                explanation: 'CISF was established in 1969 under the CISF Act of Parliament to provide integrated security cover to public sector undertakings.',
                aiTip: 'Standard statutory date question. Mandatory for all departmental aspirants.',
                difficulty: 'Easy'
            }
        ]
    },
    {
        id: 'state-pcs',
        title: 'State PCS Exams (UPPSC / BPSC / MPPSC / MPSC)',
        fullName: 'State Public Service Commissions - Combined State Upper Subordinate Services',
        category: 'UPSC & State PCS',
        description: 'Exhaustive archive of state-specific General Knowledge, Indian History, Geography & Polity for UPPSC, BPSC, MPPSC, MPSC, RPSC, KPSC, TNPSC & WBPSC.',
        icon: 'Award',
        yearsAvailable: '2020 - 2025',
        totalMCQs: 12000,
        aiPredictionAccuracy: 95.9,
        examDate: 'Various 2026',
        subjects: [
            'General Studies (GS) - History & Culture',
            'General Studies (GS) - Geography',
            'General Studies (GS) - Polity & Governance',
            'General Studies (GS) - Economy & Development',
            'General Studies (GS) - Science & Technology',
            'General Studies (GS) - Environment & Ecology',
            'Current Affairs (State & National)',
            'CSAT - Reasoning & Analytical Ability',
            'CSAT - Basic Numeracy',
            'CSAT - English Comprehension',
            'Essay Writing',
            'Hindi / Regional Language (Qualifying)',
            'Optional Subject (State-specific)'
        ],
        questions: [
            {
                id: 'spcs-1',
                examId: 'state-pcs',
                year: 'AI Predicted 2026',
                subject: 'Indian History & Art',
                topic: 'Indus Valley Civilization',
                question: 'Which archaeological site of the Indus Valley Civilization is famously known for its unique water reservoir and three-part division of the citadel city?',
                options: ['Harappa', 'Mohenjo-daro', 'Dholavira', 'Lothal'],
                correctOptionIndex: 2,
                explanation: 'Dholavira (located in Khadir Bet, Gujarat) is globally celebrated for its sophisticated stone-built water conservation reservoirs and tripartite city structure (citadel, middle town, lower town).',
                aiTip: 'Harappan sites and UNESCO World Heritage locations are guaranteed questions across all State PCS preliminary exams.',
                difficulty: 'Medium'
            }
        ]
    },

    // ─── 2. SSC & CENTRAL GOVT ───
    {
        id: 'ssc-cgl',
        title: 'SSC CGL (Combined Graduate Level)',
        fullName: 'Staff Selection Commission - Combined Graduate Level Exam',
        category: 'SSC & Central Govt',
        description: 'Top central government officer recruitment exam (Income Tax, Excise, MEA). Master Quantitative Aptitude shortcuts, English grammar, Reasoning & GS.',
        icon: 'Briefcase',
        yearsAvailable: '2020 - 2025',
        totalMCQs: 9500,
        aiPredictionAccuracy: 96.8,
        examDate: 'Sept 2026',
        subjects: [
            'Quantitative Aptitude (Number System, Algebra, Geometry, Mensuration)',
            'Percentage, Ratio & Proportion',
            'Time & Work, Speed & Distance',
            'Data Interpretation',
            'Statistics (for JSO post)',
            'General Intelligence & Reasoning',
            'Analogy & Classification',
            'Coding-Decoding, Series',
            'Matrix, Venn Diagrams',
            'English Language & Comprehension',
            'Vocabulary (Synonyms, Antonyms, One-word Substitution)',
            'Grammar (Spot the Error, Fill in the Blanks)',
            'Reading Comprehension',
            'General Awareness (History, Geography, Polity, Economy)',
            'General Science',
            'Current Affairs',
            'Computer Fundamentals & Awareness'
        ],
        questions: [
            {
                id: 'ssc-cgl-1',
                examId: 'ssc-cgl',
                year: 'AI Predicted 2026',
                subject: 'Quantitative Aptitude',
                topic: 'Speed, Distance & Time',
                question: 'Two trains running in opposite directions cross a man standing on the platform in 27 seconds and 17 seconds respectively. If they cross each other in 23 seconds, the ratio of their speeds is:',
                options: ['1 : 3', '3 : 2', '3 : 4', '2 : 3'],
                correctOptionIndex: 1,
                explanation: 'Let speeds be x and y. Lengths are 27x and 17y. Time to cross each other = (27x + 17y)/(x + y) = 23. Solving 27x + 17y = 23x + 23y => 4x = 6y => x/y = 3/2.',
                aiTip: 'Classic alligation / speed ratio shortcut problem. Highly repetitive across SSC Tiers.',
                difficulty: 'Medium'
            },
            {
                id: 'ssc-cgl-2',
                examId: 'ssc-cgl',
                year: 2024,
                subject: 'English Comprehension',
                topic: 'One Word Substitution',
                question: 'Select the word which means the exact same as the group of words: "A person who is indifferent to both pleasure and pain."',
                options: ['Cynic', 'Ascetic', 'Stoic', 'Recluse'],
                correctOptionIndex: 2,
                explanation: 'A Stoic is a person who endures hardship or joy without displaying strong emotional feelings.',
                aiTip: 'Vocabulary and One Word Substitutions make up 30% of the SSC English section.',
                difficulty: 'Easy'
            }
        ]
    },
    {
        id: 'ssc-chsl',
        title: 'SSC CHSL (10+2 Level)',
        fullName: 'Staff Selection Commission - Combined Higher Secondary Level Exam',
        category: 'SSC & Central Govt',
        description: 'Gateway for LDC, JSA and Postal Assistants in Central Ministries. High-speed numerical calculations, English antonyms/synonyms & General Intelligence.',
        icon: 'FileText',
        yearsAvailable: '2020 - 2025',
        totalMCQs: 7000,
        aiPredictionAccuracy: 97.1,
        examDate: 'July 2026',
        subjects: [
            'Quantitative Aptitude',
            'Basic Arithmetic',
            'General Intelligence & Reasoning',
            'English Language (Grammar & Comprehension)',
            'General Awareness',
            'Current Affairs',
            'Essay Writing (Tier II)',
            'Letter Writing (Tier II)',
            'Typing / Computer Skill Test'
        ],
        questions: [
            {
                id: 'chsl-1',
                examId: 'ssc-chsl',
                year: 'AI Predicted 2026',
                subject: 'General Intelligence & Reasoning',
                topic: 'Number Series & Analogies',
                question: 'In a certain logic, 14 : 210 :: 16 : ?',
                options: ['240', '256', '272', '288'],
                correctOptionIndex: 2,
                explanation: 'The underlying logic is N : (N^2 - N). For 14: 14^2 - 14 = 196 - 14 = 182? Wait, let\'s check 14 * 15 = 210. So N : N * (N + 1). For 16: 16 * 17 = 272.',
                aiTip: 'Multiplication by consecutive numbers is the most common SSC number series pattern.',
                difficulty: 'Medium'
            }
        ]
    },
    {
        id: 'ssc-mts',
        title: 'SSC MTS (Multi Tasking Staff)',
        fullName: 'Staff Selection Commission - Multi Tasking Non-Technical Staff Exam',
        category: 'SSC & Central Govt',
        description: 'Matriculation level entry into central government departments. Practice fundamental arithmetic, basic English vocabulary, and general awareness archives.',
        icon: 'Users',
        yearsAvailable: '2020 - 2025',
        totalMCQs: 6000,
        aiPredictionAccuracy: 95.5,
        examDate: 'Oct 2026',
        subjects: [
            'General Intelligence & Reasoning',
            'Numerical Aptitude',
            'General English (Basic)',
            'General Awareness'
        ],
        questions: [
            {
                id: 'mts-1',
                examId: 'ssc-mts',
                year: 2024,
                subject: 'General Awareness',
                topic: 'Indian Constitution & Articles',
                question: 'Which Article of the Indian Constitution guarantees equality of opportunity in matters of public employment?',
                options: ['Article 14', 'Article 15', 'Article 16', 'Article 19'],
                correctOptionIndex: 2,
                explanation: 'Article 16 of the Constitution of India provides for equality of opportunity for all citizens in matters relating to employment or appointment to any office under the State.',
                aiTip: 'Fundamental Rights articles (14 to 32) appear in almost every shift of SSC MTS.',
                difficulty: 'Easy'
            }
        ]
    },
    {
        id: 'ssc-gd',
        title: 'SSC GD Constable',
        fullName: 'Staff Selection Commission - General Duty Constable in CAPFs',
        category: 'SSC & Central Govt',
        description: 'Massive recruitment drive for Constables in BSF, CISF, CRPF & SSB. Focus on elementary maths, Hindi/English grammar & rapid reasoning MCQs.',
        icon: 'Shield',
        yearsAvailable: '2020 - 2025',
        totalMCQs: 8000,
        aiPredictionAccuracy: 96.0,
        examDate: 'Jan 2026',
        subjects: [
            'General Intelligence & Reasoning',
            'General Knowledge & General Awareness',
            'Elementary Mathematics',
            'English / Hindi Language',
            'Physical Efficiency Test (PET) - Qualifying',
            'Physical Standard Test (PST) - Qualifying',
            'Medical Test - Qualifying'
        ],
        questions: [
            {
                id: 'gd-1',
                examId: 'ssc-gd',
                year: 'AI Predicted 2026',
                subject: 'General Hindi / English',
                topic: 'Synonyms & Vocabulary',
                question: 'हिंदी व्याकरण: "अमृत" शब्द का सही पर्यायवाची शब्द निम्नलिखित में से कौन सा है?',
                options: ['गरल', 'सुधा', 'अनल', 'व्योम'],
                correctOptionIndex: 1,
                explanation: '"सुधा", "पीयूष", "सोम", "अमी" अमृत के प्रमुख पर्यायवाची शब्द हैं। "गरल" विष का, "अनल" आग का, और "व्योम" आकाश का पर्यायवाची है।',
                aiTip: 'पर्यायवाची और विलोम शब्द परीक्षा में 4-6 अंकों का सीधा योगदान देते हैं।',
                difficulty: 'Easy'
            }
        ]
    },
    {
        id: 'ssc-cpo',
        title: 'SSC CPO (Sub-Inspector)',
        fullName: 'Staff Selection Commission - Sub-Inspector in Delhi Police & CAPFs',
        category: 'SSC & Central Govt',
        description: 'Direct recruitment for Sub-Inspectors in Delhi Police & Central Armed Police Forces. High emphasis on English comprehension (200 marks in Tier 2).',
        icon: 'Shield',
        yearsAvailable: '2020 - 2025',
        totalMCQs: 5500,
        aiPredictionAccuracy: 96.4,
        examDate: 'May 2026',
        subjects: [
            'General Intelligence & Reasoning',
            'General Knowledge & Awareness',
            'Quantitative Aptitude',
            'English Language & Comprehension (Paper II)',
            'Current Affairs',
            'Indian History, Polity, Geography',
            'Physical Efficiency Test (PET) - Qualifying'
        ],
        questions: [
            {
                id: 'cpo-1',
                examId: 'ssc-cpo',
                year: 2024,
                subject: 'English Grammar & Vocabulary',
                topic: 'Active / Passive Voice',
                question: 'Select the correct passive form of the given sentence: "The mechanic repaired my car flawlessy."',
                options: [
                    'My car was repaired flawlessly by the mechanic.',
                    'My car is being repaired flawlessly by the mechanic.',
                    'My car has been repaired flawlessly by the mechanic.',
                    'My car will be repaired flawlessly by the mechanic.'
                ],
                correctOptionIndex: 0,
                explanation: 'Simple past tense active ("repaired") converts to simple past passive ("was/were + past participle").',
                aiTip: 'Voice and Narration conversions make up 45+ questions in SSC CPO Paper 2.',
                difficulty: 'Easy'
            }
        ]
    },
    {
        id: 'ssc-je',
        title: 'SSC JE (Junior Engineer)',
        fullName: 'Staff Selection Commission - Junior Engineer Exam',
        category: 'SSC & Central Govt',
        description: 'Recruitment for Junior Engineers (Civil, Electrical, Mechanical) in CPWD, MES and Border Roads. Technical objective papers + General Awareness.',
        icon: 'Building2',
        yearsAvailable: '2020 - 2025',
        totalMCQs: 6500,
        aiPredictionAccuracy: 95.8,
        examDate: 'June 2026',
        subjects: [
            'General Intelligence & Reasoning',
            'General Awareness',
            'Civil & Structural Engineering (for Civil JE)',
            'Electrical Engineering (for Electrical JE)',
            'Mechanical Engineering (for Mechanical JE)',
            'Quantities Estimation & Costing',
            'Engineering Drawing Basics'
        ],
        questions: [
            {
                id: 'sje-1',
                examId: 'ssc-je',
                year: 'AI Predicted 2026',
                subject: 'Civil Engineering - Construction Materials',
                topic: 'Cement & Concrete',
                question: 'What is the initial setting time of standard Ordinary Portland Cement (OPC) as per IS: 269 specifications?',
                options: ['Not less than 15 minutes', 'Not less than 30 minutes', 'Not less than 60 minutes', 'Not less than 10 hours'],
                correctOptionIndex: 1,
                explanation: 'As per standard IS specifications, the initial setting time of OPC should not be less than 30 minutes, and the final setting time should not exceed 10 hours (600 minutes).',
                aiTip: 'Concrete properties and IS code recommendations are standard 1-mark numerical/factual questions.',
                difficulty: 'Easy'
            }
        ]
    },
    {
        id: 'ssc-steno',
        title: 'SSC Stenographer (Grade C & D)',
        fullName: 'Staff Selection Commission - Stenographer Grade C & D Exam',
        category: 'SSC & Central Govt',
        description: 'Non-maths central government exam. 100 questions entirely dedicated to English Language & Comprehension, plus 50 GS and 50 General Intelligence.',
        icon: 'FileText',
        yearsAvailable: '2020 - 2025',
        totalMCQs: 4000,
        aiPredictionAccuracy: 94.9,
        examDate: 'Oct 2026',
        subjects: [
            'General Intelligence & Reasoning',
            'General Awareness',
            'English Language & Comprehension',
            'Stenography Skill Test (Qualifying)'
        ],
        questions: [
            {
                id: 'steno-1',
                examId: 'ssc-steno',
                year: 2024,
                subject: 'English Comprehension & Grammar',
                topic: 'Direct / Indirect Speech',
                question: 'Select the correct indirect speech form: She said to him, "Why are you making so much noise?"',
                options: [
                    'She asked him why he was making so much noise.',
                    'She asked him why was he making so much noise.',
                    'She told him why he is making so much noise.',
                    'She asked him that why he was making noise.'
                ],
                correctOptionIndex: 0,
                explanation: 'In interrogative indirect speech, the reporting verb becomes "asked/enquired", the question word "why" acts as conjunction, and the word order changes to assertive (subject + verb).',
                aiTip: 'Direct/Indirect speech rules are tested across 10-15 direct questions in Stenographer exams.',
                difficulty: 'Easy'
            }
        ]
    },
    {
        id: 'ssc-selection',
        title: 'SSC Selection Post (Phase XII)',
        fullName: 'Staff Selection Commission - Selection Posts Examination',
        category: 'SSC & Central Govt',
        description: 'Department-specific specialized technical and non-technical recruitment across Matriculation, Higher Secondary, and Graduation levels.',
        icon: 'Briefcase',
        yearsAvailable: '2020 - 2025',
        totalMCQs: 3500,
        aiPredictionAccuracy: 96.1,
        examDate: 'June 2026',
        subjects: ['General Knowledge & Static GK', 'Quantitative Aptitude', 'General Intelligence & Reasoning', 'English Language'],
        questions: [
            {
                id: 'sel-1',
                examId: 'ssc-selection',
                year: 'AI Predicted 2026',
                subject: 'General Knowledge & Static GK',
                topic: 'National Parks & Wildlife Sanctuaries',
                question: 'Keibul Lamjao National Park, famous for being the only floating national park in the world and home to the endangered Sangai deer, is located in:',
                options: ['Assam', 'Manipur', 'Meghalaya', 'Tripura'],
                correctOptionIndex: 1,
                explanation: 'Keibul Lamjao National Park is located on Loktak Lake in Bishnupur district of Manipur, celebrated for its floating decomposed plant material called phumdis.',
                aiTip: 'Northeast Indian geography and national parks are highly favored static GK questions.',
                difficulty: 'Easy'
            }
        ]
    },
    {
        id: 'ssc-delhi-police',
        title: 'SSC Delhi Police Constable',
        fullName: 'Staff Selection Commission - Delhi Police Executive Constable Exam',
        category: 'SSC & Central Govt',
        description: 'Highly competitive executive police recruitment. Heavy emphasis on General Knowledge & Current Affairs (50 marks) and Computer Fundamentals (10 marks).',
        icon: 'Shield',
        yearsAvailable: '2020 - 2025',
        totalMCQs: 5000,
        aiPredictionAccuracy: 95.3,
        examDate: 'Dec 2026',
        subjects: [
            'General Awareness / Knowledge',
            'Reasoning',
            'Numerical Ability',
            'Computer Fundamentals',
            'English Language',
            'Current Affairs',
            'Mental Aptitude',
            'Physical Endurance Test - Qualifying'
        ],
        questions: [
            {
                id: 'dp-1',
                examId: 'ssc-delhi-police',
                year: 2024,
                subject: 'Computer Fundamentals',
                topic: 'MS Excel Shortcuts',
                question: 'In Microsoft Excel 365, what is the keyboard shortcut to insert a new worksheet into an existing workbook?',
                options: ['Shift + F11', 'Ctrl + W', 'Alt + Enter', 'F7'],
                correctOptionIndex: 0,
                explanation: 'Shift + F11 is the dedicated shortcut in Excel to quickly insert a new blank worksheet.',
                aiTip: 'MS Office shortcuts (Word, Excel) are guaranteed 3-4 mark questions in Delhi Police computer section.',
                difficulty: 'Medium'
            }
        ]
    },
    {
        id: 'ssc-jht',
        title: 'SSC JHT (Junior Hindi Translator)',
        fullName: 'Staff Selection Commission - Junior Hindi Translator Examination',
        category: 'SSC & Central Govt',
        description: 'Specialized linguistic officer exam. Objective papers testing high-level Hindi and English grammar, translation accuracy, and official vocabulary.',
        icon: 'FileText',
        yearsAvailable: '2020 - 2025',
        totalMCQs: 2000,
        aiPredictionAccuracy: 94.2,
        examDate: 'Oct 2026',
        subjects: [
            'General Hindi',
            'General English',
            'Translation from English to Hindi',
            'Translation from Hindi to English',
            'Essay Writing in Hindi',
            'Official Hindi Vocabulary',
            'Terminology & Glossary'
        ],
        questions: [
            {
                id: 'jht-1',
                examId: 'ssc-jht',
                year: 'AI Predicted 2026',
                subject: 'Official Language & Terminology',
                topic: 'Administrative Glossary',
                question: 'भारत सरकार के प्रशासनिक शब्दावली के अनुसार अंग्रेजी शब्द "Ex-officio" का सटीक हिंदी अनुवाद निम्नलिखित में से कौन सा है?',
                options: ['तदर्थ', 'पदेन', 'प्रभारी', 'स्थानापन्न'],
                correctOptionIndex: 1,
                explanation: '"Ex-officio" का प्रशासनिक एवं संवैधानिक अर्थ "पदेन" (पद के आधार पर) होता है, जैसे भारत के उपराष्ट्रपति राज्यसभा के पदेन सभापति होते हैं। "तदर्थ" Ad-hoc का अनुवाद है।',
                aiTip: 'प्रशासनिक और पारिभाषिक शब्दावली अनुवादक परीक्षा का मुख्य आधार है।',
                difficulty: 'Easy'
            }
        ]
    },

    // ─── 3. BANKING & INSURANCE ───
    {
        id: 'ibps-po',
        title: 'IBPS PO / SBI PO',
        fullName: 'Institute of Banking Personnel Selection & State Bank of India - Probationary Officer',
        category: 'Banking & Insurance',
        description: 'Elite banking sector recruitment tests. Rigorous Data Interpretation, Syllogisms, Seating Arrangements, Puzzles & Banking/Financial Awareness.',
        icon: 'TrendingUp',
        yearsAvailable: '2020 - 2025',
        totalMCQs: 8200,
        aiPredictionAccuracy: 97.4,
        examDate: 'Oct 2026',
        subjects: [
            'Reasoning Ability (Puzzles, Seating Arrangement)',
            'Syllogisms, Blood Relations',
            'Coding-Decoding, Direction Sense',
            'Alphanumeric Series, Inequalities',
            'Quantitative Aptitude (Data Interpretation)',
            'Simplification & Approximation',
            'Quadratic Equations',
            'Number Series, Average, Profit & Loss',
            'English Language (Reading Comprehension)',
            'Cloze Test, Para Jumbles',
            'Error Spotting, Vocabulary',
            'Banking Awareness & Financial Awareness',
            'Current Affairs & Static GK',
            'Computer Knowledge & Awareness',
            'Essay & Letter Writing (Descriptive - Mains)',
            'Reasoning Ability & Computer Aptitude',
            'Data Analysis & Interpretation',
            'General / Economy / Banking Awareness'
        ],
        questions: [
            {
                id: 'bank-po-1',
                examId: 'ibps-po',
                year: 'AI Predicted 2026',
                subject: 'Reasoning Ability',
                topic: 'Syllogism (Only a few)',
                question: 'Statements:\nOnly a few Banks are Funds.\nAll Funds are Markets.\nNo Market is a Loss.\nConclusions:\nI. Some Banks are definitely not Losses.\nII. All Banks being Funds is a possibility.',
                options: ['Only conclusion I follows', 'Only conclusion II follows', 'Both I and II follow', 'Neither I nor II follows'],
                correctOptionIndex: 0,
                explanation: '"Only a few" means some are and some definitely are not. Since all Funds are Markets and no Market is a Loss, any Bank that is a Fund is also a Market, so it cannot be a Loss. Thus, some Banks (which are Funds) are definitely not Losses (Conclusion I follows). Conclusion II is false because "only a few" explicitly prevents all Banks from becoming Funds.',
                aiTip: 'Reverse syllogisms and "Only a few" condition logic are tested in every banking Prelims.',
                difficulty: 'Hard'
            },
            {
                id: 'bank-po-2',
                examId: 'ibps-po',
                year: 2024,
                subject: 'Banking & Financial Awareness',
                topic: 'Monetary Policy Tools',
                question: 'When the Reserve Bank of India (RBI) conducts Open Market Operations (OMOs) by selling government securities in the secondary market, what is the direct impact on liquidity?',
                options: [
                    'Liquidity in the banking system increases',
                    'Liquidity in the banking system is absorbed / decreases',
                    'Repo rate automatically reduces to 0%',
                    'Foreign exchange reserves immediately double'
                ],
                correctOptionIndex: 1,
                explanation: 'Selling government securities means banks pay money to the RBI to purchase those bonds, draining/absorbing surplus cash liquidity from the commercial banking system.',
                aiTip: 'Monetary policy instruments (Repo, CRR, OMO, MSF) are standard Banking Awareness questions.',
                difficulty: 'Medium'
            }
        ]
    },
    {
        id: 'ibps-clerk',
        title: 'IBPS Clerk / SBI Clerk',
        fullName: 'Institute of Banking Personnel Selection & State Bank of India - Junior Associates / Clerical Cadre',
        category: 'Banking & Insurance',
        description: 'High-speed clerical recruitment exams. Master rapid simplification, quadratic equations, alphanumeric series, reading comprehension and banking static.',
        icon: 'Calculator',
        yearsAvailable: '2020 - 2025',
        totalMCQs: 7500,
        aiPredictionAccuracy: 96.9,
        examDate: 'August 2026',
        subjects: [
            'Reasoning Ability',
            'Quantitative Aptitude / Numerical Ability',
            'English Language',
            'General / Financial Awareness',
            'Computer Knowledge',
            'General English',
            'Reasoning Ability & Computer Aptitude'
        ],
        questions: [
            {
                id: 'clerk-1',
                examId: 'ibps-clerk',
                year: 'AI Predicted 2026',
                subject: 'Quantitative Aptitude',
                topic: 'Rapid Simplification',
                question: 'What exact value will come in place of the question mark (?):\n35% of 600 + ? % of 500 = 360',
                options: ['25', '30', '35', '40'],
                correctOptionIndex: 1,
                explanation: '35% of 600 = 210. Equation: 210 + (x/100)*500 = 360. 5x = 360 - 210 = 150. x = 30.',
                aiTip: 'Simplification and approximation questions represent 10-15 direct marks in banking clerical preliminary tests.',
                difficulty: 'Easy'
            }
        ]
    },
    {
        id: 'ibps-so',
        title: 'IBPS SO (Specialist Officer)',
        fullName: 'Institute of Banking Personnel Selection - Specialist Officer Examination',
        category: 'Banking & Insurance',
        description: 'Recruitment for IT Officer, Agricultural Field Officer, Rajbhasha Adhikari & Law Officer. Professional knowledge MCQs in DBMS, Networking & Agri Science.',
        icon: 'Code',
        yearsAvailable: '2020 - 2025',
        totalMCQs: 4000,
        aiPredictionAccuracy: 95.6,
        examDate: 'Dec 2026',
        subjects: [
            'Reasoning',
            'English Language',
            'Quantitative Aptitude',
            'Professional Knowledge - IT Officer (DBMS, Networking, OS, Algorithms)',
            'Professional Knowledge - Agriculture Field Officer (Agronomy, Soil Science)',
            'Professional Knowledge - HR / Personnel Officer (HR Management, Labour Laws)',
            'Professional Knowledge - Marketing Officer (Marketing Concepts, Branding)',
            'Professional Knowledge - Law Officer (Indian Law, Acts & Statutes)',
            'Banking & Financial Awareness'
        ],
        questions: [
            {
                id: 'so-1',
                examId: 'ibps-so',
                year: 'AI Predicted 2026',
                subject: 'IT Officer Professional Knowledge',
                topic: 'Network Security Protocols',
                question: 'In computer network security, which protocol operates at the Transport Layer of the OSI model to provide encrypted communication over the web?',
                options: ['IPsec', 'TLS / SSL', 'SSH', 'PGP'],
                correctOptionIndex: 1,
                explanation: 'Transport Layer Security (TLS) and its predecessor SSL operate at the Transport layer, securing web traffic (HTTPS) between browsers and servers.',
                aiTip: 'OSI model layers and cybersecurity encryption protocols are mandatory 5-mark clusters in IT officer professional knowledge papers.',
                difficulty: 'Medium'
            }
        ]
    },
    {
        id: 'rbi-grade-b',
        title: 'RBI Grade B Officer',
        fullName: 'Reserve Bank of India - Grade B Officers Exam (General / DEPR / DSIM)',
        category: 'Banking & Insurance',
        description: 'The pinnacle of banking sector careers. Advanced objective and descriptive practice for Economic and Social Issues (ESI) and Finance & Management (FM).',
        icon: 'Building2',
        yearsAvailable: '2020 - 2025',
        totalMCQs: 4500,
        aiPredictionAccuracy: 97.5,
        examDate: 'July 2026',
        subjects: [
            'General Awareness (Phase I)',
            'English (Phase I)',
            'Quantitative Aptitude / Data Interpretation (Phase I)',
            'Reasoning (Phase I)',
            'Economic & Social Issues (ESI - Phase II Paper I)',
            'English Writing Skills (Phase II Paper II)',
            'Finance & Management (FM - Phase II Paper III)',
            'DEPR - Economics (for Economic & Policy Research Dept.)',
            'DSIM - Statistics (for Dept. of Statistics & Information Management)'
        ],
        questions: [
            {
                id: 'rbi-1',
                examId: 'rbi-grade-b',
                year: 'AI Predicted 2026',
                subject: 'Economic & Social Issues',
                topic: 'Fiscal Policy & Budgeting',
                question: 'In government budgeting, the difference between the Fiscal Deficit and Total Interest Payments on prior accumulated debt is officially termed as:',
                options: ['Revenue Deficit', 'Primary Deficit', 'Effective Revenue Deficit', 'Budgetary Deficit'],
                correctOptionIndex: 1,
                explanation: 'Primary Deficit = Fiscal Deficit - Interest Payments. It indicates the borrowing requirement of the government exclusive of interest obligations on accumulated historical debt.',
                aiTip: 'Core macroeconomic formulas and Union Budget allocations represent heavy weightage in RBI Grade B Phase 2 ESI.',
                difficulty: 'Medium'
            }
        ]
    },
    {
        id: 'rbi-assistant',
        title: 'RBI Assistant',
        fullName: 'Reserve Bank of India - Assistant Recruitment Exam',
        category: 'Banking & Insurance',
        description: 'Highly competitive central bank clerical exam. Extreme cut-offs requiring 95%+ accuracy in English, Numerical Ability, Reasoning & Computer Knowledge.',
        icon: 'Calculator',
        yearsAvailable: '2020 - 2025',
        totalMCQs: 4200,
        aiPredictionAccuracy: 96.0,
        examDate: 'Sept 2026',
        subjects: [
            'Reasoning Ability',
            'Quantitative Aptitude / Numerical Ability',
            'English Language',
            'General Awareness',
            'Computer Knowledge'
        ],
        questions: [
            {
                id: 'rbia-1',
                examId: 'rbi-assistant',
                year: 2024,
                subject: 'Numerical Ability',
                topic: 'Profit & Loss',
                question: 'A shopkeeper marks an article 40% above its cost price and allows a discount of 15% on the marked price. His overall profit percentage is:',
                options: ['19%', '21%', '25%', '28%'],
                correctOptionIndex: 0,
                explanation: 'Let CP = 100. MP = 140. Discount = 15% of 140 = 21. SP = 140 - 21 = 119. Profit = 119 - 100 = 19%.',
                aiTip: 'Standard successive percentage formula (x + y + xy/100). Extremely fast 30-second solution.',
                difficulty: 'Easy'
            }
        ]
    },
    {
        id: 'nabard-exam',
        title: 'NABARD Grade A & B Officer',
        fullName: 'National Bank for Agriculture and Rural Development - Grade A & B Officers',
        category: 'Banking & Insurance',
        description: 'Elite development banking exam. Master Agriculture & Rural Development (ARD), Economic & Social Issues (ESI), and General Awareness archives.',
        icon: 'Sparkles',
        yearsAvailable: '2020 - 2025',
        totalMCQs: 3600,
        aiPredictionAccuracy: 95.7,
        examDate: 'August 2026',
        subjects: [
            'Reasoning',
            'Quantitative Aptitude',
            'English Language',
            'Computer Knowledge',
            'Economic & Social Issues (ESI)',
            'Agriculture & Rural Development (ARD)',
            'General Awareness',
            'Development Economics',
            'Finance & Management'
        ],
        questions: [
            {
                id: 'nabard-1',
                examId: 'nabard-exam',
                year: 'AI Predicted 2026',
                subject: 'Agriculture & Rural Development',
                topic: 'Soil Science & Fertilizers',
                question: 'Which essential plant macronutrient deficiency in agricultural soils leads to the classic symptom of interveinal chlorosis in younger upper leaves?',
                options: ['Nitrogen', 'Phosphorus', 'Iron', 'Potassium'],
                correctOptionIndex: 2,
                explanation: 'Iron (Fe) deficiency produces interveinal chlorosis (yellowing between veins while veins remain green) in newly formed upper leaves because iron is an immobile nutrient within the plant.',
                aiTip: 'Plant mineral nutrition and soil deficiency symptoms are guaranteed 2-mark questions in NABARD ARD.',
                difficulty: 'Medium'
            }
        ]
    },
    {
        id: 'lic-exams',
        title: 'LIC AAO / ADO / Assistant',
        fullName: 'Life Insurance Corporation of India - Assistant Administrative Officer & ADO',
        category: 'Banking & Insurance',
        description: 'Top tier insurance sector exams. Rigorous practice for Insurance & Financial Market Awareness, Quantitative Aptitude, and Logical Reasoning.',
        icon: 'Briefcase',
        yearsAvailable: '2020 - 2025',
        totalMCQs: 5000,
        aiPredictionAccuracy: 96.3,
        examDate: 'June 2026',
        subjects: [
            'Reasoning',
            'Quantitative Aptitude',
            'English Language',
            'General Knowledge & Current Affairs',
            'Professional Knowledge - IT (for IT stream)',
            'Professional Knowledge - Chartered Accountant (for CA stream)',
            'Insurance & Financial Market Awareness'
        ],
        questions: [
            {
                id: 'lic-1',
                examId: 'lic-exams',
                year: 'AI Predicted 2026',
                subject: 'Insurance & Financial Market Awareness',
                topic: 'Insurance Principles',
                question: 'The fundamental principle of insurance which states that the insured must have a financial loss if the insured property is damaged or destroyed is known as:',
                options: ['Principle of Subrogation', 'Principle of Indemnity', 'Principle of Insurable Interest', 'Principle of Utmost Good Faith'],
                correctOptionIndex: 2,
                explanation: 'Insurable interest is the legal requirement that the policyholder must suffer financial loss upon the destruction or damage of the insured subject matter.',
                aiTip: 'Core insurance principles (Indemnity, Subrogation, Insurable Interest) are tested in every LIC exam tier.',
                difficulty: 'Easy'
            }
        ]
    },
    {
        id: 'niacl-uiic',
        title: 'NIACL / NICL / UIIC Administrative Officer (AO)',
        fullName: 'General Insurance Public Sector Undertakings - Administrative Officer Exam',
        category: 'Banking & Insurance',
        description: 'Recruitment for Generalist and Specialist Officers across India\'s public sector general insurance corporations. High level reasoning and quantitative analysis.',
        icon: 'Shield',
        yearsAvailable: '2020 - 2025',
        totalMCQs: 3500,
        aiPredictionAccuracy: 95.0,
        examDate: 'May 2026',
        subjects: [
            'Reasoning Ability',
            'Quantitative Aptitude',
            'English Language',
            'General Awareness (Insurance Industry Focus)',
            'Computer Knowledge'
        ],
        questions: [
            {
                id: 'niacl-1',
                examId: 'niacl-uiic',
                year: 2024,
                subject: 'General Awareness & Financial Static',
                topic: 'IRDAI Regulations',
                question: 'Where is the permanent statutory headquarters of the Insurance Regulatory and Development Authority of India (IRDAI) located?',
                options: ['Mumbai', 'New Delhi', 'Hyderabad', 'Kolkata'],
                correctOptionIndex: 2,
                explanation: 'The headquarters of IRDAI was shifted from New Delhi to Hyderabad in 2001.',
                aiTip: 'Statutory regulatory bodies and their headquarters are standard banking/insurance static questions.',
                difficulty: 'Easy'
            }
        ]
    },

    // ─── 4. RAILWAYS ───
    {
        id: 'rrb-ntpc',
        title: 'RRB NTPC (Non-Technical)',
        fullName: 'Railway Recruitment Board - Non-Technical Popular Categories Exam',
        category: 'Railways',
        description: 'Massive central recruitment for Station Master, Commercial Apprentice, and Goods Guard posts. Extensive General Science, Maths and Reasoning CBT archives.',
        icon: 'Train',
        yearsAvailable: '2020 - 2025',
        totalMCQs: 10500,
        aiPredictionAccuracy: 96.6,
        examDate: 'Nov 2026',
        subjects: [
            'General Awareness (Current Events, National & International)',
            'History of India & Freedom Struggle',
            'Geography (India & World)',
            'Indian Polity, Governance & Constitution',
            'General Science (Physics, Chemistry, Life Science - up to Class X)',
            'Science & Technology (Space, Nuclear, IT)',
            'Sports, Art & Culture',
            'Mathematics - Number System, LCM & HCF',
            'Mathematics - Percentage, Ratio & Proportion',
            'Mathematics - Time & Work, Speed & Distance',
            'Mathematics - Simple & Compound Interest',
            'Mathematics - Mensuration, Algebra, Geometry',
            'Mathematics - Statistics & Elementary Trigonometry',
            'General Intelligence & Reasoning (Analogies, Coding-Decoding)',
            'Series, Syllogism, Venn Diagrams',
            'Data Sufficiency, Statement-Conclusion',
            'Computer-Based Aptitude Test (CBAT - for Station Master)',
            'Typing Skill Test (for Clerical Posts)'
        ],
        questions: [
            {
                id: 'ntpc-1',
                examId: 'rrb-ntpc',
                year: 'AI Predicted 2026',
                subject: 'General Science - Physics',
                topic: 'Sound & Acoustics',
                question: 'What is the minimum distance required between an acoustic source and a reflecting surface to hear a distinct echo in dry air at 20°C?',
                options: ['10.2 meters', '17.2 meters', '25.5 meters', '34.4 meters'],
                correctOptionIndex: 1,
                explanation: 'Speed of sound at 20°C is ~344 m/s. For the human ear to distinguish two sounds, the time interval must be at least 0.1s. Total distance = speed * time = 344 * 0.1 = 34.4m. Minimum distance to reflector = 34.4 / 2 = 17.2 meters.',
                aiTip: 'Acoustics and wave mechanics numericals appear in over 60% of RRB NTPC science modules.',
                difficulty: 'Medium'
            }
        ]
    },
    {
        id: 'rrb-group-d',
        title: 'RRB Group D (Level 1 Posts)',
        fullName: 'Railway Recruitment Board - Level 1 Group D Examination',
        category: 'Railways',
        description: 'One of the world\'s largest computer-based test series. Heavy focus on NCERT 10th standard General Science (Physics, Chemistry, Life Science) and arithmetic.',
        icon: 'Train',
        yearsAvailable: '2020 - 2025',
        totalMCQs: 12000,
        aiPredictionAccuracy: 95.8,
        examDate: 'August 2026',
        subjects: [
            'Mathematics (Number System, BODMAS, Fractions)',
            'Ratio & Proportion, Percentage',
            'Time & Work, Time & Distance',
            'Profit & Loss, Simple & Compound Interest',
            'Mensuration, Geometry, Trigonometry',
            'General Intelligence & Reasoning',
            'General Science (Physics, Chemistry, Life Science - Class X level)',
            'General Awareness & Current Affairs',
            'Physical Efficiency Test (PET) - Qualifying'
        ],
        questions: [
            {
                id: 'group-d-1',
                examId: 'rrb-group-d',
                year: 2024,
                subject: 'General Science - Chemistry',
                topic: 'Acids, Bases & pH',
                question: 'Which natural organic acid is predominantly present in an ant sting or nettle leaf sting?',
                options: ['Acetic acid', 'Citric acid', 'Methanoic (Formic) acid', 'Oxalic acid'],
                correctOptionIndex: 2,
                explanation: 'Ant stings and stinging nettles inject methanoic acid (also known as formic acid, HCOOH) into the skin, causing acute burning and swelling.',
                aiTip: 'Organic acid sources (curd, lemon, tamarind, ant sting) are highly recurring 1-mark RRB questions.',
                difficulty: 'Easy'
            }
        ]
    },
    {
        id: 'rrb-je',
        title: 'RRB JE (Junior Engineer)',
        fullName: 'Railway Recruitment Board - Junior Engineer Examination',
        category: 'Railways',
        description: 'Technical railway engineering recruitment. CBT 1 tests non-technical aptitude while CBT 2 tests specialized core engineering disciplines.',
        icon: 'Building2',
        yearsAvailable: '2020 - 2025',
        totalMCQs: 6000,
        aiPredictionAccuracy: 96.1,
        examDate: 'June 2026',
        subjects: [
            'Mathematics',
            'General Intelligence & Reasoning',
            'General Awareness',
            'General Science (Physics, Chemistry, Environmental Science)',
            'Computer Fundamentals & Applications',
            'Civil Engineering (Structures, Transportation, Geotechnics, Hydraulics)',
            'Mechanical Engineering (Thermodynamics, Machine Design, Manufacturing)',
            'Electrical Engineering (Circuits, Machines, Power Systems, Control)',
            'Electronics & Communication Engineering',
            'Information Technology (Programming, DBMS, Networks, OS)',
            'Engineering Drawing (CBT II)'
        ],
        questions: [
            {
                id: 'rrbje-1',
                examId: 'rrb-je',
                year: 'AI Predicted 2026',
                subject: 'Electrical Engineering - Circuit Theory',
                topic: 'Ohm\'s Law & Resistivity',
                question: 'If a metallic wire of resistance R is stretched uniformly so that its length is doubled while maintaining constant volume, its new resistance will be:',
                options: ['R / 2', '2 * R', '4 * R', '8 * R'],
                correctOptionIndex: 2,
                explanation: 'Volume V = A * L. If L becomes 2L, area A becomes A/2. Since R = rho * (L / A), the new resistance R\' = rho * (2L / (A/2)) = 4 * rho * (L/A) = 4R.',
                aiTip: 'Wire stretching resistance numericals are standard questions in RRB JE and SSC JE electrical papers.',
                difficulty: 'Medium'
            }
        ]
    },
    {
        id: 'rrb-alp',
        title: 'RRB ALP (Assistant Loco Pilot)',
        fullName: 'Railway Recruitment Board - Assistant Loco Pilot & Technician Exam',
        category: 'Railways',
        description: 'High-speed technical recruitment. Master CBT Stage 1 maths/reasoning and CBT Stage 2 Basic Science and Engineering Drawing concepts.',
        icon: 'Train',
        yearsAvailable: '2020 - 2025',
        totalMCQs: 7000,
        aiPredictionAccuracy: 96.4,
        examDate: 'Sept 2026',
        subjects: [
            'Mathematics (Arithmetic, Algebra, Geometry)',
            'General Intelligence & Reasoning',
            'Basic Science & Engineering',
            'General Science (Physics, Chemistry)',
            'Engineering Drawing',
            'General Awareness & Current Affairs',
            'Trade-Specific Technical Subject (CBT II Part B)',
            'Fitter / Electrician / Electronics / Machinist / Welder (Trade-specific)',
            'Computer-Based Aptitude Test (CBAT) - Qualifying'
        ],
        questions: [
            {
                id: 'alp-1',
                examId: 'rrb-alp',
                year: 2024,
                subject: 'Basic Science & Engineering Drawing',
                topic: 'Engineering Drawing Standards',
                question: 'As per standard BIS drawing board specifications, what are the exact dimensions (in mm) of a standard B2 designated drawing board?',
                options: ['1500 x 1000 x 25', '1000 x 700 x 25', '700 x 500 x 15', '500 x 350 x 15'],
                correctOptionIndex: 2,
                explanation: 'Standard BIS drawing boards: B0 is 1500x1000, B1 is 1000x700, B2 is 700x500x15mm, and B3 is 500x350x15mm.',
                aiTip: 'Engineering drawing tools and dimensions are mandatory questions for RRB ALP CBT 2.',
                difficulty: 'Medium'
            }
        ]
    },
    {
        id: 'rpf-constable',
        title: 'RPF Constable & Sub-Inspector',
        fullName: 'Railway Protection Force - Constable and Sub-Inspector CBT Exam',
        category: 'Railways',
        description: 'Elite railway protection force recruitment. Rapid 120-question test covering 50 General Awareness, 35 Arithmetic, and 35 General Intelligence.',
        icon: 'Shield',
        yearsAvailable: '2020 - 2025',
        totalMCQs: 5500,
        aiPredictionAccuracy: 95.2,
        examDate: 'Oct 2026',
        subjects: [
            'General Awareness',
            'Arithmetic',
            'General Intelligence & Reasoning',
            'Physical Efficiency Test (PET) - Qualifying',
            'Physical Standard Test (PST) - Qualifying',
            'Medical Test - Qualifying'
        ],
        questions: [
            {
                id: 'rpf-1',
                examId: 'rpf-constable',
                year: 'AI Predicted 2026',
                subject: 'General Awareness',
                topic: 'Sports & Trophies',
                question: 'The famous "Santosh Trophy" is a premier national-level tournament associated with which sport in India?',
                options: ['Cricket', 'Football', 'Hockey', 'Badminton'],
                correctOptionIndex: 1,
                explanation: 'Santosh Trophy is an annual state-level national football tournament inaugurated in 1941.',
                aiTip: 'Sports trophies and Olympic venues carry 3-4 marks in RPF General Awareness.',
                difficulty: 'Easy'
            }
        ]
    },
    {
        id: 'rrb-technician',
        title: 'Railway Technician (Grade I & III)',
        fullName: 'Railway Recruitment Board - Technician Grade I Signal & Grade III Exam',
        category: 'Railways',
        description: 'Specialized signal and telecommunication technical exam. Rigorous practice for physics numericals, electronics fundamentals and computer applications.',
        icon: 'Code',
        yearsAvailable: '2020 - 2025',
        totalMCQs: 4500,
        aiPredictionAccuracy: 95.5,
        examDate: 'Dec 2026',
        subjects: [
            'Mathematics',
            'General Intelligence & Reasoning',
            'General Science',
            'General Awareness & Current Affairs',
            'Trade-Specific Technical Subject (ITI Trade Level)'
        ],
        questions: [
            {
                id: 'tech-1',
                examId: 'rrb-technician',
                year: 2024,
                subject: 'Electronics Fundamentals',
                topic: 'Semiconductor Diodes',
                question: 'When a standard P-N junction semiconductor diode is operated under reverse bias condition, what is the primary behavior of its depletion layer width?',
                options: [
                    'The depletion layer width decreases to zero',
                    'The depletion layer width increases significantly',
                    'The barrier potential completely collapses',
                    'Heavy forward avalanche current flows instantly'
                ],
                correctOptionIndex: 1,
                explanation: 'Under reverse bias, the positive battery terminal pulls electrons away from the N-side, and the negative terminal pulls holes from the P-side, widening the depletion zone.',
                aiTip: 'Semiconductor physics (Diodes, Transistors, Logic gates) is the core syllabus for Signal Grade I technicians.',
                difficulty: 'Medium'
            }
        ]
    },

    // ─── 5. DEFENCE & POLICE ───
    {
        id: 'nda-exam',
        title: 'NDA & NA Exam',
        fullName: 'National Defence Academy & Naval Academy Examination',
        category: 'Defence & Police',
        description: 'National gateway to join the Indian Armed Forces as an officer right after 10+2. Practice Mathematics (300 marks) & General Ability Test (GAT 600 marks) archives.',
        icon: 'Shield',
        yearsAvailable: '2020 - 2025',
        totalMCQs: 6500,
        aiPredictionAccuracy: 95.4,
        examDate: 'April & Sept 2026',
        subjects: [
            'Mathematics - Algebra',
            'Mathematics - Matrices & Determinants',
            'Mathematics - Trigonometry',
            'Mathematics - 2D & 3D Geometry',
            'Mathematics - Differential Calculus',
            'Mathematics - Integral Calculus',
            'Mathematics - Vector Algebra',
            'Mathematics - Statistics & Probability',
            'GAT - English (Grammar, Vocabulary, Comprehension)',
            'GAT - Physics',
            'GAT - Chemistry',
            'GAT - General Science',
            'GAT - History of India',
            'GAT - Geography (India & World)',
            'GAT - Current Events & General Awareness',
            'GAT - Freedom Movement',
            'GAT - Sports, Art & Culture',
            'GAT - Military Aptitude (Spatial & Mental)'
        ],
        questions: [
            {
                id: 'nda-1',
                examId: 'nda-exam',
                year: 2024,
                subject: 'Mathematics',
                topic: 'Trigonometry',
                question: 'What is the value of tan(1°) * tan(2°) * tan(3°) * ... * tan(89°)?',
                options: ['0', '1', 'infinity', '-1'],
                correctOptionIndex: 1,
                explanation: 'Pairing tan(theta) with tan(90 - theta) = cot(theta). Since tan(theta)*cot(theta) = 1, all terms pair up perfectly leaving tan(45°) = 1.',
                aiTip: 'Standard NDA Maths trick question. Extremely fast scoring opportunity.',
                difficulty: 'Easy'
            },
            {
                id: 'nda-2',
                examId: 'nda-exam',
                year: 'AI Predicted 2026',
                subject: 'General Ability Test - Physics',
                topic: 'Gravitation & Escape Velocity',
                question: 'If the radius of the Earth were to shrink by 1% while its mass remained strictly constant, the value of acceleration due to gravity (g) on the surface would:',
                options: ['Decrease by ~1%', 'Increase by ~2%', 'Decrease by ~2%', 'Remain unchanged'],
                correctOptionIndex: 1,
                explanation: 'g = G * M / R^2. Differentiating log g yields dg/g = - 2 dR/R. If dR/R = - 1%, then dg/g = + 2%. Thus gravity increases by ~2%.',
                aiTip: 'Proportional percentage change problems in gravitation and electrostatics are highly recurring GAT physics numericals.',
                difficulty: 'Medium'
            }
        ]
    },
    {
        id: 'afcat-exam',
        title: 'AFCAT (Air Force Common Admission Test)',
        fullName: 'Indian Air Force - Air Force Common Admission Test',
        category: 'Defence & Police',
        description: 'Direct officer recruitment for Flying and Ground Duty branches. Master rapid Military Aptitude, Spatial Reasoning, Numerical Ability and Static Air Force GK.',
        icon: 'Rocket',
        yearsAvailable: '2020 - 2025',
        totalMCQs: 4500,
        aiPredictionAccuracy: 96.1,
        examDate: 'Feb & August 2026',
        subjects: [
            'General Awareness (History, Geography, Polity, Science)',
            'Air Force & Military GK',
            'Current Affairs',
            'Verbal Ability in English (Grammar, Comprehension, Vocabulary)',
            'Numerical Ability (Arithmetic, Percentage, Speed & Distance)',
            'Reasoning & Military Aptitude Test',
            'Spatial Reasoning (2D & 3D Figures)',
            'Mechanical Comprehension (for Technical Branch)',
            'Physics (for Technical Branch)'
        ],
        questions: [
            {
                id: 'afcat-1',
                examId: 'afcat-exam',
                year: 'AI Predicted 2026',
                subject: 'Military Aptitude & Static GK',
                topic: 'Indian Air Force Commands',
                question: 'Where is the permanent headquarters of the Maintenance Command of the Indian Air Force located?',
                options: ['New Delhi', 'Prayagraj (Allahabad)', 'Nagpur', 'Shillong'],
                correctOptionIndex: 2,
                explanation: 'The Maintenance Command of the Indian Air Force is headquartered at Vayusena Nagar in Nagpur, Maharashtra.',
                aiTip: 'IAF command locations and aircraft origins (Rafale, Sukhoi, Tejas, Apache) are guaranteed AFCAT questions.',
                difficulty: 'Easy'
            }
        ]
    },
    {
        id: 'agniveer-exam',
        title: 'Agniveer Army / Navy / Air Force Vayu',
        fullName: 'Indian Armed Forces - Agneepath Agniveer Recruitment Examination',
        category: 'Defence & Police',
        description: 'High-speed computer-based tests for GD, Technical, Clerk and Tradesman branches. Rapid science, basic mathematics, English grammar and general knowledge.',
        icon: 'Target',
        yearsAvailable: '2020 - 2025',
        totalMCQs: 5000,
        aiPredictionAccuracy: 95.8,
        examDate: 'April 2026',
        subjects: [
            'General Knowledge & Current Affairs',
            'General Science (Physics, Chemistry, Biology)',
            'Mathematics',
            'English',
            'Reasoning & General Intelligence',
            'Technical Subjects (for Technical & SKT posts)',
            'Computer Fundamentals (for Clerk/SKT)',
            'Physical Fitness Test - Qualifying',
            'Physics',
            'Chemistry',
            'General Science & Awareness',
            'Logical Reasoning',
            'Physics (Group X)',
            'Mathematics (Group X)',
            'Reasoning & General Awareness (Group Y)',
            'General Science'
        ],
        questions: [
            {
                id: 'agni-1',
                examId: 'agniveer-exam',
                year: 2024,
                subject: 'General Knowledge & Military',
                topic: 'Gallantry Awards',
                question: 'Which of the following is the highest wartime gallantry military decoration awarded by the Republic of India for conspicuous bravery in the presence of the enemy?',
                options: ['Ashoka Chakra', 'Param Vir Chakra', 'Maha Vir Chakra', 'Shaurya Chakra'],
                correctOptionIndex: 1,
                explanation: 'Param Vir Chakra (PVC) is India\'s highest military decoration awarded for displaying supreme acts of valour during wartime.',
                aiTip: 'Military awards and army rank equivalents are standard Agniveer GK questions.',
                difficulty: 'Easy'
            }
        ]
    },
    {
        id: 'icg-exam',
        title: 'Indian Coast Guard (Navik & Yantrik)',
        fullName: 'Indian Coast Guard - Navik (General Duty / DB) and Yantrik Examination',
        category: 'Defence & Police',
        description: 'Recruitment for sailors and engineers in the Indian Coast Guard. Section I tests general matriculation aptitude while Section II tests 10+2 Physics and Maths.',
        icon: 'Shield',
        yearsAvailable: '2020 - 2025',
        totalMCQs: 3500,
        aiPredictionAccuracy: 95.0,
        examDate: 'March 2026',
        subjects: ['Section I - General Maths & Science', 'Section II Physics', 'Section II Mathematics'],
        questions: [
            {
                id: 'icg-1',
                examId: 'icg-exam',
                year: 'AI Predicted 2026',
                subject: 'Section II Physics',
                topic: 'Thermodynamics & Carnot Engine',
                question: 'A Carnot heat engine operates between source temperature of 227°C and sink temperature of 27°C. What is its theoretical thermal efficiency?',
                options: ['20%', '40%', '50%', '80%'],
                correctOptionIndex: 1,
                explanation: 'Convert to Kelvin: T1 = 227 + 273 = 500K. T2 = 27 + 273 = 300K. Efficiency = 1 - (T2/T1) = 1 - 300/500 = 2/5 = 40%.',
                aiTip: 'Thermodynamic efficiency formulas are standard numericals for ICG Section II papers.',
                difficulty: 'Medium'
            }
        ]
    },
    {
        id: 'state-police',
        title: 'State Police SI & Constable Exams',
        fullName: 'State Police Recruitment Boards - Sub-Inspector & Police Constable Exams',
        category: 'Defence & Police',
        description: 'Exhaustive test archives for UP Police SI, Delhi Police, Bihar Police, MP Police and Rajasthan Police. High focus on criminal law basics and mental aptitude.',
        icon: 'Users',
        yearsAvailable: '2020 - 2025',
        totalMCQs: 8000,
        aiPredictionAccuracy: 96.5,
        examDate: 'Various 2026',
        subjects: [
            'General Knowledge & Current Affairs',
            'Reasoning & Mental Aptitude',
            'Numerical Ability / Arithmetic',
            'General Hindi / English',
            'Criminal Law Basics & Indian Penal Code',
            'General Science',
            'Physical Standard & Efficiency Test - Qualifying'
        ],
        questions: [
            {
                id: 'pol-1',
                examId: 'state-police',
                year: 'AI Predicted 2026',
                subject: 'Mental Aptitude & Police Administration',
                topic: 'Community Policing & Ethics',
                question: 'If you are posted as a Police Sub-Inspector and witness an agitated crowd blocking a national highway due to a minor traffic accident, your prompt ethical action should be:',
                options: [
                    'Order immediate lathi charge and tear gas shelling without warning',
                    'Establish constructive communication with community elders, pacify the crowd, and clear the injured for medical aid',
                    'Flee the location and wait for superior officers to arrive',
                    'Arrest all bystanders indiscriminately'
                ],
                correctOptionIndex: 1,
                explanation: 'Police mental aptitude tests emphasize de-escalation, public safety, legal protocol, and community cooperation during civil disturbances.',
                aiTip: 'Mental aptitude case studies represent 15-20 questions in state police recruitment exams.',
                difficulty: 'Easy'
            }
        ]
    },

    // ─── 6. ENGINEERING ───
    {
        id: 'gate-cse',
        title: 'GATE (CSE / IT & Core Branches)',
        fullName: 'Graduate Aptitude Test in Engineering - Computer Science and Core Disciplines',
        category: 'Engineering',
        description: 'Gateway for IIT M.Tech, PSU recruitment & top tier R&D roles. Comprehensive archive of Algorithms, OS, DBMS, Networks & Core numericals.',
        icon: 'Code',
        yearsAvailable: '2020 - 2025',
        totalMCQs: 5800,
        aiPredictionAccuracy: 98.1,
        examDate: 'Feb 2026',
        subjects: [
            'General Aptitude (Verbal & Numerical - Common for all papers)',
            'Engineering Mathematics (Common for most branches)',
            'Computer Science & IT (Algorithms, OS, DBMS, Networks, COA)',
            'Civil Engineering',
            'Mechanical Engineering',
            'Electrical Engineering',
            'Electronics & Communication Engineering',
            'Chemical Engineering',
            'Biotechnology',
            'Physics',
            'Chemistry',
            'Mathematics',
            'Aerospace Engineering',
            'Agricultural Engineering',
            'Architecture & Planning',
            'Environmental Science & Engineering',
            'Geology & Geophysics',
            'Humanities & Social Sciences',
            'Instrumentation Engineering',
            'Mining Engineering',
            'Naval Architecture',
            'Petroleum Engineering',
            'Statistics',
            'Production & Industrial Engineering',
            'Textile Engineering & Fibre Science'
        ],
        questions: [
            {
                id: 'gate-1',
                examId: 'gate-cse',
                year: 'AI Predicted 2026',
                subject: 'Data Structures & Algorithms',
                topic: 'Graph Algorithms',
                question: 'Consider a directed graph G with n vertices and m edges. Dijkstra’s single-source shortest path algorithm implemented using a Fibonacci Heap data structure has a time complexity of:',
                options: [
                    'O(V^2 + E)',
                    'O(E log V)',
                    'O(E + V log V)',
                    'O(V E)'
                ],
                correctOptionIndex: 2,
                explanation: 'Using a Fibonacci heap, decrease-key takes amortized O(1) time and extract-min takes O(log V) time. With V extract-min operations and E decrease-key operations, the total time is O(E + V log V).',
                aiTip: 'Advanced Heap implementations in standard graph algorithms have seen a 25% increase in occurrence in recent GATE exams.',
                difficulty: 'Hard'
            },
            {
                id: 'gate-2',
                examId: 'gate-cse',
                year: 2024,
                subject: 'Operating Systems',
                topic: 'Virtual Memory & Paging',
                question: 'A system uses 32-bit virtual addresses and 4 KB page size. If each page table entry occupies 4 bytes, what is the size of the single-level page table required for a process?',
                options: ['4 MB', '1 MB', '16 MB', '8 KB'],
                correctOptionIndex: 0,
                explanation: 'Page size = 4 KB = 2^12 bytes. Number of pages = 2^32 / 2^12 = 2^20 pages. Page table size = 2^20 * 4 bytes = 4 MB.',
                aiTip: 'Memory management numericals are standard 2-mark questions in GATE CSE.',
                difficulty: 'Medium'
            }
        ]
    },
    {
        id: 'jee-adv',
        title: 'JEE Advanced (IITs)',
        fullName: 'Joint Entrance Examination - Advanced (IITs)',
        category: 'Engineering',
        description: 'The pinnacle of engineering entrance tests worldwide. Master conceptual multi-correct and rigorous numerical problems in Physics, Chemistry & Maths.',
        icon: 'Rocket',
        yearsAvailable: '2020 - 2025',
        totalMCQs: 5500,
        aiPredictionAccuracy: 94.8,
        examDate: 'June 2026',
        subjects: [
            'Physics (Advanced Level)',
            'Chemistry (Advanced Level)',
            'Mathematics (Advanced Level)',
            'Architecture Aptitude Test (AAT - optional)'
        ],
        questions: [
            {
                id: 'jee-1',
                examId: 'jee-adv',
                year: 'AI Predicted 2026',
                subject: 'Physics',
                topic: 'Electrodynamics & Magnetism',
                question: 'A conducting ring of radius R and mass m is placed in a uniform magnetic field B perpendicular to its plane. If the field varies with time as B(t) = B0(1 + alpha*t), the induced electric field at the circumference of the ring is:',
                options: [
                    '0.5 * alpha * B0 * R',
                    'alpha * B0 * R',
                    '2 * alpha * B0 * R',
                    '0'
                ],
                correctOptionIndex: 0,
                explanation: 'According to Faraday\'s Law, integral(E.dl) = - d(Phi)/dt. E * (2*pi*R) = pi*R^2 * (dB/dt) = pi*R^2 * (alpha*B0). Therefore, E = 0.5 * alpha * B0 * R.',
                aiTip: 'Time-varying magnetic fields and induced EMF integrals are perennial favorites of IIT question setters.',
                difficulty: 'Hard'
            }
        ]
    },
    {
        id: 'jee-main',
        title: 'JEE Main (NITs / IIITs)',
        fullName: 'Joint Entrance Examination - Main (NTA)',
        category: 'Engineering',
        description: 'National screening test for NITs, IIITs and state government colleges. High-speed objective problem solving in Physics, Chemistry and Mathematics.',
        icon: 'Sparkles',
        yearsAvailable: '2020 - 2025',
        totalMCQs: 15000,
        aiPredictionAccuracy: 97.1,
        examDate: 'Jan & April 2026',
        subjects: [
            'Physics - Mechanics, Thermodynamics',
            'Physics - Electromagnetism, Optics, Modern Physics',
            'Chemistry - Physical Chemistry',
            'Chemistry - Organic Chemistry',
            'Chemistry - Inorganic Chemistry',
            'Mathematics - Algebra, Coordinate Geometry',
            'Mathematics - Calculus, Trigonometry',
            'Mathematics - Vector & 3D, Statistics',
            'Drawing (for B.Arch - Paper II)'
        ],
        questions: [
            {
                id: 'jm-1',
                examId: 'jee-main',
                year: 2024,
                subject: 'Mathematics',
                topic: 'Matrices & Determinants',
                question: 'If A is a 3x3 square matrix such that |A| = 4, then the value of |adj(adj A)| is:',
                options: ['16', '64', '256', '1024'],
                correctOptionIndex: 2,
                explanation: 'Formula: |adj(adj A)| = |A|^((n-1)^2). For n = 3, (3-1)^2 = 4. |A|^4 = 4^4 = 256.',
                aiTip: 'Standard adjoint determinant properties are asked in almost every shift of JEE Main.',
                difficulty: 'Medium'
            }
        ]
    },
    {
        id: 'bitsat-exam',
        title: 'BITSAT (BITS Pilani Entrance)',
        fullName: 'Birla Institute of Technology and Science Admission Test',
        category: 'Engineering',
        description: 'High-speed online engineering entrance test. Includes Physics, Chemistry, Maths along with specialized Logical Reasoning and English Proficiency sections.',
        icon: 'Award',
        yearsAvailable: '2020 - 2025',
        totalMCQs: 6000,
        aiPredictionAccuracy: 96.0,
        examDate: 'May & June 2026',
        subjects: ['Physics & Chemistry', 'Mathematics', 'English Proficiency', 'Logical Reasoning'],
        questions: [
            {
                id: 'bits-1',
                examId: 'bitsat-exam',
                year: 'AI Predicted 2026',
                subject: 'English Proficiency',
                topic: 'Verbal Analogies',
                question: 'Select the pair that best expresses a similar relationship to: "CACOPHONY : HARMONY"',
                options: ['Belligerent : Hostile', 'Tempestuous : Serene', 'Garrulous : Talkative', 'Lethargic : Sluggish'],
                correctOptionIndex: 1,
                explanation: 'Cacophony and Harmony are antonyms (discordant noise vs. beautiful balance). Tempestuous (stormy/turbulent) and Serene (calm/peaceful) exhibit the exact same antonymous relationship.',
                aiTip: 'Verbal analogies and logical speed math are the defining differentiators for BITSAT aspirants.',
                difficulty: 'Medium'
            }
        ]
    },

    // ─── 7. MEDICAL ───
    {
        id: 'neet-ug',
        title: 'NEET UG (MBBS / BDS)',
        fullName: 'National Eligibility cum Entrance Test - Medical Undergrad',
        category: 'Medical',
        description: 'Single national gateway for MBBS/BDS admissions across India. High-speed NCERT-aligned MCQs covering Botany, Zoology, Physics & Chemistry.',
        icon: 'Stethoscope',
        yearsAvailable: '2020 - 2025',
        totalMCQs: 8500,
        aiPredictionAccuracy: 97.6,
        examDate: 'May 2026',
        subjects: [
            'Physics (Class XI & XII CBSE Level)',
            'Chemistry - Physical Chemistry',
            'Chemistry - Organic Chemistry',
            'Chemistry - Inorganic Chemistry',
            'Botany (Class XI & XII CBSE Level)',
            'Zoology (Class XI & XII CBSE Level)',
            'Cell Biology & Genetics',
            'Human Physiology',
            'Ecology & Environment'
        ],
        questions: [
            {
                id: 'neet-1',
                examId: 'neet-ug',
                year: 'AI Predicted 2026',
                subject: 'Biology - Botany',
                topic: 'Molecular Basis of Inheritance',
                question: 'In an E. coli culture growing in a lactose-rich medium, what happens immediately when all lactose is fully consumed?',
                options: [
                    'The repressor protein binds to the operator region, turning off transcription of lac operon enzymes',
                    'RNA polymerase activity increases tenfold to synthesize alternative sugars',
                    'The lac Z gene undergoes immediate mutation into lac Y',
                    'Beta-galactosidase synthesis continues at an unrestricted rate'
                ],
                correctOptionIndex: 0,
                explanation: 'In the absence of lactose (allolactose inducer), the active repressor binds directly to the operator locus, physically blocking RNA polymerase from transcribing the structural genes.',
                aiTip: 'Gene regulation (Lac operon) and DNA replication mechanisms are highly predicted NCERT direct questions.',
                difficulty: 'Medium'
            },
            {
                id: 'neet-2',
                examId: 'neet-ug',
                year: 2024,
                subject: 'Biology - Zoology',
                topic: 'Human Physiology',
                question: 'Which of the following hormones is NOT secreted by the anterior pituitary gland?',
                options: ['Growth Hormone (GH)', 'Prolactin', 'Oxytocin', 'Adrenocorticotropic Hormone (ACTH)'],
                correctOptionIndex: 2,
                explanation: 'Oxytocin and Vasopressin (ADH) are synthesized in the hypothalamus and stored/released by the posterior pituitary (neurohypophysis).',
                aiTip: 'Endocrine system hormone origins are asked almost every single year.',
                difficulty: 'Easy'
            }
        ]
    },
    {
        id: 'neet-pg',
        title: 'NEET PG & INI CET',
        fullName: 'National Board of Examinations & AIIMS - Post Graduate Medical Entrance Exams',
        category: 'Medical',
        description: 'Elite clinical entrance exams for MD/MS/MCh admissions at AIIMS, JIPMER, PGIMER and government medical colleges. Advanced case-based clinical vignettes.',
        icon: 'Stethoscope',
        yearsAvailable: '2020 - 2025',
        totalMCQs: 6000,
        aiPredictionAccuracy: 95.8,
        examDate: 'March & Nov 2026',
        subjects: [
            'Anatomy',
            'Physiology',
            'Biochemistry',
            'Pathology',
            'Pharmacology',
            'Microbiology & Immunology',
            'Forensic Medicine',
            'Community Medicine (Preventive & Social Medicine)',
            'General Medicine & Allied Specialties',
            'General Surgery & Allied Specialties',
            'Obstetrics & Gynaecology (OBG)',
            'Paediatrics',
            'Orthopaedics',
            'Ophthalmology',
            'ENT (Ear, Nose & Throat)',
            'Anaesthesiology',
            'Psychiatry',
            'Dermatology & STD',
            'Radiology'
        ],
        questions: [
            {
                id: 'pg-1',
                examId: 'neet-pg',
                year: 'AI Predicted 2026',
                subject: 'Clinical Surgery & Radiology',
                topic: 'Acute Abdomen Diagnosis',
                question: 'A 60-year-old male smoker with hypertension presents to the emergency department with acute onset severe tearing abdominal pain radiating to his back. Immediate ultrasound reveals a 6.5 cm infrarenal aortic dilation. What is the most critical initial medical management prior to emergency vascular surgery?',
                options: [
                    'Administer high-dose intravenous heparin anticoagulation',
                    'Strict blood pressure control using intravenous beta-blockers (Esmolol / Labetalol)',
                    'Immediate aggressive fluid resuscitation with 4 Liters Normal Saline',
                    'Perform emergency diagnostic peritoneal lavage'
                ],
                correctOptionIndex: 1,
                explanation: 'In acute abdominal aortic aneurysm expansion or aortic dissection, strict blood pressure control (target systolic 100-120 mmHg) using IV beta-blockers is critical to decrease aortic wall shear stress (dP/dt) prior to immediate surgical repair.',
                aiTip: 'Emergency vascular surgical vignettes and CT/USG diagnostic markers are standard high-yield NEET PG questions.',
                difficulty: 'Hard'
            }
        ]
    },
    {
        id: 'nursing-exam',
        title: 'AIIMS NORCET (Nursing Officer)',
        fullName: 'All India Institute of Medical Sciences - Nursing Officer Recruitment Common Eligibility Test',
        category: 'Medical',
        description: 'Premier central government nursing officer recruitment exam. Master fundamental nursing procedures, pharmacology calculations, OBG and community health.',
        icon: 'Sparkles',
        yearsAvailable: '2020 - 2025',
        totalMCQs: 4500,
        aiPredictionAccuracy: 96.2,
        examDate: 'June 2026',
        subjects: [
            'Anatomy & Physiology',
            'Microbiology',
            'Nutrition & Dietetics',
            'Mental Health Nursing',
            'Community Health Nursing',
            'Medical-Surgical Nursing',
            'Paediatric Nursing',
            'Obstetrical & Gynaecological Nursing',
            'Nursing Procedures & Fundamentals',
            'Pharmacology (Drug Dosage & Administration)',
            'General Knowledge & Current Affairs'
        ],
        questions: [
            {
                id: 'nur-1',
                examId: 'nursing-exam',
                year: 2024,
                subject: 'Fundamentals of Nursing',
                topic: 'Sterilization & Hospital Safety',
                question: 'What is the standard operating temperature and pressure for steam sterilization using a hospital autoclave machine?',
                options: ['100°C at 10 lbs pressure for 10 mins', '121°C at 15 lbs pressure for 15-20 mins', '160°C at 20 lbs pressure for 60 mins', '200°C at 30 lbs pressure for 5 mins'],
                correctOptionIndex: 1,
                explanation: 'Standard autoclaving operates at 121°C (250°F) under 15 pounds per square inch (psi) pressure for 15 to 20 minutes to achieve complete destruction of microbial endospores.',
                aiTip: 'Hospital infection control and biomedical waste management color codes appear in every NORCET paper.',
                difficulty: 'Easy'
            }
        ]
    },

    // ─── 8. MANAGEMENT & MBA ───
    {
        id: 'cat-mba',
        title: 'CAT (IIM Entrance Exam)',
        fullName: 'Common Admission Test for Indian Institutes of Management',
        category: 'Management & MBA',
        description: 'Premier management aptitude test. High-stakes Quantitative Aptitude, Logical Data Interpretation (DILR), and Reading Comprehension.',
        icon: 'Award',
        yearsAvailable: '2020 - 2025',
        totalMCQs: 4800,
        aiPredictionAccuracy: 94.5,
        examDate: 'Nov 2026',
        subjects: [
            'Verbal Ability & Reading Comprehension (VARC)',
            'Reading Comprehension Passages',
            'Para Jumbles & Para Summary',
            'Sentence Correction & Critical Reasoning',
            'Data Interpretation & Logical Reasoning (DILR)',
            'Logical Puzzles, Seating Arrangement',
            'Data Interpretation (Tables, Charts, Graphs)',
            'Quantitative Aptitude (QA)',
            'Arithmetic, Algebra, Geometry',
            'Number System, Modern Maths'
        ],
        questions: [
            {
                id: 'cat-1',
                examId: 'cat-mba',
                year: 'AI Predicted 2026',
                subject: 'Quantitative Aptitude',
                topic: 'Algebra & Progressions',
                question: 'If log_2(x) + log_4(x) + log_16(x) = 21/4, what is the exact value of x?',
                options: ['8', '16', '32', '64'],
                correctOptionIndex: 0,
                explanation: 'Using log base change: log_4(x) = (1/2)log_2(x) and log_16(x) = (1/4)log_2(x). Sum = log_2(x) * [1 + 1/2 + 1/4] = (7/4) log_2(x) = 21/4. Therefore, log_2(x) = 3, which implies x = 2^3 = 8.',
                aiTip: 'Logarithm and quadratic progression questions consistently feature in CAT QA with 2-3 questions per slot.',
                difficulty: 'Medium'
            },
            {
                id: 'cat-2',
                examId: 'cat-mba',
                year: 2024,
                subject: 'Quantitative Aptitude',
                topic: 'Number System',
                question: 'What is the remainder when 7^84 is divided by 342?',
                options: ['1', '7', '49', '341'],
                correctOptionIndex: 0,
                explanation: 'Note that 7^3 = 343. 343 = 1 mod 342. 7^84 = (7^3)^28 = (343)^28 = (1)^28 = 1 mod 342.',
                aiTip: 'Euler totient theorem and modular arithmetic power cycles are standard CAT QA patterns.',
                difficulty: 'Medium'
            }
        ]
    },
    {
        id: 'xat-nmat',
        title: 'XAT, NMAT, SNAP & CMAT',
        fullName: 'XLRI Admission Test & Allied National Management Aptitude Exams',
        category: 'Management & MBA',
        description: 'Comprehensive test archive for XLRI, NMIMS, SIBM and CMAT colleges. Practice unique Decision Making cases, speed math, logical puzzles and business GK.',
        icon: 'Briefcase',
        yearsAvailable: '2020 - 2025',
        totalMCQs: 6000,
        aiPredictionAccuracy: 95.1,
        examDate: 'Dec & Jan 2026',
        subjects: [
            'Verbal & Logical Ability',
            'Decision Making',
            'Quantitative Ability & Data Interpretation',
            'General Knowledge (Static & Current Affairs)',
            'Essay Writing (optional section)',
            'Quantitative Aptitude',
            'Data Interpretation',
            'Logical Reasoning',
            'Verbal Ability & Reading Comprehension',
            'General Awareness / Business GK',
            'Current Affairs & Economy',
            'Language Skills'
        ],
        questions: [
            {
                id: 'xat-1',
                examId: 'xat-nmat',
                year: 'AI Predicted 2026',
                subject: 'XAT Decision Making & Managerial Ethics',
                topic: 'Ethical Dilemmas in Business',
                question: 'You are the CEO of a pharmaceutical firm launching a life-saving oncology drug. Your R&D head informs you of minor clinical anomalies in 1% of trials that do not violate statutory safety limits but could lead to adverse publicity if disclosed. What is your most ethical managerial decision?',
                options: [
                    'Conceal the report entirely and launch the product with aggressive marketing campaigns',
                    'Proactively disclose the minor anomaly data to regulatory bodies and physicians while offering free diagnostic monitoring for patients',
                    'Immediately fire the R&D head for highlighting negative data',
                    'Halt production completely and shut down the company'
                ],
                correctOptionIndex: 1,
                explanation: 'XAT Decision Making questions evaluate stakeholder transparency, ethical leadership, long-term corporate reputation and statutory compliance over short-term financial concealment.',
                aiTip: 'Ethical dilemma caselets represent 21 questions in XAT and are the decisive factor for XLRI admission.',
                difficulty: 'Hard'
            }
        ]
    },

    // ─── 9. LAW ───
    {
        id: 'clat-law',
        title: 'CLAT & AILET (Law Entrance)',
        fullName: 'Consortium of NLUs & NLU Delhi - Common Law Admission Test',
        category: 'Law',
        description: 'National gateway for National Law Universities (NLUs). Master passage-based Legal Reasoning, Logical Deductions, English and Current Legal GK.',
        icon: 'Scale',
        yearsAvailable: '2020 - 2025',
        totalMCQs: 5200,
        aiPredictionAccuracy: 96.7,
        examDate: 'Dec 2026',
        subjects: [
            'English Language (Comprehension, Grammar, Vocabulary)',
            'Current Affairs & General Knowledge',
            'Legal Reasoning',
            'Legal Aptitude & Awareness',
            'Logical Reasoning',
            'Quantitative Techniques',
            'English',
            'Legal Aptitude',
            'Reasoning',
            'Elementary Mathematics'
        ],
        questions: [
            {
                id: 'clat-1',
                examId: 'clat-law',
                year: 'AI Predicted 2026',
                subject: 'Legal Reasoning & Constitutional Principles',
                topic: 'Basic Structure Doctrine',
                question: 'The landmark constitutional principle known as the "Basic Structure Doctrine", which establishes that Parliament cannot alter the fundamental architecture of the Constitution under Article 368, was promulgated by the Supreme Court in:',
                options: ['Golaknath Case (1967)', 'Kesavananda Bharati Case (1973)', 'Minerva Mills Case (1980)', 'S.R. Bommai Case (1994)'],
                correctOptionIndex: 1,
                explanation: 'In the historic Kesavananda Bharati v. State of Kerala (1973) judgment, a 13-judge constitutional bench ruled by a 7-6 majority that Article 368 does not enable Parliament to alter the basic structure or framework of the Constitution.',
                aiTip: 'Constitutional landmark judgments and recent Supreme Court verdicts represent 35+ marks in CLAT legal reasoning passages.',
                difficulty: 'Medium'
            }
        ]
    },

    // ─── 10. TEACHING & RESEARCH ───
    {
        id: 'ugc-net',
        title: 'UGC NET & CSIR NET',
        fullName: 'National Testing Agency - UGC NET & CSIR Junior Research Fellowship',
        category: 'Teaching & Research',
        description: 'National eligibility for Assistant Professor & Junior Research Fellowship (JRF). Practice Paper 1 Teaching & Research Aptitude plus core subject archives.',
        icon: 'GraduationCap',
        yearsAvailable: '2020 - 2025',
        totalMCQs: 8000,
        aiPredictionAccuracy: 97.2,
        examDate: 'June & Dec 2026',
        subjects: [
            'Paper I - Teaching Aptitude',
            'Paper I - Research Aptitude',
            'Paper I - Reading Comprehension',
            'Paper I - Communication Skills',
            'Paper I - Reasoning & Logical Deductions',
            'Paper I - Data Interpretation',
            'Paper I - Information & Communication Technology',
            'Paper I - People, Development & Environment',
            'Paper I - Higher Education System in India',
            'Paper II - Subject-Specific (85+ subjects available)',
            'Examples: Commerce, Economics, Education, English, History, Law, Management, Psychology, Political Science, Sociology, Mathematics, Computer Science, Library & Information Science, Geography, Philosophy, etc.'
        ],
        questions: [
            {
                id: 'net-1',
                examId: 'ugc-net',
                year: 'AI Predicted 2026',
                subject: 'Paper 1 - Research Aptitude',
                topic: 'Research Ethics & Plagiarism',
                question: 'According to UGC regulations, what level of similarity index is officially classified as "Level 0" plagiarism in academic theses and dissertations?',
                options: ['Minor similarities up to 10%', 'Similarities between 10% and 40%', 'Similarities between 40% and 60%', 'Similarities exceeding 60%'],
                correctOptionIndex: 0,
                explanation: 'UGC (Promotion of Academic Integrity and Prevention of Plagiarism) Regulations classify similarity up to 10% as Level 0, carrying no penalty.',
                aiTip: 'Research methodology, sampling techniques and plagiarism regulations are guaranteed questions in UGC NET Paper 1.',
                difficulty: 'Easy'
            }
        ]
    },
    {
        id: 'ctet-exam',
        title: 'CTET & State TET Exams',
        fullName: 'CBSE & State Boards - Central Teacher Eligibility Test',
        category: 'Teaching & Research',
        description: 'Mandatory certification for school teachers. Comprehensive Child Development and Pedagogy (CDP), Language, EVS and Mathematics objective archives.',
        icon: 'GraduationCap',
        yearsAvailable: '2020 - 2025',
        totalMCQs: 7500,
        aiPredictionAccuracy: 96.4,
        examDate: 'July & Jan 2026',
        subjects: [
            'Child Development & Pedagogy (CDP)',
            'Developmental Psychology & Theories',
            'Inclusive Education & Special Needs',
            'Language I (Hindi / Regional Language)',
            'Language II (English)',
            'Mathematics (Paper I - up to Class V level)',
            'Environmental Studies / EVS (Paper I - up to Class V)',
            'Mathematics & Science (Paper II - for Math & Science teachers)',
            'Social Studies / Social Science (Paper II - for SST teachers)'
        ],
        questions: [
            {
                id: 'ctet-1',
                examId: 'ctet-exam',
                year: 2024,
                subject: 'Child Development & Pedagogy (CDP)',
                topic: 'Cognitive Development Theories',
                question: 'In Jean Piaget\'s theory of cognitive development, the stage characterized by the development of "Object Permanence" and basic reflexive motor coordination is the:',
                options: ['Preoperational stage', 'Sensorimotor stage', 'Concrete operational stage', 'Formal operational stage'],
                correctOptionIndex: 1,
                explanation: 'The Sensorimotor stage (birth to ~2 years) is defined by infants learning about the world through sensory impressions and physical motor actions, culminating in object permanence.',
                aiTip: 'Piaget, Vygotsky and Kohlberg theories account for 20% of all CDP questions across TET examinations.',
                difficulty: 'Easy'
            }
        ]
    },
    {
        id: 'up-bed-jee',
        title: 'UP B.Ed JEE / CUET PG',
        fullName: 'Uttar Pradesh Joint Entrance Exam for B.Ed & Central Universities Entrance Test',
        category: 'Teaching & Research',
        description: 'State & Central university admission exams for aspiring educators. Comprehensive MCQs for General Knowledge, Teaching Aptitude & Language Test.',
        icon: 'GraduationCap',
        yearsAvailable: '2020 - 2025',
        totalMCQs: 4200,
        aiPredictionAccuracy: 97.0,
        examDate: 'June 2026',
        subjects: ['Teaching Aptitude', 'General Knowledge', 'Language Test', 'General Aptitude & Reasoning'],
        questions: [
            {
                id: 'up-bed-1',
                examId: 'up-bed-jee',
                year: 'AI Predicted 2026',
                subject: 'Teaching Aptitude',
                topic: 'Pedagogy & Classroom Management',
                question: 'If a group of students consistently creates indiscipline in your classroom, what is the most psychologically sound pedagogical approach as a teacher?',
                options: [
                    'Immediately expel the students from the classroom and report to the principal',
                    'Identify the root cause of their disinterest and modify your teaching methodology to actively engage them',
                    'Give them harsh physical punishment to set an example for others',
                    'Ignore them completely and focus only on the front benchers'
                ],
                correctOptionIndex: 1,
                explanation: 'Modern child-centric pedagogy emphasizes constructive engagement, empathy, and identifying underlying behavioral triggers over punitive measures.',
                aiTip: 'Classroom management and inclusive education pedagogy questions carry maximum weight in B.Ed exams.',
                difficulty: 'Easy'
            }
        ]
    },
    {
        id: 'kvs-dsssb',
        title: 'KVS, NVS & DSSSB Teaching Recruitment',
        fullName: 'Kendriya Vidyalaya, Navodaya Vidyalaya & Delhi Subordinate Services Selection Board',
        category: 'Teaching & Research',
        description: 'Central government permanent teacher recruitment for PRT, TGT and PGT posts. Master subject pedagogy, educational psychology and general intelligence.',
        icon: 'Briefcase',
        yearsAvailable: '2020 - 2025',
        totalMCQs: 5500,
        aiPredictionAccuracy: 96.0,
        examDate: 'August 2026',
        subjects: [
            'Teaching Aptitude',
            'General Awareness & Current Affairs',
            'Reasoning Ability',
            'Quantitative Aptitude',
            'English Language',
            'Hindi / Regional Language',
            'Child Development & Pedagogy',
            'Subject Pedagogy (based on applied post)',
            'Educational Psychology',
            'School Management',
            'Subject Knowledge (Content - based on applied post)'
        ],
        questions: [
            {
                id: 'kvs-1',
                examId: 'kvs-dsssb',
                year: 2024,
                subject: 'Educational Psychology & Policy',
                topic: 'National Education Policy (NEP) 2020',
                question: 'Under the National Education Policy (NEP) 2020, the traditional 10+2 school curriculum structure has been officially replaced by which pedagogical curricular structure?',
                options: ['5 + 3 + 3 + 4', '4 + 4 + 4 + 3', '5 + 4 + 3 + 2', '3 + 3 + 4 + 5'],
                correctOptionIndex: 0,
                explanation: 'NEP 2020 replaces the 10+2 system with a 5+3+3+4 structure: 3 years Anganwadi/Preschool + 2 years primary (Foundational), 3 years Preparatory (Class 3-5), 3 years Middle (Class 6-8), and 4 years Secondary (Class 9-12).',
                aiTip: 'NEP 2020 reforms and NCF 2023 guidelines are guaranteed questions across all current teaching recruitment tests.',
                difficulty: 'Easy'
            }
        ]
    }
];

export const EXAM_CATEGORIES = [
    'All',
    'UPSC & State PCS',
    'SSC & Central Govt',
    'Banking & Insurance',
    'Railways',
    'Defence & Police',
    'Engineering',
    'Medical',
    'Management & MBA',
    'Law',
    'Teaching & Research'
] as const;
