const hambg = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

hambg.addEventListener('click', handleClick);


function handleClick() {
    links.classList.toggle('show-links');
}