document.addEventListener('DOMContentLoaded', () => {
    // Typing animation for name
    const text = document.querySelector('.highlight');
    const strText = text.textContent;
    text.textContent = '';
    
    for(let i = 0; i < strText.length; i++) {
        text.innerHTML += `<span>${strText[i]}</span>`;
    }

    let char = 0;
    let timer = setInterval(onTick, 50);

    function onTick() {
        const span = text.querySelectorAll('span')[char];
        span.classList.add('fade');
        char++;
        if(char === strText.length) {
            complete();
            return;
        }
    }

    function complete() {
        clearInterval(timer);
        timer = null;
    }

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Social icons hover effect
    const socialIcons = document.querySelectorAll('.social-links a');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'translateY(-5px)';
            icon.style.color = '#007BFF';
        });
        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'translateY(0)';
            icon.style.color = '#fff';
        });
    });
});
// Mobile navigation
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.photography-grid');
    
    // Add navigation buttons
    const nav = document.createElement('div');
    nav.className = 'photography-nav';
    nav.innerHTML = `
        <button class="nav-btn prev">←</button>
        <button class="nav-btn next">→</button>
    `;
    document.querySelector('.photography-content').appendChild(nav);

    // Navigation functionality
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    prevBtn.addEventListener('click', () => {
        grid.scrollBy({
            left: -300,
            behavior: 'smooth'
        });
    });

    nextBtn.addEventListener('click', () => {
        grid.scrollBy({
            left: 300,
            behavior: 'smooth'
        });
    });

    // Optional: Auto scroll
    let scrollInterval;
    const startAutoScroll = () => {
        scrollInterval = setInterval(() => {
            if (grid.scrollLeft + grid.clientWidth >= grid.scrollWidth) {
                grid.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                grid.scrollBy({ left: 300, behavior: 'smooth' });
            }
        }, 3000);
    };

    const stopAutoScroll = () => {
        clearInterval(scrollInterval);
    };

    grid.addEventListener('mouseenter', stopAutoScroll);
    grid.addEventListener('mouseleave', startAutoScroll);

    startAutoScroll();
});

document.addEventListener('DOMContentLoaded', function() {
    // Get all section elements and navigation links
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.side-nav-links a');

    // Add click event listeners for smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            const offset = window.innerWidth <= 768 ? 60 : 0; // Adjust offset for mobile

            window.scrollTo({
                top: targetSection.offsetTop - offset,
                behavior: 'smooth'
            });
        });
    });

    // Highlight active section
    function highlightActiveSection() {
        let scrollPosition = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Add scroll event listener
    window.addEventListener('scroll', highlightActiveSection);
});



