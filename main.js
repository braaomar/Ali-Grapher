// Initialize Swiper
const swiper = new Swiper(".mySwiper", {
    // Enable loop
    loop: true,
    
    // Enable autoplay
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    
    // Enable pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    
    // Enable navigation
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        // when window width is >= 1024px
        1024: {
            slidesPerView: 1,
            spaceBetween: 40
        }
    }
});

// Mobile Menu Toggle
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarNav = document.querySelector('.navbar-nav');

navbarToggler.addEventListener('click', () => {
    navbarToggler.classList.toggle('active');
    navbarNav.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navbarToggler.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarToggler.classList.remove('active');
        navbarNav.classList.remove('active');
    }
});

// Close menu when clicking on a nav link
const navLinks = document.querySelectorAll('.navbar-nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbarToggler.classList.remove('active');
        navbarNav.classList.remove('active');
    });
});








