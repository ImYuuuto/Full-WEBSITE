// Fake student data (in real app, this would come from backend or localStorage)
const studentData = {
    name: "Yasser Amine",
    id: "ST-2025-001",
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
};

// Calculate average
function calculateAverage(grades) {
    const sum = grades.reduce((acc, curr) => acc + curr.note, 0);
    return (sum / grades.length).toFixed(2);
}

// Populate page on load
document.addEventListener("DOMContentLoaded", () => {
    // Fill personal info
    document.getElementById("studentName").textContent = studentData.name;
    document.getElementById("studentId").textContent = studentData.id;
    document.getElementById("filiere").textContent = studentData.filiere;
    document.getElementById("year").textContent = studentData.year;

    // Fill grades table
    const tableBody = document.getElementById("gradesTable");
    studentData.grades.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td><strong>${item.module}</strong></td>
            <td><strong>${item.note}</strong></td>
            <td>
                ${item.note >= 16 ? "Très Bien" : 
                  item.note >= 14 ? "Bien" : 
                  item.note >= 12 ? "Assez Bien" : 
                  item.note >= 10 ? "Passable" : "Insuffisant"}
            </td>
        `;
        tableBody.appendChild(row);
    });

    // Display average
    document.getElementById("averageGrade").textContent = calculateAverage(studentData.grades);
});