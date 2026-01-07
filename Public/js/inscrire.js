let isAnimating = false;

function showForm(formId) {
    if (isAnimating) return;
    isAnimating = true;

    const forms = document.querySelectorAll('#login, #inscription, #reinscription');
    const choiceButtons = document.querySelectorAll('.choice-btn');

    // Hide all forms
    forms.forEach(form => form.classList.remove('show'));

    // Deactivate all buttons
    choiceButtons.forEach(btn => btn.classList.remove('active'));

    // Show target form and activate button
    const targetForm = document.getElementById(formId);
    const targetButton = document.querySelector(`.choice-btn[data-form="${formId}"]`);

    if (targetForm && targetButton) {
        setTimeout(() => {
            targetForm.classList.add('show');
            targetButton.classList.add('active');
            isAnimating = false;
        }, 100);
    } else {
        isAnimating = false;
    }
}

// On page load: show login form
document.addEventListener("DOMContentLoaded", () => {
    showForm('login');
});