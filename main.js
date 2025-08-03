// Scroll reveal effect

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

document.querySelectorAll('.fade-slide').forEach(el => observer.observe(el));


let currentSlide = 0;

function showSlide(index) {
    const slider = document.getElementById('testimonialSlider');
    const slides = slider.children.length;
    if (index >= slides) currentSlide = 0;
    else if (index < 0) currentSlide = slides - 1;
    else currentSlide = index;
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}


function toggleMenu () {
    document.querySelector('.nav-menu').classList.toggle('active');
}