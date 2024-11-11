document.addEventListener('DOMContentLoaded', () => { 
    const developerLink = document.querySelector('.link-nav.dev-web');
    console.log(developerLink)
    const chloeLink = document.querySelector('.link-nav.chloe-jouin');
    const contactLink = document.querySelector('.link-nav.contact');
    
    // Initialiser les liens
    developerLink.classList.add('visible');
    chloeLink.classList.add('visible');

    // Gestion de l'événement de défilement
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            // Masquer les deux premiers liens et afficher le lien Contact
            developerLink.classList.remove('visible');
            chloeLink.classList.remove('visible');
            contactLink.classList.add('visible');
        } else {
            // Réafficher les deux premiers liens et masquer le lien Contact
            developerLink.classList.add('visible');
            chloeLink.classList.add('visible');
            contactLink.classList.remove('visible');
        }
    });
});