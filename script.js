document.addEventListener('DOMContentLoaded', () => {

    // ============================================
    // Sticky Navbar on Scroll
    // ============================================
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 80) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Hero Stat Items Tab Toggler
    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach(item => {
        item.addEventListener('click', () => {
            statItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // Form Submission (Contact Page)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            
            // Simple validation feedback (in a real app, send to server)
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
            btn.disabled = true;
            
            // Simulate network request
            setTimeout(() => {
                alert(`Thank you, ${name}! Your message has been sent successfully.`);
                contactForm.reset();
                btn.innerHTML = originalText;
                btn.disabled = false;
            }, 1500);
        });
    }

    // ============================================
    // Free Consultation Modal
    // ============================================
    const openBtn      = document.getElementById('openConsultModal');
    const modal        = document.getElementById('consultModal');
    const closeBtn     = document.getElementById('closeConsultModal');
    const consultForm  = document.getElementById('consultForm');
    const successBox   = document.getElementById('consultSuccess');
    const closeSucBtn  = document.getElementById('closeSuccessBtn');

    if (!openBtn || !modal) return;

    // Open modal
    openBtn.addEventListener('click', () => {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // Close modal helpers
    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        // Reset form & success state after transition
        setTimeout(() => {
            if (consultForm) {
                consultForm.reset();
                consultForm.style.display = '';
            }
            if (successBox) successBox.style.display = 'none';
        }, 350);
    };

    closeBtn.addEventListener('click', closeModal);
    if (closeSucBtn) closeSucBtn.addEventListener('click', closeModal);

    // Close on overlay click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
    });

    // Form Submit
    if (consultForm) {
        consultForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const submitBtn = consultForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;

            // Loading state
            submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Submitting...';
            submitBtn.disabled = true;

            // Simulate API call
            setTimeout(() => {
                // Show success
                consultForm.style.display = 'none';
                if (successBox) successBox.style.display = 'block';

                // Reset button for next time
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }
    // ============================================
    // Insight Newsletter Form
    // ============================================
    const newsletterForm = document.getElementById('insightNewsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = newsletterForm.querySelector('button[type="submit"]');
            const input = newsletterForm.querySelector('input[type="email"]');
            const originalText = btn.innerHTML;

            btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Subscribing...';
            btn.disabled = true;

            setTimeout(() => {
                btn.innerHTML = '<i class="fa-solid fa-check"></i> Subscribed!';
                btn.style.background = '#bdfb1e';
                input.value = '';
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.style.background = '';
                    btn.disabled = false;
                }, 3000);
            }, 1200);
        });
    }
});

