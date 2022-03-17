// ---MOBILE NAV OPEN/CLOSE---

const navHamburgerIcon = document.getElementById('nav__hamburger-icon');
const navLinks = document.getElementById('nav__links');
const navDarkOverlay = document.getElementById('nav__dark-overlay');
const navClose = document.getElementById('nav__close');

navHamburgerIcon.onclick = () => {
    navLinks.classList.toggle("nav__links--open-hamburger");
    navDarkOverlay.style.display = 'block';
    setTimeout(() => {
        navDarkOverlay.style.opacity = '1';
    }, 100);
}

navClose.onclick = () => {
    navLinks.classList.toggle("nav__links--open-hamburger");
    navDarkOverlay.style.opacity = '0';
    setTimeout(() => {
        navDarkOverlay.style.display = 'none';
    }, 400);
}