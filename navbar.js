const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// REMOVE MENU MOBILE
const navLinks = document.querySelectorAll('.navLink');

function linkAction() {
    navMenu.classList.remove('show-menu');
}

navLinks.forEach((navLink) => {
    navLink.addEventListener('click', linkAction);
});
