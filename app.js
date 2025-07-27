// SoloLook Website JavaScript
// Premium footwear brand interactive functionality

// Product data from brand collection
const productData = [
    {name: "Classic Red Sneakers", image: "red_sneakers.png", price: "₹4,999", description: "Premium comfort meets bold style", emoji: "👟"},
    {name: "Elegant Black Dress Shoes", image: "black_dress.png", price: "₹6,999", description: "Timeless design for formal occasions", emoji: "👞"},
    {name: "Pure White Casual Shoes", image: "white_casual.png", price: "₹4,799", description: "Clean aesthetic with superior comfort", emoji: "👟"},
    {name: "Royal Blue Running Shoes", image: "blue_running.png", price: "₹5,499", description: "Performance meets style for athletes", emoji: "🏃‍♂️"},
    {name: "Grey Canvas Sneakers", image: "grey_canvas.png", price: "₹3,999", description: "Versatile everyday comfort", emoji: "👟"},
    {name: "Green Training Shoes", image: "green_training.png", price: "₹5,299", description: "Built for intensive workouts", emoji: "🏋️‍♂️"},
    {name: "Brown Leather Loafers", image: "brown_loafers.png", price: "₹7,499", description: "Sophisticated business casual", emoji: "👞"},
    {name: "Orange Skate Shoes", image: "orange_skate.png", price: "₹4,299", description: "Street style with durability", emoji: "🛹"},
    {name: "Maroon Athletic Shoes", image: "maroon_athletic.png", price: "₹5,799", description: "Dynamic performance footwear", emoji: "⚡"},
    {name: "Pink Running Shoes", image: "pink_running.png", price: "₹5,199", description: "Feminine power meets performance", emoji: "💪"},
    {name: "Yellow Canvas Shoes", image: "yellow_canvas.png", price: "₹3,799", description: "Bright energy for daily adventures", emoji: "☀️"},
    {name: "Navy Blue High-tops", image: "royal_blue_high.png", price: "₹5,999", description: "Classic high-top style elevated", emoji: "🏀"},
    {name: "Navy Running Shoes", image: "navy_running.png", price: "₹5,399", description: "Professional athletic performance", emoji: "🏃‍♀️"},
    {name: "Purple Fashion Sneakers", image: "purple_fashion.png", price: "₹4,899", description: "Trendy statement footwear", emoji: "💜"},
    {name: "Silver Metallic Sneakers", image: "silver_metallic.png", price: "₹6,299", description: "Futuristic design meets comfort", emoji: "🌟"},
    {name: "Coral Slip-on Shoes", image: "coral_slipon.png", price: "₹4,199", description: "Effortless style and convenience", emoji: "🌸"},
    {name: "Olive Green Boots", image: "olive_boots.png", price: "₹7,999", description: "Rugged durability with style", emoji: "🥾"},
    {name: "Turquoise Skate Shoes", image: "turquoise_skate.png", price: "₹4,599", description: "Vibrant street culture essential", emoji: "🛹"},
    {name: "Burgundy Ankle Boots", image: "burgundy_boots.png", price: "₹8,299", description: "Premium leather craftsmanship", emoji: "👢"},
    {name: "Tan Derby Shoes", image: "tan_derby.png", price: "₹7,199", description: "Classic formal elegance", emoji: "👞"}
];

// DOM Elements
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const loadingOverlay = document.getElementById('loading-overlay');
const contactForm = document.getElementById('contact-form');
const productsGrid = document.getElementById('products-grid');
const featuredProducts = document.getElementById('featured-products');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeMobileMenu();
    renderProducts();
    renderFeaturedProducts();
    initializeContactForm();
    initializeScrollEffects();
    initializeAnimations();
    
    // Hide loading overlay after initialization
    setTimeout(() => {
        loadingOverlay.classList.remove('active');
    }, 500);
});

// Navigation functionality
function initializeNavigation() {
    // Handle navigation clicks
    document.addEventListener('click', function(e) {
        if (e.target.hasAttribute('data-section')) {
            e.preventDefault();
            const targetSection = e.target.getAttribute('data-section');
            navigateToSection(targetSection);
            
            // Close mobile menu if open
            navMenu.classList.remove('active');
        }
    });

    // Handle browser back/forward buttons
    window.addEventListener('popstate', function(e) {
        const section = e.state ? e.state.section : 'home';
        navigateToSection(section, false);
    });

    // Initialize with home section
    navigateToSection('home', false);
}

function navigateToSection(sectionName, pushState = true) {
    // Show loading overlay briefly for smooth transition
    loadingOverlay.classList.add('active');
    
    setTimeout(() => {
        // Hide all sections
        sections.forEach(section => section.classList.remove('active'));
        
        // Show target section
        const targetSection = document.getElementById(sectionName);
        if (targetSection) {
            targetSection.classList.add('active');
        }
        
        // Update navigation active state
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === sectionName) {
                link.classList.add('active');
            }
        });
        
        // Update browser history
        if (pushState) {
            history.pushState({section: sectionName}, '', `#${sectionName}`);
        }
        
        // Hide loading overlay
        loadingOverlay.classList.remove('active');
        
        // Scroll to top of new section
        window.scrollTo({top: 0, behavior: 'smooth'});
        
        // Trigger section-specific animations
        triggerSectionAnimations(sectionName);
    }, 200);
}

// Mobile menu functionality
function initializeMobileMenu() {
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // Animate hamburger menu
        const spans = navToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            resetHamburgerMenu();
        }
    });
}

function resetHamburgerMenu() {
    const spans = navToggle.querySelectorAll('span');
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
}

// Product rendering functionality
function renderProducts() {
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    
    productData.forEach((product, index) => {
        const productCard = createProductCard(product, index);
        productsGrid.appendChild(productCard);
    });
}

function renderFeaturedProducts() {
    if (!featuredProducts) return;
    
    // Select first 6 products as featured
    const featured = productData.slice(0, 6);
    featuredProducts.innerHTML = '';
    
    featured.forEach((product, index) => {
        const productCard = createProductCard(product, index, true);
        featuredProducts.appendChild(productCard);
    });
}

function createProductCard(product, index, isFeatured = false) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    // Determine gradient based on product name/color
    const gradient = getProductGradient(product.name);
    
    card.innerHTML = `
        <div class="product-image" style="background: ${gradient};">
            <span style="font-size: 3rem;">${product.emoji}</span>
        </div>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <div class="product-price">${product.price}</div>
    `;
    
    // Add hover effect
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) rotateX(5deg)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotateX(0)';
    });
    
    return card;
}

function getProductGradient(productName) {
    const name = productName.toLowerCase();
    
    if (name.includes('red')) return 'linear-gradient(135deg, #FF6B6B, #FF8E53)';
    if (name.includes('black')) return 'linear-gradient(135deg, #2C3E50, #4A6741)';
    if (name.includes('white')) return 'linear-gradient(135deg, #F8F9FA, #E9ECEF)';
    if (name.includes('blue')) return 'linear-gradient(135deg, #3742FA, #2F3542)';
    if (name.includes('grey') || name.includes('gray')) return 'linear-gradient(135deg, #A4B0BE, #747D8C)';
    if (name.includes('green')) return 'linear-gradient(135deg, #2ED573, #1E824C)';
    if (name.includes('brown')) return 'linear-gradient(135deg, #A0826D, #8B4513)';
    if (name.includes('orange')) return 'linear-gradient(135deg, #FF9F43, #FF6348)';
    if (name.includes('maroon')) return 'linear-gradient(135deg, #800020, #A0002A)';
    if (name.includes('pink')) return 'linear-gradient(135deg, #FF6B9D, #FF8CC8)';
    if (name.includes('yellow')) return 'linear-gradient(135deg, #FFC048, #FFDD59)';
    if (name.includes('navy')) return 'linear-gradient(135deg, #1E3A8A, #1E40AF)';
    if (name.includes('purple')) return 'linear-gradient(135deg, #8B5CF6, #A78BFA)';
    if (name.includes('silver')) return 'linear-gradient(135deg, #C0C0C0, #E5E7EB)';
    if (name.includes('coral')) return 'linear-gradient(135deg, #FF7F7F, #FF6B9D)';
    if (name.includes('olive')) return 'linear-gradient(135deg, #808000, #6B7280)';
    if (name.includes('turquoise')) return 'linear-gradient(135deg, #40E0D0, #00CED1)';
    if (name.includes('burgundy')) return 'linear-gradient(135deg, #800020, #900025)';
    if (name.includes('tan')) return 'linear-gradient(135deg, #D2B48C, #DEB887)';
    
    // Default gradient
    return 'linear-gradient(135deg, #D4AC0D, #F7DC6F)';
}

// Contact form functionality
function initializeContactForm() {
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };
        
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission (in real app, this would go to a server)
        setTimeout(() => {
            // Create mailto link as fallback
            const mailtoLink = `mailto:info@sololook.com?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`)}`;
            
            // Open email client
            window.open(mailtoLink);
            
            // Show success message
            showNotification('Message sent! Your email client should open with the pre-filled message.', 'success');
            
            // Reset form
            contactForm.reset();
            
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#2ED573' : '#FF6B6B'};
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        font-weight: 500;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Scroll effects
function initializeScrollEffects() {
    let lastScrollY = window.scrollY;
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        // Header hide/show on scroll
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
        
        // Add scroll class to header
        if (currentScrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Animation triggers
function initializeAnimations() {
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .fade-in {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease;
        }
        
        .fade-in.animate {
            opacity: 1;
            transform: translateY(0);
        }
        
        .product-card {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease;
        }
        
        .product-card.animate {
            opacity: 1;
            transform: translateY(0);
        }
        
        .header.scrolled {
            background: rgba(15, 20, 25, 0.98);
            box-shadow: 0 2px 20px rgba(0,0,0,0.1);
        }
    `;
    document.head.appendChild(style);
}

function triggerSectionAnimations(sectionName) {
    const section = document.getElementById(sectionName);
    if (!section) return;
    
    const animatableElements = section.querySelectorAll('.product-card, .fade-in, .value-item');
    
    animatableElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('animate');
        }, index * 100);
    });
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe elements when they come into view
document.addEventListener('DOMContentLoaded', () => {
    const observeElements = document.querySelectorAll('.product-card, .value-item');
    observeElements.forEach(el => observer.observe(el));
});

// Smooth scroll polyfill for older browsers
function smoothScrollTo(target) {
    const targetElement = document.querySelector(target);
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
        resetHamburgerMenu();
    }
    
    // Arrow keys for navigation (when not in form)
    if (!e.target.matches('input, textarea, select')) {
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            const currentSection = document.querySelector('.section.active');
            const allSections = Array.from(sections);
            const currentIndex = allSections.indexOf(currentSection);
            
            let nextIndex;
            if (e.key === 'ArrowLeft') {
                nextIndex = currentIndex > 0 ? currentIndex - 1 : allSections.length - 1;
            } else {
                nextIndex = currentIndex < allSections.length - 1 ? currentIndex + 1 : 0;
            }
            
            const nextSection = allSections[nextIndex];
            if (nextSection) {
                navigateToSection(nextSection.id);
            }
        }
    }
});

// Performance optimization: Debounced resize handler
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

const debouncedResize = debounce(() => {
    // Handle responsive adjustments if needed
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
        resetHamburgerMenu();
    }
}, 250);

window.addEventListener('resize', debouncedResize);

// Export functions for potential external use
window.SoloLook = {
    navigateToSection,
    showNotification,
    productData
};