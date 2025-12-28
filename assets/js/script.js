// Portfolio JavaScript - Jawahar Bharanitharan
// =============================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle internal links
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const navHeight = document.querySelector('.nav').offsetHeight;
                    const targetPosition = targetSection.offsetTop - navHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Add active class to navigation on scroll
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const navHeight = document.querySelector('.nav').offsetHeight;
        
        // Update active navigation link
        document.querySelectorAll('section[id]').forEach(section => {
            const sectionTop = section.offsetTop - navHeight - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
        
        // Add shadow to nav on scroll
        const nav = document.querySelector('.nav');
        if (scrollPosition > 50) {
            nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
        } else {
            nav.style.boxShadow = 'none';
        }
    });
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements with data-animate attribute
    document.querySelectorAll('[data-animate]').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(element);
    });
    
    // Animate skill progress bars when they come into view
    const skillObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBars = entry.target.querySelectorAll('.skill-progress');
                progressBars.forEach(bar => {
                    const progress = bar.style.getPropertyValue('--progress');
                    bar.style.width = progress;
                });
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const skillsSection = document.querySelector('.skills');
    if (skillsSection) {
        skillObserver.observe(skillsSection);
    }
    
    // Add hover effect for project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });
    
    // Add hover effect for achievement cards
    const achievementCards = document.querySelectorAll('.achievement-card');
    achievementCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });
    
    // Parallax effect for hero section (subtle)
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.5;
            
            if (scrolled < window.innerHeight) {
                heroSection.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
            }
        });
    }
    
    // Add copy email functionality
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const email = this.getAttribute('href').replace('mailto:', '');
            
            // Copy to clipboard
            if (navigator.clipboard) {
                navigator.clipboard.writeText(email).then(() => {
                    // Create temporary notification
                    const notification = document.createElement('div');
                    notification.textContent = 'Email copied to clipboard!';
                    notification.style.cssText = `
                        position: fixed;
                        bottom: 30px;
                        right: 30px;
                        background: var(--color-primary);
                        color: var(--color-bg);
                        padding: 1rem 1.5rem;
                        border-radius: 6px;
                        font-size: 0.9rem;
                        font-weight: 500;
                        z-index: 10000;
                        animation: slideIn 0.3s ease-out;
                    `;
                    
                    document.body.appendChild(notification);
                    
                    setTimeout(() => {
                        notification.style.animation = 'slideOut 0.3s ease-out';
                        setTimeout(() => {
                            document.body.removeChild(notification);
                        }, 300);
                    }, 2000);
                });
            }
        });
    });
    
    // Add animations for stats counter on hero section
    const statsNumbers = document.querySelectorAll('.stat-number');
    let hasAnimated = false;
    
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                statsNumbers.forEach(stat => {
                    const finalValue = stat.textContent;
                    const numericValue = parseFloat(finalValue.replace(/[^0-9.]/g, ''));
                    const suffix = finalValue.replace(/[0-9.]/g, '');
                    
                    if (!isNaN(numericValue)) {
                        animateValue(stat, 0, numericValue, 1500, suffix);
                    }
                });
            }
        });
    }, { threshold: 0.5 });
    
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        statsObserver.observe(heroStats);
    }
    
    function animateValue(element, start, end, duration, suffix = '') {
        const startTime = performance.now();
        
        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = start + (end - start) * easeOutQuart;
            
            element.textContent = current.toFixed(end % 1 === 0 ? 0 : 1) + suffix;
            
            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                element.textContent = end + suffix;
            }
        }
        
        requestAnimationFrame(update);
    }
    
    // Back to top button (optional enhancement)
    const createBackToTop = () => {
        const button = document.createElement('button');
        button.innerHTML = '↑';
        button.className = 'back-to-top';
        button.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            background: var(--color-primary);
            color: var(--color-bg);
            border: none;
            border-radius: 50%;
            font-size: 1.5rem;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: var(--transition-base);
            z-index: 999;
        `;
        
        document.body.appendChild(button);
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 500) {
                button.style.opacity = '1';
                button.style.visibility = 'visible';
            } else {
                button.style.opacity = '0';
                button.style.visibility = 'hidden';
            }
        });
        
        button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-5px)';
            button.style.boxShadow = 'var(--shadow-glow)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
            button.style.boxShadow = 'none';
        });
    };
    
    // Initialize back to top button
    createBackToTop();
    
    // Console message for developers
    console.log('%cPortfolio by Jawahar Bharanitharan', 'color: #00e5ff; font-size: 20px; font-weight: bold;');
    console.log('%cMechatronics Engineer | Automotive Systems Specialist', 'color: #9ca9bc; font-size: 14px;');
    console.log('%cInterested in collaboration? Reach out at bjawahar10@gmail.com', 'color: #6b7a8f; font-size: 12px;');
    
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .back-to-top:hover {
        transform: translateY(-5px) !important;
    }
`;
document.head.appendChild(style);
