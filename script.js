// Smooth scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Add animation class when elements come into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe all feature cards and fruit cards
document.querySelectorAll('.feature-card, .fruit-card').forEach(el => {
    observer.observe(el);
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Close mobile menu when link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks) {
            navLinks.style.display = 'none';
        }
    });
});

// Navbar shadow on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 30px rgba(255, 107, 53, 0.2)';
    } else {
        navbar.style.boxShadow = '0 4px 30px rgba(255, 107, 53, 0.1)';
    }
});

// Add fade-in animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .feature-card, .fruit-card {
        opacity: 0;
    }
    
    .feature-card.fade-in, .fruit-card.fade-in {
        animation: fadeIn 0.6s ease-out forwards;
    }
`;
document.head.appendChild(style);

// Particle effect on click (optional fun feature)
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-primary') || e.target.classList.contains('btn')) {
        createParticles(e.pageX, e.pageY);
    }
});

function createParticles(x, y) {
    const particles = 10;
    for (let i = 0; i < particles; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 8 + 4;
        const duration = Math.random() * 0.5 + 0.5;
        
        particle.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: ${size}px;
            height: ${size}px;
            background: #ff6b35;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            animation: explode ${duration}s ease-out forwards;
        `;
        
        document.body.appendChild(particle);
        
        setTimeout(() => particle.remove(), duration * 1000);
    }
}

// Add explode animation to stylesheet
const explosionStyle = document.createElement('style');
explosionStyle.textContent = `
    @keyframes explode {
        to {
            transform: translate(var(--tx), var(--ty)) scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(explosionStyle);

// Assign random direction to particles
const observer2 = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType === 1 && node.style.animation?.includes('explode')) {
                    const angle = Math.random() * Math.PI * 2;
                    const distance = 100;
                    const tx = Math.cos(angle) * distance;
                    const ty = Math.sin(angle) * distance;
                    node.style.setProperty('--tx', `${tx}px`);
                    node.style.setProperty('--ty', `${ty}px`);
                }
            });
        }
    });
});

observer2.observe(document.body, { childList: true });

// Scroll reveal animation for stats
const statItems = document.querySelectorAll('.stat-item');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease-out forwards';
        }
    });
}, { threshold: 0.1 });

statItems.forEach(item => {
    item.style.opacity = '0';
    statsObserver.observe(item);
});

console.log('🍇 EmpireFruit - ¡Bienvenido al juego de frutas más épico!');
