// Toggle mobile menu
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Hero text animation
window.addEventListener("load", () => {
    const heroText = document.querySelector(".hero-text");
    heroText.style.opacity = 0;
    heroText.style.transform = "translateY(20px)";
    setTimeout(() => {
        heroText.style.transition = "all 1s ease";
        heroText.style.opacity = 1;
        heroText.style.transform = "translateY(0)";
    }, 300);
});