document.addEventListener('DOMContentLoaded', () => { 
    const developerLink = document.querySelector('.link-nav.job');
    const chloeLink = document.querySelector('.link-nav.name');
    const contactLink = document.querySelector('.link-nav.contact');
    
    developerLink.classList.add('visible');
    chloeLink.classList.add('visible');
    contactLink.classList.remove('visible'); 

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            developerLink.classList.remove('visible');
            chloeLink.classList.remove('visible');
            contactLink.classList.add('visible');
        } else {
            developerLink.classList.add('visible');
            chloeLink.classList.add('visible');
            contactLink.classList.remove('visible');
        }
    });
});