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

function openModal(project) {
    const modal = document.getElementById('project-modal');
    modal.style.display = 'flex';

    document.getElementById('modal-title-projects').innerText = project.title;
    document.getElementById('modal-description-projects').innerText = project.description;
    document.getElementById('modal-video-projects').src = project.videoUrl;

    document.getElementById('close-modal-projects').onclick = () => closeModal();

    window.onclick = (event) => {
        if (event.target === modal) {
            closeModal();
        }
    };

    window.onkeydown = (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    };
}

function closeModal() {
    const modal = document.getElementById('project-modal');
    modal.style.display = 'none';

    document.getElementById('modal-title-projects').innerText = '';
    document.getElementById('modal-description-projects').innerText = '';
    document.getElementById('modal-video-projects').src = '';
}

document.addEventListener('DOMContentLoaded', displayProjects);