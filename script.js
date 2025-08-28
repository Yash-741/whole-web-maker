// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
});

// Mobile menu toggle
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    
    mobileNav.classList.toggle('show');
    
    if (mobileNav.classList.contains('show')) {
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    } else {
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
}

// Demo functionality
let isRunning = false;
let activeStep = 0;
let progress = 0;

function runDemo() {
    if (isRunning) return;
    
    isRunning = true;
    progress = 0;
    activeStep = 0;
    
    const demoBtn = document.querySelector('.demo-section .btn-primary');
    const progressFill = document.getElementById('progressFill');
    const btnText = document.querySelector('.demo-btn-text');
    const btnIcon = demoBtn.querySelector('i');
    
    // Update button state
    btnText.textContent = 'Processing...';
    btnIcon.setAttribute('data-lucide', 'refresh-cw');
    btnIcon.classList.add('animate-spin');
    demoBtn.disabled = true;
    
    // Reset all steps
    for (let i = 0; i < 4; i++) {
        const step = document.getElementById(`step-${i}`);
        step.classList.remove('active', 'completed');
        const status = step.querySelector('.step-status');
        status.textContent = 'Pending';
        
        const icon = step.querySelector('i');
        icon.classList.remove('lucide-check-circle');
        
        // Reset original icons
        if (i === 0) icon.setAttribute('data-lucide', 'upload');
        if (i === 1) icon.setAttribute('data-lucide', 'zap');
        if (i === 2) icon.setAttribute('data-lucide', 'trending-up');
        if (i === 3) icon.setAttribute('data-lucide', 'bar-chart-3');
    }
    
    lucide.createIcons();
    
    const interval = setInterval(() => {
        progress += 5;
        progressFill.style.width = progress + '%';
        
        if (progress >= 100) {
            clearInterval(interval);
            isRunning = false;
            activeStep = 3;
            
            // Update button state
            btnText.textContent = 'Start Demo';
            btnIcon.setAttribute('data-lucide', 'play');
            btnIcon.classList.remove('animate-spin');
            demoBtn.disabled = false;
            
            // Mark final step as completed
            updateStep(3, 'completed');
            
            lucide.createIcons();
            return;
        }
        
        // Update active step based on progress
        let newActiveStep = activeStep;
        if (progress >= 75) newActiveStep = 3;
        else if (progress >= 50) newActiveStep = 2;
        else if (progress >= 25) newActiveStep = 1;
        else newActiveStep = 0;
        
        if (newActiveStep !== activeStep) {
            if (activeStep < newActiveStep) {
                updateStep(activeStep, 'completed');
            }
            activeStep = newActiveStep;
            updateStep(activeStep, 'active');
        }
    }, 100);
}

function updateStep(stepIndex, state) {
    const step = document.getElementById(`step-${stepIndex}`);
    const status = step.querySelector('.step-status');
    const icon = step.querySelector('i');
    
    step.classList.remove('active', 'completed');
    
    if (state === 'active') {
        step.classList.add('active');
        status.textContent = 'Processing...';
    } else if (state === 'completed') {
        step.classList.add('completed');
        status.textContent = 'Complete';
        icon.setAttribute('data-lucide', 'check-circle');
        lucide.createIcons();
    } else {
        status.textContent = 'Pending';
    }
}

// Tab functionality
function showTab(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });
    
    // Remove active class from all tab buttons
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected tab content
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
    
    // Add active class to clicked button
    event.target.classList.add('active');
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
            
            // Close mobile menu if open
            const mobileNav = document.getElementById('mobileNav');
            if (mobileNav.classList.contains('show')) {
                toggleMobileMenu();
            }
        });
    });
});

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 0) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.8)';
    }
});

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for fade-in animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.card, .step-card, .feature-card-lg, .tech-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add hover effects for cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card, .step-card, .feature-card-lg, .tech-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Chart animation for dashboard
function animateChart() {
    const bars = document.querySelectorAll('.bar');
    bars.forEach((bar, index) => {
        setTimeout(() => {
            bar.style.opacity = '1';
            bar.style.transform = 'scaleY(1)';
        }, index * 100);
    });
}

// Initialize chart animation when dashboard tab is shown
document.addEventListener('DOMContentLoaded', function() {
    const bars = document.querySelectorAll('.bar');
    bars.forEach(bar => {
        bar.style.opacity = '0';
        bar.style.transform = 'scaleY(0)';
        bar.style.transformOrigin = 'bottom';
        bar.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Animate when dashboard tab becomes visible
    const dashboardTab = document.getElementById('dashboard');
    const tabObserver = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.target.classList.contains('active')) {
                setTimeout(animateChart, 300);
            }
        });
    });
    
    if (dashboardTab) {
        tabObserver.observe(dashboardTab, { 
            attributes: true, 
            attributeFilter: ['class'] 
        });
    }
});