  // Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// Set date
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// Close links
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');



// DINAMIC TOGGLE NAVBAR
navToggle.addEventListener('click', handleToggleNavbar);

function handleToggleNavbar() {
    // linksContainer.classList.toggle('show-link');
    const cointainerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    
    if(cointainerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`;
    }else{
        linksContainer.style.height = 0;
    }
}

////////////////////////////////////////////////////////////
// Fixed navbar
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;

    scrollHeight > navHeight
    ? navbar.classList.add('fixed-nav')
    : navbar.classList.remove('fixed-nav');

    // SHOW LA FLECHA TO GO UP AGAIN
    scrollHeight > 500
    ? topLink.classList.add('show-link')
    : topLink.classList.remove('show-link');
});


// ***********Smooth scroll***********
// Select links

const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function(link) {
    link.addEventListener('click', function(e){

        e.preventDefault();
        
        // navigate to specific spot, skip the hashtag with slice method
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);

        // calculate the heights
        const navbarHeight = navbar.getBoundingClientRect().height;
        const cointHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains('fixed-nav');
        let positon = element.offsetTop - navbarHeight;

        // when navbar is not fixed
        if(!fixedNav){ positon = positon - navbarHeight; }
        // when navbar is fixed
        if(navbarHeight > 82) { positon = positon + cointHeight };




        window.scrollTo({
            left:0,
            top: positon,
        });
        // close the toggle navbar
        linksContainer.style.height = 0;
    })
})




