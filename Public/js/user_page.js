document.addEventListener("DOMContentLoaded", () => {
    const studentJSON = localStorage.getItem('currentStudent');

    // If no user is logged in, redirect to login
    if (!studentJSON) {
        alert("Veuillez vous connecter d'abord.");
        window.location.href = "Inscrire.html";
        return;
    }

    const student = JSON.parse(studentJSON);

    // Profile pictures mapping
    const profilePhotos = {
        "Yuuto": "images/user_page/yasser.png",
        "Manal": "images/user_page/manal.jpeg"
    };

    const defaultPhoto = "images/user_page/default-profile.png";
    const photoSrc = profilePhotos[student.username] || defaultPhoto;

    // Fill personal information
    document.getElementById("profileImg").src = photoSrc;
    document.getElementById("studentName").textContent = student.fullName;
    document.getElementById("studentId").textContent = student.studentId;
    document.getElementById("filiere").textContent = student.filiere;
    document.getElementById("year").textContent = student.year;

    // Fill grades table
    const tableBody = document.getElementById("gradesTable");
    tableBody.innerHTML = ""; // Clear

    let totalNotes = 0;
    student.grades.forEach(grade => {
        const appreciation = grade.note >= 16 ? "Très Bien" :
                             grade.note >= 14 ? "Bien" :
                             grade.note >= 12 ? "Assez Bien" :
                             grade.note >= 10 ? "Passable" : "Insuffisant";

        tableBody.innerHTML += `
            <tr>
                <td><strong>${grade.module}</strong></td>
                <td><strong>${grade.note.toFixed(1)}</strong></td>
                <td>${appreciation}</td>
            </tr>
        `;
        totalNotes += grade.note;
    });

    // Calculate and display average
    const average = (totalNotes / student.grades.length).toFixed(2);
    document.getElementById("averageGrade").textContent = average;
});

// Logout button
document.getElementById('logoutBtn').addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.removeItem('currentStudent');
    window.location.href = "Inscrire.html";
});