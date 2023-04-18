document.addEventListener("DOMContentLoaded", function () {
    const contactLink = document.getElementById('contact-link');

    contactLink.addEventListener("click", function (event) {
        event.preventDefault();
        alert("Contact form is under construction. Please try again later.");
    });
});

function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("show");
}

