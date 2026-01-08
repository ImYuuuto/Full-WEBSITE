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
            { module: "HTML & CSS", note: 19.0 },
            { module: "Python", note: 18.5 },
            { module: "MySQL", note: 17.5},
            { module: "PHP", note: 17.8 },
            { module: "Javascript", note: 18.0 },
            { module: "Anglais Technique", note: 19.5 }
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
            { module: "HTML & CSS", note: 19.75 },
            { module: "Python", note: 15.8 },
            { module: "MySQL", note: 18.5 },
            { module: "PHP", note: 16.0 },
            { module: "Javascript", note: 17.2 },
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