document.addEventListener('DOMContentLoaded', () => {
  const navButton = document.querySelector('.nav-button');
  if (navButton) {
    navButton.addEventListener('click', () => {
      document.getElementById('descargar')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  const cards = document.querySelectorAll('.fruit-card, .mini-feature, .battle-panel');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        }
      });
    },
    { threshold: 0.15 }
  );

  cards.forEach((card) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    observer.observe(card);
  });
});
