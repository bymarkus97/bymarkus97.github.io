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

  const cartToggle = document.querySelector('.cart-toggle');
  const cartSidebar = document.querySelector('.cart-sidebar');
  const cartClose = document.querySelector('.cart-close');
  const cartItems = document.querySelector('.cart-items');
  const cartCount = document.querySelector('.cart-count');
  const summaryTotal = document.querySelector('.summary-total');

  const fruitCatalog = [
    { name: 'Rocket', rarity: 'rare', price: 12, label: 'Rara', emoji: '🚀', meta: '+70 XP · Velocidad x1.8' },
    { name: 'Gira', rarity: 'rare', price: 13, label: 'Rara', emoji: '🦒', meta: '+80 XP · Agilidad x2.0' },
    { name: 'Blade', rarity: 'rare', price: 15, label: 'Rara', emoji: '🗡️', meta: '+90 XP · Daño x2.2' },
    { name: 'Resorte', rarity: 'rare', price: 17, label: 'Rara', emoji: '🪢', meta: '+100 XP · Salto x2.4' },
    { name: 'Bomba', rarity: 'epic', price: 20, label: 'Épica', emoji: '💣', meta: '+120 XP · Explosión x2.8' },
    { name: 'Humo', rarity: 'epic', price: 22, label: 'Épica', emoji: '💨', meta: '+130 XP · Sigilo x3.0' },
    { name: 'Pico', rarity: 'epic', price: 24, label: 'Épica', emoji: '⛏️', meta: '+140 XP · Fuerza x3.2' },
    { name: 'Fuego', rarity: 'epic', price: 26, label: 'Épica', emoji: '🔥', meta: '+155 XP · Furia x3.4' },
    { name: 'Hielo', rarity: 'epic', price: 28, label: 'Épica', emoji: '❄️', meta: '+170 XP · Frío x3.6' },
    { name: 'Arena', rarity: 'legendary', price: 32, label: 'Legendaria', emoji: '🏜️', meta: '+200 XP · Defensa x4.0' },
    { name: 'Oscuridad', rarity: 'legendary', price: 34, label: 'Legendaria', emoji: '🌑', meta: '+210 XP · Sombras x4.2' },
    { name: 'Eagle', rarity: 'legendary', price: 36, label: 'Legendaria', emoji: '🦅', meta: '+225 XP · Visión x4.4' },
    { name: 'Diamante', rarity: 'legendary', price: 38, label: 'Legendaria', emoji: '💎', meta: '+240 XP · Durabilidad x4.6' },
    { name: 'Luz', rarity: 'legendary', price: 40, label: 'Legendaria', emoji: '✨', meta: '+250 XP · Brillo x4.8' },
    { name: 'Caucho', rarity: 'mythic', price: 45, label: 'Mítica', emoji: '🛞', meta: '+290 XP · Elasticidad x5.2' },
    { name: 'Fantasma', rarity: 'mythic', price: 48, label: 'Mítica', emoji: '👻', meta: '+310 XP · Etérea x5.5' },
    { name: 'Magma', rarity: 'mythic', price: 52, label: 'Mítica', emoji: '🌋', meta: '+340 XP · Ardor x5.8' },
    { name: 'Temblor', rarity: 'mythic', price: 55, label: 'Mítica', emoji: '🌍', meta: '+360 XP · Terremoto x6.2' },
    { name: 'Buddha', rarity: 'mythic', price: 58, label: 'Mítica', emoji: '🧘', meta: '+380 XP · Serenidad x6.5' },
    { name: 'Amor', rarity: 'mythic', price: 60, label: 'Mítica', emoji: '💖', meta: '+400 XP · Encanto x6.8' },
    { name: 'Creation', rarity: 'mythic', price: 62, label: 'Mítica', emoji: '🪄', meta: '+420 XP · Creación x7.0' },
    { name: 'Araña', rarity: 'legendary', price: 37, label: 'Legendaria', emoji: '🕷️', meta: '+230 XP · Telaraña x4.5' },
    { name: 'Sonido', rarity: 'legendary', price: 35, label: 'Legendaria', emoji: '🎵', meta: '+220 XP · Resonancia x4.3' },
    { name: 'Fénix', rarity: 'mythic', price: 65, label: 'Mítica', emoji: '🦜', meta: '+440 XP · Renacer x7.3' },
    { name: 'Portal', rarity: 'mythic', price: 68, label: 'Mítica', emoji: '🌀', meta: '+460 XP · Teletransporte x7.6' },
    { name: 'Lightning', rarity: 'mythic', price: 70, label: 'Mítica', emoji: '⚡', meta: '+480 XP · Relámpago x7.9' },
    { name: 'Dolor', rarity: 'epic', price: 29, label: 'Épica', emoji: '💀', meta: '+180 XP · Sufrimiento x3.7' },
    { name: 'Nevada', rarity: 'epic', price: 30, label: 'Épica', emoji: '🌨️', meta: '+190 XP · Nieve x3.9' },
    { name: 'Gravedad', rarity: 'legendary', price: 42, label: 'Legendaria', emoji: '🪐', meta: '+260 XP · Atracción x5.0' },
    { name: 'T-Rex', rarity: 'legendary', price: 44, label: 'Legendaria', emoji: '🦖', meta: '+280 XP · Fuerza x5.2' },
    { name: 'Mammut', rarity: 'legendary', price: 46, label: 'Legendaria', emoji: '🦣', meta: '+295 XP · Invulnerabilidad x5.5' },
    { name: 'Masa', rarity: 'epic', price: 31, label: 'Épica', emoji: '⚙️', meta: '+200 XP · Peso x4.0' },
    { name: 'Sombra', rarity: 'epic', price: 33, label: 'Épica', emoji: '🌘', meta: '+210 XP · Noche x4.1' },
    { name: 'Veneno', rarity: 'mythic', price: 54, label: 'Mítica', emoji: '☠️', meta: '+350 XP · Toxicidad x6.0' },
    { name: 'Gas', rarity: 'rare', price: 18, label: 'Rara', emoji: '💨', meta: '+105 XP · Viento x2.5' },
    { name: 'Espíritu', rarity: 'legendary', price: 50, label: 'Legendaria', emoji: '🕊️', meta: '+330 XP · Espíritu x5.9' },
    { name: 'Tiger', rarity: 'legendary', price: 43, label: 'Legendaria', emoji: '🐯', meta: '+270 XP · Instinto x5.1' },
    { name: 'Yeti', rarity: 'epic', price: 27, label: 'Épica', emoji: '🧊', meta: '+165 XP · Escarcha x3.5' },
    { name: 'Magnet', rarity: 'legendary', price: 41, label: 'Legendaria', emoji: '🧲', meta: '+255 XP · Magnetismo x4.9' },
    { name: 'Kitsune', rarity: 'mythic', price: 63, label: 'Mítica', emoji: '🦊', meta: '+430 XP · Ilusión x7.0' },
    { name: 'Control', rarity: 'mythic', price: 66, label: 'Mítica', emoji: '🧠', meta: '+450 XP · Dominio x7.4' },
    { name: 'Dragón', rarity: 'mythic', price: 75, label: 'Mítica', emoji: '🐉', meta: '+520 XP · Poder x8.0' }
  ];

  let cart = [];

  const renderCart = () => {
    if (!cartItems) return;

    if (cart.length === 0) {
      cartItems.innerHTML = '<p class="cart-empty">Todavía no has añadido frutas.</p>';
      if (cartCount) cartCount.textContent = '0';
      if (summaryTotal) summaryTotal.textContent = '€0';
      return;
    }

    cartItems.innerHTML = cart
      .map(
        (item, index) => `
          <div class="cart-item">
            <div class="cart-item-info">
              <h4>${item.name}</h4>
              <p>${item.rarity || 'Fruta'}</p>
            </div>
            <div class="cart-item-price">€${item.price}</div>
            <button class="cart-item-remove" type="button" data-index="${index}" aria-label="Eliminar ${item.name}">×</button>
          </div>
        `
      )
      .join('');

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    if (cartCount) cartCount.textContent = cart.length;
    if (summaryTotal) summaryTotal.textContent = `€${total}`;
  };

  const fruitGrid = document.querySelector('.fruit-grid');
  if (fruitGrid) {
    fruitGrid.innerHTML = '';

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
          <button class="buy-btn add-to-cart" type="button" data-name="${fruit.name}" data-price="${fruit.price}" data-rarity="${fruit.rarity}">Comprar</button>
        </div>
      `;
      fruitGrid.appendChild(card);
    });
  }

  document.addEventListener('click', (event) => {
    const addButton = event.target.closest('.add-to-cart');
    if (addButton) {
      const name = addButton.dataset.name;
      const price = Number(addButton.dataset.price || 0);
      const rarity = addButton.dataset.rarity || 'rare';
      cart.push({ name, price, rarity });
      renderCart();

      addButton.textContent = '✓ Añadido';
      addButton.disabled = true;
      addButton.style.opacity = '0.8';

      setTimeout(() => {
        addButton.textContent = 'Comprar';
        addButton.disabled = false;
        addButton.style.opacity = '1';
      }, 800);
      return;
    }

    const removeButton = event.target.closest('.cart-item-remove');
    if (removeButton) {
      const index = Number(removeButton.dataset.index || 0);
      cart.splice(index, 1);
      renderCart();
    }

    if (event.target.closest('.cart-toggle')) {
      cartSidebar?.classList.add('active');
    }

    if (event.target.closest('.cart-close')) {
      cartSidebar?.classList.remove('active');
    }
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

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal').forEach((element) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(18px)';
    observer.observe(element);
  });

  renderCart();
});
