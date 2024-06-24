document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.foto-js-login');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 2600); // Change image every 3 seconds

    // Show the first slide when the page loads
    showSlide(currentIndex);
});
