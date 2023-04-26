const targetFact = document.getElementById("target-fact");
const catButton = document.getElementById("cat-button");

document.addEventListener("DOMContentLoaded", function () {
    const contactLink = document.getElementById("contact-link");

    contactLink.addEventListener("click", function (event) {
        event.preventDefault();
        alert("Contact form is under construction. Please try again later.");
    });
});

function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("show");
}
async function fetchData(){
    try {
        const response = await fetch("https://catfact.ninja/fact");
        if (response.ok) {
            const data = await response.json();
            return data.fact;
        } else {
            console.error("Error fetching cat fact:", response.statusText);
            return "Failed to fetch cat fact";
        }
    } catch (error) {
        console.error("Error fetching cat fact:", error);
        return "Failed to fetch cat fact";
    }
}


catButton.addEventListener("click", async () => {
    const result = await fetchData();
    targetFact.textContent = result;
});

