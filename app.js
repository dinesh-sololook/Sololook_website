// SoloLook Premium Shoe Website - JavaScript
// Enhanced functionality with luxury animations and interactions

// Global variables
let currentPage = 'home';
let isAnimating = false;
let animationTimeouts = [];

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 SoloLook Premium Website Initializing...');
    
    // Initialize core functionality
    initializeWebsite();
    
    // Set up event listeners
    setupEventListeners();
    
    // Initialize performance optimizations
    initializePerformanceOptimizations();
    
    // Show home page by default
    setTimeout(() => {
        showPage('home');
    }, 100);
    
    console.log('✨ SoloLook Website Initialized Successfully!');
});

// Main initialization function
function initializeWebsite() {
    // Add loading animations
    addLoadingAnimations();
    
    // Initialize floating particles
    initializeFloatingParticles();
    
    // Setup intersection observers for scroll animations
    setupScrollAnimations();
    
    // Initialize 3D card effects
    initialize3DEffects();
    
    // Preload critical resources
    preloadCriticalResources();
}

// Page Navigation System - Fixed Version
function showPage(pageId) {
    console.log('Attempting to show page:', pageId);
    
    if (isAnimating) {
        console.log('Animation in progress, skipping navigation');
        return;
    }
    
    isAnimating = true;
    
    // Clear previous timeouts
    clearAnimationTimeouts();
    
    // Get all pages
    const pages = document.querySelectorAll('.page');
    const targetPageElement = document.getElementById(pageId + '-page');
    
    if (!targetPageElement) {
        console.error('Target page not found:', pageId + '-page');
        isAnimating = false;
        return;
    }
    
    console.log('Found target page:', targetPageElement);
    
    // Hide all pages immediately
    pages.forEach(page => {
        page.classList.remove('active');
        page.style.display = 'none';
        page.style.opacity = '0';
    });
    
    // Show target page
    targetPageElement.style.display = 'block';
    targetPageElement.classList.add('active');
    
    // Fade in animation
    setTimeout(() => {
        targetPageElement.style.transition = 'opacity 0.5s ease-in-out';
        targetPageElement.style.opacity = '1';
        
        // Initialize page-specific features after a short delay
        setTimeout(() => {
            initializePageFeatures(pageId);
            isAnimating = false;
            console.log('Page navigation completed:', pageId);
        }, 100);
    }, 50);
    
    // Update navigation
    updateNavigation(pageId);
    
    // Scroll to top
    scrollToTop();
    
    // Close mobile menu
    closeMobileMenu();
    
    currentPage = pageId;
}

// Update navigation active state
function updateNavigation(pageId) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Find and activate the correct nav link
    navLinks.forEach(link => {
        const onclick = link.getAttribute('onclick');
        if (onclick && onclick.includes(`'${pageId}'`)) {
            link.classList.add('active');
        }
    });
}

// Initialize page-specific features
function initializePageFeatures(pageId) {
    console.log('Initializing features for page:', pageId);
    
    switch (pageId) {
        case 'home':
            initializeHomeAnimations();
            break;
        case 'products':
            initializeProductsPage();
            break;
        case 'collections':
            initializeCollectionsPage();
            break;
        case 'contact':
            initializeContactForm();
            break;
        case 'about':
            initializeAboutPage();
            break;
        case 'brand':
            initializeBrandPage();
            break;
        case 'size-guide':
            initializeSizeGuide();
            break;
        default:
            console.log('No specific initialization for page:', pageId);
    }
}

// Mobile Navigation
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    
    if (navMenu && hamburger) {
        const isActive = navMenu.classList.contains('mobile-active');
        
        if (isActive) {
            navMenu.classList.remove('mobile-active');
            hamburger.classList.remove('active');
            document.body.style.overflow = '';
        } else {
            navMenu.classList.add('mobile-active');
            hamburger.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Animate menu items
            const navLinks = navMenu.querySelectorAll('.nav-link');
            navLinks.forEach((link, index) => {
                link.style.opacity = '0';
                link.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    link.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                    link.style.opacity = '1';
                    link.style.transform = 'translateY(0)';
                }, (index + 1) * 100);
            });
        }
    }
}

function closeMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    
    if (navMenu && hamburger) {
        navMenu.classList.remove('mobile-active');
        hamburger.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Home Page Animations
function initializeHomeAnimations() {
    console.log('Initializing home page animations');
    
    // Animate hero elements
    animateHeroElements();
    
    // Initialize collection cards hover effects
    initializeCollectionCards();
    
    // Initialize testimonial animations
    initializeTestimonialAnimations();
}

function animateHeroElements() {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const ctaButton = document.querySelector('.cta-button');
    
    // Animate hero title
    if (heroTitle) {
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            heroTitle.style.transition = 'all 1s cubic-bezier(0.4, 0, 0.2, 1)';
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 200);
    }
    
    // Animate hero subtitle
    if (heroSubtitle) {
        heroSubtitle.style.opacity = '0';
        heroSubtitle.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroSubtitle.style.transition = 'all 1s cubic-bezier(0.4, 0, 0.2, 1)';
            heroSubtitle.style.opacity = '1';
            heroSubtitle.style.transform = 'translateY(0)';
        }, 500);
    }
    
    // Animate CTA button
    if (ctaButton) {
        ctaButton.style.opacity = '0';
        ctaButton.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            ctaButton.style.transition = 'all 1s cubic-bezier(0.4, 0, 0.2, 1)';
            ctaButton.style.opacity = '1';
            ctaButton.style.transform = 'translateY(0)';
        }, 800);
    }
}

function initializeCollectionCards() {
    const collectionCards = document.querySelectorAll('.collection-card');
    
    collectionCards.forEach((card, index) => {
        // Initial state
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px) scale(0.9)';
        
        // Animate in with delay
        setTimeout(() => {
            card.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
        }, 1000 + (index * 200));
        
        // Enhanced hover effects
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.05)';
            
            const icon = card.querySelector('.collection-icon');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(5deg)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            
            const icon = card.querySelector('.collection-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
}

function initializeTestimonialAnimations() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    testimonialCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 1500 + (index * 150));
    });
}

// Products Page
function initializeProductsPage() {
    console.log('Initializing products page');
    initializeProductCards();
    initializeProductFilters();
    initializeShopButtons();
}

function initializeProductCards() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach((card, index) => {
        // Initial animation
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px) scale(0.9)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
        }, index * 150);
        
        // 3D hover effects
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            const product3d = card.querySelector('.product-3d');
            if (product3d) {
                product3d.style.transform = `
                    perspective(1000px) 
                    rotateX(${rotateX}deg) 
                    rotateY(${rotateY}deg) 
                    translateZ(20px)
                `;
            }
        });
        
        card.addEventListener('mouseleave', () => {
            const product3d = card.querySelector('.product-3d');
            if (product3d) {
                product3d.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
            }
        });
    });
}

function initializeProductFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter products
            const filterValue = button.textContent.trim();
            filterProducts(filterValue);
        });
    });
}

function filterProducts(category) {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach((card, index) => {
        const cardCategory = card.getAttribute('data-category');
        const shouldShow = category === 'All' || category === 'all' || cardCategory === category;
        
        if (shouldShow) {
            card.classList.remove('filtered');
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'scale(1) translateY(0)';
                card.style.pointerEvents = 'auto';
            }, index * 50);
        } else {
            card.classList.add('filtered');
            card.style.opacity = '0.3';
            card.style.transform = 'scale(0.9) translateY(10px)';
            card.style.pointerEvents = 'none';
        }
    });
    
    console.log('Products filtered by:', category);
}

function initializeShopButtons() {
    const shopButtons = document.querySelectorAll('.shop-btn');
    
    shopButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Create ripple effect
            createRippleEffect(e, button);
            
            // Get product info
            const productCard = button.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            const price = productCard.querySelector('.price').textContent;
            
            // Animate button
            const originalText = button.innerHTML;
            button.innerHTML = '<span>Adding...</span>';
            button.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                button.innerHTML = '<span>✓ Added!</span>';
                button.style.background = '#28a745';
                button.style.transform = 'scale(1.05)';
                
                // Show notification
                showNotification(`${productName} (${price}) added to cart!`, 'success');
                
                // Reset button
                setTimeout(() => {
                    button.innerHTML = originalText;
                    button.style.background = '';
                    button.style.transform = 'scale(1)';
                }, 2000);
            }, 1000);
        });
    });
}

// Collections Page
function initializeCollectionsPage() {
    console.log('Initializing collections page');
    const collectionCards = document.querySelectorAll('.detailed-collection-card');
    
    collectionCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
        
        // Animate features list
        const features = card.querySelectorAll('.collection-features li');
        features.forEach((feature, featureIndex) => {
            feature.style.opacity = '0';
            feature.style.transform = 'translateX(-20px)';
            
            setTimeout(() => {
                feature.style.transition = 'all 0.4s ease';
                feature.style.opacity = '1';
                feature.style.transform = 'translateX(0)';
            }, (index * 200) + 500 + (featureIndex * 100));
        });
    });
}

// Contact Form
function initializeContactForm() {
    console.log('Initializing contact form');
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        const inputs = contactForm.querySelectorAll('input, textarea, select');
        
        // Enhanced input focus effects
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentNode.style.transform = 'scale(1.02)';
            });
            
            input.addEventListener('blur', () => {
                input.parentNode.style.transform = 'scale(1)';
                validateField(input);
            });
        });
        
        // Form submission
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Validate form
            if (!validateForm(contactForm)) {
                showNotification('Please fill in all required fields correctly.', 'error');
                return;
            }
            
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalContent = submitBtn.innerHTML;
            
            // Show loading state
            submitBtn.innerHTML = '<span>Sending...</span>';
            submitBtn.style.background = 'rgba(212, 172, 13, 0.7)';
            submitBtn.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                submitBtn.innerHTML = '<span>✓ Message Sent!</span>';
                submitBtn.style.background = '#28a745';
                
                setTimeout(() => {
                    showSuccessModal();
                    contactForm.reset();
                    submitBtn.innerHTML = originalContent;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                }, 1000);
            }, 2000);
        });
    }
}

function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });
    
    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    const fieldType = field.type;
    let isValid = true;
    
    if (field.hasAttribute('required') && !value) {
        isValid = false;
    } else if (fieldType === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        isValid = emailRegex.test(value);
    }
    
    // Visual feedback
    if (isValid) {
        field.style.borderColor = '#28a745';
    } else {
        field.style.borderColor = '#dc3545';
    }
    
    return isValid;
}

// About Page
function initializeAboutPage() {
    console.log('Initializing about page');
    const statCards = document.querySelectorAll('.stat-card');
    
    statCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px) scale(0.9)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
            
            // Animate numbers
            const numberElement = card.querySelector('.stat-number');
            if (numberElement) {
                animateNumber(numberElement);
            }
        }, index * 200);
    });
}

function animateNumber(element) {
    const text = element.textContent;
    const number = parseInt(text.replace(/\D/g, ''));
    const suffix = text.replace(/[\d,]/g, '');
    
    let current = 0;
    const increment = number / 50;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= number) {
            element.textContent = number.toLocaleString() + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString() + suffix;
        }
    }, 40);
}

// Brand Page
function initializeBrandPage() {
    console.log('Initializing brand page');
    const valueCards = document.querySelectorAll('.value-card');
    
    valueCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px) scale(0.9)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
        }, index * 200);
    });
}

// Size Guide
function initializeSizeGuide() {
    console.log('Initializing size guide');
    const tableRows = document.querySelectorAll('tbody tr');
    const steps = document.querySelectorAll('.step');
    
    // Animate table rows
    tableRows.forEach((row, index) => {
        row.style.opacity = '0';
        row.style.transform = 'translateX(-20px)';
        
        setTimeout(() => {
            row.style.transition = 'all 0.4s ease';
            row.style.opacity = '1';
            row.style.transform = 'translateX(0)';
        }, index * 100);
    });
    
    // Animate steps
    steps.forEach((step, index) => {
        step.style.opacity = '0';
        step.style.transform = 'translateX(30px)';
        
        setTimeout(() => {
            step.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
            step.style.opacity = '1';
            step.style.transform = 'translateX(0)';
        }, 500 + (index * 150));
    });
}

// Modal Functions
function showSuccessModal() {
    const modal = document.getElementById('success-modal');
    if (modal) {
        modal.classList.remove('hidden');
        
        const content = modal.querySelector('.modal-content');
        content.style.transform = 'scale(0.8) translateY(-50px)';
        content.style.opacity = '0';
        
        setTimeout(() => {
            content.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
            content.style.transform = 'scale(1) translateY(0)';
            content.style.opacity = '1';
        }, 50);
    }
}

function closeModal() {
    const modal = document.getElementById('success-modal');
    if (modal) {
        const content = modal.querySelector('.modal-content');
        content.style.transform = 'scale(0.8) translateY(-50px)';
        content.style.opacity = '0';
        
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    }
}

// Utility Functions
function createRippleEffect(event, element) {
    const ripple = document.createElement('div');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
        z-index: 1;
    `;
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    setTimeout(() => {
        if (ripple.parentNode) {
            ripple.remove();
        }
    }, 600);
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    const colors = {
        success: '#28a745',
        error: '#dc3545',
        info: '#D4AC0D'
    };
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${colors[type]};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 15px;
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
        z-index: 1500;
        transform: translateX(400px);
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        max-width: 350px;
        font-weight: 500;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 400);
    }, 4000);
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function clearAnimationTimeouts() {
    animationTimeouts.forEach(timeout => clearTimeout(timeout));
    animationTimeouts = [];
}

// Advanced Features
function initializeFloatingParticles() {
    const particles = document.querySelector('.floating-particles');
    if (particles) {
        // Enhance particle animation with mouse interaction
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            particles.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
        });
    }
}

function initialize3DEffects() {
    // Add 3D tilt effect to cards on mouse move
    const cards = document.querySelectorAll('.collection-card, .testimonial-card, .value-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 30;
            const rotateY = (centerX - x) / 30;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
        });
    });
}

function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    const elementsToObserve = document.querySelectorAll('.section-title, .testimonial-card, .collection-card, .value-card');
    elementsToObserve.forEach(el => observer.observe(el));
}

function addLoadingAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes fadeInScale {
            from {
                opacity: 0;
                transform: scale(0.9);
            }
            to {
                opacity: 1;
                transform: scale(1);
            }
        }
        
        .animate-in {
            animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        /* Loading states */
        .loading {
            animation: fadeInScale 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
    `;
    document.head.appendChild(style);
}

function initializePerformanceOptimizations() {
    // Lazy load images when they come into view
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.add('loading');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
    
    // Optimize animations for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.body.classList.add('reduced-motion');
    }
}

function preloadCriticalResources() {
    // Preload critical fonts and assets
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap';
    link.as = 'style';
    document.head.appendChild(link);
}

// Event Listeners Setup
function setupEventListeners() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }
    
    // Close mobile menu on nav link click
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Modal close events
    const modal = document.getElementById('success-modal');
    if (modal) {
        const overlay = modal.querySelector('.modal-overlay');
        if (overlay) {
            overlay.addEventListener('click', closeModal);
        }
        
        const closeButton = modal.querySelector('button');
        if (closeButton) {
            closeButton.addEventListener('click', closeModal);
        }
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
            closeMobileMenu();
        }
    });
    
    // Smooth scrolling for anchor links
    document.addEventListener('click', (e) => {
        if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
    
    // Enhanced scroll effects
    let ticking = false;
    function updateScrollEffects() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        const particles = document.querySelector('.floating-particles');
        if (particles) {
            particles.style.transform = `translateY(${rate}px)`;
        }
        
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    });
}

// Export functions to global scope for HTML onclick handlers
window.showPage = showPage;
window.closeModal = closeModal;
window.filterProducts = filterProducts;
window.toggleMobileMenu = toggleMobileMenu;

// Performance monitoring
window.addEventListener('load', () => {
    console.log('🏃‍♂️ SoloLook website fully loaded');
    console.log('⚡ All animations and interactions ready!');
    
    // Mark as fully loaded
    document.body.classList.add('fully-loaded');
});

// Error handling
window.addEventListener('error', (e) => {
    console.error('SoloLook error:', e.error);
});

console.log('🎯 SoloLook JavaScript loaded successfully!');