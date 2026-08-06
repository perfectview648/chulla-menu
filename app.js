// ============ RENDER HELPERS ============
function spiceIcons(level){
  let out = '<div class="spice">';
  for(let i=0;i<3;i++){
    const filled = i < level;
    out += `<svg viewBox="0 0 24 24" fill="${filled ? 'var(--orange)' : '#E5D9CC'}"><path d="M12 2c0 4-4 5-4 9a4 4 0 008 0c0-4-4-5-4-9z"/></svg>`;
  }
  out += '</div>';
  return out;
}
function spiceLabel(level){
  return ["Mild","Mild","Medium","Hot"][level] || "Mild";
}
function priceStr(item){
  return (item.priceFrom ? "From $" : "$") + item.price.toFixed(2);
}
function badgesHTML(item){
  let h = '';
  if(item.best) h += '<span class="mini-badge best">★ Best Seller</span>';
  if(item.chef) h += '<span class="mini-badge chef">Chef Rec.</span>';
  return h;
}

function itemCardHTML(item){
  return `
  <div class="item-card ripple" onclick="openDish('${item.id}')">
    <img class="item-img lazy-img" loading="lazy" src="${item.img}" alt="${item.name}" onload="this.classList.add('loaded')">
    <div class="item-info">
      <div class="item-badges">${badgesHTML(item)}</div>
      <div class="item-name">${item.name}</div>
      <div class="item-desc">${item.desc}</div>
      <div class="item-foot">
        <div class="item-tags">
          ${item.veg ? '<div class="veg-icon" title="Vegetarian"></div>' : ''}
          ${spiceIcons(item.spice)}
        </div>
        <div class="item-price">${priceStr(item)}</div>
      </div>
    </div>
  </div>`;
}

function favCardHTML(item){
  const rating = FAVORITE_RATINGS[item.id] || 4.7;
  return `
  <div class="fav-card ripple" onclick="openDish('${item.id}')">
    <div class="fav-img-wrap">
      <img class="lazy-img" loading="lazy" src="${item.img}" alt="${item.name}" onload="this.classList.add('loaded')">
      <span class="badge">★ Best Seller</span>
      ${item.chef ? '<span class="badge chef">Chef Rec.</span>' : ''}
    </div>
    <div class="fav-body">
      <div class="fav-name">${item.name}</div>
      <div class="fav-desc">${item.desc}</div>
      <div class="fav-meta">
        <div class="rating">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z"/></svg>
          ${rating}
        </div>
        <div class="price-tag">${priceStr(item)}</div>
      </div>
    </div>
  </div>`;
}

function catCardHTML(cat){
  const count = getItemsByCategory(cat.id).length;
  return `
  <button class="cat-card ripple" onclick="openMenu('${cat.id}')">
    <div class="cat-icon">${cat.emoji}</div>
    <div class="cat-info">
      <div class="cat-name">${cat.name}</div>
      <div class="cat-desc">${cat.desc}</div>
      <div class="cat-count">${count} Item${count!==1?'s':''}</div>
    </div>
    <svg class="chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
  </button>`;
}

// ============ LANDING PAGE RENDER ============
function renderLanding(){
  document.getElementById('fav-scroll').innerHTML = FAVORITE_IDS.map(id=>favCardHTML(getItem(id))).join('');
  document.getElementById('landing-cat-grid').innerHTML = CATEGORIES.map(catCardHTML).join('');
  document.getElementById('ft-list').innerHTML = FIRST_TIMER_IDS.map(id=>{
    const item = getItem(id);
    return `
    <div class="ft-item ripple" onclick="openDish('${item.id}')">
      <img src="${item.img}" alt="${item.name}">
      <div>
        <div class="ft-item-name">${item.name}</div>
        <div class="ft-item-desc">${FIRST_TIMER_BLURB[id] || item.desc}</div>
      </div>
    </div>`;
  }).join('');
}

function showFavoritesSection(){
  document.getElementById('favorites-section').scrollIntoView({behavior:'smooth', block:'start'});
}

// ============ MENU SCREEN ============
let currentCatFilter = 'all';

function renderCatNav(){
  const nav = document.getElementById('cat-nav');
  const pills = [{id:'all', name:'Popular', emoji:''}, ...CATEGORIES.map(c=>({id:c.id, name:c.name}))];
  nav.innerHTML = pills.map(p => `<button class="cat-pill ${p.id===currentCatFilter?'active':''}" data-pill="${p.id}" onclick="jumpToCategory('${p.id}')">${p.name}</button>`).join('');
}

function renderMenuContent(){
  const content = document.getElementById('menu-content');
  let html = '';

  CATEGORIES.forEach(cat => {
    const items = getItemsByCategory(cat.id);
    if(cat.id === 'weekend-food-specials'){
      html += renderWeekendSection(cat, items);
    } else if(cat.id === 'catering-services'){
      // Catering gets its own experience; show a teaser card that routes there
      html += `
      <div class="section-cat-title" id="cat-${cat.id}">${cat.emoji} ${cat.name}</div>
      <button class="cat-card ripple" style="width:100%;" onclick="openCatering()">
        <div class="cat-icon">${cat.emoji}</div>
        <div class="cat-info">
          <div class="cat-name">Planning an Event?</div>
          <div class="cat-desc">View our full catering menu &amp; tray sizes</div>
        </div>
        <svg class="chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
      </button>`;
    } else {
      html += `
      <div class="cat-banner" id="cat-${cat.id}-banner">
        <img class="lazy-img" loading="lazy" src="${cat.banner}" alt="${cat.name}" onload="this.classList.add('loaded')">
        <div class="cat-banner-overlay">
          <div class="cat-banner-title">${cat.emoji} ${cat.name}</div>
          <div class="cat-banner-desc">${cat.desc}</div>
        </div>
      </div>
      <div class="section-cat-title" id="cat-${cat.id}">Menu · ${items.length} items</div>
      <div class="item-list">${items.map(itemCardHTML).join('')}</div>`;
    }
  });

  content.innerHTML = html;
}

function renderWeekendSection(cat, items){
  let html = `
  <div class="weekend-hero" id="cat-${cat.id}">
    <img src="${cat.banner}" alt="Weekend Specials">
    <div class="weekend-hero-overlay">
      <div class="gold-tag">✦ Limited &amp; Exclusive</div>
      <div class="weekend-hero-title">Weekend Specials</div>
    </div>
  </div>`;
  items.forEach(item => {
    html += `
    <div class="weekend-item ripple" onclick="openDish('${item.id}')">
      <div class="weekend-item-img">
        <img class="lazy-img" loading="lazy" src="${item.img}" alt="${item.name}" onload="this.classList.add('loaded')">
        ${item.avail ? `<span class="avail-tag">${item.avail}</span>` : ''}
        <span class="limited-tag">Limited Qty</span>
      </div>
      <div class="weekend-item-body">
        <div class="weekend-item-name">${item.name}</div>
        <div class="weekend-item-desc">${item.desc}</div>
        <div class="weekend-item-foot">
          <div class="item-tags">${spiceIcons(item.spice)}</div>
          <div class="item-price" style="font-size:17px;">${priceStr(item)}</div>
        </div>
      </div>
    </div>`;
  });
  return html;
}

function jumpToCategory(id){
  currentCatFilter = id;
  renderCatNav();
  if(id === 'all'){
    document.getElementById('menu-content').scrollIntoView({behavior:'smooth', block:'start'});
    window.scrollTo({top:0, behavior:'smooth'});
    return;
  }
  const target = document.getElementById(`cat-${id}-banner`) || document.getElementById(`cat-${id}`);
  if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
}

// ============ SEARCH ============
let searchDebounce;
function onSearch(query){
  clearTimeout(searchDebounce);
  searchDebounce = setTimeout(()=>doSearch(query.trim().toLowerCase()), 90);
}
function doSearch(q){
  const menuContent = document.getElementById('menu-content');
  const resultsBox = document.getElementById('menu-search-results');
  const catNav = document.getElementById('cat-nav').parentElement;

  if(!q){
    menuContent.style.display = '';
    resultsBox.style.display = 'none';
    return;
  }

  menuContent.style.display = 'none';
  resultsBox.style.display = 'block';

  const matches = ITEMS.filter(item => {
    const hay = (item.name + ' ' + item.desc + ' ' + (item.keywords||[]).join(' ') + ' ' + (item.veg ? 'vegetarian veg' : 'non-veg')).toLowerCase();
    return hay.includes(q);
  });

  if(matches.length === 0){
    resultsBox.innerHTML = `
    <div class="no-results">
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
      <div style="font-weight:600; margin-bottom:4px;">No dishes found</div>
      <div style="font-size:12.5px;">Try "chicken", "spicy", or "vegetarian"</div>
    </div>`;
    return;
  }

  resultsBox.innerHTML = `<div style="font-size:12.5px; color:#a99887; margin-bottom:12px; font-weight:600;">${matches.length} result${matches.length!==1?'s':''}</div><div class="item-list">${matches.map(itemCardHTML).join('')}</div>`;
}

function goSearch(){
  openMenu('all');
  setTimeout(()=>{
    document.getElementById('menu-search-input').focus();
  }, 400);
}

// ============ SCREEN NAVIGATION ============
function switchScreen(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo({top:0, behavior:'instant'});
}

function goHome(){
  switchScreen('screen-landing');
  document.getElementById('menu-search-input').value = '';
  doSearch('');
}

function openMenu(catId){
  switchScreen('screen-menu');
  currentCatFilter = catId || 'all';
  renderCatNav();
  renderMenuContent();
  if(catId && catId !== 'all'){
    setTimeout(()=>jumpToCategory(catId), 80);
  }
}

function openCatering(){
  switchScreen('screen-catering');
  document.getElementById('catering-list').innerHTML = getItemsByCategory('catering-services').map(itemCardHTML).join('');
}

// ============ DISH DETAIL MODAL ============
let currentDishId = null;

function openDish(id){
  const item = getItem(id);
  if(!item) return;
  currentDishId = id;
  const cat = getCategory(item.cat);

  document.getElementById('dish-img').src = item.img;
  document.getElementById('dish-img').alt = item.name;
  document.getElementById('dish-badges').innerHTML = badgesHTML(item);
  document.getElementById('dish-title').textContent = item.name;
  document.getElementById('dish-price').textContent = priceStr(item);
  document.getElementById('dish-desc').textContent = item.desc;
  document.getElementById('dish-spice').innerHTML = spiceIcons(item.spice) + ` <span style="margin-left:4px;">${spiceLabel(item.spice)}</span>`;
  document.getElementById('dish-diet').innerHTML = item.veg ? '<div class="veg-icon"></div> Vegetarian' : 'Non-Vegetarian';
  document.getElementById('dish-cat').textContent = cat ? cat.name : '';

  // Pairs well with: same-category items, excluding current
  const sameCat = getItemsByCategory(item.cat).filter(i=>i.id!==item.id).slice(0,5);
  document.getElementById('pairs-scroll').innerHTML = sameCat.map(relatedChipHTML).join('') || '<div style="font-size:12px;color:#B8A99C;">No suggestions available</div>';
  document.getElementById('pairs-block').style.display = sameCat.length ? '' : 'none';

  // Customers also ordered: pull from favorites + a couple random others, excluding current & same list
  const pool = ITEMS.filter(i => i.id !== item.id && !sameCat.includes(i));
  const also = pool.sort(()=>0.5-Math.random()).slice(0,5);
  document.getElementById('also-scroll').innerHTML = also.map(relatedChipHTML).join('');

  document.getElementById('dish-overlay').classList.add('active');
  document.getElementById('dish-sheet').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function relatedChipHTML(item){
  return `
  <div class="related-chip ripple" onclick="openDish('${item.id}')">
    <img src="${item.img}" alt="${item.name}">
    <div>
      <div class="related-chip-name">${item.name}</div>
      <div class="related-chip-price">${priceStr(item)}</div>
    </div>
  </div>`;
}

function closeDish(){
  document.getElementById('dish-overlay').classList.remove('active');
  document.getElementById('dish-sheet').classList.remove('active');
  document.body.style.overflow = '';
}

// ============ RIPPLE EFFECT ============
document.addEventListener('click', function(e){
  const el = e.target.closest('.ripple');
  if(!el) return;
  const rect = el.getBoundingClientRect();
  const ripple = document.createElement('span');
  const size = Math.max(rect.width, rect.height);
  ripple.className = 'ripple-effect';
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = (e.clientX - rect.left - size/2) + 'px';
  ripple.style.top = (e.clientY - rect.top - size/2) + 'px';
  const prevPos = getComputedStyle(el).position;
  if(prevPos === 'static') el.style.position = 'relative';
  el.appendChild(ripple);
  setTimeout(()=>ripple.remove(), 650);
});

// ============ INIT ============
renderLanding();
