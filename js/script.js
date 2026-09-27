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

    // 2. Lógica del Buscador de Mitos y Leyendas
    const mythSearch = document.getElementById("mythSearch");
    if (mythSearch) {
        const cards = document.querySelectorAll(".myth-card");
        const noResults = document.getElementById("noResults");

        mythSearch.addEventListener("input", () => {
            const query = mythSearch.value.toLowerCase().trim();
            let hasResults = false;

            cards.forEach((card) => {
                const matches = card.dataset.title.toLowerCase().includes(query);
                
                // Muestra u oculta las tarjetas según la búsqueda
                if (matches) {
                    card.classList.remove("d-none");
                    hasResults = true;
                } else {
                    card.classList.add("d-none");
                }
            });

            // Muestra el mensaje si no hay coincidencias
            if (noResults) {
                if (hasResults) {
                    noResults.classList.add("d-none");
                } else {
                    noResults.classList.remove("d-none");
                }
            }
        });
    }
});