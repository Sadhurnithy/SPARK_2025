let currentSlide = 0;
const slides = document.querySelector('.slider');
const totalSlides = document.querySelectorAll('.slide').length;
const slideWidth = 760; // Adjust based on slide width

function showNextSlide() {
    currentSlide++;

    slides.style.transition = "transform 0.7s ease-in-out";
    slides.style.transform = `translateX(${-currentSlide * slideWidth}px)`;

    // When reaching the cloned slide, reset without transition
    if (currentSlide === totalSlides - 1) {
        setTimeout(() => {
            slides.style.transition = "none";
            slides.style.transform = "translateX(0px)";
            currentSlide = 0;
        }, 700); // Match the transition duration
    }
}

// Auto-slide every 5 seconds
setInterval(showNextSlide, 3000);
