// Smooth scroll & active link handling
const navLinks = document.querySelectorAll('.nav-link');
const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('sidebarToggle');
const yearSpan = document.getElementById('year');

yearSpan.textContent = new Date().getFullYear();

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (window.innerWidth < 980) sidebar.classList.remove('open');
  });
});

// Observe sections to highlight active link
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const id = entry.target.getAttribute('id');
    const navLink = document.querySelector(`.nav a[href="#${id}"]`);
    if (entry.isIntersecting && navLink) {
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      navLink.classList.add('active');
    }
  });
}, { rootMargin: "-40% 0px -55% 0px", threshold: 0.01 });

document.querySelectorAll('main section, header.hero').forEach((sec) => observer.observe(sec));

// Mobile sidebar toggle
toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});
