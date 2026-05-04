// =================================
// 🎯 1. Sélection DOM
// =================================

// Bouton burger sur lequel on clique
const toggleButton = document.querySelector(".navbar__toggle");

// Liste des liens du menu
const navLinks = document.querySelector(".navbar__links");

// Header entier : on va lui ajouter une classe quand le menu est ouvert
const header = document.querySelector(".header");





// =================================
// 🧠 2. Variables globales / état
// =================================



// =================================
// 🎊 3. Fonctions (logique métier)
// =================================

// Fonction qui ouvre ou ferme le menu mobile
function toggleMobileMenu() {
    // 1. On ajoute OU retire la classe qui affiche le menu fullscreen
    navLinks.classList.toggle("navbar__links--open");

    // 2. On vérifie si le menu est ouvert APRÈS le toggle
    const menuIsOpen = navLinks.classList.contains("navbar__links--open");

    // 3. Si le menu est ouvert
    if (menuIsOpen) {
        // Ajoute une classe au header
        // Cette classe sert en CSS à cacher "Inner Peace"
        // et à déplacer les icônes sociales en bas
        header.classList.add("menu-open");

        // Ajoute une classe au bouton
        // Cette classe sert en CSS à transformer le burger en croix
        toggleButton.classList.add("navbar__toggle--open");

        // Accessibilité : le bouton sert maintenant à fermer le menu
        toggleButton.setAttribute("aria-label", "Close menu");
    } 
    
    // 4. Sinon, le menu est fermé
    else {
        // Retire la classe du header
        // Donc "Inner Peace" peut réapparaître
        // et les icônes reviennent à leur place normale
        header.classList.remove("menu-open");

        // Retire la classe du bouton
        // Donc la croix redevient burger
        toggleButton.classList.remove("navbar__toggle--open");

        // Accessibilité : le bouton sert maintenant à ouvrir le menu
        toggleButton.setAttribute("aria-label", "Open menu");
    }
}





// =================================
// 🧲 4. Événements (interactions)
// =================================

// Quand on clique sur le burger,
// on lance la fonction toggleMobileMenu
toggleButton.addEventListener("click", toggleMobileMenu);