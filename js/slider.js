let currentIndex = 0; // Index de la carte actuelle

async function loadParcours() {
    try {
        const response = await fetch('data/parcours.json');
        const parcours = await response.json();

        const parcoursContent = document.getElementById('parcours-content');

        // Créer et ajouter chaque élément de parcours
        parcours.forEach((item) => {
            const parcoursItem = document.createElement('div');
            parcoursItem.classList.add('parcours-item');

            // Image
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.alt;
            img.classList.add('parcours-logo');

            // Type de parcours
            const type = document.createElement('p');
            type.textContent = item.type;

            // Rôle ou poste
            const role = document.createElement('p');
            role.textContent = item.role;

            // Année
            const year = document.createElement('p');
            year.textContent = item.year;

            // Ajouter les éléments dans l'élément de parcours
            parcoursItem.appendChild(img);
            parcoursItem.appendChild(type);
            parcoursItem.appendChild(role);
            parcoursItem.appendChild(year);

            // Ajouter au conteneur principal
            parcoursContent.appendChild(parcoursItem);
        });

        // Centrer la première carte
        updateCarousel();
    } catch (error) {
        console.error('Erreur lors du chargement du parcours :', error);
    }
}

// Fonction pour déplacer le carrousel
function moveCarousel(direction) {
    const parcoursContent = document.getElementById('parcours-content');
    const totalItems = parcoursContent.children.length;

    // Calculer le nouvel index de la carte actuelle
    currentIndex = (currentIndex + direction + totalItems) % totalItems;

    updateCarousel();
}

// Mettre à jour l'affichage du carrousel
function updateCarousel() {
    const parcoursContent = document.getElementById('parcours-content');
    const itemWidth = parcoursContent.children[0].offsetWidth + 20; // Inclut l'espacement entre les items

    // Déplacer le carrousel pour afficher la carte actuelle
    parcoursContent.style.transform = `translateX(-${currentIndex * itemWidth}px)`; // Centrer sur l'ID 0
}

// Ajouter les événements pour les chevrons
document.addEventListener('DOMContentLoaded', () => {
    loadParcours();

    document.querySelector('.carousel-chevron.left').addEventListener('click', () => {
        moveCarousel(-1); // Déplacer à gauche
    });

    document.querySelector('.carousel-chevron.right').addEventListener('click', () => {
        moveCarousel(1); // Déplacer à droite
    });
});