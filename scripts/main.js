// =================================
// 🍔 Navbar / mobile menu
// =================================

const toggleButton = document.querySelector(".navbar__toggle");
const navLinks = document.querySelector(".navbar__links");
const navbar = document.querySelector(".navbar");
const header = document.querySelector(".header, .music-header");

function toggleMobileMenu() {
    navLinks.classList.toggle("navbar__links--open");
    toggleButton.classList.toggle("navbar__toggle--open");
    navbar.classList.toggle("menu-open");

    if (header) {
        header.classList.toggle("menu-open");
    }
}

if (toggleButton) {
    toggleButton.addEventListener("click", toggleMobileMenu);
}


// =================================
// ✨ Scroll reveal
// =================================

const revealElements = document.querySelectorAll(
    ".section-heading, .playlist-card, .about-story, .contact-card"
);

function revealOnScroll(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("reveal--visible");
        }
    });
}

const scrollRevealObserver = new IntersectionObserver(revealOnScroll, {
    threshold: 0.15
});

revealElements.forEach(function(element) {
    element.classList.add("reveal");
    scrollRevealObserver.observe(element);
});


// =================================
// 🎵 Music sort
// =================================

const musicGrid = document.querySelector(".music-grid");
const musicFilterButtons = document.querySelectorAll(".music-filter");

function sortMusicCards(sortType) {
    const musicCards = Array.from(document.querySelectorAll(".music-card"));    

    musicCards.sort(function(a, b) {
        if (sortType === "newest") {
            return b.dataset.date.localeCompare(a.dataset.date);
        }

        if (sortType === "oldest") {
            return a.dataset.date.localeCompare(b.dataset.date);
        }

        if (sortType === "softest") {
            return Number(b.dataset.softness) - Number(a.dataset.softness);
        }
    });

    musicCards.forEach(function(card) {
        musicGrid.appendChild(card);
    });
}

if (musicGrid) {
    musicFilterButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const sortType = button.dataset.sort;

            musicFilterButtons.forEach(function(button) {
                button.classList.remove("active");
            });

            button.classList.add("active");

            sortMusicCards(sortType);
        });
    });
}

