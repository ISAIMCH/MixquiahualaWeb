// ─────────────────────────────────────────────────────────
// CONTROL DEL MENÚ DESPLEGABLE (CELULARES)
// ─────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {
        // Abre y cierra el menú al darle clic al botón ☰
        menuToggle.addEventListener("click", (event) => {
            navLinks.classList.toggle("active");
            event.stopPropagation(); // Evita que el clic se propague al resto de la página
        });

        // Cierra el menú desplegable automáticamente cuando haces clic en una sección (Lugares, Reseñas, etc.)
        const links = navLinks.querySelectorAll("a");
        links.forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
            });
        });
    }
});


// ─────────────────────────────────────────────────────────
// FUNCIONES PARA ABRIR Y CERRAR MODALES
// ─────────────────────────────────────────────────────────
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
    document.body.style.overflow = "auto";
}


// ─────────────────────────────────────────────────────────
// DETECTOR DE CLICS GENERAL (EVENTOS GLOBALES)
// ─────────────────────────────────────────────────────────
window.onclick = function(event) {
    // 1. Cerrar modales al hacer clic fuera del contenido
    const modals = ['modal1', 'modal2', 'modal3'];
    modals.forEach(id => {
        const modal = document.getElementById(id);
        if (modal && event.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });

    // 2. Cerrar el menú desplegable si haces clic en cualquier otra parte de la pantalla
    const navLinks = document.getElementById("navLinks");
    const menuToggle = document.getElementById("menuToggle");
    
    if (navLinks && navLinks.classList.contains("active") && event.target !== menuToggle && !navLinks.contains(event.target)) {
        navLinks.classList.remove("active");
    }
}
// ─────────────────────────────────────────────────────────
// LÓGICA DEL CARRUSEL HERO
// ─────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".carousel-slide");
    const dots = document.querySelectorAll(".dot");
    const prevBtn = document.getElementById("prevSlide");
    const nextBtn = document.getElementById("nextSlide");
    let currentSlide = 0;

    function showSlide(index) {
        // Reiniciar ciclos si se pasa del límite
        if (index >= slides.length) currentSlide = 0;
        else if (index < 0) currentSlide = slides.length - 1;
        else currentSlide = index;

        // Apagar todos los slides y puntitos
        slides.forEach(slide => slide.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));

        // Activar el correspondiente
        slides[currentSlide].classList.add("active");
        dots[currentSlide].classList.add("active");
    }

    // Eventos de botones
    if(nextBtn && prevBtn) {
        nextBtn.addEventListener("click", () => showSlide(currentSlide + 1));
        prevBtn.addEventListener("click", () => showSlide(currentSlide - 1));
    }

    // Eventos de los puntitos de abajo
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => showSlide(index));
    });

    // Cambio automático opcional cada 6 segundos
    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 6000);
});

// ─────────────────────────────────────────────────────────
// VENTANA EMERGENTE (MODAL INTERNO DE IMÁGENES DEL CARRUSEL)
// ─────────────────────────────────────────────────────────
function openImageModal(imageSrc, mapUrl) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalTargetImg");
    const mapBtn = document.getElementById("modalMapBtn");

    if (modal && modalImg && mapBtn) {
        modalImg.src = imageSrc;
        mapBtn.href = mapUrl; // Asigna el enlace de Google Maps personalizado
        modal.style.display = "flex";
        document.body.style.overflow = "hidden"; // Detiene el scroll de la web de fondo
    }
}

function closeImageModal() {
    const modal = document.getElementById("imageModal");
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Devuelve el scroll normal
    }
}