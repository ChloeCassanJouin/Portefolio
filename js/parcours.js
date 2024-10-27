// Fonction pour charger les données JSON du parcours
async function loadParcours() {
    try {
        const response = await fetch('data/parcours.json'); // Chemin vers le fichier JSON
        const parcours = await response.json();
        
        // Sélectionner le conteneur pour les éléments de parcours
        const parcoursContent = document.getElementById('parcours-content');
        
        // Parcourir chaque élément de parcours et créer les éléments
        parcours.forEach(item => {
            // Création du conteneur de chaque élément de parcours
            const parcoursItem = document.createElement('div');
            parcoursItem.classList.add('parcours-item');
            
            // Image
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.alt;
            img.classList.add('parcours-logo');
            
            // Type de parcours (ex. Formation, Stage)
            const type = document.createElement('p');
            type.textContent = item.type;
            
            // Rôle ou poste
            const role = document.createElement('p');
            role.textContent = item.role;
            
            // Année
            const year = document.createElement('p');
            year.textContent = item.year;
            
            // Ajouter les éléments dans le conteneur de parcours
            parcoursItem.appendChild(img);
            parcoursItem.appendChild(type);
            parcoursItem.appendChild(role);
            parcoursItem.appendChild(year);
            
            // Ajouter l'élément au conteneur principal
            parcoursContent.appendChild(parcoursItem);
        });
    } catch (error) {
        console.error('Erreur lors du chargement du parcours :', error);
    }
}

// Appeler la fonction pour charger le parcours lorsque la page est chargée
document.addEventListener('DOMContentLoaded', loadParcours);