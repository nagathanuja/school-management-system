// ===============================
// SCHOOL MANAGEMENT SYSTEM
// script.js
// ===============================

// ---------- STUDENTS ----------

function addStudent() {
    const inputs = document.querySelectorAll("input");

    let name = "";
    let className = "";

    inputs.forEach(input => {
        if (input.placeholder.toLowerCase().includes("student name")) {
            name = input.value.trim();
        }

        if (input.placeholder.toLowerCase().includes("class")) {
            className = input.value.trim();
        }
    });

    if (name === "" || className === "") {
        alert("Please enter student name and class.");
        return;
    }

    let students = JSON.parse(localStorage.getItem("students")) || [];

    students.push({
        name: name,
        className: className
    });

    localStorage.setItem("students", JSON.stringify(students));

    alert("Student added successfully!");

    displayStudents();

    // Clear inputs
    inputs.forEach(input => {
        if (
            input.placeholder.toLowerCase().includes("student name") ||
            input.placeholder.toLowerCase().includes("class")
        ) {
            input.value = "";
        }
    });
}


function displayStudents() {
    const headings = document.querySelectorAll("h2");

    let recordsHeading = null;

    headings.forEach(h2 => {
        if (h2.innerText.toLowerCase().includes("student records")) {
            recordsHeading = h2;
        }
    });

    if (!recordsHeading) return;

    let students = JSON.parse(localStorage.getItem("students")) || [];

    // Remove old records
    let oldList = document.getElementById("studentList");

    if (oldList) {
        oldList.remove();
    }

    let list = document.createElement("div");
    list.id = "studentList";

    students.forEach((student, index) => {
        let item = document.createElement("p");

        item.innerHTML =
            (index + 1) +
            ". " +
            student.name +
            " - Class: " +
            student.className;

        list.appendChild(item);
    });

    recordsHeading.parentNode.insertBefore(
        list,
        recordsHeading.nextSibling
    );
}


// ---------- TEACHERS ----------

function addTeacher() {
    const inputs = document.querySelectorAll("input");

    let name = "";
    let subject = "";

    inputs.forEach(input => {
        if (input.placeholder.toLowerCase().includes("teacher name")) {
            name = input.value.trim();
        }

        if (input.placeholder.toLowerCase().includes("subject")) {
            subject = input.value.trim();
        }
    });

    if (name === "" || subject === "") {
        alert("Please enter teacher name and subject.");
        return;
    }

    let teachers = JSON.parse(localStorage.getItem("teachers")) || [];

    teachers.push({
        name: name,
        subject: subject
    });

    localStorage.setItem("teachers", JSON.stringify(teachers));

    alert("Teacher added successfully!");

    displayTeachers();

    // Clear inputs
    inputs.forEach(input => {
        if (
            input.placeholder.toLowerCase().includes("teacher name") ||
            input.placeholder.toLowerCase().includes("subject")
        ) {
            input.value = "";
        }
    });
}


function displayTeachers() {
    const headings = document.querySelectorAll("h2");

    let recordsHeading = null;

    headings.forEach(h2 => {
        if (h2.innerText.toLowerCase().includes("teacher records")) {
            recordsHeading = h2;
        }
    });

    if (!recordsHeading) return;

    let teachers = JSON.parse(localStorage.getItem("teachers")) || [];

    let oldList = document.getElementById("teacherList");

    if (oldList) {
        oldList.remove();
    }

    let list = document.createElement("div");
    list.id = "teacherList";

    teachers.forEach((teacher, index) => {
        let item = document.createElement("p");

        item.innerHTML =
            (index + 1) +
            ". " +
            teacher.name +
            " - Subject: " +
            teacher.subject;

        list.appendChild(item);
    });

    recordsHeading.parentNode.insertBefore(
        list,
        recordsHeading.nextSibling
    );
}


// ---------- ATTENDANCE ----------

function markAttendance() {
    const inputs = document.querySelectorAll("input");

    let studentName = "";

    inputs.forEach(input => {
        if (input.placeholder.toLowerCase().includes("student name")) {
            studentName = input.value.trim();
        }
    });

    const select = document.querySelector("select");

    if (studentName === "") {
        alert("Please enter student name.");
        return;
    }

    let status = "Present";

    if (select) {
        status = select.value;
    }

    let attendance =
        JSON.parse(localStorage.getItem("attendance")) || [];

    attendance.push({
        name: studentName,
        status: status,
        date: new Date().toLocaleDateString()
    });

    localStorage.setItem(
        "attendance",
        JSON.stringify(attendance)
    );

    alert("Attendance marked successfully!");

    displayAttendance();

    // Clear student name
    inputs.forEach(input => {
        if (input.placeholder.toLowerCase().includes("student name")) {
            input.value = "";
        }
    });
}


function displayAttendance() {
    const headings = document.querySelectorAll("h2");

    let recordsHeading = null;

    headings.forEach(h2 => {
        if (h2.innerText.toLowerCase().includes("attendance records")) {
            recordsHeading = h2;
        }
    });

    if (!recordsHeading) return;

    let attendance =
        JSON.parse(localStorage.getItem("attendance")) || [];

    let oldList = document.getElementById("attendanceList");

    if (oldList) {
        oldList.remove();
    }

    let list = document.createElement("div");
    list.id = "attendanceList";

    attendance.forEach((record, index) => {
        let item = document.createElement("p");

        item.innerHTML =
            (index + 1) +
            ". " +
            record.name +
            " - " +
            record.status +
            " - " +
            record.date;

        list.appendChild(item);
    });

    recordsHeading.parentNode.insertBefore(
        list,
        recordsHeading.nextSibling
    );
}


// ---------- PAGE LOAD ----------

document.addEventListener("DOMContentLoaded", function () {

    // Find buttons
