// =================================
// 🎯 1. Sélection DOM
// =================================

const toggleButton = document.querySelector(".navbar__toggle");
const navLinks = document.querySelector(".navbar__links");
const navbar = document.querySelector(".navbar");
const header = document.querySelector(".header, .music-header");


// =================================
// 🧠 2. Variables globales / état
// =================================



// =================================
// 🎊 3. Fonctions (logique métier)
// =================================

function toggleMobileMenu() {
    navLinks.classList.toggle("navbar__links--open");
    toggleButton.classList.toggle("navbar__toggle--open");
    navbar.classList.toggle("menu-open");

    if (header) {
        header.classList.toggle("menu-open");
    }
}


// =================================
// 🧲 4. Événements (interactions)
// =================================

toggleButton.addEventListener("click", toggleMobileMenu);