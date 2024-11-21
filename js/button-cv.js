document.addEventListener("DOMContentLoaded", () => {
    const cvButton = document.getElementById("cv-button");
    const cvPdfPath = "./Assets/CV/CV_Chloe_Jouin.pdf"; // Chemin vers le CV PDF

    // Fonction pour ouvrir le PDF dans un nouvel onglet
    function openPdfInNewTab() {
        window.open(cvPdfPath, "_blank"); // Ouvre le fichier PDF dans un nouvel onglet
    }

    // Écouter le clic sur le bouton CV
    cvButton.addEventListener("click", openPdfInNewTab);
});
