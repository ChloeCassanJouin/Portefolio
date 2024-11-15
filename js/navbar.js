document.addEventListener('DOMContentLoaded', () => { 
    const developerLink = document.querySelector('.link-nav.job');
    const chloeLink = document.querySelector('.link-nav.name');
    const contactLink = document.querySelector('.link-nav.contact');
    
    // Initialiser les liens : developerLink et chloeLink sont visibles
    developerLink.classList.add('visible');
    chloeLink.classList.add('visible');
    contactLink.classList.remove('visible');  // Masquer le lien 'contact' au début

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