document.addEventListener("DOMContentLoaded", function () {
    const imagePaths = [
        "./Assets/Images/letter-of-recommandation/Lettre-recommandation-Info-Reso2.png",
        "./Assets/Images/letter-of-recommandation/Lettre-recommandation-DromeCailles.png",
        "./Assets/Images/letter-of-recommandation/lettre-reco-OnlyLyon.jpg",
        "./Assets/Images/letter-of-recommandation/lettre-reco-plasticOmnium.jpg",
        "./Assets/Images/letter-of-recommandation/lettre-reco-NairodRefab.jpg",
        "./Assets/Images/letter-of-recommandation/lettre-reco-regieSportPromotion.jpg",
        "./Assets/Images/letter-of-recommandation/lettre-reco-SRSRA.jpg"
    ];

    const slidesContainer = document.querySelector(".carousel-slides");

    imagePaths.forEach((path) => {
        const img = document.createElement("img");
        img.src = path;
        img.alt = "Lettre de recommandation";
        img.classList.add("carousel-image");
        slidesContainer.appendChild(img);
    });

    const images = document.querySelectorAll(".carousel-slides img");
    let index = 0;

    function updateSlidePosition() {
        slidesContainer.style.transform = `translateX(-${index * 100}%)`;
        slidesContainer.style.transition = "transform 0.5s ease"; 
    }

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

    setInterval(() => {
        index = (index + 1) % images.length;
        updateSlidePosition();
    }, 3000); 

    const modal = document.querySelector(".modal-avis");
    const modalImage = modal.querySelector(".modal-image-avis");
    const modalClose = modal.querySelector(".modal-close-avis");

    images.forEach((img) => {
        img.addEventListener("click", () => {
            modalImage.src = img.src;
            modalImage.style.display = "block"; 
            modal.style.display = "flex";
        });
    });

    modalClose.addEventListener("click", (event) => {
        event.stopPropagation();
        modal.style.display = "none";
    });

    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});