document.addEventListener('DOMContentLoaded', function () {

    const header = document.getElementById('header');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', function () {
            if (navMenu.classList.contains('open')) {
                navMenu.classList.remove('open');
            } else {
                navMenu.classList.add('open');
            }
        });
    }

    const dropdownToggles = document.querySelectorAll('.nav-item.dropdown > .nav-link');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function (e) {
            if (window.innerWidth < 1024 || navMenu.style.display === 'block') {
                e.preventDefault();
                const menu = this.parentElement.querySelector('.dropdown-menu');
                const isVisible = menu && menu.style.display === 'block';
                document.querySelectorAll('.dropdown-menu').forEach(m => { m.style.display = 'none'; });
                if (menu) menu.style.display = isVisible ? 'none' : 'block';
            }
        });
    });

    // 3. Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            if (window.innerWidth < 1024 && navMenu.classList.contains('open')) {
                navMenu.classList.remove('open');
            }

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. Form Validation
    const inquiryForm = document.querySelector('.inquiry-form');
    if (inquiryForm) {
        inquiryForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Basic validation
            const inputs = inquiryForm.querySelectorAll('input[required], select[required]');
            let isValid = true;

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = 'var(--error-color)';
                } else {
                    input.style.borderColor = 'var(--border-color)';
                }
            });

            if (isValid) {
                const submitBtn = inquiryForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerText;

                submitBtn.innerText = 'Sending...';
                submitBtn.disabled = true;

                // Collect data
                const formData = new FormData(inquiryForm);
                const data = Object.fromEntries(formData.entries());

                // Send to backend
                fetch('http://localhost:3000/submit-loan-enquiry', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                    .then(response => response.json())
                    .then(result => {
                        if (result.success) {
                            alert('Thank you for your inquiry! We will contact you within 24 hours.');
                            inquiryForm.reset();
                        } else {
                            alert('Something went wrong. Please try again or contact us directly.');
                            console.error('Error:', result.message);
                        }
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        // Fallback alert if server is not running
                        alert('Note: To send emails, please ensure the local Node.js server is running (npm start). For now, we received your click!');
                    })
                    .finally(() => {
                        submitBtn.innerText = originalText;
                        submitBtn.disabled = false;
                    });
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }

    // 5. Scroll Animations (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add animation class to elements
    const animatedElements = document.querySelectorAll('.section-title, .product-card, .feature-card, .step-card, .stat-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Add CSS for animation class
    const style = document.createElement('style');
    style.innerHTML = `
        .fade-in-up {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    const kycToggle = document.getElementById('kyc-toggle');
    const kycGrid = document.querySelector('.kyc-logos');
    if (kycToggle && kycGrid) {
        kycToggle.addEventListener('click', function () {
            const expanded = kycGrid.classList.toggle('expanded');
            kycToggle.innerText = expanded ? 'Show Less' : 'View All';
        });
    }

    // Partners logos toggle functionality
    const partnersToggle = document.getElementById('partners-toggle');
    const partnersGrid = document.querySelector('.partners-logos');
    if (partnersToggle && partnersGrid) {
        partnersToggle.addEventListener('click', function () {
            const expanded = partnersGrid.classList.toggle('expanded');
            partnersToggle.innerText = expanded ? 'Show Less' : 'View All';
        });
    }


});
