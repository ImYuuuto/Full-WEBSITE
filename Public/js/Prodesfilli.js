const searchIndex = [
    { label: "Developpement Digital", page: "Prodesfilli.html", id: "dev-digital" },
    { label: "Infrastructure & Systemes", page: "Prodesfilli.html", id: "infra-systemes" },
    { label: "Gestion des Entreprises", page: "Prodesfilli.html", id: "gestion" },
    { label: "Contact", page: "Contact.html", id: "contact-section" },
    { label: "Inscription", page: "Inscrire.html", id: "inscription-form" }
];

const input = document.getElementById("searchInput");
const suggestions = document.getElementById("searchSuggestions");

input.addEventListener("input", () => {
    const query = input.value.toLowerCase();
    suggestions.innerHTML = "";

    if (query.length < 2) return;

    const matches = searchIndex.filter(item =>
        item.label.toLowerCase().includes(query)
    );

    matches.forEach(item => {
        const li = document.createElement("li");
        li.className = "list-group-item list-group-item-action";
        li.textContent = item.label;

        li.onclick = () => {
            window.location.href = `${item.page}#${item.id}`;
        };

        suggestions.appendChild(li);
    });
});

// Hide suggestions on click outside
document.addEventListener("click", e => {
    if (!e.target.closest("form")) {
        suggestions.innerHTML = "";
    }
});

