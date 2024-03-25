
const faqQuestions = document.querySelectorAll('.faq-q');


faqQuestions.forEach((question) => {
    
    question.addEventListener('click', () => {
        
        const answer = question.nextElementSibling;

        const isOpen = answer.classList.contains('active');

        faqQuestions.forEach((q) => {
            const a = q.nextElementSibling;
            const icon = q.querySelector('img');
            if (a !== answer) {
                a.classList.remove('active');
                icon.src = 'assets/images/icon-plus.svg';
            }
        });

    
        answer.classList.toggle('active', !isOpen);

        
        const icon = question.querySelector('img');
        icon.src = isOpen ? 'assets/images/icon-plus.svg' : 'assets/images/icon-minus.svg';
    });
});
