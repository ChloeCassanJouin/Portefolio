document.addEventListener('DOMContentLoaded', () => {
    const developerLink = document.querySelector('.link-nav:nth-child(1)');
    const chloeLink = document.querySelector('.link-nav:nth-child(2)');
    const contactLink = document.querySelector('.link-nav:nth-child(3)');
    
    // Initialiser les liens
    developerLink.classList.add('visible');
    chloeLink.classList.add('visible');

    // Gestion de l'événement de défilement
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            // Masquer les deux premiers liens et afficher le lien Contact
            developerLink.classList.remove('visible');
            chloeLink.classList.remove('visible');
            contactLink.classList.remove('hidden');
        } else {
            // Réafficher les deux premiers liens et masquer le lien Contact
            developerLink.classList.add('visible');
            chloeLink.classList.add('visible');
            contactLink.classList.add('hidden');
        }
    });
});