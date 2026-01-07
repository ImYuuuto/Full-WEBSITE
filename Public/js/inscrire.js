let isAnimating = false;

// Fake users database
const fakeUsers = [
    {
        username: "Yuuto",
        password: "mitoo",
        fullName: "Yasser Amine",
        studentId: "ST-2025-001",
        filiere: "Développement Web",
        year: "1er année",
        grades: [
            { module: "HTML & CSS", note: 17.5 },
            { module: "JavaScript Avancé", note: 18.0 },
            { module: "PHP & MySQL", note: 16.0 },
            { module: "Framework Laravel", note: 17.8 },
            { module: "Projet Intégrateur", note: 15.0 },
            { module: "Anglais Technique", note: 16.5 }
        ]
    },
    {
        username: "Manal",
        password: "yasser",
        fullName: "Manal Jouali",
        studentId: "ST-2025-042",
        filiere: "Développement Web",
        year: "1ère année",
        grades: [
            { module: "Introduction au Web", note: 16.5 },
            { module: "HTML & CSS Fondamentaux", note: 17.8 },
            { module: "JavaScript Débutant", note: 15.5 },
            { module: "Bases de données MySQL", note: 16.0 },
            { module: "PHP Initiation", note: 17.2 },
            { module: "Anglais Technique", note: 15.0 }
        ]
    }
];

function showForm(formId) {
    if (isAnimating) return;
    isAnimating = true;

    document.querySelectorAll('#login, #inscription, #reinscription')
        .forEach(form => form.classList.remove('show'));

    document.querySelectorAll('.choice-btn')
        .forEach(btn => btn.classList.remove('active'));

    const targetForm = document.getElementById(formId);
    const targetButton = document.querySelector(`.choice-btn[data-form="${formId}"]`);

    if (targetForm) {
        setTimeout(() => {
            targetForm.classList.add('show');
            if (targetButton) {
                targetButton.classList.add('active');
            }
            isAnimating = false;
        }, 100);
    } else {
        isAnimating = false;
    }
}

function handleLogin(e) {
    e.preventDefault();

    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value;
    const errorMsg = document.getElementById('loginError');

    if (errorMsg) errorMsg.style.display = "none";

    const user = fakeUsers.find(u => u.username === username && u.password === password);

    if (user) {
        localStorage.setItem('currentStudent', JSON.stringify(user));
        window.location.href = "user_page.html";
    } else {
        if (errorMsg) errorMsg.style.display = "block";
        document.getElementById('login-password').value = "";
    }
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
    showForm('login');

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
});