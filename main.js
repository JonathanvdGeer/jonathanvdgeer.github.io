const menuToggle = document.querySelector(".menu-toggler");
const topnav = document.querySelector(".top-nav");
const navLink = document.querySelectorAll(".nav-link");
const scrollUp = document.querySelector(".up");
const landingText = document.querySelector(".landing-text");

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("open");
    topnav.classList.toggle("open");
});

navLink.forEach((el) => {
    el.addEventListener("click", () => {
        menuToggle.classList.toggle("open");
        topnav.classList.toggle("open");
    });
});

scrollUp.addEventListener("click", () => {
    landingText.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
    });
});

AOS.init({
    easing: "ease",
    duration: 1800,
    once: true,
});