// Fonction pour masquer progressivement le loader après 1 seconde d'affichage
window.addEventListener("load", () => {
    setTimeout(() => {
        const loader = document.getElementById("loader");
        const content = document.getElementById("content");
        
        loader.style.transition = "opacity 1s ease";
        loader.style.opacity = "0"; // Applique une transition de fondu

        setTimeout(() => {
            loader.style.display = "none"; // Cache le loader après le fondu
            content.style.display = "block"; // Affiche le contenu principal
        }, 1000); // Attend 1 seconde pour que le fondu s'achève
    }, 3000); // 1000 ms = 1 sec
});