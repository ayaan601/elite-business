
// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
});

// Close menu after clicking a link
document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
    });
});

// Current year
document.getElementById("year").textContent =
    new Date().getFullYear();

// Contact form
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
        alert("Please complete all fields.");
        return;
    }

    // Replace this with your real business email
    const businessEmail = "YOUR_EMAIL@example.com";

    const emailSubject = encodeURIComponent(subject);
    const emailBody = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message
    );

    window.location.href =
        `mailto:${businessEmail}?subject=${emailSubject}&body=${emailBody}`;
});
