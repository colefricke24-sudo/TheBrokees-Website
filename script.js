const listings = [
  { platform: 'depop', title: 'Wrangler carpenter denim shorts', detail: 'Size 43', price: '$13.30', image: 'https://media-photos.depop.com/b1/42954975/4579879823_daabeb4f8ebf4fd5acdc5830abddec4b/P0.jpg', url: 'https://www.depop.com/products/thebrdkees-wrangler-carpenter-denim-shorts-size-4333/' },
  { platform: 'depop', title: 'Charleston Cougars crewneck', detail: 'Vintage sweatshirt', price: '$8.05', image: 'https://media-photos.depop.com/b1/42954975/4542258067_2806887b32f3432d88aedc18048e014c/P0.jpg', url: 'https://www.depop.com/products/t3ebrokees-charleston-cougars-crewneck-sweatshirt-with-5752/' },
  { platform: 'depop', title: 'Bud King of Beers tee', detail: 'Vintage graphic', price: '$16.45', image: 'https://media-photos.depop.com/b1/42954975/4526669100_5efff66df0d441418065370280e576d4/P0.jpg', url: 'https://www.depop.com/products/thebrodees-bud-king-of-beers-blue-9230/' },
  { platform: 'depop', title: 'Purple Brand tee', detail: 'Graphic T-shirt', price: '$68.95', image: 'https://media-photos.depop.com/b1/42954975/4478462348_1e9e4faed7eb472d87f65e7c678ec27b/P0.jpg', url: 'https://www.depop.com/products/thebrofees-purple-brand-tee-shirt-brand-7404/' },
  { platform: 'depop', title: 'Rare Market hoodie', detail: 'Size M', price: '$42.70', image: 'https://media-photos.depop.com/r1/42954975/4317700855_33c3e7b6728149f1b95a4733882689b6/P0.jpg', url: 'https://www.depop.com/products/thebrokees-rare-market-hoodie-size-medium-a840/' },
  { platform: 'depop', title: 'Harley-Davidson tee', detail: 'Vintage graphic', price: '$26.95', image: 'https://media-photos.depop.com/b1/42954975/4314252470_f1124fee55b04b95af9144d9f3a1ee5e/P0.jpg', url: 'https://www.depop.com/products/thebrokdes-mens-vintage-harley-davidson-tee-7e69/' },
  { platform: 'grailed', title: 'Prada Carbon cologne', detail: 'Prada / One size', price: '$65', image: 'https://media-assets.grailed.com/prd/listing/temp/110dd308ca2547509b76f7f3eade56bc?w=500', url: 'https://www.grailed.com/listings/104303851-prada-prada-carbon-cologne' },
  { platform: 'depop', title: 'Vale Dreams “Box of Chocolates” tee', detail: 'Graphic T-shirt', price: '$116.20', image: 'https://media-photos.depop.com/b1/42954975/4470174433_1f2f5dc8f4d84400ab3650d71121df86/P0.jpg', url: 'https://www.depop.com/products/thecrokees-valley-dreams-box-of-chocolates-6b91/' },
  { platform: 'depop', title: '2003 Spirit Invitational tee', detail: 'Vintage Gildan', price: '$13.30', image: 'https://media-photos.depop.com/b1/42954975/4378106298_829e915e6b824bf39cbf4254e26360ed/P0.jpg', url: 'https://www.depop.com/products/theb7okees-2003-gildan-spirit-invitational-cotton-854e/' },
  { platform: 'depop', title: 'Dale Earnhardt Sr. red tee', detail: 'Vintage NASCAR', price: '$21.70', image: 'https://media-photos.depop.com/b1/42954975/4346703235_6c9a8a3ce3634fb8a35a60d037468792/P0.jpg', url: 'https://www.depop.com/products/thebroaees-nascar-dale-earnhardt-sr-red-1d9e/' },
  { platform: 'depop', title: 'Harley-Davidson Café tee', detail: 'Vintage graphic', price: '$22.75', image: 'https://media-photos.depop.com/b1/42954975/4000268073_2cdb559a639244338dbfe071cfe8db14/P0.jpg', url: 'https://www.depop.com/products/theb9okees-vintage-harley-davidson-cafe-tee-f2be/' },
  { platform: 'depop', title: 'Black NASCAR tee', detail: 'Vintage racing', price: '$26.95', image: 'https://media-photos.depop.com/b1/42954975/4255477563_ebf282cbb87a4444a449ba6e39f4ed12/P0.jpg', url: 'https://www.depop.com/products/thebrokzes-mens-black-nascar-tee-shirt-9fbd/' },
  { platform: 'depop', title: 'Weekends purple sweater', detail: 'Vintage / Size L', price: '$26.95', image: 'https://media-photos.depop.com/b1/42954975/4255464771_cb77a3dc5f7c4c95a64c3fb1604a83a6/P0.jpg', url: 'https://www.depop.com/products/thebrokeis-vintage-weekends-purple-sweater-great-06b9/' },
  { platform: 'depop', title: 'The North Face HyVent jacket', detail: 'Black rain jacket', price: '$53.20', image: 'https://media-photos.depop.com/b1/42954975/4255437504_dc1d328acb84424fbf8532797a94e79b/P0.jpg', url: 'https://www.depop.com/products/thebrokeef-the-north-face-hyvent-black-45a9/' },
  { platform: 'depop', title: 'Dale Earnhardt racing tee', detail: 'Vintage NASCAR', price: '$32.20', image: 'https://media-photos.depop.com/r1/42954975/4231424682_eb39378e1b8d4921b377b4d954c0fe9a/P0.jpg', url: 'https://www.depop.com/products/thesrokees-nascar-dale-earnhardt-sr-red-fb9a/' },
  { platform: 'depop', title: 'Vintage NASCAR tee', detail: 'Racing graphic', price: '$16.45', image: 'https://media-photos.depop.com/b1/42954975/4194645288_b6b984a28f464e6a8a93eba307b30178/P0.jpg', url: 'https://www.depop.com/products/tgebrokees-vintage-nascar-tee-on-a-ec1f/' },
  { platform: 'depop', title: 'Red NASCAR racing tee', detail: 'Vintage graphic', price: '$5.95', image: 'https://media-photos.depop.com/b1/42954975/4194678514_a8c54dc85c5c46368158b0c80ef3800f/P0.jpg', url: 'https://www.depop.com/products/the9rokees-red-nascar-racing-tee-with-d8f3/' },
  { platform: 'depop', title: 'Chase Authentics NASCAR tee', detail: 'Vintage racing', price: '$26.95', image: 'https://media-photos.depop.com/b1/42954975/4194629957_28f38e27f4f44f7f9b8be00f81a313a4/P0.jpg', url: 'https://www.depop.com/products/thebrokeej-vintage-chase-authentics-nascar-tee-6382/' },
  { platform: 'depop', title: 'Route 66 jorts', detail: 'Size 34', price: '$16.45', image: 'https://media-photos.depop.com/b1/42954975/4194607698_1c02db24abd3490799efb8d4e571cf49/P0.jpg', url: 'https://www.depop.com/products/thelrokees-rout-66-jorts-size-34-74a9/' },
  { platform: 'depop', title: 'Grateful Dead Terrapin AOP', detail: 'Liquid Blue / Vintage', price: '$89.95', image: 'https://media-photos.depop.com/b1/42954975/3943101883_6e17151a3aee418484aa2884b9ff688a/P0.jpg', url: 'https://www.depop.com/products/thebrokeqs-liquid-blue-grateful-dead-terrapin-b0d3/' },
  { platform: 'grailed', title: '1996 Olympics polo', detail: 'Hanes Vintage / Size L', price: '$36', image: 'https://media-assets.grailed.com/prd/listing/temp/66c225f18ab648c28b9a82d31c77c627?w=500', url: 'https://www.grailed.com/listings/79315113-hanes-x-vintage-1996-olympics-polo' },
  { platform: 'grailed', title: 'G-Star Raw crewneck', detail: 'G-Star / Size M', price: '$48', image: 'https://media-assets.grailed.com/prd/listing/temp/7030f01c6f2c4b1e87b62c5c8131ad39?w=500', url: 'https://www.grailed.com/listings/101476569-g-star-g-star-raw-crew-neck-sweatshirt' }
];
const productGrid = document.querySelector('#product-grid');
const filters = document.querySelectorAll('.filter');
const listingSort = document.querySelector('#listing-sort');
const labels = { depop: 'View on Depop', grailed: 'View on Grailed' };
let activeFilter = 'all';
let activeSort = 'most-viewed';
let visibleLimit = 12;

function filteredListings() {
  const filtered = activeFilter === 'all' ? [...listings] : listings.filter((listing) => listing.platform === activeFilter);
  const priceValue = (listing) => Number.parseFloat(listing.price.replace(/[^0-9.]/g, '')) || 0;

  if (activeSort === 'price-low') return filtered.sort((a, b) => priceValue(a) - priceValue(b));
  if (activeSort === 'price-high') return filtered.sort((a, b) => priceValue(b) - priceValue(a));

  return filtered;
}

function renderListings() {
  if (!productGrid) return;
  const filtered = filteredListings();
  const visible = filtered.slice(0, visibleLimit);
  productGrid.innerHTML = visible.map((listing, index) => `<a class="product-card ${listing.platform}" href="${listing.url}" target="_blank" rel="noreferrer" aria-label="${labels[listing.platform]}: ${listing.title}"><div class="product-image"><img src="${listing.image}" alt="${listing.title}" loading="${index > 3 ? 'lazy' : 'eager'}" /><span class="platform-tag">${listing.platform}</span><span class="open-listing">${labels[listing.platform]} ↗</span></div><div class="product-info"><div><h3>${listing.title}</h3><p>${listing.detail}</p></div><strong>${listing.price}</strong></div></a>`).join('');
  const loadMore = document.querySelector('#load-more');
  if (loadMore) {
    loadMore.hidden = visible.length >= filtered.length;
    loadMore.innerHTML = `Load more finds <small>${visible.length} / ${filtered.length}</small> <span>↓</span>`;
  }
}

if (productGrid) {
  document.querySelector('#all-count').textContent = `(${listings.length})`;
  document.querySelector('#depop-count').textContent = `(${listings.filter((item) => item.platform === 'depop').length})`;
  document.querySelector('#grailed-count').textContent = `(${listings.filter((item) => item.platform === 'grailed').length})`;
  filters.forEach((button) => button.addEventListener('click', () => {
    filters.forEach((filter) => filter.classList.toggle('active', filter === button));
    activeFilter = button.dataset.filter;
    visibleLimit = 12;
    renderListings();
  }));
  listingSort?.addEventListener('change', () => {
    activeSort = listingSort.value;
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
}
