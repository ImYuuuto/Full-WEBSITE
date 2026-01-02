function showForm(formId) {
    const forms = ['login', 'inscription', 'reinscription'];

    forms.forEach(id => {
        const form = document.getElementById(id);
        if (form.classList.contains('show')) {
            // fade out
            form.classList.remove('show');
        }
    });

    const targetForm = document.getElementById(formId);
    // fade in
    setTimeout(() => {
        targetForm.classList.add('show');
    }, 50); // slight delay to allow previous removal to take effect
}
