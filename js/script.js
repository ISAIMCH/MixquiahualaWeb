// Funciones para abrir y cerrar modales
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
    document.body.style.overflow = "auto";
}

// Cerrar modal al hacer clic fuera del contenido
window.onclick = function(event) {
    const modals = ['modal1', 'modal2', 'modal3'];
    modals.forEach(id => {
        const modal = document.getElementById(id);
        if (event.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });
}
