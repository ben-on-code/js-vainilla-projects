// DOM
const tabButtons = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

// LISTEN THE EVENT AND CALL THE FUNCTION
about.addEventListener('click', handleClick);


// CODE THE FUNCTION
function handleClick(e) {
    const id = e.target.dataset.id;
    if (id) {
        // remove class active from the buttons

        // tabButtons.forEach(removeClassFromButtons);
        tabButtons.forEach(function(tab) {
            tab.classList.remove('active');
            e.target.classList.add('active');
        });

        // hide other articles
        articles.forEach(article => article.classList.remove('active'));

        // get the right content by the target.dataset.id
        const element = document.getElementById(id);
        element.classList.add('active');
    }

    // I could do this but in this case makes no sense because is a short function that can be done directly

    // function removeClassFromButtons(tab) {
    //     tab.classList.remove('active');
    //     e.target.classList.add('active');
    // }
}


