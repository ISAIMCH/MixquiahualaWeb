"use strict";

document.addEventListener("DOMContentLoaded", () => {
    // 1. Lógica del Menú Desplegable / Hamburguesa
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            const isExpanded = navLinks.classList.toggle("active");
            menuToggle.setAttribute("aria-expanded", String(isExpanded));
        });

        navLinks.addEventListener("click", (event) => {
            if (event.target.closest("a")) {
                navLinks.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
            }
        });

        document.addEventListener("click", (event) => {
            if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
                navLinks.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
            }
        });
    }

    // 2. Función genérica para buscadores en tarjetas (Mitos y Personajes)
    const initCardSearch = (inputId, cardSelector, noResultsId) => {
        const searchInput = document.getElementById(inputId);
        if (!searchInput) return;

        const cards = document.querySelectorAll(cardSelector);
        const noResults = document.getElementById(noResultsId);

        searchInput.addEventListener("input", () => {
            const query = searchInput.value.toLowerCase().trim();
            let hasResults = false;

            cards.forEach((card) => {
                const titleData = card.dataset.title ? card.dataset.title.toLowerCase() : "";
                
                if (titleData.includes(query)) {
                    card.classList.remove("d-none");
                    hasResults = true;
                } else {
                    card.classList.add("d-none");
                }
            });

            if (noResults) {
                if (hasResults) {
                    noResults.classList.add("d-none");
                } else {
                    noResults.classList.remove("d-none");
                }
            }
        });
    };

<<<<<<< Updated upstream
    // Inicializar buscador de Mitos y Leyendas
    initCardSearch("mythSearch", ".myth-card", "noResults");
=======
function changeSlide(modalId, direction) {
    const carousel = document.querySelector(`#${modalId} .modal-trad-image`);
    if (!carousel) return;

    const slides = [...carousel.querySelectorAll(".tradition-carousel-slide")];
    const activeIndex = slides.findIndex((slide) => slide.classList.contains("active"));
    if (slides.length === 0) return;

    goToSlide(modalId, (activeIndex + direction + slides.length) % slides.length);
}

function goToSlide(modalId, index) {
    const carousel = document.querySelector(`#${modalId} .modal-trad-image`);
    if (!carousel) return;

    const slides = [...carousel.querySelectorAll(".tradition-carousel-slide")];
    const indicators = [...carousel.querySelectorAll(".carousel-indicators span")];
    if (slides.length === 0 || index < 0 || index >= slides.length) return;

    slides.forEach((slide, slideIndex) => {
        const isActive = slideIndex === index;
        slide.classList.toggle("active", isActive);
        slide.setAttribute("aria-hidden", String(!isActive));
    });

    indicators.forEach((indicator, indicatorIndex) => {
        const isActive = indicatorIndex === index;
        indicator.classList.toggle("active", isActive);
        indicator.setAttribute("aria-pressed", String(isActive));
    });
}

document.addEventListener("keydown", (event) => {
    if (
        (event.key === "Enter" || event.key === " ") &&
        event.target instanceof HTMLElement &&
        event.target.matches(".modal-trad-image .carousel-indicators [role='button']")
    ) {
        event.preventDefault();
        event.target.click();
    }
});

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
>>>>>>> Stashed changes

    // Inicializar buscador de Personajes Emblemáticos
    initCardSearch("charSearch", ".char-card", "noResults");
});