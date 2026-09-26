"use strict";

document.addEventListener("DOMContentLoaded", () => {
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

    const mythSearch = document.getElementById("mythSearch");
    if (mythSearch) {
        const cards = document.querySelectorAll(".myth-card");
        const noResults = document.getElementById("noResults");

        mythSearch.addEventListener("input", () => {
            const query = mythSearch.value.toLowerCase().trim();
            let hasResults = false;

            cards.forEach((card) => {
                const matches = card.dataset.title.toLowerCase().includes(query);
                card.hidden = !matches;
                hasResults ||= matches;
            });

            if (noResults) {
                noResults.hidden = hasResults;
            }
        });
    }
});

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");

    const anotherModalIsOpen = [...document.querySelectorAll(".modal")].some(
        (candidate) => candidate.classList.contains("is-open"),
    );
    if (!anotherModalIsOpen) {
        document.body.classList.remove("modal-open");
    }
}

document.addEventListener("click", (event) => {
    if (
        event.target instanceof HTMLElement &&
        event.target.classList.contains("modal") &&
        event.target.classList.contains("is-open")
    ) {
        closeModal(event.target.id);
    }
});