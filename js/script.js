"use strict";

document.addEventListener("DOMContentLoaded", () => {
    // 1. Lógica del Menú Desplegable / Hamburguesa
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });

        navLinks.addEventListener("click", (event) => {
            if (event.target.closest("a")) {
                navLinks.classList.remove("active");
            }
        });

        document.addEventListener("click", (event) => {
            if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
                navLinks.classList.remove("active");
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

    // Inicializar buscador de Mitos y Leyendas
    initCardSearch("mythSearch", ".myth-card", "noResults");

    // Inicializar buscador de Personajes Emblemáticos
    initCardSearch("charSearch", ".char-card", "noResults");
});