document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('DOMContentLoaded', () => {
        const navbar = document.getElementById('nav');
        const navLinks = navbar.querySelectorAll('a');
        const logo = navbar.querySelector('.logo');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                navbar.classList.remove('backdrop-blur-md');
                navbar.classList.add('bg-white', 'shadow-md');

                navLinks.forEach(link => {
                    link.classList.remove('text-white');
                    link.classList.add('text-black');
                });

                logo.classList.remove('text-white');
                logo.classList.add('text-black');

                const signupLink = navbar.querySelector('.signup');
                if (signupLink) {
                    signupLink.classList.remove('text-white');
                    signupLink.classList.add('text-white', 'bg-pink-500', 'px-4', 'py-2', 'rounded-full');
                }
            } else {
                navbar.classList.remove('bg-white', 'shadow-md');
                navbar.classList.add('backdrop-blur-md');

                navLinks.forEach(link => {
                    link.classList.remove('text-black');
                    link.classList.add('text-white');
                });

                logo.classList.remove('text-black');
                logo.classList.add('text-white');

                const signupLink = navbar.querySelector('.signup');
                if (signupLink) {
                    signupLink.classList.remove('text-white', 'bg-pink-500', 'px-4', 'py-2', 'rounded-full');
                    signupLink.classList.add('text-white');
                }
            }
        });

        const menuToggle = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');

        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    });

    const scrollReveals = document.querySelectorAll('.scroll-reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    scrollReveals.forEach(element => observer.observe(element));

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function validatePassword(password) {
        return password.length >= 8 && /[a-zA-Z]/.test(password) && /\d/.test(password);
    }

    function showToast(message) {
        const toast = document.getElementById('toast');
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }

    function setupPasswordToggle(inputId, toggleId) {
        const input = document.getElementById(inputId);
        const toggle = document.getElementById(toggleId);
        if (input && toggle) {
            toggle.addEventListener('click', () => {
                const isPassword = input.type === 'password';
                input.type = isPassword ? 'text' : 'password';
                toggle.innerHTML = `<i class="fas ${isPassword ? 'fa-eye-slash' : 'fa-eye'}"></i>`;
            });
        }
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            const name = document.getElementById('contact-name').value.trim();
            const email = document.getElementById('contact-email').value.trim();
            const message = document.getElementById('contact-message').value.trim();

            document.getElementById('contact-name-error').classList.add('hidden');
            document.getElementById('contact-email-error').classList.add('hidden');
            document.getElementById('contact-message-error').classList.add('hidden');

            if (!name) {
                document.getElementById('contact-name-error').classList.remove('hidden');
                isValid = false;
            }
            if (!validateEmail(email)) {
                document.getElementById('contact-email-error').classList.remove('hidden');
                isValid = false;
            }
            if (!message) {
                document.getElementById('contact-message-error').classList.remove('hidden');
                isValid = false;
            }

            if (isValid) {
                showToast('Message sent successfully!');
                contactForm.reset();
            }
        });
    }

    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        setupPasswordToggle('login-password', 'login-password-toggle');
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            const email = document.getElementById('login-email').value.trim();
            const password = document.getElementById('login-password').value;

            document.getElementById('login-email-error').classList.add('hidden');
            document.getElementById('login-password-error').classList.add('hidden');

            if (!validateEmail(email)) {
                document.getElementById('login-email-error').classList.remove('hidden');
                isValid = false;
            }
            if (!validatePassword(password)) {
                document.getElementById('login-password-error').classList.remove('hidden');
                isValid = false;
            }

            if (isValid) {
                showToast('Login successful!');
                loginForm.reset();
            }
        });
    }

    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        setupPasswordToggle('signup-password', 'signup-password-toggle');
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            const name = document.getElementById('signup-name').value.trim();
            const email = document.getElementById('signup-email').value.trim();
            const password = document.getElementById('signup-password').value;

            document.getElementById('signup-name-error').classList.add('hidden');
            document.getElementById('signup-email-error').classList.add('hidden');
            document.getElementById('signup-password-error').classList.add('hidden');

            if (!name) {
                document.getElementById('signup-name-error').classList.remove('hidden');
                isValid = false;
            }
            if (!validateEmail(email)) {
                document.getElementById('signup-email-error').classList.remove('hidden');
                isValid = false;
            }
            if (!validatePassword(password)) {
                document.getElementById('signup-password-error').classList.remove('hidden');
                isValid = false;
            }

            if (isValid) {
                showToast('Sign up successful!');
                signupForm.reset();
            }
        });
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const scrollReveals = document.querySelectorAll('.scroll-reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    scrollReveals.forEach(element => observer.observe(element));

    const monthlyBtn = document.getElementById('monthly-btn');
    const yearlyBtn = document.getElementById('yearly-btn');
    const monthlyPrices = document.querySelectorAll('.monthly-price');
    const yearlyPrices = document.querySelectorAll('.yearly-price');

    monthlyBtn.addEventListener('click', () => {
        monthlyBtn.classList.add('active');
        yearlyBtn.classList.remove('active');
        monthlyPrices.forEach(price => price.classList.remove('hidden'));
        yearlyPrices.forEach(price => price.classList.add('hidden'));
    });

    yearlyBtn.addEventListener('click', () => {
        yearlyBtn.classList.add('active');
        monthlyBtn.classList.remove('active');
        yearlyPrices.forEach(price => price.classList.remove('hidden'));
        monthlyPrices.forEach(price => price.classList.add('hidden'));
    });
});