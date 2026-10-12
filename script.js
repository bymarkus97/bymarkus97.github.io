document.addEventListener('DOMContentLoaded', () => {
  const fruitsData = [
    {
      id: 1,
      name: 'Gomu Gomu no Mi',
      emoji: '🥤',
      type: 'paramecia',
      rarity: 'common',
      price: 12,
      description: 'Poder del caucho. Tu cuerpo se vuelve flexible y resistente.',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 2,
      name: 'Mera Mera no Mi',
      emoji: '🔥',
      type: 'logia',
      rarity: 'legendary',
      price: 30,
      description: 'Poder del fuego. Controla llamas de devastación total.',
      image: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 3,
      name: 'Yami Yami no Mi',
      emoji: '🌑',
      type: 'logia',
      rarity: 'mythic',
      price: 50,
      description: 'Poder de la oscuridad. Absorbe la luz y domina la sombra.',
      image: 'https://images.unsplash.com/photo-1511560013544-7f68a0f4d0d5?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 4,
      name: 'Hie Hie no Mi',
      emoji: '❄️',
      type: 'logia',
      rarity: 'legendary',
      price: 24,
      description: 'Poder del hielo. Congela enemigos y territorio con precisión.',
      image: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 5,
      name: 'Pika Pika no Mi',
      emoji: '⚡',
      type: 'logia',
      rarity: 'legendary',
      price: 28,
      description: 'Poder del rayo. Genera luz, electricidad y velocidad extrema.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 6,
      name: 'Suna Suna no Mi',
      emoji: '🏜️',
      type: 'logia',
      rarity: 'legendary',
      price: 21,
      description: 'Poder de la arena. Moldea arena, tormentas y destrucción.',
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 7,
      name: 'Gura Gura no Mi',
      emoji: '🌊',
      type: 'paramecia',
      rarity: 'mythic',
      price: 35,
      description: 'Poder del terremoto. Crea ondas de destrucción devastadoras.',
      image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 8,
      name: 'Ope Ope no Mi',
      emoji: '🔪',
      type: 'paramecia',
      rarity: 'epic',
      price: 18,
      description: 'Poder del espacio. Crea campos y manipula el entorno.',
      image: 'https://images.unsplash.com/photo-1593344484964-5d112b1e965e?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 9,
      name: 'Kilo Kilo no Mi',
      emoji: '⚖️',
      type: 'paramecia',
      rarity: 'rare',
      price: 15,
      description: 'Poder del peso. Ajusta la masa a tu favor.',
      image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 10,
      name: 'Tori Tori no Mi',
      emoji: '🦜',
      type: 'zoan',
      rarity: 'uncommon',
      price: 8,
      description: 'Poder del ave. Cambia de forma y gana movilidad aérea.',
      image: 'https://images.unsplash.com/photo-1520637836862-4d197d17c90a?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 11,
      name: 'Inu Inu no Mi',
      emoji: '🐕',
      type: 'zoan',
      rarity: 'rare',
      price: 9,
      description: 'Poder del perro. Gran fuerza física y velocidad feroz.',
      image: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 12,
      name: 'Noro Noro no Mi',
      emoji: '🐌',
      type: 'paramecia',
      rarity: 'rare',
      price: 11,
      description: 'Poder de la lentitud. Ralentiza cualquier cosa que toques.',
      image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 13,
      name: 'Magu Magu no Mi',
      emoji: '🔥',
      type: 'logia',
      rarity: 'legendary',
      price: 26,
      description: 'Poder del magma. Controlas calor intenso y fuego rojo vivo.',
      image: 'https://images.unsplash.com/photo-1529528744093-6d1b1b3a4f6b?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 14,
      name: 'Bomu Bomu no Mi',
      emoji: '💣',
      type: 'paramecia',
      rarity: 'epic',
      price: 14,
      description: 'Poder de la explosión. Genera ráfagas y daño masivo.',
      image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 15,
      name: 'Hito Hito no Mi',
      emoji: '🧍',
      type: 'zoan',
      rarity: 'legendary',
      price: 20,
      description: 'Poder humano. Transformación corporal y fuerza avanzada.',
      image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 16,
      name: 'Suke Suke no Mi',
      emoji: '🧥',
      type: 'paramecia',
      rarity: 'epic',
      price: 17,
      description: 'Poder invisible. Te vuelve intocable para muchos ataques.',
      image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80'
    }
  ];

  let cart = JSON.parse(localStorage.getItem('bloxCart')) || [];

  const searchInput = document.getElementById('searchInput');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const fruitGrid = document.getElementById('fruitGrid');
  const cartIcon = document.querySelector('.cart-icon');
  const cartSidebar = document.querySelector('.cart-sidebar');
  const cartClose = document.querySelector('.cart-close');
  const cartItems = document.querySelector('.cart-items');
  const cartTotal = document.querySelector('.cart-total strong');
  const checkoutBtn = document.querySelector('.btn-checkout');
  const modal = document.getElementById('fruitModal');
  const modalClose = document.querySelector('.modal-close');
  const navButton = document.querySelector('.nav-button');

  function renderFruits(fruits) {
    fruitGrid.innerHTML = fruits.map(fruit => `
      <div class="fruit-card ${fruit.rarity}">
        <span class="rarity">${fruit.rarity}</span>
        <div class="fruit-icon">${fruit.emoji}</div>
        <h3>${fruit.name}</h3>
        <p>${fruit.description}</p>
        <div class="price">€${fruit.price}</div>
        <button class="btn btn-buy" onclick="addToCart(${fruit.id})">Agregar al carrito</button>
      </div>
    `).join('');
  }

  function filterFruits() {
    const searchTerm = searchInput.value.toLowerCase();
    const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;

    const filtered = fruitsData.filter(fruit => {
      const matchesSearch = fruit.name.toLowerCase().includes(searchTerm) || 
                           fruit.description.toLowerCase().includes(searchTerm);
      const matchesFilter = activeFilter === 'all' || fruit.type === activeFilter;
      return matchesSearch && matchesFilter;
    });

    renderFruits(filtered);
  }

  window.addToCart = function(fruitId) {
    const fruit = fruitsData.find(f => f.id === fruitId);
    const existingItem = cart.find(item => item.id === fruitId);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...fruit, quantity: 1 });
    }

    localStorage.setItem('bloxCart', JSON.stringify(cart));
    updateCart();
    showNotification('Fruta añadida al carrito');
  };

  function updateCart() {
    const badgeCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelector('.cart-badge').textContent = badgeCount;

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    if (cart.length === 0) {
      cartItems.innerHTML = '<div class="cart-empty">El carrito está vacío</div>';
      checkoutBtn.disabled = true;
    } else {
      cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
          <div class="cart-item-info">
            <h4>${item.name}</h4>
            <p>Cantidad: ${item.quantity}</p>
          </div>
          <div class="cart-item-price">€${(item.price * item.quantity)}</div>
          <button class="cart-item-remove" onclick="removeFromCart(${item.id})">×</button>
        </div>
      `).join('');
      checkoutBtn.disabled = false;
    }

    cartTotal.textContent = `€${total}`;
  }

  window.removeFromCart = function(fruitId) {
    cart = cart.filter(item => item.id !== fruitId);
    localStorage.setItem('bloxCart', JSON.stringify(cart));
    updateCart();
  };

  cartIcon.addEventListener('click', () => {
    cartSidebar.classList.add('active');
  });

  cartClose.addEventListener('click', () => {
    cartSidebar.classList.remove('active');
  });

  checkoutBtn.addEventListener('click', () => {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const paypalUrl = `https://www.paypal.me/itrionmods/${total}`;
    window.open(paypalUrl, '_blank');

    setTimeout(() => {
      cart = [];
      localStorage.setItem('bloxCart', JSON.stringify(cart));
      updateCart();
      cartSidebar.classList.remove('active');
    }, 500);
  });

  searchInput.addEventListener('input', filterFruits);

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterFruits();
    });
  });

  window.showFruitDetails = function(fruitId) {
    const fruit = fruitsData.find(f => f.id === fruitId);
    if (fruit) {
      document.getElementById('modalImage').src = fruit.image;
      document.getElementById('modalName').textContent = fruit.name;
      document.getElementById('modalType').textContent = `Tipo: ${fruit.type.toUpperCase()}`;
      document.getElementById('modalPrice').textContent = `Precio: €${fruit.price}`;
      document.getElementById('modalDescription').textContent = fruit.description;
      document.getElementById('modalRarity').textContent = fruit.rarity;
      document.getElementById('modalRarity').className = `modal-rarity-badge ${fruit.rarity}`;
      modal.classList.add('active');
    }
  };

  modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });

  function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: linear-gradient(135deg, #00d4ff, #0088ff);
      color: #0a0f1f;
      padding: 16px 24px;
      border-radius: 12px;
      font-weight: 800;
      z-index: 300;
      animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.animation = 'slideOut 0.3s ease';
      setTimeout(() => notification.remove(), 300);
    }, 2000);
  }

  navButton.addEventListener('click', () => {
    document.getElementById('tienda')?.scrollIntoView({ behavior: 'smooth' });
  });

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

  const cards = document.querySelectorAll('.fruit-card, .mini-feature, .about-panel');
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

  cards.forEach((card) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });

  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideIn {
      from { transform: translateX(400px); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
      from { transform: translateX(0); opacity: 1; }
      to { transform: translateX(400px); opacity: 0; }
    }
  `;
  document.head.appendChild(style);

  renderFruits(fruitsData);
  updateCart();
});
