const showModalButton = document.getElementById("showModal");
const modalElement = document.getElementById("modal");
const closeModalButton = document.getElementById("modalClose");

showModalButton.addEventListener("click", function() {
    modalElement.classList.add("active");
})

closeModalButton.addEventListener("click", function() {
    modalElement.classList.remove("active");
})