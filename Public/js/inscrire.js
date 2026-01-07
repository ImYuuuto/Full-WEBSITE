let isAnimating = false;

// Fake database (demo only - never do this in production!)
const fakeUsers = [
    { username: "Yuuto", password: "mitoo" }
    // Add more users here if needed: { username: "test", password: "123" }
];

function showForm(formId) {
    if (isAnimating) return;
    isAnimating = true;

    const forms = document.querySelectorAll('#login, #inscription, #reinscription');
    const choiceButtons = document.querySelectorAll('.choice-btn');

    // Hide all forms
    forms.forEach(form => form.classList.remove('show'));

    // Deactivate all buttons
    choiceButtons.forEach(btn => btn.classList.remove('active'));

    // Show the target form
    const targetForm = document.getElementById(formId);
    const targetButton = document.querySelector(`.choice-btn[data-form="${formId}"]`);

    if (targetForm) {
        setTimeout(() => {
            targetForm.classList.add('show');
            if (targetButton) {
                targetButton.classList.add('active');
            }
            isAnimating = false;
        }, 100); // Small delay for smooth hide → show transition
    } else {
        isAnimating = false;
    }
}

// Handle login form submission
function handleLogin(e) {
    e.preventDefault();

    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value;
    const errorMsg = document.getElementById('loginError');

    // Hide previous error
    errorMsg.style.display = "none";

    // Check credentials
    const user = fakeUsers.find(u => u.username === username && u.password === password);

    if (user) {
        // Success → go to user page
        window.location.href = "user_page.html";
    } else {
        // Failure → show error
        errorMsg.style.display = "block";
        document.getElementById('login-password').value = ""; // Clear password
    }
}

// Initialize everything when page loads
document.addEventListener("DOMContentLoaded", () => {
    // Show login form by default
    showForm('login');

    // Attach login handler
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
});