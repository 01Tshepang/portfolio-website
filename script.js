const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (toggle) toggle.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach((link) => link.addEventListener('click', () => nav.classList.remove('open')));
const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('visible'); }), { threshold: 0.12 });
document.querySelectorAll('.reveal, .card, .split, .callout').forEach((element) => observer.observe(element));
