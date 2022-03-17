// ---MOBILE NAV OPEN/CLOSE---

const navHamburgerIcon = document.getElementById('nav__hamburger-icon');
const navLinks = document.getElementById('nav__links');
const navDarkOverlay = document.getElementById('nav__dark-overlay');
const navClose = document.getElementById('nav__close');

navHamburgerIcon.onclick = () => {
    navLinks.style.display = 'flex';
    navDarkOverlay.style.display = 'block';
}

navClose.onclick = () => {
    navLinks.style.display = 'none';
    navDarkOverlay.style.display = 'none';
}