
       

const attendanceForm = document.getElementById("attendanceForm");
const attendanceName = document.getElementById("attendanceName");
const status = document.getElementById("status");
const attendanceList = document.getElementById("attendanceList");

function displayAttendance() {
    attendanceList.innerHTML = "";

    const records = JSON.parse(localStorage.getItem("attendance")) || [];

    records.forEach(record => {
        const li = document.createElement("li");

        li.textContent =
            record.name + " - " +
            record.status + " - " +
            record.date;

        attendanceList.appendChild(li);
    });
}

attendanceForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = attendanceName.value.trim();
    const attendanceStatus = status.value;

    if (name === "") {
        alert("Please enter student name");
        return;
    }

    const records = JSON.parse(localStorage.getItem("attendance")) || [];

    records.push({
        name: name,
        status: attendanceStatus,
        date: new Date().toLocaleDateString()
    });

    localStorage.setItem("attendance", JSON.stringify(records));

    alert("Attendance marked successfully!");

    attendanceName.value = "";

    displayAttendance();
});

displayAttendance();
