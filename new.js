/**
 * Main JavaScript for Ayodeji Dennis Oluwatunla's Portfolio
 * Optimized for professional presentation to hiring managers and recruiters
 */

// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Initialize AOS (Animate on Scroll)
    AOS.init({
      duration: 800,
      easing: 'ease',
      once: true,
      offset: 100
    });
  
    // Preloader
    const loader = document.querySelector('.loader-wrapper');
    if (loader) {
      setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
          loader.style.display = 'none';
        }, 500);
      }, 1000);
    }
  
    // Navbar scroll behavior
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
  
    function updateNavbar() {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  
    updateNavbar(); // Set initial state
    window.addEventListener('scroll', updateNavbar);
  
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        const target = document.querySelector(this.getAttribute('href'));
        if (!target) return;
  
        const headerOffset = 70;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
  
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
          navbarToggler.click();
        }
      });
    });
  
    // Typewriter effect
    const typewriterElement = document.getElementById('typewriter');
    if (typewriterElement) {
      const texts = [
        'Full-Stack Developer',
        'Sustainability Advocate',
        'MERN Stack Specialist',
        'Problem Solver'
      ];
  
      let textIndex = 0;
      let charIndex = 0;
      let isDeleting = false;
      let typingDelay = 100;
      let erasingDelay = 50;
      let newTextDelay = 2000;
  
      function typeEffect() {
        const currentText = texts[textIndex];
  
        if (isDeleting) {
          typewriterElement.textContent = currentText.substring(0, charIndex - 1);
          charIndex--;
          typingDelay = erasingDelay;
        } else {
          typewriterElement.textContent = currentText.substring(0, charIndex + 1);
          charIndex++;
          typingDelay = 100;
        }
  
        if (!isDeleting && charIndex === currentText.length) {
          typingDelay = newTextDelay;
          isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length;
          typingDelay = 500;
        }
  
        setTimeout(typeEffect, typingDelay);
      }
  
      setTimeout(typeEffect, 1000);
    }
  
    // Active navigation based on scroll position
    function updateActiveNav() {
      const scrollPosition = window.scrollY + 150;
  
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
  
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('active');
            }
          });
        }
      });
    }
  
    updateActiveNav();
    window.addEventListener('scroll', updateActiveNav);
  
    // Progress bar animation
    const progressBars = document.querySelectorAll('.progress-bar');
  
    function animateProgressBars() {
      progressBars.forEach(progressBar => {
        const value = progressBar.getAttribute('aria-valuenow');
        progressBar.style.width = '0%';
  
        setTimeout(() => {
          progressBar.style.width = value + '%';
        }, 100);
      });
    }
  
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateProgressBars();
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3 });
  
      observer.observe(skillsSection);
    }
  
    // Back to top button
    const backToTopButton = document.createElement('div');
    backToTopButton.className = 'back-to-top';
    backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(backToTopButton);
  
    function toggleBackToTopButton() {
      if (window.scrollY > 300) {
        backToTopButton.classList.add('active');
      } else {
        backToTopButton.classList.remove('active');
      }
    }
  
    window.addEventListener('scroll', toggleBackToTopButton);
  
    backToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  
    // Project filtering functionality
    const projectFilterButtons = document.querySelectorAll('.project-filter-btn');
    const projectItems = document.querySelectorAll('.project-card');
  
    if (projectFilterButtons.length > 0) {
      projectFilterButtons.forEach(button => {
        button.addEventListener('click', function () {
          projectFilterButtons.forEach(btn => btn.classList.remove('active'));
          this.classList.add('active');
  
          const filterValue = this.getAttribute('data-filter');
  
          projectItems.forEach(item => {
            if (filterValue === 'all') {
              item.style.display = 'block';
            } else {
              item.style.display = item.classList.contains(filterValue) ? 'block' : 'none';
            }
          });
        });
      });
    }
  }); // ✅ This was the missing line!
  