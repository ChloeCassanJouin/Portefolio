document.addEventListener("DOMContentLoaded", () => {
    const cvButton = document.getElementById("cv-button");
    const cvPdfPath = "./Assets/CV/CV_Chloe_Jouin.pdf"; 

    function openPdfInNewTab() {
        window.open(cvPdfPath, "_blank"); 
    }

    cvButton.addEventListener("click", openPdfInNewTab);
});
