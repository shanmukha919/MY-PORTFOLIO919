// Loading Animation
window.addEventListener('load', function() {
    const loader = document.querySelector('.loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 1500);
    }
});

// Custom Cursor
const cursor = document.querySelector('.custom-cursor');
const cursorFollower = document.querySelector('.cursor-follower');

if (cursor && cursorFollower) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(() => {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 100);
    });

    // Add hover effect to interactive elements
    const hoverElements = document.querySelectorAll('a, button, .btn, .menu-toggle, .theme-toggle, .portfolio-box, .tab-links, .social-icon');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
            cursorFollower.classList.add('hover');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
            cursorFollower.classList.remove('hover');
        });
    });
}

// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const html = document.documentElement;

if (themeToggle) {
    // Set initial theme based on preference or default to light
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
        html.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        html.setAttribute('data-theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    themeToggle.addEventListener('click', () => {
        if (html.getAttribute('data-theme') === 'light') {
            html.setAttribute('data-theme', 'dark');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            html.setAttribute('data-theme', 'light');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
    });
}

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

if (menuToggle && navbar) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navbar.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navbar.classList.remove('active');
        });
    });
}

// Sticky Header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (header) {
        header.classList.toggle('sticky', window.scrollY > 0);
    }
});

// Typed.js Animation for Home Section
document.addEventListener('DOMContentLoaded', function() {
    const textAnimate = document.querySelector('.text-animate h3');
    if (textAnimate && typeof Typed !== 'undefined') {
        new Typed('.text-animate h3', {
            strings: ['Frontend Developer', 'Backend Engineer', 'Isometric Engineering Drawing'],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });
    }
});

// Tab Functionality for About Section
function opentab(tabname, event) {
    if (event) event.preventDefault();
    
    const tablinks = document.getElementsByClassName("tab-links");
    const tabcontents = document.getElementsByClassName("tab-contents");
    
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    
    if (event) {
        event.currentTarget.classList.add("active-link");
    }
    
    const tabToOpen = document.getElementById(tabname);
    if (tabToOpen) tabToOpen.classList.add("active-tab");
}

// Animate Skill Bars
function animateSkillBars() {
    const skills = document.querySelectorAll('.skill');
    skills.forEach(skill => {
        const progress = skill.querySelector('.skill-progress');
        if (progress) {
            const percent = progress.getAttribute('data-percent') || '0%';
            progress.style.width = percent;
        }
    });
}

// Animate elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.skill, .portfolio-box');
    const windowHeight = window.innerHeight;
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        
        if (elementPosition < windowHeight - 100) {
            element.classList.add('animate');
            
            if (element.classList.contains('skill')) {
                animateSkillBars();
            }
        }
    });
}

// Initialize animations
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Form Submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formStatus = document.getElementById('form-status');
        
        if (formStatus) {
            // Simulate form submission
            formStatus.textContent = "Message sent successfully!";
            formStatus.classList.add('success');
            formStatus.style.display = 'block';
            
            // Reset form
            setTimeout(() => {
                contactForm.reset();
                formStatus.style.display = 'none';
                formStatus.classList.remove('success');
            }, 3000);
        }
    });
}

// Set current year in footer
const currentYearElement = document.getElementById('current-year');
if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

// Scroll to top button
const scrollTopBtn = document.querySelector('.footer-iconTop a');
if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Ripple effect for buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        const x = e.clientX - e.target.getBoundingClientRect().left;
        const y = e.clientY - e.target.getBoundingClientRect().top;
        
        const ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        this.appendChild(ripples);
        
        setTimeout(() => {
            ripples.remove();
        }, 1000);
    });
});

// Portfolio item hover effect
const portfolioItems = document.querySelectorAll('.portfolio-box');
portfolioItems.forEach(item => {
    const img = item.querySelector('img');
    if (img) {
        item.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.1)';
        });
        
        item.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
        });
    }
});

// Active link highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

if (sections.length && navLinks.length) {
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= (sectionTop - 300)) {
                current = section.getAttribute('id') || '';
            }
        });
        
        navLinks.forEach(link => {
            const href = link.getAttribute('href') || '';
            link.classList.remove('active');
            if (href === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}
// Particles.js Configuration and Initialization
document.addEventListener('DOMContentLoaded', function() {
    // Only load if particles.js is available
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#64ffda" // Using your main color
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false
                },
                "size": {
                    "value": 3,
                    "random": true
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#64ffda",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out"
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "push": {
                        "particles_nb": 4
                    }
                }
            },
            "retina_detect": true
        });
    }
});

