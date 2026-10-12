document.addEventListener('DOMContentLoaded', () => {
  // Data de frutas con precios
  const fruitsData = [
    {
      id: 1,
      name: 'Mera Mera no Mi',
      emoji: '🔥',
      type: 'logia',
      rarity: 'legendary',
      price: 1500,
      description: 'Poder del fuego. Domina el fuego y quema todo a tu paso.',
      image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 2,
      name: 'Gura Gura no Mi',
      emoji: '🌊',
      type: 'paramecia',
      rarity: 'mythic',
      price: 2500,
      description: 'Poder del terremoto. Causa terremotos devastadores.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 3,
      name: 'Yami Yami no Mi',
      emoji: '⚫',
      type: 'logia',
      rarity: 'mythic',
      price: 3000,
      description: 'Poder de la oscuridad. Absorbe todo a tu alrededor.',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 4,
      name: 'Hie Hie no Mi',
      emoji: '❄️',
      type: 'logia',
      rarity: 'legendary',
      price: 1800,
      description: 'Poder del hielo. Congela todo lo que toca.',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 5,
      name: 'Pika Pika no Mi',
      emoji: '⚡',
      type: 'logia',
      rarity: 'legendary',
      price: 2000,
      description: 'Poder del rayo. Viaja a la velocidad de la luz.',
      image: 'https://images.unsplash.com/photo-1599599810694-b308ca884cb8?auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 6,
      name: 'Ope Ope no Mi',
      emoji: '🔪',
      type: 'paramecia',
      rarity: 'epic',
      price: 1200,
      description: 'Poder de la cirugía. Controla todo dentro de tu campo.',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 7,
      name: 'Marco Marco no Mi',
      emoji: '🦅',
      type: 'zoan',
      rarity: 'legendary',
      price: 1600,
      description: 'Poder del fénix. Transforma en un fénix inmortal.',
      image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd8b4fcd?auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 8,
      name: 'Tori Tori no Mi',
      emoji: '🦜',
      type: 'zoan',
      rarity: 'uncommon',
      price: 500,
      description: 'Poder del pájaro. Vuela y ataca desde el aire.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 9,
      name: 'Inu Inu no Mi',
      emoji: '🐕',
      type: 'zoan',
      rarity: 'uncommon',
      price: 400,
      description: 'Poder del perro. Transforma en un perro feroz.',
      image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd8b4fcd?auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 10,
      name: 'Noro Noro no Mi',
      emoji: '🐌',
      type: 'paramecia',
      rarity: 'rare',
      price: 900,
      description: 'Poder de la lentitud. Ralentiza todo a tu alrededor.',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 11,
      name: 'Gomu Gomu no Mi',
      emoji: '⭕',
      type: 'paramecia',
      rarity: 'rare',
      price: 800,
      description: 'Poder del caucho. Tu cuerpo se vuelve flexible.',
      image: 'https://images.unsplash.com/photo-1599599810694-b308ca884cb8?auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 12,
      name: 'Suna Suna no Mi',
      emoji: '🏜️',
      type: 'logia',
      rarity: 'legendary',
      price: 1700,
      description: 'Poder de la arena. Controla la arena desértica.',
      image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd8b4fcd?auto=format&fit=crop&w=500&q=60'
    }
  ];

  // Carrito
  let cart = JSON.parse(localStorage.getItem('bloxCart')) || [];

  // Elementos del DOM
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

  // Función para renderizar frutas
  function renderFruits(fruits) {
    fruitGrid.innerHTML = fruits.map(fruit => `
      <div class="fruit-card ${fruit.rarity}">
        <span class="rarity">${fruit.rarity}</span>
        <div class="fruit-icon">${fruit.emoji}</div>
        <h3>${fruit.name}</h3>
        <p>${fruit.description}</p>
        <div class="price">$${fruit.price.toLocaleString()}</div>
        <button class="btn btn-buy" onclick="addToCart(${fruit.id})">Agregar al carrito</button>
      </div>
    `).join('');
  }

  // Función para filtrar frutas
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

  // Agregar al carrito
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
    showNotification('Agregado al carrito');
  };

  // Actualizar carrito
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
          <div class="cart-item-price">$${(item.price * item.quantity).toLocaleString()}</div>
          <button class="cart-item-remove" onclick="removeFromCart(${item.id})">×</button>
        </div>
      `).join('');
      checkoutBtn.disabled = false;
    }

    cartTotal.textContent = `$${total.toLocaleString()}`;
  }

  // Eliminar del carrito
  window.removeFromCart = function(fruitId) {
    cart = cart.filter(item => item.id !== fruitId);
    localStorage.setItem('bloxCart', JSON.stringify(cart));
    updateCart();
  };

  // Abrir/cerrar carrito
  cartIcon.addEventListener('click', () => {
    cartSidebar.classList.add('active');
  });

  cartClose.addEventListener('click', () => {
    cartSidebar.classList.remove('active');
  });

  // Checkout con PayPal
  checkoutBtn.addEventListener('click', () => {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const items = cart.map(item => `${item.name} (x${item.quantity})`).join(', ');
    
    // Redirigir a PayPal.me con la cantidad
    const paypalUrl = `https://www.paypal.me/itrionmods/${total}`;
    window.open(paypalUrl, '_blank');
    
    // Limpiar carrito después de ir a PayPal
    setTimeout(() => {
      cart = [];
      localStorage.setItem('bloxCart', JSON.stringify(cart));
      updateCart();
      cartSidebar.classList.remove('active');
    }, 500);
  });

  // Búsqueda
  searchInput.addEventListener('input', filterFruits);

  // Filtros
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterFruits();
    });
  });

  // Modal de detalles
  window.showFruitDetails = function(fruitId) {
    const fruit = fruitsData.find(f => f.id === fruitId);
    if (fruit) {
      document.getElementById('modalImage').src = fruit.image;
      document.getElementById('modalName').textContent = fruit.name;
      document.getElementById('modalType').textContent = `Tipo: ${fruit.type.toUpperCase()}`;
      document.getElementById('modalPrice').textContent = `Precio: $${fruit.price.toLocaleString()}`;
      document.getElementById('modalDescription').textContent = fruit.description;
      document.getElementById('modalRarity').textContent = fruit.rarity;
      document.getElementById('modalRarity').className = `modal-rarity ${fruit.rarity}`;
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

  // Notificación
  function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: linear-gradient(135deg, #7ef29a, #4fd1a6);
      color: white;
      padding: 16px 24px;
      border-radius: 8px;
      font-weight: 700;
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

  // Smooth scroll
  navButton.addEventListener('click', () => {
    document.getElementById('frutas')?.scrollIntoView({ behavior: 'smooth' });
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

  // Animaciones de entrada
  const cards = document.querySelectorAll('.fruit-card, .mini-feature, .info-panel');
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

  // Inicializar
  renderFruits(fruitsData);
  updateCart();

  // Agregar estilos para animaciones
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideIn {
      from {
        transform: translateX(400px);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    @keyframes slideOut {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(400px);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
});
