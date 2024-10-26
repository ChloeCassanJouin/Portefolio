// Ajout d'un événement de défilement sur le document
document.addEventListener('scroll', function () {
    const menu = document.querySelector('.menu');
    const developerLink = document.querySelector('.link-nav:nth-child(1)');
    const chloeLink = document.querySelector('.link-nav:nth-child(2)');

    // Vérifie la position de défilement
    if (window.scrollY === 0) {
        // Si l'utilisateur est en haut de la page, rendre les liens visibles
        developerLink.style.opacity = '1';
        chloeLink.style.opacity = '1';
        menu.style.justifyContent = 'center'; // Centrer les liens
    } else {
        // Si l'utilisateur défile, cacher les liens
        developerLink.style.opacity = '0';
        chloeLink.style.opacity = '0';
        menu.style.justifyContent = 'space-between'; // Distribuer l'espace
    }
});