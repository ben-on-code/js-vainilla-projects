const modalButton = document.querySelector('.modal-btn');
const closeButton = document.querySelector('.close-btn');
const modal = document.querySelector('.modal-overlay');
// const modalContainer = document.querySelector('.modal-container');
const fullmodal = document.querySelector('.fullmodal');

modalButton.addEventListener('click', handleModalButton);
closeButton.addEventListener('click', handleCloseButton);

function handleModalButton() {
    modal.classList.add('open-modal');
}

function handleCloseButton() {
    modal.classList.remove('open-modal');

}

// Close when click outside modal
fullmodal.addEventListener("click", function (event) {
    const isOutside = event.target.closest('.open-modal');

    if (isOutside) {
        handleCloseButton();
    }
});

// Close when press key 'Escape';
window.addEventListener('keydown', function(e) {
    if(e.key === 'Escape'){
        handleCloseButton();
    }
})
