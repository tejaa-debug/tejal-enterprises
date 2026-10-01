/* ================= MOBILE MENU ================= */

const navLinks = document.getElementById("navLinks");

function showMenu() {
navLinks.style.right = "0";
}

function hideMenu() {
navLinks.style.right = "-280px";
}

/* Close mobile menu when clicking a link */

document.querySelectorAll(".nav-links a").forEach(function(link) {


link.addEventListener("click", function() {
    hideMenu();
});


});

/* ================= PASSWORD SHOW / HIDE ================= */

function togglePassword(icon) {


const input = icon.parentElement.querySelector("input");

if (input.type === "password") {

    input.type = "text";

    icon.classList.remove("bi-eye");
    icon.classList.add("bi-eye-slash");

} else {

    input.type = "password";

    icon.classList.remove("bi-eye-slash");
    icon.classList.add("bi-eye");

}


}

/* ================= PROJECT FILTER ================= */

function filterProjects(category) {


const projects = document.querySelectorAll(".project-card");
const buttons = document.querySelectorAll(".filter-btn");

buttons.forEach(function(button) {
    button.classList.remove("active");
});

event.target.classList.add("active");


projects.forEach(function(project) {

    if (category === "all") {

        project.style.display = "block";

    } else if (project.classList.contains(category)) {

        project.style.display = "block";

    } else {

        project.style.display = "none";

    }

});


}

/* ================= LOGIN DEMO ================= */

function loginDemo(event, role) {


event.preventDefault();

alert(
    role + " Login\n\n" +
    "Frontend demo only.\n" +
    "Backend authentication will be added later."
);


}

/* ================= CONTACT FORM ================= */

function sendMessage(event) {


event.preventDefault();

alert(
    "Thank you for contacting TEJAL ENTERPRISES!\n\n" +
    "Your message has been received."
);


}
