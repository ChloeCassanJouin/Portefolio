const form = document.getElementById("contact-form");
const modal = document.getElementById("message-modal-contact");
const closeModal1 = document.getElementById("close-modal-contact");
const clearFormButton = document.getElementById("clear-form-contact");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    modal.style.display = "block";
    
    form.reset();
});

closeModal1.addEventListener("click", function() {
    modal.style.display = "none";
});

clearFormButton.addEventListener("click", function() {
    modal.style.display = "none";
    form.reset(); 
});
window.onload = function() {
    form.reset();
};