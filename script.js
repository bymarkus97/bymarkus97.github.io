document.addEventListener('DOMContentLoaded', () => {
  const navButton = document.querySelector('.nav-button');
  if (navButton) {
    navButton.addEventListener('click', () => {
      document.getElementById('comprar')?.scrollIntoView({ behavior: 'smooth' });
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

  const filterButtons = document.querySelectorAll('.filter-btn');
  const fruitCards = document.querySelectorAll('.fruit-card');

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      filterButtons.forEach((btn) => btn.classList.toggle('active', btn === button));

      fruitCards.forEach((card) => {
        const matches = filter === 'all' || card.dataset.rarity === filter;
        card.style.display = matches ? 'flex' : 'none';
      });
    });
  });

  const cartCount = document.querySelector('.cart-count');
  const summaryTotal = document.querySelector('.summary-total');
  let totalItems = 0;
  let totalPrice = 0;

  const updateSummary = () => {
    cartCount.textContent = totalItems;
    summaryTotal.textContent = `€${totalPrice}`;
  };

  document.querySelectorAll('.add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
      const price = Number(button.dataset.price || 0);
      totalItems += 1;
      totalPrice += price;
      updateSummary();

      button.textContent = 'Añadido';
      button.disabled = true;
      button.style.opacity = '0.8';

      setTimeout(() => {
        button.textContent = 'Comprar';
        button.disabled = false;
        button.style.opacity = '1';
      }, 800);
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('.reveal').forEach((element) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(18px)';
    observer.observe(element);
  });
});













































































































































































































































































































































































          
