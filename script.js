const sections = document.querySelectorAll('.section');

function checkReveal() {
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 50) {
            section.classList.add('reveal');
        }
    });
}

window.addEventListener('scroll', checkReveal);

// Initial check in case some elements are in the viewport on page load.
checkReveal();
