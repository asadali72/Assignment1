// Mock data for projects and education
const projectsData = [
    { name: 'Car Rental System', technology: 'C' },
    { name: 'Gaming Zone Management System', technology: 'C++' },
    { name: 'Word Guesser', technology: 'C++' },
    { name: 'Algorithm Comparision', technology: 'C' },
    { name: 'Point Of Sale', technology: 'JavaScript , PHP , CSS' },
    { name: 'Face Detection', technology: 'Python' },
    { name: 'Proxy Server', technology: 'Python' },
    
];

// Mock data for education with levels
const educationData = [
    { level: 'SSC-I', subjects: ['Math', 'Physics', 'Chemistery', 'Computer-Science', 'English', 'Urdu', 'Islamyat', 'Pakistan-Studies'], grade: 'B+' },
    { level: 'SSC-II', subjects: ['English-II', 'Math-II', 'Physics-II', 'Chemistery-II', 'Computer-Science-II','Urdu-II', 'Islamyat-II', 'Pakistan-Studies-II'], grade: 'A' },
    { level: 'HSSC-I', subjects: ['Physics', 'Computer', 'Maths','English', 'Urdu'], grade: 'B+' },
    { level: 'HSSC-II', subjects: ['Maths-II', 'Computer Science-II', 'Physics-II', 'English-II', 'Urdu-II', 'Islamyat', 'Pakistan-Studies'], grade: 'B+' },
    { level: 'Undergraduate', subjects: ['Introduction to Computer Science', 'Programming Fundamentals', 'Operating Systems', 'DataBase Systems', 'Parallel And Distributed Computing', 'Calculus', 'Data Structure', 'Discrete Structure'], grade: 'A' },
    
];

// Mock data for certifications
const certificationsData = [
    { title: 'Coders cup', issuer: 'FAST NUCES', date: '2019-10-15' },
    { title: 'Basics Of Scratch', issuer: 'Coursera Project Network', date: '2023-03-28' },
    { title: 'Data Analytics Using Python', issuer: 'Coursera IBM', date: '2023-04-25' },
    { title: 'Data Analytics Using Python', issuer: 'Michigan State University', date: '2023-07-28' },
];

// Function to display certification details
// Function to filter projects based on technology
function filterProjects() {
    const technologyInput = document.getElementById('technology').value.toLowerCase();
    const projectList = document.getElementById('project-list');

    // Clear existing projects
    projectList.innerHTML = '';

    // Filter and display projects
    projectsData.forEach(project => {
        if (project.technology.toLowerCase().includes(technologyInput) || technologyInput === '') {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `<h3>${project.name}</h3><p>Technology: ${project.technology}</p>`;
            projectList.appendChild(card);
        }
    });
}




// Function to display education details
function displayEducation() {
    const educationList = document.getElementById('education-list');

    // Display education details
    educationData.forEach(education => {
        const educationItem = document.createElement('div');
        const subjectsList = education.subjects.map(subject => `<li>${subject}</li>`).join('');
        educationItem.innerHTML = `
            <p class="${getEducationLevelClass(education.level)}">
                ${education.level} - Grade: ${education.grade}
                <ul>${subjectsList}</ul>
            </p>
        `;
        educationList.appendChild(educationItem);
    });
}

// Function to get CSS class based on education level
function getEducationLevelClass(level) {
    switch (level) {
        case 'SSC-I':
            return 'ssc';
        case 'SSC-II':
            return 'ssc-II';
        case 'HSSC-I':
            return 'hssc';
        case 'HSSC-II':
            return 'hssc-II';
        case 'Undergraduate':
            return 'undergraduate';
        default:
            return '';
    }
}

// Call the displayEducation function on page load for the education page
if (document.getElementById('education-list')) {
    displayEducation();
}

function displayCertifications() {
    const certificationsList = document.getElementById('certifications-list');

    // Display certification details
    certificationsData.forEach(certification => {
        const certificationItem = document.createElement('div');
        certificationItem.innerHTML = `
            <p><strong>${certification.title}</strong></p>
            <p>Issuer: ${certification.issuer}</p>
            <p>Date: ${certification.date}</p>
            <hr>
        `;
        certificationsList.appendChild(certificationItem);
    });
}

// Call the displayCertifications function on page load for the certifications page
if (document.getElementById('certifications-list')) {
    displayCertifications();
}


