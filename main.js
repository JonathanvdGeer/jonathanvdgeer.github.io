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

window.onscroll = () => {
    const services = document.querySelector("#portfolio");
    const up = document.querySelector("#up");

    if (elementInViewport(services)) {
        return (up.style.display = "flex");
    }

    return (up.style.display = "none");
};

const elementInViewport = (el) => {
    let top = el.offsetTop;
    let left = el.offsetLeft;
    let width = el.offsetWidth;
    let height = el.offsetHeight;
    while (el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
    }
    return (
        top < window.pageYOffset + window.innerHeight &&
        left < window.pageXOffset + window.innerWidth &&
        top + height > window.pageYOffset &&
        left + width > window.pageXOffset
    );
};