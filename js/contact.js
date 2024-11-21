// Récupérer les éléments
const form = document.getElementById("contact-form");
const modal = document.getElementById("message-modal-contact");
const closeModal = document.getElementById("close-modal-contact");
const clearFormButton = document.getElementById("clear-form-contact");

// Lorsque le formulaire est soumis, afficher la modale et vider les champs
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Empêcher l'envoi du formulaire pour test
    modal.style.display = "block"; // Afficher la modale
    
    // Vider les champs du formulaire
    form.reset();
});

// Fermer la modale lorsque l'utilisateur clique sur la croix (X)
closeModal.addEventListener("click", function() {
    modal.style.display = "none";
});

// Fermer la modale et vider les champs lorsque l'utilisateur clique sur "OK"
clearFormButton.addEventListener("click", function() {
    modal.style.display = "none";
    form.reset(); // Vider les champs du formulaire
});

// Réinitialiser les champs du formulaire au rafraîchissement de la page
window.onload = function() {
    form.reset();
};