document.addEventListener('DOMContentLoaded', () => { 
    const developerLink = document.querySelector('.link-nav.dev-web');
    const chloeLink = document.querySelector('.link-nav.chloe-jouin');
    const contactLink = document.querySelector('.link-nav.contact');
    const aboutLink = document.querySelector('.link-nav.about'); // Nouveau lien à ajouter

    // Initialiser les liens
    developerLink.classList.add('visible');
    chloeLink.classList.add('visible');
    aboutLink.classList.add('visible'); // Si vous voulez que ce lien soit visible par défaut

    // Gestion de l'événement de défilement
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            // Masquer les liens de développement et "Chloé" et afficher le lien Contact
            developerLink.classList.remove('visible');
            chloeLink.classList.remove('visible');
            aboutLink.classList.remove('visible'); // Masquer le lien About
            contactLink.classList.add('visible');
        } else {
            // Réafficher les liens de développement et "Chloé", et masquer le lien Contact
            developerLink.classList.add('visible');
            chloeLink.classList.add('visible');
            aboutLink.classList.add('visible'); // Afficher le lien About
            contactLink.classList.remove('visible');
        }
    });
});