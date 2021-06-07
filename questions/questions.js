
const questions = document.querySelectorAll('.question');

questions.forEach(function(question) {
    const btn = question.querySelector('.question-btn');

    btn.addEventListener('click', toggleClasses);

    // DEFINE FUNCTION
    function toggleClasses() {
        questions.forEach(item => {
            if(item !== question){
                item.classList.remove('show-text');
            }
        })
        question.classList.toggle('show-text')
    }
});




