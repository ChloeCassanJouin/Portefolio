document.addEventListener("DOMContentLoaded", function () {
    const imagePaths = [
        "./Assets/Images/letter-of-recommandation/Lettre-recommandation-DromeCailles.png",
        "./Assets/Images/letter-of-recommandation/lettre-reco-OnlyLyon.jpg",
        "./Assets/Images/letter-of-recommandation/lettre-reco-plasticOmnium.jpg"
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
});