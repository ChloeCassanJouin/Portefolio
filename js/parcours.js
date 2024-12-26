const parcoursDataUrl = 'data/parcours.json';

fetch(parcoursDataUrl)
    .then(response => response.json())
    .then(data => {
        createCards(data);
        setupFilters(data);
    })
    .catch(error => console.error('Erreur lors du chargement des données :', error));

function createCards(data) {
    const container = document.querySelector('.parcours-container');
    container.innerHTML = ''; 

    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${item.image}" alt="${item.alt}">
            <h3 class="card-job">${item.role}</h3>
            <p class="card-type">${item.type}</p>
            <p class="card-year">${item.year}</p>
        `;
        container.appendChild(card);
    });
}

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