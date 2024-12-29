document.addEventListener('DOMContentLoaded', () => {
    const audio = new Audio('Assets/music/80s-Delorean-Weeknd-DuaLipa-Pop-Synthwave.mp3'); 

    const toggleButton = document.getElementById('toggle-music-button');
    const iconPlay = toggleButton.querySelector('.icon-play');
    const iconPause = toggleButton.querySelector('.icon-pause');

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

   /* setTimeout(() => {
        audio.play()
            .then(() => {
                iconPlay.style.display = 'inline';
                iconPause.style.display = 'none';
                console.log('La musique a démarré');
            })
            .catch(error => {
                console.error('Erreur lors de la lecture de la musique:', error);
            });
    }, 3000); */

    toggleButton.addEventListener('click', toggleMusic);
});