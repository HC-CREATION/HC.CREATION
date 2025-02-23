function showSidebar() {
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = 'none'
}

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
