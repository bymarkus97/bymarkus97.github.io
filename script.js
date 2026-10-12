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

  const fruitCatalog = [
    { name: 'Fruta Rocket', rarity: 'rare', price: 12, label: 'Rara', emoji: '🚀', meta: '+70 XP · Velocidad x1.8' },
    { name: 'Fruta Gira', rarity: 'rare', price: 14, label: 'Rara', emoji: '🦒', meta: '+85 XP · Agilidad x2.1' },
    { name: 'Fruta Blade', rarity: 'rare', price: 16, label: 'Rara', emoji: '🗡️', meta: '+95 XP · Daño x2.4' },
    { name: 'Fruta Resorte', rarity: 'rare', price: 18, label: 'Rara', emoji: '🪢', meta: '+110 XP · Salto x2.6' },
    { name: 'Fruta Bomba', rarity: 'epic', price: 20, label: 'Épica', emoji: '💣', meta: '+140 XP · Explosión x3.0' },
    { name: 'Fruta Humo', rarity: 'epic', price: 22, label: 'Épica', emoji: '💨', meta: '+150 XP · Sigilo x3.2' },
    { name: 'Fruta Pico', rarity: 'epic', price: 23, label: 'Épica', emoji: '⛏️', meta: '+160 XP · Minería x3.4' },
    { name: 'Fruta Fuego', rarity: 'epic', price: 25, label: 'Épica', emoji: '🔥', meta: '+175 XP · Furia x3.6' },
    { name: 'Fruta Hielo', rarity: 'epic', price: 27, label: 'Épica', emoji: '❄️', meta: '+185 XP · Frío x3.8' },
    { name: 'Fruta Arena', rarity: 'legendary', price: 29, label: 'Legendaria', emoji: '🏜️', meta: '+210 XP · Defensa x4.0' },
    { name: 'Fruta Oscuridad', rarity: 'legendary', price: 31, label: 'Legendaria', emoji: '🌑', meta: '+220 XP · Sombras x4.2' },
    { name: 'Fruta Eagle', rarity: 'legendary', price: 33, label: 'Legendaria', emoji: '🦅', meta: '+240 XP · Visión x4.5' },
    { name: 'Fruta Diamante', rarity: 'legendary', price: 35, label: 'Legendaria', emoji: '💎', meta: '+250 XP · Durabilidad x4.8' },
    { name: 'Fruta Luz', rarity: 'legendary', price: 36, label: 'Legendaria', emoji: '✨', meta: '+260 XP · Brillo x5.0' },
    { name: 'Fruta Caucho', rarity: 'mythic', price: 38, label: 'Mítica', emoji: '🛞', meta: '+290 XP · Elasticidad x5.2' },
    { name: 'Fruta Fantasma', rarity: 'mythic', price: 40, label: 'Mítica', emoji: '👻', meta: '+305 XP · Etérea x5.5' },
    { name: 'Fruta Magma', rarity: 'mythic', price: 42, label: 'Mítica', emoji: '🌋', meta: '+330 XP · Ardor x5.8' },
    { name: 'Fruta Temblor', rarity: 'mythic', price: 45, label: 'Mítica', emoji: '🌍', meta: '+350 XP · Terremoto x6.0' },
    { name: 'Fruta Buddha', rarity: 'mythic', price: 48, label: 'Mítica', emoji: '🧘', meta: '+370 XP · Serenidad x6.3' },
    { name: 'Fruta Amor', rarity: 'mythic', price: 49, label: 'Mítica', emoji: '💖', meta: '+390 XP · Encanto x6.5' },
    { name: 'Fruta Creation', rarity: 'mythic', price: 52, label: 'Mítica', emoji: '🪄', meta: '+415 XP · Creación x6.8' },
    { name: 'Fruta Araña', rarity: 'legendary', price: 34, label: 'Legendaria', emoji: '🕷️', meta: '+245 XP · Telaraña x4.7' },
    { name: 'Fruta Sonido', rarity: 'legendary', price: 32, label: 'Legendaria', emoji: '🎵', meta: '+230 XP · Resonancia x4.4' },
    { name: 'Fruta Fénix', rarity: 'mythic', price: 55, label: 'Mítica', emoji: '🦜', meta: '+430 XP · Renacer x7.0' },
    { name: 'Fruta Portal', rarity: 'mythic', price: 58, label: 'Mítica', emoji: '🌀', meta: '+450 XP · Teletransporte x7.3' },
    { name: 'Fruta Lightning', rarity: 'mythic', price: 60, label: 'Mítica', emoji: '⚡', meta: '+470 XP · Relámpago x7.6' },
    { name: 'Fruta Dolor', rarity: 'epic', price: 26, label: 'Épica', emoji: '💀', meta: '+180 XP · Sufrimiento x3.7' },
    { name: 'Fruta Nevada', rarity: 'epic', price: 28, label: 'Épica', emoji: '❄️', meta: '+190 XP · Nieve x4.0' },
    { name: 'Fruta Gravedad', rarity: 'legendary', price: 37, label: 'Legendaria', emoji: '🪐', meta: '+270 XP · Atracción x5.1' },
    { name: 'Fruta T-Rex', rarity: 'legendary', price: 39, label: 'Legendaria', emoji: '🦖', meta: '+300 XP · Fuerza x5.4' },
    { name: 'Fruta Mammut', rarity: 'legendary', price: 41, label: 'Legendaria', emoji: '🦣', meta: '+315 XP · Invulnerabilidad x5.7' },
    { name: 'Fruta Masa', rarity: 'epic', price: 24, label: 'Épica', emoji: '⚙️', meta: '+165 XP · Peso x3.5' },
    { name: 'Fruta Sombra', rarity: 'epic', price: 27, label: 'Épica', emoji: '🌘', meta: '+188 XP · Noche x3.9' },
    { name: 'Fruta Veneno', rarity: 'mythic', price: 46, label: 'Mítica', emoji: '☠️', meta: '+360 XP · Toxicidad x6.1' },
    { name: 'Fruta Gas', rarity: 'rare', price: 17, label: 'Rara', emoji: '💨', meta: '+100 XP · Viento x2.2' },
    { name: 'Fruta Espíritu', rarity: 'legendary', price: 44, label: 'Legendaria', emoji: '🕊️', meta: '+340 XP · Espíritu x6.0' },
    { name: 'Fruta Tiger', rarity: 'legendary', price: 35, label: 'Legendaria', emoji: '🐯', meta: '+255 XP · Instinto x4.9' },
    { name: 'Fruta Yeti', rarity: 'epic', price: 30, label: 'Épica', emoji: '🧊', meta: '+210 XP · Escarcha x4.1' },
    { name: 'Fruta Magnet', rarity: 'legendary', price: 40, label: 'Legendaria', emoji: '🧲', meta: '+310 XP · Magnetismo x5.6' },
    { name: 'Fruta Kitsune', rarity: 'mythic', price: 53, label: 'Mítica', emoji: '🦊', meta: '+420 XP · Ilusión x6.9' },
    { name: 'Fruta Control', rarity: 'mythic', price: 57, label: 'Mítica', emoji: '🧠', meta: '+445 XP · Dominio x7.2' },
    { name: 'Fruta Dragón', rarity: 'mythic', price: 64, label: 'Mítica', emoji: '🐉', meta: '+520 XP · Poder x8.0' }
  ];

  const fruitGrid = document.querySelector('.fruit-grid');
  if (fruitGrid) {
    fruitCatalog.forEach((fruit) => {
      const card = document.createElement('article');
      card.className = `fruit-card reveal ${fruit.rarity}`;
      card.dataset.rarity = fruit.rarity;
      card.innerHTML = `
        <div class="fruit-image-wrap">
          <div class="fruit-icon">${fruit.emoji}</div>
        </div>
        <span class="rarity">${fruit.label}</span>
        <h3>${fruit.name}</h3>
        <p class="fruit-meta">${fruit.meta}</p>
        <div class="fruit-bottom">
          <strong class="price">€${fruit.price}</strong>
          <button class="buy-btn add-to-cart" type="button" data-name="${fruit.name}" data-price="${fruit.price}">Comprar</button>
        </div>
      `;
      fruitGrid.appendChild(card);
    });
  }

  const filterButtons = document.querySelectorAll('.filter-btn');
  const fruitCards = document.querySelectorAll('.fruit-card');

  const bindAddToCartButtons = () => {
    const cartCount = document.querySelector('.cart-count');
    const summaryTotal = document.querySelector('.summary-total');
    let totalItems = 0;
    let totalPrice = 0;

    const updateSummary = () => {
      if (cartCount) cartCount.textContent = totalItems;
      if (summaryTotal) summaryTotal.textContent = `€${totalPrice}`;
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
  };

  bindAddToCartButtons();

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






























































































































































												