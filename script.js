const patients = [
    {
        id: "P101",
        name: "Arun",
        age: 35,
        gender: "Male",
        bloodgroup: "O+",
        diagnosis: "Diabetes",
        symptoms: "Fatigue",
        allergy: "None",
        doctor: "Dr. Kumar",
        medicine: "Metformin",
        date: "2026-10-05"
    },
    {
        id: "P102",
        name: "Bala",
        age: 42,
        gender: "Male",
        bloodgroup: "A+",
        diagnosis: "Hypertension",
        symptoms: "Headache",
        allergy: "None",
        doctor: "Dr. Priya",
        medicine: "Amlodipine",
        date: "2026-10-05"
    },
    {
        id: "P103",
        name: "Charan",
        age: 29,
        gender: "Male",
        bloodgroup: "B+",
        diagnosis: "Asthma",
        symptoms: "Wheezing",
        allergy: "Dust",
        doctor: "Dr. Ravi",
        medicine: "Salbutamol",
        date: "2026-10-05"
    }
];


// Display all patients
function displayPatients(data) {

    const tableBody = document.getElementById("patientTableBody");

    tableBody.innerHTML = "";

    data.forEach(patient => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${patient.id}</td>
            <td>${patient.name}</td>
            <td>${patient.age}</td>
            <td>${patient.gender}</td>
            <td>${patient.bloodgroup}</td>
            <td>${patient.diagnosis}</td>
            <td>${patient.doctor}</td>
            <td>${patient.medicine}</td>
        `;

        tableBody.appendChild(row);
    });
}


// Search patient
function searchPatient() {

    const searchValue = document
        .getElementById("searchInput")
        .value
        .trim()
        .toLowerCase();

    const result = document.getElementById("searchResult");

    if (searchValue === "") {
        result.innerHTML = "<p>Please enter a Patient ID or Name.</p>";
        return;
    }

    const patient = patients.find(p =>
        p.id.toLowerCase() === searchValue ||
        p.name.toLowerCase() === searchValue
    );

    if (patient) {

        result.innerHTML = `
            <div class="treatment-card">
                <h3>${patient.id} - ${patient.name}</h3>
                <p><strong>Age:</strong> ${patient.age}</p>
                <p><strong>Gender:</strong> ${patient.gender}</p>
                <p><strong>Blood Group:</strong> ${patient.bloodgroup}</p>
                <p><strong>Diagnosis:</strong> ${patient.diagnosis}</p>
                <p><strong>Symptoms:</strong> ${patient.symptoms}</p>
                <p><strong>Allergy:</strong> ${patient.allergy}</p>
                <p><strong>Doctor:</strong> ${patient.doctor}</p>
                <p><strong>Medicine:</strong> ${patient.medicine}</p>
                <p><strong>Treatment Date:</strong> ${patient.date}</p>
            </div>
        `;

    } else {

        result.innerHTML = `
            <p>No patient found.</p>
        `;
    }
}


// Show all patients
function showAllPatients() {

    document.getElementById("searchInput").value = "";

    document.getElementById("searchResult").innerHTML = "";

    displayPatients(patients);
}


// Display treatment cards
function displayTreatments() {

    const container = document.getElementById("treatmentCards");

    container.innerHTML = "";

    patients.forEach(patient => {

        const card = document.createElement("div");

        card.className = "treatment-card";

        card.innerHTML = `
            <h3>${patient.name}</h3>
            <p><strong>Diagnosis:</strong> ${patient.diagnosis}</p>
            <p><strong>Doctor:</strong> ${patient.doctor}</p>
            <p><strong>Medicine:</strong> ${patient.medicine}</p>
            <p><strong>Date:</strong> ${patient.date}</p>
        `;

        container.appendChild(card);
    });
}


// Update dashboard
function updateDashboard() {

    document.getElementById("totalPatients").textContent =
        patients.length;

    document.getElementById("totalDoctors").textContent =
        new Set(patients.map(patient => patient.doctor)).size;

    document.getElementById("totalRecords").textContent =
        patients.length;
}


// Run when page loads
document.addEventListener("DOMContentLoaded", () => {

    displayPatients(patients);

    displayTreatments();

    updateDashboard();

});
// Add new patient
document.getElementById("patientForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const newPatient = {
        id: document.getElementById("patientId").value.trim(),
        name: document.getElementById("patientName").value.trim(),
        age: Number(document.getElementById("patientAge").value),
        gender: document.getElementById("patientGender").value,
        bloodgroup: document.getElementById("bloodGroup").value.trim(),
        diagnosis: document.getElementById("diagnosis").value.trim(),
        symptoms: document.getElementById("symptoms").value.trim(),
        allergy: document.getElementById("allergy").value.trim(),
        doctor: document.getElementById("doctor").value.trim(),
        medicine: document.getElementById("medicine").value.trim(),
        date: document.getElementById("treatmentDate").value
    };

    // Check duplicate Patient ID
    const exists = patients.some(patient =>
        patient.id.toLowerCase() === newPatient.id.toLowerCase()
    );

    if (exists) {
        document.getElementById("formMessage").textContent =
            "Patient ID already exists.";

        return;
    }

    // Add patient
    patients.push(newPatient);

    // Refresh website data
    displayPatients(patients);
    displayTreatments();
    updateDashboard();

    // Success message
    document.getElementById("formMessage").textContent =
        "Patient added successfully.";

    // Clear form
    document.getElementById("patientForm").reset();

});