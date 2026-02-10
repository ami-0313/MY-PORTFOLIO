// BURGER MENU
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav ul');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// SECTION FADE-IN ANIMATION
const sections = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
            if(entry.target.id === 'skills'){
                // Animate skill bars
                document.querySelectorAll('.skill-fill').forEach(bar => {
                    bar.style.width = bar.style.width;
                });
            }
        }
    });
},{threshold: 0.2});

sections.forEach(section => observer.observe(section));

// NAV ACTIVE HIGHLIGHT
const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if(pageYOffset >= sectionTop){
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href') === '#' + current){
            link.classList.add('active');
        }
    });
});

// CONTACT FORM SUBMIT
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    form.reset();
});

// HERO SLIDER
const slides = document.querySelectorAll('.hero-slider .slide');
let currentSlide = 0;

function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Initialize first slide
slides[0].classList.add('active');

// Change slide every 5 seconds
setInterval(showNextSlide, 5000);
