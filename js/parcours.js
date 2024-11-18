// Emplacement de ton fichier JSON
const parcoursDataUrl = './data/parcours.json';


// Chargement des données et initialisation
fetch(parcoursDataUrl)
    .then(response => response.json())
    .then(data => {
        createCards(data);
        setupFilters(data);
    })
    .catch(error => console.error('Erreur lors du chargement des données :', error));

// Fonction pour créer les cards
function createCards(data) {
    const container = document.querySelector('.parcours-container');
    container.innerHTML = ''; // Nettoie le conteneur avant d'ajouter les nouvelles cards

    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${item.image}" alt="${item.alt}">
            <h3>${item.role}</h3>
            <p>Type : ${item.type}</p>
            <p>Année : ${item.year}</p>
            <p>Domaine : ${item.domaine}</p>
        `;
        container.appendChild(card);
    });
}

// Fonction pour configurer les filtres
function setupFilters(data) {
    const buttons = document.querySelectorAll('.filter-buttons button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;

            if (filter === 'Tous') {
                createCards(data);
            } else {
                const filteredData = data.filter(item => item.domaine === filter);
                createCards(filteredData);
            }
        });
    });
}