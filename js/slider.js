// Fonction pour charger les données JSON à partir d'un fichier externe
async function loadJSONData(file) {
    try {
        const response = await fetch(file); // Chargement du fichier JSON
        if (!response.ok) {
            throw new Error('Erreur de chargement du fichier JSON');
        }
        return await response.json();
    } catch (error) {
        console.error('Erreur:', error);
        return [];
    }
}

// Fonction pour insérer les items dans un carousel
function createCarouselItems(data, containerId) {
    const container = document.getElementById(containerId);
    data.forEach(item => {
        const carouselItem = document.createElement('div');
        carouselItem.classList.add('parcours-item');
        carouselItem.innerHTML = `
            <img src="${item.image}" alt="${item.alt}" class="parcours-logo">
            <h3>${item.type}</h3>
            <p>${item.role}</p>
            <p>${item.year}</p>
        `;
        container.appendChild(carouselItem);
    });
}

// Fonction pour faire défiler les carousels
function setupCarouselNavigation() {
    const leftButtons = document.querySelectorAll('.carousel-chevron.left');
    const rightButtons = document.querySelectorAll('.carousel-chevron.right');
    const carousels = document.querySelectorAll('.carousel-content');

    // Ajoute un événement aux chevrons gauche
    leftButtons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            const itemWidth = carousels[index].querySelector('.parcours-item').offsetWidth; // Largeur d'un item
            carousels[index].scrollBy({ left: -itemWidth, behavior: 'smooth' }); // Défilement vers la gauche
        });
    });

    // Ajoute un événement aux chevrons droit
    rightButtons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            const itemWidth = carousels[index].querySelector('.parcours-item').offsetWidth; // Largeur d'un item
            carousels[index].scrollBy({ left: itemWidth, behavior: 'smooth' }); // Défilement vers la droite
        });
    });
}

// Chargement des données pour les deux carousels
async function initCarousels() {
    // Chargement des données JSON pour chaque carousel
    const postdevData = await loadJSONData('./data/parcours-postdev.json'); // Charger le fichier pour le premier carousel
    const predevData = await loadJSONData('./data/parcours-predev.json'); // Charger le fichier pour le deuxième carousel

    // Insérer les données dans les carousels respectifs
    createCarouselItems(postdevData, 'parcours-content'); // Insérer dans le premier carousel
    createCarouselItems(predevData, 'parcours-content-second'); // Insérer dans le second carousel

    // Initialiser la navigation des carousels
    setupCarouselNavigation();
}

// Lancer l'initialisation des carousels
initCarousels();