// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let currentScroll = window.scrollY || document.documentElement.scrollTop;

    // Background & shadow change
    if (currentScroll > 100) {
        navbar.style.background = window.innerWidth <= 768 
            ? 'rgba(255, 255, 255, 0.95)' // light background for mobile
            : 'rgba(15, 23, 42, 0.98)';   // dark background for desktop
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = window.innerWidth <= 768
            ? 'rgba(255, 255, 255, 1)'
            : 'rgba(15, 23, 42, 0.95)';
        navbar.style.boxShadow = 'none';
    }

    // Hide/show navbar based on scroll direction
    if (currentScroll > lastScrollTop && currentScroll > 80) {
        // Scrolling down → hide
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up → show
        navbar.style.transform = 'translateY(0)';
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});


// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.project-card, .skill-category, .stat, .about-content, .contact-content');
    animatedElements.forEach(el => observer.observe(el));
});

// Enhanced Contact Form Functionality
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    const formMessage = document.getElementById('formMessage');
    
    // Add input event listeners for real-time validation
    nameInput.addEventListener('input', function() {
        validateName();
    });
    
    emailInput.addEventListener('input', function() {
        validateEmail();
    });
    
    subjectInput.addEventListener('input', function() {
        validateSubject();
    });
    
    messageInput.addEventListener('input', function() {
        validateMessage();
    });
    
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        if (validateName() && validateEmail() && validateSubject() && validateMessage()) {
            
            emailjs.init("RmfTGz1bOMcceZMJt");

            emailjs.send("service_bal7fh7", "template_fdtgko4", {
                from_name: nameInput.value,
                from_email: emailInput.value,
                subject: subjectInput.value,
                message: messageInput.value,
            }).then(() => {
                showMessage("Message sent successfully!", "success");
                form.reset();
            }, (error) => {
                showMessage("Error: " + error.text, "error");
            });

        } else {
            showMessage("Please fix validation errors.", "error");
        }
    });



    
    function validateName() {
        const nameError = document.getElementById('nameError');
        if (nameInput.value.trim() === '') {
            nameError.style.display = 'block';
            return false;
        } else {
            nameError.style.display = 'none';
            return true;
        }
    }
    
    function validateEmail() {
        const emailError = document.getElementById('emailError');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailRegex.test(emailInput.value)) {
            emailError.style.display = 'block';
            return false;
        } else {
            emailError.style.display = 'none';
            return true;
        }
    }
    
    function validateSubject() {
        const subjectError = document.getElementById('subjectError');
        if (subjectInput.value.trim() === '') {
            subjectError.style.display = 'block';
            return false;
        } else {
            subjectError.style.display = 'none';
            return true;
        }
    }
    
    function validateMessage() {
        const messageError = document.getElementById('messageError');
        if (messageInput.value.trim() === '') {
            messageError.style.display = 'block';
            return false;
        } else {
            messageError.style.display = 'none';
            return true;
        }
    }
    
    function showMessage(text, type) {
        formMessage.textContent = text;
        formMessage.className = 'form-message ' + type;
        formMessage.style.display = 'block';
        
        // Hide message after 5 seconds
        setTimeout(function() {
            formMessage.style.display = 'none';
        }, 5000);
    }
});

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Typing animation for hero title
function typeWriter(element, text, speed = 50) {
    // Create a temporary element to parse the HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = text;
    
    // Extract the plain text and highlight positions
    const plainText = tempDiv.textContent || tempDiv.innerText;
    const name = "Vinayak Khavare";
    const nameStart = plainText.indexOf(name);
    const nameEnd = nameStart + name.length;
    
    let i = 0;
    element.innerHTML = ''; // Clear the element initially
    
    function type() {
        if (i <= plainText.length) {
            // Build the HTML structure at each step
            let html = '';
            
            // Part before the name
            if (nameStart > 0) {
                html += plainText.substring(0, Math.min(i, nameStart));
            }
            
            // The name with highlight
            if (i > nameStart) {
                const highlightText = plainText.substring(
                    nameStart, 
                    Math.min(i, nameEnd)
                );
                if (highlightText.length > 0) {
                    html += `<span class="highlight">${highlightText}</span>`;
                }
            }
            
            // Part after the name
            if (i > nameEnd) {
                html += plainText.substring(nameEnd, i);
            }
            
            element.innerHTML = html;
            i++;
            setTimeout(type, speed);
        } else {
            // Ensure final state has the complete highlighted name
            const finalHTML = plainText.substring(0, nameStart) +
                             `<span class="highlight">${name}</span>` +
                             plainText.substring(nameEnd);
            element.innerHTML = finalHTML;
        }
    }
    
    type();
}

// Initialize typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.innerHTML;
        heroTitle.innerHTML = ''; // Clear it initially
        typeWriter(heroTitle, originalText);
    }
});
// Project card hover effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Skill item hover effects
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.05)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Utility function to debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    // Scroll event handlers here
}, 10);

window.addEventListener('scroll', debouncedScrollHandler); 