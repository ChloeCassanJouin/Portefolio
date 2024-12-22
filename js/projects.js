// Fonction pour récupérer les projets à partir du fichier JSON
async function fetchProjects() {
    try {
        const response = await fetch("data/projects.json");
        if (!response.ok) {
            throw new Error("Erreur lors du chargement des projets");
        }
        return await response.json();
    } catch (error) {
        console.error("Erreur :", error);
        return [];
    }
 }

// Fonction pour afficher les projets dans la page
async function displayProjects() {
    const projects = await fetchProjects();
    const projectsGrid = document.getElementById('projects-grid');

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');

        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.images[0]}" alt="${project.title}">
            </div>
            <div class="project-content">
                <h3>${project.title} (${project.year})</h3>
                <div class="tags">
                    ${project.skills.map(skill => `<span>${skill}</span>`).join('')}
                    ${project.tools.map(tool => `<span class="tool">${tool}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.github}" target="_blank">
                        <img src="Assets/Images/Logos/github.png" alt="Github" class="github-logo">
                    </a>
                </div>
            </div>
        `;

        projectCard.addEventListener('click', () => openModal(project));
        projectsGrid.appendChild(projectCard);
    });
}

// Fonction pour ouvrir la modale avec les informations du projet
function openModal(project) {
    const modal = document.getElementById('project-modal');
    modal.style.display = 'flex';

    // Remplir les informations de la modale
    document.getElementById('modal-title-projects').innerText = project.title;
    document.getElementById('modal-description-projects').innerText = project.description;
    document.getElementById('modal-video-projects').src = project.videoUrl;

    // Ajouter l'événement de fermeture de la modale
    document.getElementById('close-modal-projects').onclick = () => closeModal();

    // Fermer la modale lorsqu'on clique à l'extérieur
    window.onclick = (event) => {
        if (event.target === modal) {
            closeModal();
        }
    };

    // Fermer la modale avec la touche Échap
    window.onkeydown = (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    };
}

// Fonction pour fermer et vider la modale
function closeModal() {
    const modal = document.getElementById('project-modal');
    modal.style.display = 'none';

    // Vider le contenu de la modale pour éviter d'afficher des données résiduelles
    document.getElementById('modal-title-projects').innerText = '';
    document.getElementById('modal-description-projects').innerText = '';
    document.getElementById('modal-video-projects').src = '';
}

// Initialisation des projets
document.addEventListener('DOMContentLoaded', displayProjects);