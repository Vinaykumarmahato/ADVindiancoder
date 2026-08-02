const fs = require('fs');

const data = {
  'upsc-cse': [
    'Current Affairs (National & International)', 'Indian History & National Movement', 'Indian & World Geography (Physical, Social, Economic)', 'Indian Polity & Governance (Constitution, Panchayati Raj)', 'Economic & Social Development', 'General Science & Environment', 'CSAT - Comprehension', 'CSAT - Interpersonal & Communication Skills', 'CSAT - Logical Reasoning & Analytical Ability', 'CSAT - Decision Making & Problem Solving', 'CSAT - General Mental Ability', 'CSAT - Basic Numeracy (Class X Level)', 'CSAT - Data Interpretation', 'Essay Writing (Mains)', 'GS Paper I - Heritage, Culture, History, Geography', 'GS Paper II - Governance, Constitution, Polity, Social Justice, IR', 'GS Paper III - Technology, Economy, Environment, Security', 'GS Paper IV - Ethics, Integrity & Aptitude', 'Indian Language Paper (Qualifying)', 'English Paper (Qualifying)', 'Optional Subject (1 of 48 subjects)'
  ],
  'upsc-ifos': [
    'General Knowledge', 'English', 'Botany', 'Zoology', 'Chemistry', 'Physics', 'Mathematics', 'Statistics', 'Geology', 'Agriculture', 'Animal Husbandry & Veterinary Science', 'Forestry'
  ],
  'upsc-ese': [
    'General Studies & Engineering Aptitude (Common)', 'Civil Engineering - Paper I', 'Civil Engineering - Paper II', 'Structural Analysis', 'Concrete Structures', 'Steel Structures', 'Soil Mechanics & Foundation Engineering', 'Fluid Mechanics & Hydraulics', 'Hydrology', 'Water Resources Engineering', 'Environmental Engineering', 'Transportation Engineering', 'Geotechnical Engineering', 'Mechanical Engineering - Paper I', 'Mechanical Engineering - Paper II', 'Theory of Machines', 'Machine Design', 'Strength of Materials', 'Engineering Materials', 'Thermodynamics', 'Heat Transfer', 'Power Plant Engineering', 'Production Engineering', 'Industrial Engineering', 'Electrical Engineering - Paper I', 'Electrical Engineering - Paper II', 'Circuit Theory', 'Electromagnetic Fields', 'Signals & Systems', 'Electrical Machines', 'Power Systems', 'Control Systems', 'Electrical & Electronic Measurements', 'Analog & Digital Electronics', 'Power Electronics & Drives', 'Electronics & Telecom - Paper I', 'Electronics & Telecom - Paper II', 'Basic Electronics Engineering', 'Analog Circuits', 'Digital Circuits & Microprocessors', 'Networks & Transmission Lines', 'Electronic Measurements & Instrumentation', 'Communications Systems', 'Electro Magnetics', 'Advanced Electronics Topics'
  ],
  'upsc-cms': [
    'General Medicine', 'Paediatrics', 'Surgery', 'Gynaecology & Obstetrics (OBG)', 'Preventive & Social Medicine (Community Medicine)', 'Pharmacology', 'Dermatology', 'Psychiatry', 'ENT', 'Ophthalmology', 'Orthopaedics', 'Anaesthesiology'
  ],
  'upsc-capf': [
    'General Ability & Intelligence', 'General Knowledge', 'General Science', 'Current Affairs', 'Indian History', 'Indian & World Geography', 'Indian Polity & Economy', 'Logical Reasoning', 'Quantitative Aptitude', 'Data Interpretation', 'Essay Writing', 'English Comprehension', 'Precis Writing', 'Arguments For & Against (Descriptive)'
  ],
  'nda-exam': [
    'Mathematics - Algebra', 'Mathematics - Matrices & Determinants', 'Mathematics - Trigonometry', 'Mathematics - 2D & 3D Geometry', 'Mathematics - Differential Calculus', 'Mathematics - Integral Calculus', 'Mathematics - Vector Algebra', 'Mathematics - Statistics & Probability', 'GAT - English (Grammar, Vocabulary, Comprehension)', 'GAT - Physics', 'GAT - Chemistry', 'GAT - General Science', 'GAT - History of India', 'GAT - Geography (India & World)', 'GAT - Current Events & General Awareness', 'GAT - Freedom Movement', 'GAT - Sports, Art & Culture', 'GAT - Military Aptitude (Spatial & Mental)'
  ],
  'upsc-cds': [
    'English (Grammar, Vocabulary, Comprehension)', 'General Knowledge (History, Geography, Polity, Economy)', 'Current Affairs', 'Physics & Chemistry', 'Elementary Mathematics (for IMA/INA/AFA)', 'Logical Reasoning', 'General Science'
  ],
  'upsc-geo': [
    'Geology - Paper I (Structural Geology & Geotectonics)', 'Geology - Paper II (Geochemistry & Environmental Geology)', 'Geology - Paper III (Economic Geology & Mining)', 'Geophysics - Paper I', 'Geophysics - Paper II', 'Geophysics - Paper III', 'Hydrogeology - Paper I', 'Hydrogeology - Paper II', 'Hydrogeology - Paper III', 'Mineralogy', 'Petrology', 'Paleontology'
  ],
  'state-pcs': [
    'General Studies (GS) - History & Culture', 'General Studies (GS) - Geography', 'General Studies (GS) - Polity & Governance', 'General Studies (GS) - Economy & Development', 'General Studies (GS) - Science & Technology', 'General Studies (GS) - Environment & Ecology', 'Current Affairs (State & National)', 'CSAT - Reasoning & Analytical Ability', 'CSAT - Basic Numeracy', 'CSAT - English Comprehension', 'Essay Writing', 'Hindi / Regional Language (Qualifying)', 'Optional Subject (State-specific)'
  ],
  'upsc-epfo': [
    'Industrial Relations & Labour Laws', 'Social Security in India', 'Labour Laws & Acts', 'General Accounting Principles', 'Insurance', 'Computer Applications', 'General English', 'General Knowledge & Current Affairs', 'Indian Economy', 'Reasoning Ability'
  ],
  'ssc-cgl': [
    'Quantitative Aptitude (Number System, Algebra, Geometry, Mensuration)', 'Percentage, Ratio & Proportion', 'Time & Work, Speed & Distance', 'Data Interpretation', 'Statistics (for JSO post)', 'General Intelligence & Reasoning', 'Analogy & Classification', 'Coding-Decoding, Series', 'Matrix, Venn Diagrams', 'English Language & Comprehension', 'Vocabulary (Synonyms, Antonyms, One-word Substitution)', 'Grammar (Spot the Error, Fill in the Blanks)', 'Reading Comprehension', 'General Awareness (History, Geography, Polity, Economy)', 'General Science', 'Current Affairs', 'Computer Fundamentals & Awareness'
  ],
  'ssc-chsl': [
    'Quantitative Aptitude', 'Basic Arithmetic', 'General Intelligence & Reasoning', 'English Language (Grammar & Comprehension)', 'General Awareness', 'Current Affairs', 'Essay Writing (Tier II)', 'Letter Writing (Tier II)', 'Typing / Computer Skill Test'
  ],
  'ssc-cpo': [
    'General Intelligence & Reasoning', 'General Knowledge & Awareness', 'Quantitative Aptitude', 'English Language & Comprehension (Paper II)', 'Current Affairs', 'Indian History, Polity, Geography', 'Physical Efficiency Test (PET) - Qualifying'
  ],
  'ssc-mts': [
    'General Intelligence & Reasoning', 'Numerical Aptitude', 'General English (Basic)', 'General Awareness'
  ],
  'ssc-gd': [
    'General Intelligence & Reasoning', 'General Knowledge & General Awareness', 'Elementary Mathematics', 'English / Hindi Language', 'Physical Efficiency Test (PET) - Qualifying', 'Physical Standard Test (PST) - Qualifying', 'Medical Test - Qualifying'
  ],
  'ssc-steno': [
    'General Intelligence & Reasoning', 'General Awareness', 'English Language & Comprehension', 'Stenography Skill Test (Qualifying)'
  ],
  'ssc-je': [
    'General Intelligence & Reasoning', 'General Awareness', 'Civil & Structural Engineering (for Civil JE)', 'Electrical Engineering (for Electrical JE)', 'Mechanical Engineering (for Mechanical JE)', 'Quantities Estimation & Costing', 'Engineering Drawing Basics'
  ],
  'ssc-jht': [
    'General Hindi', 'General English', 'Translation from English to Hindi', 'Translation from Hindi to English', 'Essay Writing in Hindi', 'Official Hindi Vocabulary', 'Terminology & Glossary'
  ],
  'ibps-po': [
    'Reasoning Ability (Puzzles, Seating Arrangement)', 'Syllogisms, Blood Relations', 'Coding-Decoding, Direction Sense', 'Alphanumeric Series, Inequalities', 'Quantitative Aptitude (Data Interpretation)', 'Simplification & Approximation', 'Quadratic Equations', 'Number Series, Average, Profit & Loss', 'English Language (Reading Comprehension)', 'Cloze Test, Para Jumbles', 'Error Spotting, Vocabulary', 'Banking Awareness & Financial Awareness', 'Current Affairs & Static GK', 'Computer Knowledge & Awareness', 'Essay & Letter Writing (Descriptive - Mains)', 'Reasoning Ability & Computer Aptitude', 'Data Analysis & Interpretation', 'General / Economy / Banking Awareness'
  ],
  'ibps-clerk': [
    'Reasoning Ability', 'Quantitative Aptitude / Numerical Ability', 'English Language', 'General / Financial Awareness', 'Computer Knowledge', 'General English', 'Reasoning Ability & Computer Aptitude'
  ],
  'ibps-so': [
    'Reasoning', 'English Language', 'Quantitative Aptitude', 'Professional Knowledge - IT Officer (DBMS, Networking, OS, Algorithms)', 'Professional Knowledge - Agriculture Field Officer (Agronomy, Soil Science)', 'Professional Knowledge - HR / Personnel Officer (HR Management, Labour Laws)', 'Professional Knowledge - Marketing Officer (Marketing Concepts, Branding)', 'Professional Knowledge - Law Officer (Indian Law, Acts & Statutes)', 'Banking & Financial Awareness'
  ],
  'rbi-grade-b': [
    'General Awareness (Phase I)', 'English (Phase I)', 'Quantitative Aptitude / Data Interpretation (Phase I)', 'Reasoning (Phase I)', 'Economic & Social Issues (ESI - Phase II Paper I)', 'English Writing Skills (Phase II Paper II)', 'Finance & Management (FM - Phase II Paper III)', 'DEPR - Economics (for Economic & Policy Research Dept.)', 'DSIM - Statistics (for Dept. of Statistics & Information Management)'
  ],
  'rbi-assistant': [
    'Reasoning Ability', 'Quantitative Aptitude / Numerical Ability', 'English Language', 'General Awareness', 'Computer Knowledge'
  ],
  'nabard-exam': [
    'Reasoning', 'Quantitative Aptitude', 'English Language', 'Computer Knowledge', 'Economic & Social Issues (ESI)', 'Agriculture & Rural Development (ARD)', 'General Awareness', 'Development Economics', 'Finance & Management'
  ],
  'lic-exams': [
    'Reasoning', 'Quantitative Aptitude', 'English Language', 'General Knowledge & Current Affairs', 'Professional Knowledge - IT (for IT stream)', 'Professional Knowledge - Chartered Accountant (for CA stream)', 'Insurance & Financial Market Awareness'
  ],
  'niacl-uiic': [
    'Reasoning Ability', 'Quantitative Aptitude', 'English Language', 'General Awareness (Insurance Industry Focus)', 'Computer Knowledge'
  ],
  'rrb-ntpc': [
    'General Awareness (Current Events, National & International)', 'History of India & Freedom Struggle', 'Geography (India & World)', 'Indian Polity, Governance & Constitution', 'General Science (Physics, Chemistry, Life Science - up to Class X)', 'Science & Technology (Space, Nuclear, IT)', 'Sports, Art & Culture', 'Mathematics - Number System, LCM & HCF', 'Mathematics - Percentage, Ratio & Proportion', 'Mathematics - Time & Work, Speed & Distance', 'Mathematics - Simple & Compound Interest', 'Mathematics - Mensuration, Algebra, Geometry', 'Mathematics - Statistics & Elementary Trigonometry', 'General Intelligence & Reasoning (Analogies, Coding-Decoding)', 'Series, Syllogism, Venn Diagrams', 'Data Sufficiency, Statement-Conclusion', 'Computer-Based Aptitude Test (CBAT - for Station Master)', 'Typing Skill Test (for Clerical Posts)'
  ],
  'rrb-group-d': [
    'Mathematics (Number System, BODMAS, Fractions)', 'Ratio & Proportion, Percentage', 'Time & Work, Time & Distance', 'Profit & Loss, Simple & Compound Interest', 'Mensuration, Geometry, Trigonometry', 'General Intelligence & Reasoning', 'General Science (Physics, Chemistry, Life Science - Class X level)', 'General Awareness & Current Affairs', 'Physical Efficiency Test (PET) - Qualifying'
  ],
  'rrb-alp': [
    'Mathematics (Arithmetic, Algebra, Geometry)', 'General Intelligence & Reasoning', 'Basic Science & Engineering', 'General Science (Physics, Chemistry)', 'Engineering Drawing', 'General Awareness & Current Affairs', 'Trade-Specific Technical Subject (CBT II Part B)', 'Fitter / Electrician / Electronics / Machinist / Welder (Trade-specific)', 'Computer-Based Aptitude Test (CBAT) - Qualifying'
  ],
  'rrb-je': [
    'Mathematics', 'General Intelligence & Reasoning', 'General Awareness', 'General Science (Physics, Chemistry, Environmental Science)', 'Computer Fundamentals & Applications', 'Civil Engineering (Structures, Transportation, Geotechnics, Hydraulics)', 'Mechanical Engineering (Thermodynamics, Machine Design, Manufacturing)', 'Electrical Engineering (Circuits, Machines, Power Systems, Control)', 'Electronics & Communication Engineering', 'Information Technology (Programming, DBMS, Networks, OS)', 'Engineering Drawing (CBT II)'
  ],
  'rrb-technician': [
    'Mathematics', 'General Intelligence & Reasoning', 'General Science', 'General Awareness & Current Affairs', 'Trade-Specific Technical Subject (ITI Trade Level)'
  ],
  'rpf-constable': [
    'General Awareness', 'Arithmetic', 'General Intelligence & Reasoning', 'Physical Efficiency Test (PET) - Qualifying', 'Physical Standard Test (PST) - Qualifying', 'Medical Test - Qualifying'
  ],
  'afcat-exam': [
    'General Awareness (History, Geography, Polity, Science)', 'Air Force & Military GK', 'Current Affairs', 'Verbal Ability in English (Grammar, Comprehension, Vocabulary)', 'Numerical Ability (Arithmetic, Percentage, Speed & Distance)', 'Reasoning & Military Aptitude Test', 'Spatial Reasoning (2D & 3D Figures)', 'Mechanical Comprehension (for Technical Branch)', 'Physics (for Technical Branch)'
  ],
  'agniveer-exam': [
    'General Knowledge & Current Affairs', 'General Science (Physics, Chemistry, Biology)', 'Mathematics', 'English', 'Reasoning & General Intelligence', 'Technical Subjects (for Technical & SKT posts)', 'Computer Fundamentals (for Clerk/SKT)', 'Physical Fitness Test - Qualifying', 'Physics', 'Chemistry', 'General Science & Awareness', 'Logical Reasoning', 'Physics (Group X)', 'Mathematics (Group X)', 'Reasoning & General Awareness (Group Y)', 'General Science'
  ],
  'ssc-delhi-police': [
    'General Awareness / Knowledge', 'Reasoning', 'Numerical Ability', 'Computer Fundamentals', 'English Language', 'Current Affairs', 'Mental Aptitude', 'Physical Endurance Test - Qualifying'
  ],
  'state-police': [
    'General Knowledge & Current Affairs', 'Reasoning & Mental Aptitude', 'Numerical Ability / Arithmetic', 'General Hindi / English', 'Criminal Law Basics & Indian Penal Code', 'General Science', 'Physical Standard & Efficiency Test - Qualifying'
  ],
  'jee-main': [
    'Physics - Mechanics, Thermodynamics', 'Physics - Electromagnetism, Optics, Modern Physics', 'Chemistry - Physical Chemistry', 'Chemistry - Organic Chemistry', 'Chemistry - Inorganic Chemistry', 'Mathematics - Algebra, Coordinate Geometry', 'Mathematics - Calculus, Trigonometry', 'Mathematics - Vector & 3D, Statistics', 'Drawing (for B.Arch - Paper II)'
  ],
  'jee-adv': [
    'Physics (Advanced Level)', 'Chemistry (Advanced Level)', 'Mathematics (Advanced Level)', 'Architecture Aptitude Test (AAT - optional)'
  ],
  'gate-cse': [
    'General Aptitude (Verbal & Numerical - Common for all papers)', 'Engineering Mathematics (Common for most branches)', 'Computer Science & IT (Algorithms, OS, DBMS, Networks, COA)', 'Civil Engineering', 'Mechanical Engineering', 'Electrical Engineering', 'Electronics & Communication Engineering', 'Chemical Engineering', 'Biotechnology', 'Physics', 'Chemistry', 'Mathematics', 'Aerospace Engineering', 'Agricultural Engineering', 'Architecture & Planning', 'Environmental Science & Engineering', 'Geology & Geophysics', 'Humanities & Social Sciences', 'Instrumentation Engineering', 'Mining Engineering', 'Naval Architecture', 'Petroleum Engineering', 'Statistics', 'Production & Industrial Engineering', 'Textile Engineering & Fibre Science'
  ],
  'neet-ug': [
    'Physics (Class XI & XII CBSE Level)', 'Chemistry - Physical Chemistry', 'Chemistry - Organic Chemistry', 'Chemistry - Inorganic Chemistry', 'Botany (Class XI & XII CBSE Level)', 'Zoology (Class XI & XII CBSE Level)', 'Cell Biology & Genetics', 'Human Physiology', 'Ecology & Environment'
  ],
  'neet-pg': [
    'Anatomy', 'Physiology', 'Biochemistry', 'Pathology', 'Pharmacology', 'Microbiology & Immunology', 'Forensic Medicine', 'Community Medicine (Preventive & Social Medicine)', 'General Medicine & Allied Specialties', 'General Surgery & Allied Specialties', 'Obstetrics & Gynaecology (OBG)', 'Paediatrics', 'Orthopaedics', 'Ophthalmology', 'ENT (Ear, Nose & Throat)', 'Anaesthesiology', 'Psychiatry', 'Dermatology & STD', 'Radiology'
  ],
  'nursing-exam': [
    'Anatomy & Physiology', 'Microbiology', 'Nutrition & Dietetics', 'Mental Health Nursing', 'Community Health Nursing', 'Medical-Surgical Nursing', 'Paediatric Nursing', 'Obstetrical & Gynaecological Nursing', 'Nursing Procedures & Fundamentals', 'Pharmacology (Drug Dosage & Administration)', 'General Knowledge & Current Affairs'
  ],
  'cat-mba': [
    'Verbal Ability & Reading Comprehension (VARC)', 'Reading Comprehension Passages', 'Para Jumbles & Para Summary', 'Sentence Correction & Critical Reasoning', 'Data Interpretation & Logical Reasoning (DILR)', 'Logical Puzzles, Seating Arrangement', 'Data Interpretation (Tables, Charts, Graphs)', 'Quantitative Aptitude (QA)', 'Arithmetic, Algebra, Geometry', 'Number System, Modern Maths'
  ],
  'xat-nmat': [
    'Verbal & Logical Ability', 'Decision Making', 'Quantitative Ability & Data Interpretation', 'General Knowledge (Static & Current Affairs)', 'Essay Writing (optional section)', 'Quantitative Aptitude', 'Data Interpretation', 'Logical Reasoning', 'Verbal Ability & Reading Comprehension', 'General Awareness / Business GK', 'Current Affairs & Economy', 'Language Skills'
  ],
  'clat-law': [
    'English Language (Comprehension, Grammar, Vocabulary)', 'Current Affairs & General Knowledge', 'Legal Reasoning', 'Legal Aptitude & Awareness', 'Logical Reasoning', 'Quantitative Techniques', 'English', 'Legal Aptitude', 'Reasoning', 'Elementary Mathematics'
  ],
  'ugc-net': [
    'Paper I - Teaching Aptitude', 'Paper I - Research Aptitude', 'Paper I - Reading Comprehension', 'Paper I - Communication Skills', 'Paper I - Reasoning & Logical Deductions', 'Paper I - Data Interpretation', 'Paper I - Information & Communication Technology', 'Paper I - People, Development & Environment', 'Paper I - Higher Education System in India', 'Paper II - Subject-Specific (85+ subjects available)', 'Examples: Commerce, Economics, Education, English, History, Law, Management, Psychology, Political Science, Sociology, Mathematics, Computer Science, Library & Information Science, Geography, Philosophy, etc.'
  ],
  'ctet-exam': [
    'Child Development & Pedagogy (CDP)', 'Developmental Psychology & Theories', 'Inclusive Education & Special Needs', 'Language I (Hindi / Regional Language)', 'Language II (English)', 'Mathematics (Paper I - up to Class V level)', 'Environmental Studies / EVS (Paper I - up to Class V)', 'Mathematics & Science (Paper II - for Math & Science teachers)', 'Social Studies / Social Science (Paper II - for SST teachers)'
  ],
  'kvs-dsssb': [
    'Teaching Aptitude', 'General Awareness & Current Affairs', 'Reasoning Ability', 'Quantitative Aptitude', 'English Language', 'Hindi / Regional Language', 'Child Development & Pedagogy', 'Subject Pedagogy (based on applied post)', 'Educational Psychology', 'School Management', 'Subject Knowledge (Content - based on applied post)'
  ]
};

// Remove duplicates in arrays
Object.keys(data).forEach(key => {
  data[key] = [...new Set(data[key])];
});

const filePath = 'c:\\\\Users\\\\vinay\\\\Videos\\\\Development Journey\\\\full stack app for adv indian coder\\\\ADVindiancoder\\\\data\\\\examHubData.ts';
let content = fs.readFileSync(filePath, 'utf-8');

for (const key of Object.keys(data)) {
  const subjects = data[key];
  const regex = new RegExp(`(id:\\s*'${key}',[\\s\\S]*?subjects:\\s*)\\[[^\\]]*\\]`, 'g');
  
  // Format exactly with newlines
  content = content.replace(regex, (match, prefix) => {
    return prefix + '[\n            ' + subjects.map(s => "'" + s.replace(/'/g, "\\'") + "'").join(',\n            ') + '\n        ]';
  });
}

// Ensure no rogue \n tokens were accidentally injected as literal text in the previous failed run
content = content.replace(/\\n/g, '\n');

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Update successful!');
