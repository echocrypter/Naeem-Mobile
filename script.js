(() => {
  'use strict';
  const WHATSAPP = '923056035067'; // shop WhatsApp number (country code + number, no +)
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const fmt = n => 'Rs. ' + n.toLocaleString('en-PK');

  /* ---------- line-art illustrations (same style as the design) ---------- */
  const S = 'stroke="#14171A" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"';
  const G = '#0F5C4D';
  const ART = {
    earbuds: `<svg viewBox="0 0 200 160"><rect x="50" y="62" width="100" height="78" rx="26" fill="#fff" ${S}/><path d="M50 92h100" ${S}/><circle cx="100" cy="116" r="5" fill="${G}"/><ellipse cx="78" cy="32" rx="14" ry="18" fill="${G}" ${S}/><path d="M88 46l6 14" ${S}/><ellipse cx="122" cy="32" rx="14" ry="18" fill="${G}" ${S}/><path d="M112 46l-6 14" ${S}/></svg>`,
    neckband: `<svg viewBox="0 0 200 160"><path d="M52 24c-6 52 14 96 48 96s54-44 48-96" fill="none" stroke="#14171A" stroke-width="6" stroke-linecap="round"/><ellipse cx="52" cy="40" rx="11" ry="15" fill="${G}" ${S}/><ellipse cx="148" cy="40" rx="11" ry="15" fill="${G}" ${S}/><circle cx="100" cy="120" r="9" fill="#fff" ${S}/></svg>`,
    keyboard: `<svg viewBox="0 0 200 160"><rect x="16" y="46" width="168" height="76" rx="12" fill="#fff" ${S}/><g fill="#E4E2DC" stroke="#14171A" stroke-width="1.8"><rect x="30" y="58" width="16" height="12" rx="3"/><rect x="52" y="58" width="16" height="12" rx="3"/><rect x="74" y="58" width="16" height="12" rx="3"/><rect x="96" y="58" width="16" height="12" rx="3"/><rect x="118" y="58" width="16" height="12" rx="3"/><rect x="140" y="58" width="16" height="12" rx="3"/><rect x="162" y="58" width="16" height="12" rx="3"/><rect x="30" y="78" width="16" height="12" rx="3"/><rect x="52" y="78" width="16" height="12" rx="3"/><rect x="74" y="78" width="16" height="12" rx="3"/><rect x="96" y="78" width="16" height="12" rx="3"/><rect x="118" y="78" width="16" height="12" rx="3"/><rect x="140" y="78" width="16" height="12" rx="3"/><rect x="162" y="78" width="16" height="12" rx="3"/></g><rect x="52" y="98" width="96" height="12" rx="3" fill="${G}" stroke="#14171A" stroke-width="1.8"/></svg>`,
    mouse: `<svg viewBox="0 0 200 160"><path d="M100 18c-30 0-40 22-40 50v32c0 30 14 46 40 46s40-16 40-46V68c0-28-10-50-40-50z" fill="#fff" ${S}/><path d="M60 62h80M100 18v44" fill="none" ${S}/><rect x="94" y="30" width="12" height="22" rx="6" fill="${G}"/></svg>`,
    speaker: `<svg viewBox="0 0 200 160"><rect x="34" y="36" width="132" height="92" rx="30" fill="#fff" ${S}/><circle cx="76" cy="82" r="24" fill="${G}" ${S}/><circle cx="76" cy="82" r="8" fill="#fff"/><circle cx="130" cy="82" r="16" fill="#E4E2DC" ${S}/><circle cx="130" cy="82" r="5" fill="#14171A"/><path d="M80 36c0-14 40-14 40 0" fill="none" ${S}/></svg>`,
    charger: `<svg viewBox="0 0 200 160"><rect x="64" y="36" width="72" height="62" rx="14" fill="#fff" ${S}/><path d="M84 36V14M116 36V14" fill="none" ${S}/><path d="M104 52l-12 18h14l-10 18" fill="none" stroke="${G}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M100 98v14c0 24 40 14 40 36" fill="none" stroke="#14171A" stroke-width="5" stroke-linecap="round"/></svg>`,
    cable: `<svg viewBox="0 0 200 160"><rect x="22" y="64" width="34" height="32" rx="6" fill="#fff" ${S}/><rect x="144" y="64" width="34" height="32" rx="6" fill="${G}" ${S}/><path d="M56 80c24 0 20-38 44-38s20 76 44 76c0-20 0-38 0-38" fill="none" stroke="#14171A" stroke-width="5" stroke-linecap="round"/><path d="M30 76h18M30 84h18" stroke="#14171A" stroke-width="2"/></svg>`,
    powerbank: `<svg viewBox="0 0 200 160"><rect x="56" y="16" width="88" height="128" rx="16" fill="#fff" ${S}/><rect x="70" y="32" width="60" height="14" rx="4" fill="${G}"/><path d="M104 66l-14 22h16l-12 22" fill="none" stroke="${G}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="100" cy="126" r="4" fill="#14171A"/></svg>`,
    case: `<svg viewBox="0 0 200 160"><rect x="60" y="12" width="80" height="136" rx="16" fill="${G}" ${S}/><rect x="72" y="22" width="30" height="30" rx="8" fill="#fff" ${S}/><circle cx="82" cy="32" r="5" fill="#14171A"/><circle cx="94" cy="44" r="4" fill="#14171A"/><path d="M82 100h36M82 114h22" stroke="#fff" stroke-width="3" stroke-linecap="round"/></svg>`,
    watch: `<svg viewBox="0 0 200 160"><path d="M80 8h40l6 34H74zM74 118h52l-6 34H80z" fill="#E4E2DC" ${S}/><rect x="62" y="40" width="76" height="80" rx="20" fill="#fff" ${S}/><rect x="72" y="50" width="56" height="60" rx="12" fill="${G}"/><path d="M100 64v18l12 8" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/></svg>`,
    headphones: `<svg viewBox="0 0 200 160"><path d="M44 96V80a56 56 0 0 1 112 0v16" fill="none" stroke="#14171A" stroke-width="6" stroke-linecap="round"/><rect x="30" y="86" width="34" height="52" rx="14" fill="${G}" ${S}/><rect x="136" y="86" width="34" height="52" rx="14" fill="${G}" ${S}/></svg>`,
    usb: `<svg viewBox="0 0 200 160"><rect x="40" y="58" width="100" height="44" rx="10" fill="#fff" ${S}/><rect x="140" y="68" width="34" height="24" rx="3" fill="#E4E2DC" ${S}/><rect x="150" y="76" width="6" height="8" fill="#14171A"/><rect x="160" y="76" width="6" height="8" fill="#14171A"/><circle cx="66" cy="80" r="8" fill="${G}"/><path d="M84 72h36M84 88h24" stroke="#14171A" stroke-width="2.5" stroke-linecap="round"/></svg>`,
    stand: `<svg viewBox="0 0 200 160"><rect x="44" y="20" width="112" height="70" rx="8" fill="#fff" ${S}/><rect x="52" y="28" width="96" height="54" rx="3" fill="${G}"/><path d="M70 90l-16 50M130 90l16 50M54 140h92" fill="none" stroke="#14171A" stroke-width="5" stroke-linecap="round"/></svg>`
  };

  /* ---------- product data (edit prices / names here) ---------- */
  const CATS = [
    { id: 'Chargers', label: 'Chargers & Cables', art: 'charger', note: 'Fast & safe charging' },
    { id: 'Audio', label: 'Earbuds & Speakers', art: 'earbuds', note: 'Sound that moves' },
    { id: 'Computer', label: 'Keyboards & Mice', art: 'keyboard', note: 'Work & play gear' },
    { id: 'Power', label: 'Power Banks', art: 'powerbank', note: 'Never run out' },
    { id: 'Cases', label: 'Cases & Wearables', art: 'case', note: 'Protect & style' }
  ];
  const PRODUCTS = [
    { id: 1, name: 'Wireless Earbuds Pro', cat: 'Audio', price: 3499, art: 'earbuds', badge: 'Best seller' },
    { id: 2, name: 'Wireless Keyboard', cat: 'Computer', price: 2499, art: 'keyboard' },
    { id: 3, name: 'Wireless Mouse', cat: 'Computer', price: 1199, art: 'mouse' },
    { id: 4, name: 'Bluetooth Speaker', cat: 'Audio', price: 3999, art: 'speaker', badge: 'New' },
    { id: 5, name: '25W Fast Charger', cat: 'Chargers', price: 899, art: 'charger', badge: 'Popular' },
    { id: 6, name: 'Type-C Fast Cable', cat: 'Chargers', price: 399, art: 'cable' },
    { id: 7, name: '10,000mAh Power Bank', cat: 'Power', price: 2799, art: 'powerbank' },
    { id: 8, name: 'Neckband Earphones', cat: 'Audio', price: 1299, art: 'neckband' },
    { id: 9, name: 'Mechanical Keyboard', cat: 'Computer', price: 6999, art: 'keyboard', badge: 'Pro' },
    { id: 10, name: 'Phone Case', cat: 'Cases', price: 999, art: 'case' },
    { id: 11, name: 'Smart Watch', cat: 'Cases', price: 4999, art: 'watch', badge: 'New' },
    { id: 12, name: 'Over-ear Headphones', cat: 'Audio', price: 4499, art: 'headphones' },
    { id: 13, name: '64GB USB Flash Drive', cat: 'Computer', price: 1199, art: 'usb' },
    { id: 14, name: 'Laptop Stand', cat: 'Computer', price: 2199, art: 'stand' }
  ];
  const BUNDLE = { id: 99, name: 'Phone Setup Bundle', cat: 'Bundle', price: 1899, art: 'charger' };

  /* ---------- state ---------- */
  let filter = 'All', query = '';
  let cart = [];
  try { cart = JSON.parse(localStorage.getItem('nm-cart') || '[]'); } catch (e) { cart = []; }
  const save = () => { try { localStorage.setItem('nm-cart', JSON.stringify(cart)); } catch (e) {} };
  const find = id => PRODUCTS.find(p => p.id === id) || (id === BUNDLE.id ? BUNDLE : null);

  /* ---------- render ---------- */
  function renderCats() {
    $('#catGrid').innerHTML = CATS.map(c => `
      <button class="cat reveal" data-cat="${c.id}">
        <div class="cat-ico">${ART[c.art]}</div>
        <div><h3>${c.label}</h3><span>${c.note}</span></div>
      </button>`).join('');
  }
  function renderFilters() {
    const items = [{ id: 'All', label: 'All' }, ...CATS];
    $('#filters').innerHTML = items.map(c =>
      `<button class="chip ${c.id === filter ? 'active' : ''}" data-f="${c.id}" role="tab" aria-selected="${c.id === filter}">${c.label}</button>`).join('');
  }
  function renderProducts() {
    const q = query.trim().toLowerCase();
    const list = PRODUCTS.filter(p => (filter === 'All' || p.cat === filter) && (!q || p.name.toLowerCase().includes(q) || p.cat.toLowerCase().includes(q)));
    $('#productGrid').innerHTML = list.map((p, i) => `
      <article class="card" style="animation-delay:${i * 40}ms">
        <div class="tile">${p.badge ? `<span class="badge ${p.badge === 'New' ? 'gold' : ''}">${p.badge}</span>` : ''}${ART[p.art]}</div>
        <p class="cat-name">${(CATS.find(c => c.id === p.cat) || {}).label || p.cat}</p>
        <h3>${p.name}</h3>
        <div class="card-foot">
          <span class="price">${fmt(p.price)}</span>
          <button class="add" data-add="${p.id}" aria-label="Add ${p.name} to cart"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg></button>
        </div>
      </article>`).join('');
    $('#emptyMsg').hidden = list.length > 0;
  }
  function renderCart() {
    const count = cart.reduce((a, i) => a + i.qty, 0);
    const total = cart.reduce((a, i) => a + i.qty * (find(i.id)?.price || 0), 0);
    $('#cartCount').textContent = count;
    $('#cartTotal').textContent = fmt(total);
    const box = $('#cartItems');
    if (!cart.length) {
      box.innerHTML = `<div class="empty-cart">Your cart is empty.<br>Add some accessories to get started.</div>`;
    } else {
      box.innerHTML = cart.map(i => {
        const p = find(i.id); if (!p) return '';
        return `<div class="line">
          <div class="thumb">${ART[p.art]}</div>
          <div><h4>${p.name}</h4><small>${fmt(p.price)}</small>
            <div class="qty"><button data-dec="${p.id}" aria-label="Decrease">−</button><b>${i.qty}</b><button data-inc="${p.id}" aria-label="Increase">+</button></div></div>
          <button class="rm" data-rm="${p.id}">Remove</button></div>`;
      }).join('');
    }
    $('#checkoutBtn').disabled = !cart.length;
    $('#checkoutBtn').style.opacity = cart.length ? 1 : .5;
  }

  /* ---------- cart actions ---------- */
  function toast(msg) {
    const t = $('#toast'); t.textContent = msg; t.classList.add('show');
    clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove('show'), 1800);
  }
  function add(id) {
    const row = cart.find(i => i.id === id);
    row ? row.qty++ : cart.push({ id, qty: 1 });
    save(); renderCart(); toast(`${find(id).name} added to cart`);
    const b = $('.cart-btn'); b.classList.remove('bump'); void b.offsetWidth; b.classList.add('bump');
  }
  function setQty(id, d) {
    const row = cart.find(i => i.id === id); if (!row) return;
    row.qty += d; if (row.qty <= 0) cart = cart.filter(i => i.id !== id);
    save(); renderCart();
  }
  const openCart = () => { $('#drawer').classList.add('open'); $('#overlay').classList.add('show'); $('#drawer').setAttribute('aria-hidden', 'false'); };
  const closeCart = () => { $('#drawer').classList.remove('open'); $('#overlay').classList.remove('show'); $('#drawer').setAttribute('aria-hidden', 'true'); };
  const wa = text => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

  /* ---------- events ---------- */
  document.addEventListener('click', e => {
    const t = e.target.closest('button,a'); if (!t) return;
    if (t.dataset.add) add(+t.dataset.add);
    else if (t.dataset.inc) setQty(+t.dataset.inc, 1);
    else if (t.dataset.dec) setQty(+t.dataset.dec, -1);
    else if (t.dataset.rm) { cart = cart.filter(i => i.id !== +t.dataset.rm); save(); renderCart(); }
    else if (t.dataset.f) { filter = t.dataset.f; renderFilters(); renderProducts(); }
    else if (t.dataset.cat) { filter = t.dataset.cat; renderFilters(); renderProducts(); $('#products').scrollIntoView({ behavior: 'smooth' }); }
    else if (t.dataset.filter) { filter = t.dataset.filter; renderFilters(); renderProducts(); }
  });
  $('#cartOpen').addEventListener('click', openCart);
  $('#cartClose').addEventListener('click', closeCart);
  $('#overlay').addEventListener('click', closeCart);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeCart(); });
  $('#clearCart').addEventListener('click', () => { cart = []; save(); renderCart(); });
  $('#searchInput').addEventListener('input', e => { query = e.target.value; renderProducts(); });
  $('#searchJump').addEventListener('click', () => setTimeout(() => $('#searchInput').focus(), 500));
  $('#bundleBtn').addEventListener('click', e => { e.preventDefault(); add(BUNDLE.id); openCart(); });

  $('#checkoutBtn').addEventListener('click', () => {
    if (!cart.length) return;
    const lines = cart.map(i => { const p = find(i.id); return `• ${p.name} × ${i.qty} — ${fmt(p.price * i.qty)}`; });
    const total = cart.reduce((a, i) => a + i.qty * find(i.id).price, 0);
    window.open(wa(`Hello Naeem Mobile, I'd like to order:\n${lines.join('\n')}\n\nTotal: ${fmt(total)}`), '_blank', 'noopener');
  });
  $('#waBtn').addEventListener('click', e => { e.preventDefault(); window.open(wa('Hello Naeem Mobile, I have a question.'), '_blank', 'noopener'); });
  $('#contactForm').addEventListener('submit', e => {
    e.preventDefault();
    const n = $('#cName').value.trim(), m = $('#cMsg').value.trim(), note = $('#formNote');
    if (!n || !m) { note.className = 'form-note err'; note.textContent = 'Please fill in your name and message.'; return; }
    note.className = 'form-note'; note.textContent = 'Opening WhatsApp…';
    window.open(wa(`Hi, I'm ${n}. ${m}`), '_blank', 'noopener');
    e.target.reset();
  });

  /* mobile menu + header shadow */
  const menuBtn = $('#menuBtn'), nav = $('#nav');
  menuBtn.addEventListener('click', () => {
    const o = nav.classList.toggle('open'); menuBtn.classList.toggle('open', o); menuBtn.setAttribute('aria-expanded', o);
  });
  $$('#nav a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); menuBtn.classList.remove('open'); }));
  const hdr = $('.site-header');
  const onScroll = () => hdr.classList.toggle('scrolled', window.scrollY > 10);
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  /* reveal on scroll */
  const io = 'IntersectionObserver' in window ? new IntersectionObserver((es, o) => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); o.unobserve(en.target); } }), { threshold: .12 }) : null;
  const observe = () => $$('.reveal:not(.in)').forEach(el => io ? io.observe(el) : el.classList.add('in'));

  /* count-up stats */
  function countUp() {
    $$('[data-count]').forEach(el => {
      const end = +el.dataset.count, dur = 1400, t0 = performance.now();
      const step = t => { const p = Math.min((t - t0) / dur, 1); el.textContent = Math.floor(end * (1 - Math.pow(1 - p, 3))).toLocaleString(); if (p < 1) requestAnimationFrame(step); };
      requestAnimationFrame(step);
    });
  }

  /* init */
  $('#year').textContent = new Date().getFullYear();
  renderCats(); renderFilters(); renderProducts(); renderCart(); observe(); countUp();
})();
