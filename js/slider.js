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

    // Ajout dynamique des images
    imagePaths.forEach((path) => {
        const img = document.createElement("img");
        img.src = path;
        img.alt = "Lettre de recommandation";
        img.classList.add("carousel-image"); // Ajout d'une classe pour un ciblage précis
        slidesContainer.appendChild(img);
    });

    const images = document.querySelectorAll(".carousel-slides img");
    let index = 0;

    function updateSlidePosition() {
        slidesContainer.style.transform = `translateX(-${index * 100}%)`;
        slidesContainer.style.transition = "transform 0.5s ease"; // Transition fluide
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

    // Gestion de la modale
    const modal = document.querySelector(".modal-avis");
    const modalImage = modal.querySelector(".modal-image-avis");
    const modalClose = modal.querySelector(".modal-close-avis");

    // Affichage de la modale au clic sur une image
    images.forEach((img) => {
        img.addEventListener("click", () => {
            modalImage.src = img.src;
            modalImage.style.display = "block"; // S'assurer que l'image est visible
            modal.style.display = "flex"; // Afficher la modale avec flex
        });
    });

    // Fermeture de la modale au clic sur la croix
    modalClose.addEventListener("click", (event) => {
        event.stopPropagation();
        modal.style.display = "none";
    });

    // Fermeture de la modale au clic en dehors du contenu
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});