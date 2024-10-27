// Charger les données JSON des projets
async function loadProjects() {
    try {
        const response = await fetch('data/projects.json'); // Chemin vers le fichier JSON
        const projects = await response.json();
        
        // Sélectionner le conteneur pour les projets
        const projectsGrid = document.getElementById('projects-grid');
        
        // Parcourir chaque projet et créer les éléments
        projects.forEach(project => {
            // Création de la carte de projet
            const projectCard = document.createElement('a');
            projectCard.href = project.link;
            projectCard.classList.add('project-card');
            
            // Section de l'image du projet
            const projectImageDiv = document.createElement('div');
            projectImageDiv.classList.add('project-image');
            project.images.forEach(imageUrl => {
                const img = document.createElement('img');
                img.src = imageUrl;
                img.alt = `${project.title} image`;
                projectImageDiv.appendChild(img);
            });
            
            // Contenu de la carte de projet
            const projectContent = document.createElement('div');
            projectContent.classList.add('project-content');
            
            const yearTag = document.createElement('div');
            yearTag.classList.add('year-tag');
            yearTag.textContent = project.year;
            
            const title = document.createElement('h3');
            title.textContent = project.title;
            
            const description = document.createElement('p');
            description.textContent = project.description;
            
            const tagsDiv = document.createElement('div');
            tagsDiv.classList.add('tags');
            project.skills.forEach(skill => {
                const skillSpan = document.createElement('span');
                skillSpan.textContent = skill;
                tagsDiv.appendChild(skillSpan);
            });
            
            // Ajouter les éléments au DOM
            projectContent.appendChild(yearTag);
            projectContent.appendChild(title);
            projectContent.appendChild(description);
            projectContent.appendChild(tagsDiv);
            
            projectCard.appendChild(projectImageDiv);
            projectCard.appendChild(projectContent);
            projectsGrid.appendChild(projectCard);
        });
    } catch (error) {
        console.error('Erreur lors du chargement des projets :', error);
    }
}

// Appeler la fonction pour charger les projets lorsque la page est chargée
document.addEventListener('DOMContentLoaded', loadProjects);