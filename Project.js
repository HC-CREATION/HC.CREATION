// Mobile navigation functionality
const hamburger = document.querySelector('.ham-burger');
const navMenu = document.querySelector('nav ul');
const navLinks = document.querySelectorAll('nav ul li a');

// Testimonial Carousel Functionality
const testimonials = document.querySelectorAll('.testimonial');
const prevBtn = document.querySelector('.testimonial-prev');
const nextBtn = document.querySelector('.testimonial-next');

// Debug logging for element selection
console.log('Testimonials found:', testimonials.length);
console.log('Previous button:', prevBtn);
console.log('Next button:', nextBtn);


const dots = document.querySelectorAll('.testimonial-dot');
let currentIndex = 0;

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
}

function prevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
}

// Auto rotate testimonials every 5 seconds
let autoRotate = setInterval(nextTestimonial, 5000);

// Event listeners for navigation
prevBtn.addEventListener('click', () => {
    clearInterval(autoRotate);
    prevTestimonial();
    autoRotate = setInterval(nextTestimonial, 5000);
});

nextBtn.addEventListener('click', () => {
    clearInterval(autoRotate);
    nextTestimonial();
    autoRotate = setInterval(nextTestimonial, 5000);
});

// Event listeners for dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        clearInterval(autoRotate);
        currentIndex = index;
        showTestimonial(currentIndex);
        autoRotate = setInterval(nextTestimonial, 5000);
    });
});


// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});
