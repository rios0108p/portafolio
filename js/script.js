// Menú hamburguesa
document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav-links').classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.burger').classList.remove('active');
        document.querySelector('.nav-links').classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
});

// Efecto de scroll para el navbar
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// Smooth scrolling para todos los enlaces
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Animación de elementos al hacer scroll
const animateOnScroll = function() {
    const elements = document.querySelectorAll('.skill-item, .project-card, .timeline-item, .detail-item');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Configurar opacidad inicial para los elementos a animar
window.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.skill-item, .project-card, .timeline-item, .detail-item');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease';
    });
    
    // Ejecutar una vez al cargar
    setTimeout(animateOnScroll, 300);
});

// Ejecutar la animación al hacer scroll
window.addEventListener('scroll', animateOnScroll);