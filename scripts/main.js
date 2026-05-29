// =================================
// 🎯 1. Sélection DOM
// =================================

// Navbar / menu mobile
const toggleButton = document.querySelector(".navbar__toggle");
const navLinks = document.querySelector(".navbar__links");
const navbar = document.querySelector(".navbar");
const header = document.querySelector(".header, .music-header");

// Éléments qui apparaissent au scroll
const revealElements = document.querySelectorAll(
    ".section-heading, .playlist-card, .about-story, .contact-card"
);


// =================================
// 🧠 2. Variables globales / état
// =================================

// Pour le moment, pas besoin de variable globale.
// On garde cette section pour la structure du fichier.


// =================================
// 🎊 3. Fonctions (logique métier)
// =================================

// Ouvre / ferme le menu mobile
function toggleMobileMenu() {
    navLinks.classList.toggle("navbar__links--open");
    toggleButton.classList.toggle("navbar__toggle--open");
    navbar.classList.toggle("menu-open");

    if (header) {
        header.classList.toggle("menu-open");
    }
}

// Active l’animation quand un élément entre dans l’écran
function revealOnScroll(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("reveal--visible");
        }
    });
}


// =================================
// ⚙️ 4. Initialisation
// =================================

// Création de l’observer pour les animations au scroll
const scrollRevealObserver = new IntersectionObserver(revealOnScroll, {
    threshold: 0.15
});

// Ajoute la classe de départ et observe chaque élément
revealElements.forEach(function(element) {
    element.classList.add("reveal");
    scrollRevealObserver.observe(element);
});


// =================================
// 🧲 5. Événements (interactions)
// =================================

// Click sur le burger menu
toggleButton.addEventListener("click", toggleMobileMenu);