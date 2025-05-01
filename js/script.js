// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll-triggered animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated', 'fadeIn');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.card, .intro, .stats, .recommendations, .faq').forEach(element => {
    observer.observe(element);
});

// Tooltip functionality
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = 'Нажмите для подробностей!';
        card.appendChild(tooltip);
    });
    card.addEventListener('mouseleave', () => {
        const tooltip = card.querySelector('.tooltip');
        if (tooltip) tooltip.remove();
    });
});