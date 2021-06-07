// VIDEO SWITCH BUTTONS
const switchButton = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');

switchButton.addEventListener('click', handleSwitchButton);

// SWITCH FUNCTION
function handleSwitchButton() {
    if(!switchButton.classList.contains('slide')){
        switchButton.classList.add('slide');
        video.pause();
    }else{
        switchButton.classList.remove('slide');
        video.play();
    }
}

// PRELOADER
const preloader = document.querySelector('.preloader');

window.addEventListener('load', () => {
    setTimeout(handlePreloader, 1000)
})

// PRELOADER FUNCTION
function handlePreloader() {
    preloader.classList.add('hide-preloader');
}


