// Attendre que le document soit complètement chargé
document.addEventListener('DOMContentLoaded', () => {
    // Créer un nouvel élément audio
    const audio = new Audio('Assets/music/(FREE) 80s Type Beat - Delorean  The Weeknd x Dua Lipa Pop Synthwave.mp3'); // Remplacez par le chemin de votre fichier audio

    // Sélectionner le bouton et les icônes
    const toggleButton = document.getElementById('toggle-music-button');
    const iconPlay = toggleButton.querySelector('.icon-play');
    const iconPause = toggleButton.querySelector('.icon-pause');

    // Fonction pour démarrer ou arrêter la musique et basculer les icônes
    function toggleMusic() {
        if (audio.paused) {
            audio.play().then(() => {
                iconPlay.style.display = 'inline';
                iconPause.style.display = 'none';
            }).catch(error => {
                console.error('Erreur lors de la lecture de la musique:', error);
            });
        } else {
            audio.pause();
            iconPlay.style.display = 'none';
            iconPause.style.display = 'inline';
        }
    }

    // Démarrer la musique après 3 secondes
    setTimeout(() => {
        audio.play()
            .then(() => {
                iconPlay.style.display = 'inline';
                iconPause.style.display = 'none';
                console.log('La musique a démarré');
            })
            .catch(error => {
                console.error('Erreur lors de la lecture de la musique:', error);
            });
    }, 3000);

    // Ajouter un écouteur d'événement pour basculer la musique au clic
    toggleButton.addEventListener('click', toggleMusic);
});