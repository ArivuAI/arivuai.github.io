document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Fade-in effect for sections on scroll
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.2,
    };

    const fadeInOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        fadeInOnScroll.observe(section);
    });
});
document.addEventListener('scroll', () => {
    const courseSection = document.querySelector('.courses-highlight');
    const rect = courseSection.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 1.5) {
        courseSection.classList.add('show');
    }
});
