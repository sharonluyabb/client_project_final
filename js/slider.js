document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const slideCount = slides.children.length;
    let currentIndex = 0;

    function updateSlider() {
        const slideWidth = slides.parentElement.offsetWidth; // get the width of the container
        slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    // right arrow: display next pic
    function showNextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        updateSlider();
    }

    // left arrow: display last pic
    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        updateSlider();
    }

    // Listening to button events
    nextButton.addEventListener('click', showNextSlide);
    prevButton.addEventListener('click', showPrevSlide);

    // initialization position
    updateSlider();

    // Responding to window size changes
    window.addEventListener('resize', () => {
        updateSlider();
    });
 
});
