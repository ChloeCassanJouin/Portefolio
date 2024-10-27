// Attendre que le document soit complètement chargé
document.addEventListener('DOMContentLoaded', () => {
    // Créer un nouvel élément audio
    const audio = new Audio('Assets/music/(FREE) 80s Type Beat - Delorean  The Weeknd x Dua Lipa Pop Synthwave.mp3'); // Remplacez par le chemin de votre fichier audio

    // Démarrer la musique après 3 secondes
    setTimeout(() => {
        audio.play()
            .then(() => {
                console.log('La musique a démarré');
            })
            .catch(error => {
                console.error('Erreur lors de la lecture de la musique:', error);
            });
    }, 3000); // Délai de 3000 ms (3 secondes)
});