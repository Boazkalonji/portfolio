// Fermer automatiquement le menu mobile Bootstrap lors d'un clic sur un lien de navigation
const navLinks = document.querySelectorAll('.nav-link:not(.dropdown-toggle)');
const menuToggle = document.getElementById('navbarNav');

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        // On vérifie si le menu mobile est actuellement visible/déplié
        if (menuToggle.classList.contains('show')) {
            const bootstrapCollapse = bootstrap.Collapse.getInstance(menuToggle);
            if (bootstrapCollapse) {
                bootstrapCollapse.hide();
            }
        }
    });
});