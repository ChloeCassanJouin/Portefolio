document.addEventListener("DOMContentLoaded", function () {
    const imagePaths = [
        "./Assets/Images/letter-of-recommandation/Lettre-recommandation-DromeCailles.png",
        "./Assets/Images/letter-of-recommandation/lettre-reco-OnlyLyon.jpg",
        "./Assets/Images/letter-of-recommandation/lettre-reco-plasticOmnium.jpg",
        "./Assets/Images/letter-of-recommandation/lettre-reco-NairodRefab.jpg",
        "./Assets/Images/letter-of-recommandation/lettre-reco-regieSportPromotion.jpg",
        "./Assets/Images/letter-of-recommandation/lettre-reco-SRSRA.jpg"
    ];

    const slidesContainer = document.querySelector(".carousel-slides");

    // Ajoute les images dynamiquement
    imagePaths.forEach((path) => {
        const img = document.createElement("img");
        img.src = path;
        img.alt = "Lettre de recommandation";
        slidesContainer.appendChild(img);
    });

    const images = document.querySelectorAll(".carousel-slides img");
    let index = 0;

    function updateSlidePosition() {
        slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    }

    // Boutons de navigation
    const prevButton = document.querySelector(".carousel-prev");
    const nextButton = document.querySelector(".carousel-next");

    prevButton.addEventListener("click", () => {
        index = (index - 1 + images.length) % images.length;
        updateSlidePosition();
    });

    nextButton.addEventListener("click", () => {
        index = (index + 1) % images.length;
        updateSlidePosition();
    });

    // Navigation automatique
    setInterval(() => {
        index = (index + 1) % images.length;
        updateSlidePosition();
    }, 3000); // Change d'image toutes les 3 secondes

    // Sélectionner la modale et ses éléments de contrôle
    const modal = document.querySelector(".modal-avis");
    const modalImage = modal.querySelector(".modal-image-avis");
    const modalClose = modal.querySelector(".modal-close-avis");

    // Ajouter un événement de clic sur les images pour ouvrir la modale
    images.forEach((img) => {
        img.addEventListener("click", () => {
            modalImage.src = img.src; // Affiche l'image agrandie dans la modale
            modal.style.display = "flex"; // Affiche la modale
        });
    });

    // Fermer la modale en cliquant sur la croix
    modalClose.addEventListener("click", (event) => {
        event.stopPropagation(); // Empêche la propagation du clic
        modal.style.display = "none"; // Cache la modale
    });

    // Fermer la modale en cliquant en dehors du contenu
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none"; // Cache la modale
        }
    });
});