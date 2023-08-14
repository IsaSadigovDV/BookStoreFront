// Get the modal and the button that opens it
var modal = document.getElementById("cartModal");
var addToCartButton = document.getElementById("addToCartButton");

// When the user clicks the "Add to Cart" button, open the modal
addToCartButton.addEventListener("click", function() {
    modal.style.display = "block";
});

// When the user clicks on the close icon, close the modal
var closeIcon = document.querySelector(".modal-heading i");
closeIcon.addEventListener("click", function() {
    modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});