document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = anchor.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Highlight active navigation link
    const navLinks = document.querySelectorAll('.main-header nav a');
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Toggle for additional content (e.g., "Show More" button)
    const toggleButtons = document.querySelectorAll('.toggle-content');
    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.toggle('hidden');
                button.textContent = targetContent.classList.contains('hidden') ? 'Show More' : 'Show Less';
            }
        });
    });

    // Basic form validation (for future contact form)
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = contactForm.querySelector('input[type="email"]');
            const message = contactForm.querySelector('textarea');
            if (email && message && email.value.trim() && message.value.trim()) {
                alert('Form submitted successfully!');
                contactForm.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }
});