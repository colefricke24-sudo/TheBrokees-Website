const listings = [
  { platform: 'depop', title: 'Harley-Davidson pinup tee', detail: 'Grey and brown cotton graphic tee', size: 'XL', price: '$16.45', image: 'https://media-photos.depop.com/b1/42954975/4654114347_84647e1000b64270aa0ee54367e4dcad/P0.jpg', url: 'https://www.depop.com/products/tiebrokees-harley-davidson-pinup-girl-cotton-5cda/' },
  { platform: 'depop', title: 'H&M Super Baggy Jeans', detail: 'Blue wash denim', size: '33"', price: '$21.70', image: 'https://media-photos.depop.com/b1/42954975/4646567420_7e104696e4f94b02ab0ea1ecdbdd82e4/P0.jpg', url: 'https://www.depop.com/products/thebrozees-hm-super-baggy-jeans-blue-8c6a/' },
  { platform: 'depop', title: 'Hollister cropped jersey', detail: 'Cream and blue jersey', size: 'XL', price: '$16.45', image: 'https://media-photos.depop.com/b1/42954975/4646501243_b5d5b17b7ea646a58c449dc454606f01/P0.jpg', url: 'https://www.depop.com/products/thebfokees-hollister-co-cream-blue-3819/' },
  { platform: 'grailed', title: 'Essentials black shorts', detail: 'Fear of God Essentials / Brand new', size: '32', price: '$65', image: 'https://media-assets.grailed.com/prd/listing/temp/036d3cd91de74fafb03c4f9784e0c93e?w=500', url: 'https://www.grailed.com/listings/105176512-fear-of-god-essentials-shorts-black' },
  { platform: 'grailed', title: 'Essentials light oatmeal hoodie', detail: 'Fear of God Essentials / Brand new', size: 'XS', price: '$72', originalPrice: '$80', image: 'https://media-assets.grailed.com/prd/listing/temp/07e853305bf149b38266500eb4592b76?w=500', url: 'https://www.grailed.com/listings/105175764-fear-of-god-essentials-hoodie-light-oatmeal' },
  { platform: 'grailed', title: 'GV Gallery Robert Garcia tee', detail: 'The GV Gallery / Brand new', size: 'S', price: '$99', originalPrice: '$110', image: 'https://media-assets.grailed.com/prd/listing/temp/9d6b5a9de8034a2aa896659cc4ed747a?w=500', url: 'https://www.grailed.com/listings/104882849-the-gv-gallery-gv-gallery-robert-garcia-tee-size-small' },
  { platform: 'grailed', title: 'Prada Carbon cologne', detail: 'Prada', size: 'OS', price: '$65', image: 'https://media-assets.grailed.com/prd/listing/temp/110dd308ca2547509b76f7f3eade56bc?w=500', url: 'https://www.grailed.com/listings/104303851-prada-prada-carbon-cologne' },
  { platform: 'depop', title: 'Charleston Cougars crewneck', detail: 'Vintage sweatshirt', size: 'S', price: '$8.05', image: 'https://media-photos.depop.com/b1/42954975/4542258067_2806887b32f3432d88aedc18048e014c/P0.jpg', url: 'https://www.depop.com/products/t3ebrokees-charleston-cougars-crewneck-sweatshirt-with-5752/' },
  { platform: 'depop', title: 'Bud King of Beers tee', detail: 'Vintage graphic', size: 'XL', price: '$16.45', image: 'https://media-photos.depop.com/b1/42954975/4526669100_5efff66df0d441418065370280e576d4/P0.jpg', url: 'https://www.depop.com/products/thebrodees-bud-king-of-beers-blue-9230/' },
  { platform: 'grailed', title: 'Purple Brand glitch tee', detail: 'Purple Brand / Brand new', size: 'L', price: '$51', originalPrice: '$120', image: 'https://media-assets.grailed.com/prd/listing/temp/c3b156f666394791b09f5269a74c440d?w=500', imageRotation: 90, url: 'https://www.grailed.com/listings/102201037-purple-brand-purple-brand-glitch-tee' },
  { platform: 'depop', title: 'Rare Market hoodie', detail: 'Market / Hoodie', size: 'M', price: '$42.70', image: 'https://media-photos.depop.com/r1/42954975/4317700855_33c3e7b6728149f1b95a4733882689b6/P0.jpg', url: 'https://www.depop.com/products/thebrokees-rare-market-hoodie-size-medium-a840/' },
  { platform: 'depop', title: '2003 Spirit Invitational tee', detail: 'Vintage Gildan', size: 'M', price: '$13.30', image: 'https://media-photos.depop.com/b1/42954975/4378106298_829e915e6b824bf39cbf4254e26360ed/P0.jpg', url: 'https://www.depop.com/products/theb7okees-2003-gildan-spirit-invitational-cotton-854e/' },
  { platform: 'depop', title: 'Dale Earnhardt Sr. red tee', detail: 'Vintage NASCAR', size: 'XL', price: '$21.70', image: 'https://media-photos.depop.com/b1/42954975/4346703235_6c9a8a3ce3634fb8a35a60d037468792/P0.jpg', url: 'https://www.depop.com/products/thebroaees-nascar-dale-earnhardt-sr-red-1d9e/' },
  { platform: 'depop', title: 'Harley-Davidson Café tee', detail: 'Vintage graphic', size: 'L', price: '$22.75', originalPrice: '$30.10', image: 'https://media-photos.depop.com/b1/42954975/4000268073_2cdb559a639244338dbfe071cfe8db14/P0.jpg', url: 'https://www.depop.com/products/theb9okees-vintage-harley-davidson-cafe-tee-f2be/' },
  { platform: 'depop', title: 'Black NASCAR tee', detail: 'Vintage racing', size: 'L', price: '$26.95', image: 'https://media-photos.depop.com/b1/42954975/4255477563_ebf282cbb87a4444a449ba6e39f4ed12/P0.jpg', url: 'https://www.depop.com/products/thebrokzes-mens-black-nascar-tee-shirt-9fbd/' },
  { platform: 'depop', title: 'Weekends purple sweater', detail: 'Vintage sweater', size: 'L', price: '$26.95', image: 'https://media-photos.depop.com/b1/42954975/4255464771_cb77a3dc5f7c4c95a64c3fb1604a83a6/P0.jpg', url: 'https://www.depop.com/products/thebrokeis-vintage-weekends-purple-sweater-great-06b9/' },
  { platform: 'depop', title: 'The North Face HyVent jacket', detail: 'Black rain jacket', size: 'XL', price: '$40.08', originalPrice: '$53.20', image: 'https://media-photos.depop.com/b1/42954975/4255437504_dc1d328acb84424fbf8532797a94e79b/P0.jpg', url: 'https://www.depop.com/products/thebrokeef-the-north-face-hyvent-black-45a9/' },
  { platform: 'depop', title: 'Dale Earnhardt racing tee', detail: 'Vintage NASCAR', size: 'L', price: '$32.20', image: 'https://media-photos.depop.com/r1/42954975/4231424682_eb39378e1b8d4921b377b4d954c0fe9a/P0.jpg', url: 'https://www.depop.com/products/thesrokees-nascar-dale-earnhardt-sr-red-fb9a/' },
  { platform: 'depop', title: 'Vintage NASCAR tee', detail: 'Racing graphic', size: 'XL', price: '$16.45', image: 'https://media-photos.depop.com/b1/42954975/4194645288_b6b984a28f464e6a8a93eba307b30178/P0.jpg', url: 'https://www.depop.com/products/tgebrokees-vintage-nascar-tee-on-a-ec1f/' },
  { platform: 'grailed', title: 'Vintage NASCAR trophy tee', detail: 'Winners Circle / Vintage racing', size: 'XL', price: '$18', originalPrice: '$25', image: 'https://media-assets.grailed.com/prd/listing/temp/e0d1d6bc962e42f18d52709f3472e2b1?w=500', url: 'https://www.grailed.com/listings/101476828-winners-circle-vintage-nascar-tee-shirt-xl' },
  { platform: 'grailed', title: 'Vintage NASCAR pit-crew tee', detail: 'Winners Circle / Vintage racing', size: 'XL', price: '$14', originalPrice: '$25', image: 'https://media-assets.grailed.com/prd/listing/temp/5971be7a8ea34c8d9ac61499c7881ae3?w=500', url: 'https://www.grailed.com/listings/101476733-winners-circle-vintage-nascar-tee' },
  { platform: 'depop', title: 'Red NASCAR racing tee', detail: 'Vintage graphic', size: 'L', price: '$5.95', image: 'https://media-photos.depop.com/b1/42954975/4194678514_a8c54dc85c5c46368158b0c80ef3800f/P0.jpg', url: 'https://www.depop.com/products/the9rokees-red-nascar-racing-tee-with-d8f3/' },
  { platform: 'depop', title: 'Chase Authentics NASCAR tee', detail: 'Vintage racing', size: 'L', price: '$26.95', image: 'https://media-photos.depop.com/b1/42954975/4194629957_28f38e27f4f44f7f9b8be00f81a313a4/P0.jpg', url: 'https://www.depop.com/products/thebrokeej-vintage-chase-authentics-nascar-tee-6382/' },
  { platform: 'grailed', title: '1996 Olympics polo', detail: 'Hanes Vintage', size: 'L', price: '$36', originalPrice: '$50', image: 'https://media-assets.grailed.com/prd/listing/temp/66c225f18ab648c28b9a82d31c77c627?w=500', url: 'https://www.grailed.com/listings/79315113-hanes-x-vintage-1996-olympics-polo' },
  { platform: 'grailed', title: 'G-Star Raw crewneck', detail: 'G-Star', size: 'M', price: '$48', originalPrice: '$80', image: 'https://media-assets.grailed.com/prd/listing/temp/7030f01c6f2c4b1e87b62c5c8131ad39?w=500', url: 'https://www.grailed.com/listings/101476569-g-star-g-star-raw-crew-neck-sweatshirt' }
];
const productGrid = document.querySelector('#product-grid');
const filters = document.querySelectorAll('.filter');
const sizeFilter = document.querySelector('#size-filter');
const listingSort = document.querySelector('#listing-sort');
const labels = { depop: 'View on Depop', grailed: 'View on Grailed' };
let activeFilter = 'all';
let activeSize = 'all';
let activeSort = 'newest';
let visibleLimit = 12;

function filteredListings() {
  const filtered = listings.filter((listing) => {
    const matchesPlatform = activeFilter === 'all' || listing.platform === activeFilter;
    const matchesSize = activeSize === 'all' || listing.size === activeSize;
    return matchesPlatform && matchesSize;
  });
  const priceValue = (listing) => Number.parseFloat(listing.price.replace(/[^0-9.]/g, '')) || 0;

  if (activeSort === 'newest') return filtered;
  if (activeSort === 'price-low') return filtered.sort((a, b) => priceValue(a) - priceValue(b));
  if (activeSort === 'price-high') return filtered.sort((a, b) => priceValue(b) - priceValue(a));

  return filtered;
}

function renderListings() {
  if (!productGrid) return;
  const filtered = filteredListings();
  const visible = filtered.slice(0, visibleLimit);
  const fragment = document.createDocumentFragment();
  visible.forEach((listing, index) => {
    const card = document.createElement('a');
    card.className = `product-card ${listing.platform}`;
    card.href = listing.url;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    card.setAttribute('aria-label', `${labels[listing.platform]}: ${listing.title}`);

    const imageWrap = document.createElement('div');
    imageWrap.className = 'product-image';
    const image = document.createElement('img');
    image.src = listing.image;
    image.alt = listing.title;
    image.loading = index > 3 ? 'lazy' : 'eager';
    image.decoding = 'async';
    if (listing.imageRotation) {
      image.style.transform = `rotate(${listing.imageRotation}deg)`;
    }
    const platform = document.createElement('span');
    platform.className = 'platform-tag';
    platform.textContent = listing.platform;
    const openLabel = document.createElement('span');
    openLabel.className = 'open-listing';
    openLabel.textContent = `${labels[listing.platform]} ↗`;
    imageWrap.append(image, platform, openLabel);

    const info = document.createElement('div');
    info.className = 'product-info';
    const copy = document.createElement('div');
    const title = document.createElement('h3');
    title.textContent = listing.title;
    const detail = document.createElement('p');
    detail.textContent = `${listing.detail} / Size ${listing.size}`;
    copy.append(title, detail);
    const priceGroup = document.createElement('div');
    priceGroup.className = 'price-group';
    const price = document.createElement('strong');
    price.textContent = listing.price;
    priceGroup.append(price);
    if (listing.originalPrice) {
      const originalPrice = document.createElement('s');
      originalPrice.className = 'original-price';
      originalPrice.textContent = listing.originalPrice;
      priceGroup.append(originalPrice);
    }
    info.append(copy, priceGroup);
    card.append(imageWrap, info);
    fragment.append(card);
  });
  productGrid.replaceChildren(fragment);
  const loadMore = document.querySelector('#load-more');
  if (loadMore) {
    loadMore.hidden = visible.length >= filtered.length;
    loadMore.replaceChildren(document.createTextNode('Load more finds '));
    const count = document.createElement('small');
    count.textContent = `${visible.length} / ${filtered.length}`;
    const arrow = document.createElement('span');
    arrow.textContent = '↓';
    loadMore.append(count, document.createTextNode(' '), arrow);
  }
}

if (productGrid) {
  document.querySelector('#all-count').textContent = `(${listings.length})`;
  document.querySelector('#depop-count').textContent = `(${listings.filter((item) => item.platform === 'depop').length})`;
  document.querySelector('#grailed-count').textContent = `(${listings.filter((item) => item.platform === 'grailed').length})`;
  filters.forEach((button) => button.addEventListener('click', () => {
    filters.forEach((filter) => {
      const isActive = filter === button;
      filter.classList.toggle('active', isActive);
      filter.setAttribute('aria-pressed', String(isActive));
    });
    activeFilter = button.dataset.filter;
    visibleLimit = 12;
    renderListings();
  }));
  listingSort?.addEventListener('change', () => {
    activeSort = listingSort.value;
    visibleLimit = 12;
    renderListings();
  });
  sizeFilter?.addEventListener('change', () => {
    activeSize = sizeFilter.value;
    visibleLimit = 12;
    renderListings();
  });
  document.querySelector('#load-more').addEventListener('click', () => {
    visibleLimit += 12;
    renderListings();
  });
  renderListings();
}

const menuToggle = document.querySelector('#menu-toggle');
const nav = document.querySelector('#main-nav');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', isOpen);
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('open')) {
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.focus();
    }
  });
}
