// Products data
const products = [
  {
    id: 1, category: 'tropical',
    name: 'Alphonso Mango Pulp', latin: 'Mangifera indica "Alphonso"',
    emoji: '🥭', color: '#FF9500', bg: 'linear-gradient(135deg, #FF9500 0%, #FF6B00 100%)',
    badge: 'popular', badgeText: 'Best Seller',
    tags: ['Tropical', 'Sweet', 'Rich'],
    sub: 'The king of mangoes — intensely aromatic, smooth, and naturally sweet.',
    price: '$3.80', rating: '4.9 (348 reviews)',
    desc: 'Our Alphonso Mango Pulp is made from hand-selected, tree-ripened Alphonso mangoes sourced from the Ratnagiri and Devgad regions of Maharashtra, India. Processed at peak ripeness and immediately blast-frozen to lock in the legendary saffron-gold color and intensely sweet aroma. No added sugar, no preservatives — just pure mango glory.',
    specs: [['Brix', '18–21°'], ['pH', '3.6 – 4.0'], ['Shelf Life', '24 months'], ['Storage', '-18°C or below'], ['Origin', 'India'], ['Process', 'Aseptic / IQF']],
    features: ['❄️ No Added Sugar', '🌿 100% Natural', '✅ HACCP Certified', '🌍 Export Grade', '🏷️ Private Label Available', '📦 Bulk Available']
  },
  {
    id: 2, category: 'tropical',
    name: 'Passion Fruit Pulp', latin: 'Passiflora edulis',
    emoji: '💜', color: '#8B5CF6', bg: 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)',
    badge: 'organic', badgeText: 'Organic',
    tags: ['Tropical', 'Tangy', 'Aromatic'],
    sub: 'Bold, tropical tartness with floral notes. A beverage industry staple.',
    price: '$4.20', rating: '4.8 (214 reviews)',
    desc: 'Sourced from certified organic farms in Ecuador and Colombia, our Passion Fruit Pulp captures the electric tartness and floral complexity of perfectly ripe maracuya. Available as seeded or seedless. Widely used in juices, cocktails, ice creams, and premium desserts.',
    specs: [['Brix', '12–15°'], ['pH', '2.8 – 3.2'], ['Shelf Life', '24 months'], ['Storage', '-18°C or below'], ['Origin', 'Ecuador / Colombia'], ['Process', 'Aseptic']],
    features: ['🌱 Certified Organic', '❄️ No Preservatives', '🌿 Seeded / Seedless', '✅ Rainforest Alliance', '🌍 Export Grade', '📦 Bulk Available']
  },
  {
    id: 3, category: 'citrus',
    name: 'Lime Pulp & Juice', latin: 'Citrus aurantifolia',
    emoji: '🍋', color: '#84CC16', bg: 'linear-gradient(135deg, #84CC16 0%, #65A30D 100%)',
    badge: null,
    tags: ['Citrus', 'Tart', 'Zesty'],
    sub: 'Sharp, zesty Persian lime pulp for cocktails and culinary use.',
    price: '$2.60', rating: '4.7 (182 reviews)',
    desc: 'Our Persian Lime Pulp is cold-pressed and flash-frozen within hours of harvest in the lime-growing regions of Mexico. Delivers consistent acidity and that unmistakeable citrus punch in every batch. Essential for margaritas, ceviche, dressings, and countless beverage applications.',
    specs: [['Brix', '7–10°'], ['pH', '1.9 – 2.4'], ['Shelf Life', '18 months'], ['Storage', '-18°C or below'], ['Origin', 'Mexico'], ['Process', 'Cold Press']],
    features: ['🍋 Cold Pressed', '❄️ No Additives', '✅ BRC Certified', '🌍 Export Grade', '🏷️ Private Label Available', '📦 Bulk Available']
  },
  {
    id: 4, category: 'exotic',
    name: 'Açaí Berry Pulp', latin: 'Euterpe oleracea',
    emoji: '🫐', color: '#7C3AED', bg: 'linear-gradient(135deg, #4C1D95 0%, #7C3AED 100%)',
    badge: 'new', badgeText: 'New',
    tags: ['Exotic', 'Superfood', 'Antioxidant'],
    sub: 'Deep purple superfood pulp from the Amazon rainforest.',
    price: '$8.90', rating: '4.9 (97 reviews)',
    desc: 'Wild-harvested from Euterpe oleracea palms in the Brazilian Amazon, our Açaí Pulp is spray-dried or frozen and retains its legendary anthocyanin content. Deep, earthy, berry flavor with chocolate undertones. Available as plain or mixed with guaraná. The gold standard for açaí bowls and functional beverages.',
    specs: [['Brix', '5–7°'], ['pH', '4.0 – 4.5'], ['Shelf Life', '24 months'], ['Storage', '-18°C or below'], ['Origin', 'Pará, Brazil'], ['Process', 'Spray-Dry / IQF']],
    features: ['🌿 Wild Harvested', '🫐 High Antioxidant', '❄️ No Added Sugar', '✅ Rainforest Alliance', '🌍 Export Grade', '📦 Bulk Available']
  },
  {
    id: 5, category: 'tropical',
    name: 'Guava Pulp', latin: 'Psidium guajava',
    emoji: '🍈', color: '#F97316', bg: 'linear-gradient(135deg, #F97316 0%, #FB923C 100%)',
    badge: 'popular', badgeText: 'Popular',
    tags: ['Tropical', 'Sweet', 'Floral'],
    sub: 'Fragrant pink-fleshed guava pulp — versatile and naturally sweet.',
    price: '$2.80', rating: '4.8 (261 reviews)',
    desc: 'Vibrant pink-fleshed guava pulp from Brazil and India. Our guavas are harvested at optimal ripeness and processed to preserve their signature floral aroma and naturally sweet flavor. High in Vitamin C and fiber. Ideal for nectars, smoothies, ice cream, and jams.',
    specs: [['Brix', '9–12°'], ['pH', '3.5 – 4.0'], ['Shelf Life', '24 months'], ['Storage', '-18°C or below'], ['Origin', 'Brazil / India'], ['Process', 'Aseptic / IQF']],
    features: ['🌿 High Vitamin C', '❄️ No Preservatives', '🌺 Pink / White Flesh', '✅ ISO 22000', '🌍 Export Grade', '📦 Bulk Available']
  },
  {
    id: 6, category: 'berry',
    name: 'Strawberry Pulp', latin: 'Fragaria × ananassa',
    emoji: '🍓', color: '#EF4444', bg: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
    badge: null,
    tags: ['Berry', 'Sweet', 'Classic'],
    sub: 'Bright red, sweet strawberry pulp — a perennial crowd favourite.',
    price: '$3.20', rating: '4.7 (389 reviews)',
    desc: 'Sun-ripened strawberries from the fertile valleys of Spain, Egypt, and the USA. Harvested at peak season and IQF-frozen within hours to lock in that brilliant ruby color and natural sweetness. Our strawberry pulp delivers consistent flavor and color across every batch — perfect for jams, yogurts, ice cream, and smoothies.',
    specs: [['Brix', '7–9°'], ['pH', '3.3 – 3.8'], ['Shelf Life', '24 months'], ['Storage', '-18°C or below'], ['Origin', 'Spain / Egypt / USA'], ['Process', 'IQF']],
    features: ['🍓 Peak Season Harvest', '❄️ No Added Sugar', '✅ GlobalGAP', '🌍 Export Grade', '🏷️ Private Label Available', '📦 Bulk Available']
  },
  {
    id: 7, category: 'exotic',
    name: 'Dragon Fruit Pulp', latin: 'Selenicereus undatus',
    emoji: '🐉', color: '#EC4899', bg: 'linear-gradient(135deg, #EC4899 0%, #BE185D 100%)',
    badge: 'new', badgeText: 'New',
    tags: ['Exotic', 'Visual', 'Mild'],
    sub: 'Stunning pink-red pulp with dramatic visual appeal for premium products.',
    price: '$5.50', rating: '4.6 (74 reviews)',
    desc: 'Vibrant red-fleshed dragon fruit (Hylocereus polyrhizus) sourced from Vietnam and Thailand. The dramatic crimson-purple color makes it a premium ingredient for functional beverages, smoothie bowls, and artisan desserts. Mild, refreshing flavor with natural betalain pigments that deliver striking visuals.',
    specs: [['Brix', '10–13°'], ['pH', '3.5 – 4.5'], ['Shelf Life', '24 months'], ['Storage', '-18°C or below'], ['Origin', 'Vietnam / Thailand'], ['Process', 'Aseptic / IQF']],
    features: ['🎨 Natural Pigment', '❄️ No Additives', '🌿 High in Betalains', '✅ FDA Compliant', '🌍 Export Grade', '📦 Bulk Available']
  },
  {
    id: 8, category: 'citrus',
    name: 'Blood Orange Pulp', latin: 'Citrus sinensis var.',
    emoji: '🍊', color: '#DC2626', bg: 'linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)',
    badge: null,
    tags: ['Citrus', 'Tangy', 'Premium'],
    sub: 'Rare Sicilian blood orange pulp with deep ruby color and berry notes.',
    price: '$6.20', rating: '4.8 (108 reviews)',
    desc: 'Moro and Tarocco blood orange varieties from Sicily, harvested during their short winter season and immediately frozen to preserve the ephemeral ruby-red color and unique berry-citrus flavor profile. A luxury ingredient for premium juices, cocktails, sorbet, and gourmet culinary applications.',
    specs: [['Brix', '11–14°'], ['pH', '3.2 – 3.6'], ['Shelf Life', '18 months'], ['Storage', '-18°C or below'], ['Origin', 'Sicily, Italy'], ['Process', 'Cold Press / IQF']],
    features: ['🍊 Seasonal Harvest', '❄️ No Preservatives', '🌺 Moro / Tarocco Var.', '✅ EU Organic Cert.', '🌍 Export Grade', '📦 Bulk Available']
  }
];

let selectedProduct = null;
let currentFilter = 'all';

// Create floating ice crystals
function createCrystals() {
  const container = document.getElementById('crystals');
  for (let i = 0; i < 20; i++) {
    const c = document.createElement('div');
    c.className = 'crystal';
    c.style.cssText = `
      left: ${Math.random() * 100}%;
      width: ${Math.random() * 5 + 2}px;
      height: ${Math.random() * 5 + 2}px;
      animation-duration: ${Math.random() * 20 + 15}s;
      animation-delay: ${Math.random() * 15}s;
      opacity: ${Math.random() * 0.3 + 0.05};
    `;
    container.appendChild(c);
  }
}

function renderGrid() {
  const grid = document.getElementById('product-grid');
  grid.innerHTML = products.map(p => `
    <div class="product-card" data-cat="${p.category}" onclick="showDetail(${p.id})">
      ${p.badge ? `<div class="product-badge badge-${p.badge}">${p.badgeText}</div>` : ''}
      <div class="product-visual" style="background: ${p.bg}">
        <div class="product-glow" style="background: ${p.color}"></div>
        <span class="product-emoji">${p.emoji}</span>
      </div>
      <div class="product-info">
        <div class="product-tags">
          ${p.tags.map(t => `<span class="product-tag">${t}</span>`).join('')}
        </div>
        <div class="product-name">${p.name}</div>
        <div class="product-sub">${p.sub}</div>
        <div class="product-footer">
          <div>
            <div class="product-price">${p.price}</div>
            <div class="product-unit">per kg · MOQ 100 kg</div>
          </div>
          <button class="card-btn">View Details</button>
        </div>
      </div>
    </div>
  `).join('');
}

function filterProducts(cat, btn) {
  currentFilter = cat;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.product-card').forEach(card => {
    const show = cat === 'all' || card.dataset.cat === cat;
    card.classList.toggle('hidden', !show);
  });
}



function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
  if (name === 'listing') document.getElementById('nav-listing').classList.add('active');
  if (name === 'inquiry') document.getElementById('nav-inquiry').classList.add('active');
  window.scrollTo(0, 0);
}

function showDetail(id) {
  const p = products.find(x => x.id === id);
  selectedProduct = p;

  // Wrap
  document.getElementById('detail-image-wrap').style.background = p.bg;
  document.getElementById('detail-glow').style.background = p.color;
  document.getElementById('detail-emoji').textContent = p.emoji;

  // Category tag
  const colors = { tropical: '#FF9500', citrus: '#84CC16', berry: '#EF4444', exotic: '#8B5CF6' };
  document.getElementById('detail-category-tag').innerHTML = `
    <div class="details-category-tag" style="color:${colors[p.category]};border-color:${colors[p.category]}30;background:${colors[p.category]}15;">
      ${p.category.charAt(0).toUpperCase() + p.category.slice(1)}
    </div>`;

  document.getElementById('detail-name').textContent = p.name;
  document.getElementById('detail-latin').textContent = p.latin;
  document.getElementById('detail-rating').textContent = p.rating;
  document.getElementById('detail-price').textContent = p.price;
  document.getElementById('detail-desc').textContent = p.desc;

  // Specs
  document.getElementById('detail-specs').innerHTML = p.specs.map(([k, v]) => `
    <div class="spec-cell"><div class="spec-key">${k}</div><div class="spec-val">${v}</div></div>
  `).join('');

  // Features
  document.getElementById('detail-features').innerHTML = p.features.map(f => `
    <div class="feature-pill">${f}</div>
  `).join('');

  // Thumbnails (just visual suggestions)
  document.getElementById('thumb-row').innerHTML = `
    <div class="thumb active">${p.emoji}</div>
    <div class="thumb">📦</div>
    <div class="thumb">📋</div>
    <div class="thumb">🌿</div>
  `;

  showPage('details');
}

function selectSize(btn) {
  document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function goToInquiry() {
  if (selectedProduct) {
    document.getElementById('f-product').value = selectedProduct.id;
    document.getElementById('selected-product-display').innerHTML = `
      <div class="selected-product-card">
        <div class="selected-emoji">${selectedProduct.emoji}</div>
        <div class="selected-info">
          <div class="selected-label">Selected Product</div>
          <div class="selected-name">${selectedProduct.name}</div>
        </div>
        <button class="remove-selection" onclick="clearSelection()">✕</button>
      </div>`;
  }
  showPage('inquiry');
}

function clearSelection() {
  selectedProduct = null;
  document.getElementById('selected-product-display').innerHTML = '';
  document.getElementById('f-product').value = '';
}

function submitForm() {
  // ── validate ──
  const required = ['f-firstname', 'f-lastname', 'f-email', 'f-phone', 'f-company'];
  let valid = true;

  required.forEach(id => {
    const el = document.getElementById(id);
    const isEmail = id === 'f-email';
    const ok = isEmail
      ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value.trim())
      : el.value.trim().length > 0;
    el.classList.toggle('valid', ok);
    el.classList.toggle('invalid', !ok);
    const err = el.parentElement.querySelector('.field-err');
    if (err) err.style.display = ok ? 'none' : 'block';
    if (!ok) valid = false;
  });

  if (!valid) {
    document.querySelector('.invalid')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    toast('⚠️ Please fill in all required fields', '#EF4444');
    return;
  }

  // ── build payload ──
  const data = new FormData();
  data.append('name', `${document.getElementById('f-firstname').value.trim()} ${document.getElementById('f-lastname').value.trim()}`);
  data.append('email', document.getElementById('f-email').value.trim());
  data.append('phone', document.getElementById('f-phone').value.trim());
  data.append('company', document.getElementById('f-company').value.trim());
  data.append('country', document.getElementById('f-country').value.trim() || 'Not specified');
  data.append('_subject', `New FrostPulp Inquiry from ${document.getElementById('f-company').value.trim()}`);
  data.append('_captcha', 'false');
  data.append('_template', 'table');

  // ── loading state ──
  const btn = document.querySelector('.submit-btn');
  btn.classList.add('loading');
  btn.innerHTML = '<span class="spinner"></span>Sending…';

  fetch(`https://formsubmit.co/${CONTACT_EMAIL}`, {
    method: 'POST',
    body: data,
    headers: { 'Accept': 'application/json' }
  })
    .then(res => {
      btn.classList.remove('loading');
      btn.innerHTML = 'Send Inquiry →';
      if (res.ok) {
        showSuccess();
        toast('✅ Inquiry sent! We\'ll be in touch within 24 h.', '#4ECDC4');
      } else {
        toast('❌ Send failed — please try again or email us directly.', '#EF4444');
      }
    })
    .catch(() => {
      btn.classList.remove('loading');
      btn.innerHTML = 'Send Inquiry →';
      toast('❌ Send failed — check your internet connection and try again.', '#EF4444');
    });
}

function showSuccess() {
  document.getElementById('inquiry-form-wrap').style.display = 'none';
  document.getElementById('selected-product-display').style.display = 'none';
  document.querySelector('.inquiry-header').style.display = 'none';
  document.getElementById('success-msg').classList.add('show');
}

// ── Contact email — replace with your real email address ──
const CONTACT_EMAIL = 'muhammeduvaislm10@gmail.com';

// ── Live validation ──
function liveCheck(el) {
  const ok = el.value.trim().length > 0;
  el.classList.toggle('valid', ok);
  el.classList.toggle('invalid', !ok);
  const err = el.parentElement.querySelector('.field-err');
  if (err) err.style.display = ok ? 'none' : 'block';
}
function liveCheckEmail(el) {
  const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value.trim());
  el.classList.toggle('valid', ok);
  el.classList.toggle('invalid', el.value && !ok);
  const err = el.parentElement.querySelector('.field-err');
  if (err) err.style.display = (el.value && !ok) ? 'block' : 'none';
}


// ── Toast ──
function toast(msg, color) {
  const t = document.getElementById('fp-toast');
  t.textContent = msg;
  t.style.background = color;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 4200);
}



// Init
createCrystals();
renderGrid();
