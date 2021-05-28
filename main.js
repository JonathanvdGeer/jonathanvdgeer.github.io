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

window.addEventListener("scroll", () => {
    const box = document.querySelector("#services");
    const rect = box.getBoundingClientRect();
    const top = window.scrollY;

    const isInViewport =
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth);

    if (isInViewport) {
        return (document.querySelector("#up").style.display = "flex");
    }

    if (top <= 100) {
        return (document.querySelector("#up").style.display = "none");
    }
});