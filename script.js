// Scroll-to-top button
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  scrollTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Active nav link highlight on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80;
    if (window.scrollY >= sectionTop) current = section.getAttribute('id');
  });
  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
  });
});

// Fade-in sections on scroll using Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });
sections.forEach((section) => observer.observe(section));

// Contact form validation
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let isValid = true;

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');

  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';

  if (name.value.trim() === '') {
    nameError.textContent = 'Please enter your name.';
    isValid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value.trim())) {
    emailError.textContent = 'Please enter a valid email address.';
    isValid = false;
  }

  if (message.value.trim() === '') {
    messageError.textContent = 'Please enter a message.';
    isValid = false;
  }

  if (isValid) {
    alert('Message sent! (demo only, not actually connected yet)');
    form.reset();
  }
});
