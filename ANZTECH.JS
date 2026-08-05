// ==========================
// ANZ TECH - script.js
// ==========================

// Sticky Navbar
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(5,10,25,0.95)";
        navbar.style.boxShadow = "0 10px 25px rgba(0,0,0,.3)";
    } else {
        navbar.style.background = "rgba(10,15,30,.75)";
        navbar.style.boxShadow = "none";
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Reveal Animation
const revealElements = document.querySelectorAll(
    ".card,.product-card,.about-card,.contact-box"
);

const reveal = () => {
    revealElements.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
};

revealElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "all .8s ease";
});

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// Hero Image Animation
const heroImg = document.querySelector(".hero-right img");

if (heroImg) {
    heroImg.addEventListener("mousemove", () => {
        heroImg.style.transform = "scale(1.03)";
    });

    heroImg.addEventListener("mouseleave", () => {
        heroImg.style.transform = "scale(1)";
    });
}

// Active Navbar Link
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

console.log("🚀 ANZ TECH Website Loaded Successfully");