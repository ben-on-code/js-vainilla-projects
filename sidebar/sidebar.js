const button = document.querySelector('.sidebar-toggle');
const closeButton = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

button.addEventListener('click', handleToggleButton);
closeButton.addEventListener('click', handleDeleteButton);

function handleToggleButton() {
    sidebar.classList.toggle('show-sidebar');
}

function handleDeleteButton() {
    sidebar.classList.remove('show-sidebar');
}

