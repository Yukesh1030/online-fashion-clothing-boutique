/**
 * ÉLORA BOUTIQUE - MAIN APPLICATION CONTROLLER
 * Vanilla JavaScript (ES6+) with Fetch API & DummyJSON Integration
 * Pure frontend architecture without frameworks
 */

(function () {
  'use strict';

  // =========================================================================
  // CONSTANTS & INITIAL DATA DEFINITION
  // =========================================================================

  // DummyJSON Product API Endpoint
  const DUMMYJSON_API_URL = 'https://dummyjson.com/products?limit=100';

  // 15 Curated Fashion Boutique Products Specification
  // Maps to DummyJSON IDs and luxury boutique categories (Women, Men, Accessories, Footwear)
  const FASHION_PRODUCT_METADATA = [
    {
      id: 177,
      apiId: 177,
      category: 'Women',
      title: "Black Women's Gown",
      description: "An architectural floor-length evening gown crafted from pure heavyweight Italian silk crepe. Features clean lines, subtle geometric draping, and a concealed back closure.",
      price: 149.99,
      discountPercentage: 15,
      rating: 4.85,
      image: 'assets/product-1.webp',
      badge: 'Exclusive'
    },
    {
      id: 179,
      apiId: 179,
      category: 'Women',
      title: "Corset With Black Skirt",
      description: "Structured boned corset paired with an asymmetrical fluted midi skirt in structured virgin wool blend. A masterclass in modern tailored femininity.",
      price: 99.99,
      discountPercentage: 10,
      rating: 4.52,
      image: 'assets/product-2.webp',
      badge: 'Editor’s Pick'
    },
    {
      id: 180,
      apiId: 180,
      category: 'Women',
      title: "Dress Pea",
      description: "Effortless washed Belgian linen midi dress with mother-of-pearl button placket and relaxed drop shoulders. An indispensable warm-weather staple.",
      price: 59.99,
      discountPercentage: 20,
      rating: 4.88,
      image: 'assets/product-3.webp',
      badge: 'Best Seller'
    },
    {
      id: 181,
      apiId: 181,
      category: 'Women',
      title: "Marni Red & Black Suit",
      description: "Double-breasted tailored tuxedo suit featuring contrasting black satin lapels and high-rise pressed trousers. Sharp, bold, and timelessly sophisticated.",
      price: 199.99,
      discountPercentage: 12,
      rating: 4.65,
      image: 'assets/product-4.webp',
      badge: 'Runway'
    },
    {
      id: 83,
      apiId: 83,
      category: 'Men',
      title: "Blue & Black Check Shirt",
      description: "Custom-woven long-staple cotton check overshirt. Brushed for extreme softness with corozo nut buttons and twin chest patch pockets.",
      price: 34.99,
      discountPercentage: 10,
      rating: 4.24,
      image: 'assets/product-5.webp',
      badge: 'Essential'
    },
    {
      id: 84,
      apiId: 84,
      category: 'Men',
      title: "Gigabyte Aorus Men Tshirt",
      description: "Heavyweight 280gsm organic combed cotton crewneck t-shirt. Features minimalist atelier typography and a modern boxy silhouette.",
      price: 29.99,
      discountPercentage: 5,
      rating: 4.18,
      image: 'assets/product-6.webp',
      badge: 'New Season'
    },
    {
      id: 85,
      apiId: 85,
      category: 'Men',
      title: "Man Plaid Shirt",
      description: "Refined neutral plaid button-down cut from breathable flannel. Designed for seamless layering over lightweight knits or tailored trousers.",
      price: 39.99,
      discountPercentage: 15,
      rating: 4.35,
      image: 'assets/product-7.webp',
      badge: 'Trending'
    },
    {
      id: 86,
      apiId: 86,
      category: 'Men',
      title: "Man Short Sleeve Shirt",
      description: "Camp-collar short sleeve shirt crafted from airy linen-cotton voile. Features a relaxed straight hem and side seam splits.",
      price: 24.99,
      discountPercentage: 10,
      rating: 4.10,
      image: 'assets/product-8.webp',
      badge: 'Summer Core'
    },
    {
      id: 173,
      apiId: 173,
      category: 'Accessories',
      title: "Heshe Women's Leather Bag",
      description: "Handcrafted full-grain Tuscan calfskin tote bag with unlined suede interior and polished gold-toned brass hardware. Built to patinate gracefully.",
      price: 149.99,
      discountPercentage: 20,
      rating: 4.92,
      image: 'assets/product-9.webp',
      badge: 'Artisanal'
    },
    {
      id: 174,
      apiId: 174,
      category: 'Accessories',
      title: "Prada Women Bag",
      description: "Iconic structured handbag in Saffiano textured calf leather with clean geometric lines, detachable leather shoulder strap, and key ring clochette.",
      price: 599.99,
      discountPercentage: 25,
      rating: 4.70,
      image: 'assets/product-10.webp',
      badge: 'Haute Luxe'
    },
    {
      id: 154,
      apiId: 154,
      category: 'Accessories',
      title: "Black Sun Glasses",
      description: "Thick-rimmed bevelled acetate sunglasses handcrafted in Japan. Fitted with 100% UVA/UVB Carl Zeiss dark grey protective lenses.",
      price: 39.99,
      discountPercentage: 15,
      rating: 4.41,
      image: 'assets/product-11.webp',
      badge: 'Signature'
    },
    {
      id: 93,
      apiId: 93,
      category: 'Accessories',
      title: "Brown Leather Belt Watch",
      description: "Minimalist 38mm stainless steel dress timepiece featuring an eggshell dial, Swiss quartz movement, and hand-stitched Horween leather strap.",
      price: 99.99,
      discountPercentage: 10,
      rating: 4.45,
      image: 'assets/product-12.webp',
      badge: 'Timeless'
    },
    {
      id: 88,
      apiId: 88,
      category: 'Footwear',
      title: "Nike Air Jordan 1 Red And Black",
      description: "Heritage high-top sneaker rebuilt with luxury full-grain tumbled leather and padded collar. A high-fashion streetwear icon.",
      price: 169.99,
      discountPercentage: 15,
      rating: 4.77,
      image: 'assets/product-13.webp',
      badge: 'Iconic'
    },
    {
      id: 90,
      apiId: 90,
      category: 'Footwear',
      title: "Puma Future Rider Trainers",
      description: "Retro running silhouette elevated with rich suede overlays, breathable ripstop nylon, and shock-absorbing Federbein outsole technology.",
      price: 99.99,
      discountPercentage: 18,
      rating: 4.90,
      image: 'assets/product-14.webp',
      badge: 'Best Seller'
    },
    {
      id: 186,
      apiId: 186,
      category: 'Footwear',
      title: "Calvin Klein Heel Shoes",
      description: "Pointed-toe stiletto pumps in supple glove-tanned Italian leather with a sculptural 85mm heel and cushioned leather footbed.",
      price: 89.99,
      discountPercentage: 20,
      rating: 4.92,
      image: 'assets/product-15.webp',
      badge: 'Atelier Favorite'
    }
  ];

  // Available Promotional Coupons
  const PROMO_COUPONS = {
    'NEW10': { discount: 0.10, description: '10% off first order' },
    'STYLE15': { discount: 0.15, description: '15% off eligible orders' },
    'ELORA20': { discount: 0.20, description: '20% off selected collection' }
  };

  // LocalStorage Keys
  const STORAGE_KEYS = {
    CART: 'elora_boutique_cart_v1',
    WISHLIST: 'elora_boutique_wishlist_v1',
    COUPON: 'elora_boutique_coupon_v1',
    ORDERS: 'elora_boutique_orders_v1',
    NEWSLETTER: 'elora_boutique_newsletter_v1'
  };

  // =========================================================================
  // APPLICATION STATE
  // =========================================================================
  const state = {
    products: [],          // Active 15 products
    cart: [],              // Array of { id, quantity, product }
    wishlist: [],          // Array of product ids
    appliedCoupon: null,   // Current applied coupon string or null
    activeCategory: 'All', // 'All', 'Women', 'Men', 'Accessories', 'Footwear'
    sortBy: 'featured',    // 'featured', 'rating-desc', 'price-asc', 'price-desc'
    searchQuery: '',       // Search input filter
    isLoading: true,       // Fetch loading state
    activeModalProduct: null, // Product displayed in quick view
    modalQty: 1
  };

  // =========================================================================
  // DOM ELEMENT REFERENCES
  // =========================================================================
  const dom = {
    header: document.getElementById('siteHeader'),
    mobileMenuBtn: document.getElementById('mobileMenuBtn'),
    mobileNavDrawer: document.getElementById('mobileNavDrawer'),
    mobileNavBackdrop: document.getElementById('mobileNavBackdrop'),
    mobileNavCloseBtn: document.getElementById('mobileNavCloseBtn'),
    mobileNavLinks: document.querySelectorAll('.mobile-nav-link'),
    
    // Search
    searchOpenBtn: document.getElementById('searchOpenBtn'),
    searchOverlay: document.getElementById('searchOverlay'),
    searchCloseBtn: document.getElementById('searchCloseBtn'),
    searchClearBtn: document.getElementById('searchClearBtn'),
    searchInput: document.getElementById('searchInput'),
    searchPills: document.querySelectorAll('.search-pill-btn'),
    
    // Grids
    newArrivalsGrid: document.getElementById('newArrivalsGrid'),
    catalogGrid: document.getElementById('catalogGrid'),
    bestSellersGrid: document.getElementById('bestSellersGrid'),
    noResultsView: document.getElementById('noResultsView'),
    resetSearchBtn: document.getElementById('resetSearchBtn'),
    
    // Filter & Sort
    categoryPills: document.querySelectorAll('.category-pill'),
    productSortSelect: document.getElementById('productSortSelect'),
    activeFilterBanner: document.getElementById('activeFilterBanner'),
    filterSummaryText: document.getElementById('filterSummaryText'),
    clearFiltersBtn: document.getElementById('clearFiltersBtn'),
    allCount: document.getElementById('allCount'),
    
    // Badges & Counters
    cartCountBadge: document.getElementById('cartCountBadge'),
    wishlistCountBadge: document.getElementById('wishlistCountBadge'),
    cartItemCountHeader: document.getElementById('cartItemCountHeader'),
    wishlistItemCountHeader: document.getElementById('wishlistItemCountHeader'),
    
    // Drawers & Modals
    cartOpenBtn: document.getElementById('cartOpenBtn'),
    cartDrawer: document.getElementById('cartDrawer'),
    cartBackdrop: document.getElementById('cartBackdrop'),
    cartCloseBtn: document.getElementById('cartCloseBtn'),
    cartItemsList: document.getElementById('cartItemsList'),
    cartSubtotalAmount: document.getElementById('cartSubtotalAmount'),
    discountSummaryRow: document.getElementById('discountSummaryRow'),
    discountPercentLabel: document.getElementById('discountPercentLabel'),
    cartDiscountAmount: document.getElementById('cartDiscountAmount'),
    cartShippingAmount: document.getElementById('cartShippingAmount'),
    cartTotalAmount: document.getElementById('cartTotalAmount'),
    shippingProgressBar: document.getElementById('shippingProgressBar'),
    shippingThresholdStatus: document.getElementById('shippingThresholdStatus'),
    cartCouponInput: document.getElementById('cartCouponInput'),
    cartApplyCouponBtn: document.getElementById('cartApplyCouponBtn'),
    appliedCouponInfo: document.getElementById('appliedCouponInfo'),
    couponTextLabel: document.getElementById('couponTextLabel'),
    removeCouponBtn: document.getElementById('removeCouponBtn'),
    cartCheckoutBtn: document.getElementById('cartCheckoutBtn'),
    
    wishlistOpenBtn: document.getElementById('wishlistOpenBtn'),
    wishlistDrawer: document.getElementById('wishlistDrawer'),
    wishlistBackdrop: document.getElementById('wishlistBackdrop'),
    wishlistCloseBtn: document.getElementById('wishlistCloseBtn'),
    wishlistItemsList: document.getElementById('wishlistItemsList'),
    moveAllWishlistToCartBtn: document.getElementById('moveAllWishlistToCartBtn'),
    
    // Quick View Modal
    productModal: document.getElementById('productModal'),
    modalCloseBtn: document.getElementById('modalCloseBtn'),
    modalProductImage: document.getElementById('modalProductImage'),
    modalProductCategory: document.getElementById('modalProductCategory'),
    modalProductTitle: document.getElementById('modalProductTitle'),
    modalRatingStars: document.getElementById('modalRatingStars'),
    modalRatingNumber: document.getElementById('modalRatingNumber'),
    modalOriginalPrice: document.getElementById('modalOriginalPrice'),
    modalDiscountedPrice: document.getElementById('modalDiscountedPrice'),
    modalSavingsAmount: document.getElementById('modalSavingsAmount'),
    modalProductDescription: document.getElementById('modalProductDescription'),
    modalQtyInput: document.getElementById('modalQtyInput'),
    qtyDecreaseBtn: document.getElementById('qtyDecreaseBtn'),
    qtyIncreaseBtn: document.getElementById('qtyIncreaseBtn'),
    modalAddToCartBtn: document.getElementById('modalAddToCartBtn'),
    modalWishlistToggleBtn: document.getElementById('modalWishlistToggleBtn'),
    
    // Checkout Modal
    checkoutModal: document.getElementById('checkoutModal'),
    checkoutCloseBtn: document.getElementById('checkoutCloseBtn'),
    checkoutFormStep: document.getElementById('checkoutFormStep'),
    orderConfirmationStep: document.getElementById('orderConfirmationStep'),
    checkoutForm: document.getElementById('checkoutForm'),
    checkoutSummaryItemsCount: document.getElementById('checkoutSummaryItemsCount'),
    checkoutSummaryTotal: document.getElementById('checkoutSummaryTotal'),
    receiptOrderId: document.getElementById('receiptOrderId'),
    receiptCustomerName: document.getElementById('receiptCustomerName'),
    receiptCustomerEmail: document.getElementById('receiptCustomerEmail'),
    receiptOrderTotal: document.getElementById('receiptOrderTotal'),
    orderFinishBtn: document.getElementById('orderFinishBtn'),
    
    // Newsletter & Offers
    newsletterForm: document.getElementById('newsletterForm'),
    newsletterEmail: document.getElementById('newsletterEmail'),
    newsletterMessage: document.getElementById('newsletterMessage'),
    applyCouponBtns: document.querySelectorAll('.apply-coupon-btn'),
    offerCards: document.querySelectorAll('.offer-card'),
    
    // 404 Error Section
    error404View: document.getElementById('error404View'),
    errorBackBtn: document.getElementById('errorBackBtn'),
    errorHomeBtn: document.getElementById('errorHomeBtn'),
    
    // Toast Container
    toastContainer: document.getElementById('toastContainer')
  };

  // =========================================================================
  // TOAST NOTIFICATION UTILITY
  // =========================================================================
  function showToast(message, iconClass = 'fa-solid fa-circle-check') {
    const toast = document.createElement('div');
    toast.className = 'toast-item';
    toast.innerHTML = `<i class="${iconClass}"></i><span>${message}</span>`;
    dom.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('removing');
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 300);
    }, 3200);
  }

  // Expose toast globally for footer onclick helpers
  window.app = { showToast };

  // =========================================================================
  // LOCAL STORAGE HELPERS
  // =========================================================================
  function loadPersistedData() {
    try {
      const savedCart = localStorage.getItem(STORAGE_KEYS.CART);
      if (savedCart) state.cart = JSON.parse(savedCart);

      const savedWishlist = localStorage.getItem(STORAGE_KEYS.WISHLIST);
      if (savedWishlist) state.wishlist = JSON.parse(savedWishlist);

      const savedCoupon = localStorage.getItem(STORAGE_KEYS.COUPON);
      if (savedCoupon && PROMO_COUPONS[savedCoupon]) state.appliedCoupon = savedCoupon;
    } catch (e) {
      console.warn('LocalStorage access warning:', e);
    }
  }

  function persistCart() {
    try {
      localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(state.cart));
    } catch (e) {
      console.warn('Failed to save cart to localStorage', e);
    }
  }

  function persistWishlist() {
    try {
      localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(state.wishlist));
    } catch (e) {
      console.warn('Failed to save wishlist to localStorage', e);
    }
  }

  function persistCoupon() {
    try {
      if (state.appliedCoupon) {
        localStorage.setItem(STORAGE_KEYS.COUPON, state.appliedCoupon);
      } else {
        localStorage.removeItem(STORAGE_KEYS.COUPON);
      }
    } catch (e) {
      console.warn('Failed to save coupon to localStorage', e);
    }
  }

  // =========================================================================
  // API INTEGRATION WITH ASYNC/AWAIT & ERROR HANDLING DIRECT TO 404
  // =========================================================================
  async function fetchProducts() {
    state.isLoading = true;
    try {
      // Fetch products from DummyJSON Products API
      const response = await fetch(DUMMYJSON_API_URL);
      if (!response.ok) {
        throw new Error(`DummyJSON API Error: HTTP ${response.status}`);
      }
      const data = await response.json();
      
      // If we got items from API, merge live API pricing/ratings into our 15 products
      if (data && data.products && Array.isArray(data.products)) {
        const apiMap = new Map();
        data.products.forEach(p => apiMap.set(p.id, p));

        state.products = FASHION_PRODUCT_METADATA.map((item, idx) => {
          const apiProduct = apiMap.get(item.apiId);
          if (apiProduct) {
            return {
              ...item,
              // Keep original boutique title or use API title
              apiTitle: apiProduct.title,
              price: Number(apiProduct.price) || item.price,
              discountPercentage: Math.round(Number(apiProduct.discountPercentage)) || item.discountPercentage,
              rating: Number(apiProduct.rating) || item.rating,
              stock: apiProduct.stock || 24,
              brand: apiProduct.brand || 'ÉLORA Atelier'
            };
          }
          return { ...item, stock: 24, brand: 'ÉLORA Atelier' };
        });
      } else {
        state.products = [...FASHION_PRODUCT_METADATA];
      }

      // Calculate discounted price for all 15 products
      state.products.forEach(p => {
        const discountMult = 1 - (p.discountPercentage / 100);
        p.discountedPrice = (p.price * discountMult).toFixed(2);
      });

      state.isLoading = false;
      renderAllSections();

      // Refresh ScrollTrigger and AOS after dynamic layout expansion
      setTimeout(() => {
        if (typeof ScrollTrigger !== 'undefined') {
          ScrollTrigger.refresh();
        }
        if (typeof AOS !== 'undefined') {
          AOS.refresh();
        }
      }, 100);

    } catch (error) {
      console.error('API Fetch failed:', error);
      // Fallback or trigger 404 error view as specified in requirements
      handleApiErrorDirect404(error);
    }
  }

  function handleApiErrorDirect404(err) {
    state.isLoading = false;
    // Hide standard main catalogue and reveal 404 Page View with 'back' and 'back to home'
    dom.error404View.classList.remove('hidden');
    dom.catalogGrid.innerHTML = '';
    dom.newArrivalsGrid.innerHTML = '';
    dom.bestSellersGrid.innerHTML = '';
    
    // Also provide fallback button handler
    showToast('Atelier Catalogue server unreachable. Showing 404 error state.', 'fa-solid fa-triangle-exclamation');
  }

  // =========================================================================
  // PRODUCT RENDERING (CARDS, STARS, BADGES)
  // =========================================================================
  function renderStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalf = (rating - fullStars) >= 0.35;
    let html = '';
    for (let i = 0; i < fullStars; i++) {
      html += '<i class="fa-solid fa-star"></i>';
    }
    if (hasHalf) {
      html += '<i class="fa-solid fa-star-half-stroke"></i>';
    }
    const emptyCount = 5 - fullStars - (hasHalf ? 1 : 0);
    for (let i = 0; i < emptyCount; i++) {
      html += '<i class="fa-regular fa-star"></i>';
    }
    return html;
  }

  function createProductCardHTML(product) {
    const isWishlisted = state.wishlist.includes(product.id);
    return `
      <article class="product-card" data-id="${product.id}" data-aos="fade-up">
        <div class="product-image-container">
          <img src="${product.image}" alt="${product.title}" class="product-img" loading="lazy" onerror="this.src='assets/product-1.webp'">
          <span class="product-badge ${product.badge === 'Exclusive' ? 'sale-badge' : 'trending-badge'}">${product.badge}</span>
          
          <button class="product-wishlist-btn ${isWishlisted ? 'active' : ''}" data-id="${product.id}" aria-label="Toggle Wishlist">
            <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
          </button>

          <div class="product-quick-actions">
            <button class="quick-view-btn" data-id="${product.id}">
              <i class="fa-regular fa-eye"></i> Quick View
            </button>
            <button class="quick-cart-btn" data-id="${product.id}">
              <i class="fa-solid fa-bag-shopping"></i> Add to Bag
            </button>
          </div>
        </div>

        <div class="product-info">
          <span class="product-category-tag">${product.category}</span>
          <h3 class="product-title" data-id="${product.id}">${product.title}</h3>
          
          <div class="product-rating-row">
            <div class="star-rating">${renderStarRating(product.rating)}</div>
            <span class="rating-number">${product.rating.toFixed(1)}</span>
          </div>

          <div class="product-pricing-row">
            <span class="price-discounted">$${product.discountedPrice}</span>
            <span class="price-original">$${Number(product.price).toFixed(2)}</span>
          </div>
        </div>
      </article>
    `;
  }

  // =========================================================================
  // SECTION RENDERING: NEW ARRIVALS, CATALOG, BEST SELLERS
  // =========================================================================
  function renderAllSections() {
    renderNewArrivals();
    renderCatalog();
    renderBestSellers();
    updateBadges();
  }

  // Section 04: New Arrivals (4 on desktop, 2 on mobile)
  function renderNewArrivals() {
    // Select first 4 pieces as new arrivals
    const newItems = state.products.slice(0, 4);
    dom.newArrivalsGrid.innerHTML = newItems.map(createProductCardHTML).join('');
  }

  // Section 05: Trending Products & Full Catalog
  function renderCatalog() {
    let filtered = [...state.products];

    // 1. Filter by category
    if (state.activeCategory !== 'All') {
      filtered = filtered.filter(p => p.category.toLowerCase() === state.activeCategory.toLowerCase());
      dom.activeFilterBanner.classList.remove('hidden');
      dom.filterSummaryText.textContent = state.activeCategory;
    } else {
      dom.activeFilterBanner.classList.add('hidden');
    }

    // 2. Filter by search query
    if (state.searchQuery.trim() !== '') {
      const q = state.searchQuery.toLowerCase().trim();
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(q) || 
        p.category.toLowerCase().includes(q) || 
        p.description.toLowerCase().includes(q)
      );
    }

    // 3. Sort products
    if (state.sortBy === 'rating-desc') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (state.sortBy === 'price-asc') {
      filtered.sort((a, b) => Number(a.discountedPrice) - Number(b.discountedPrice));
    } else if (state.sortBy === 'price-desc') {
      filtered.sort((a, b) => Number(b.discountedPrice) - Number(a.discountedPrice));
    }

    // Render results or Empty state
    if (filtered.length === 0) {
      dom.catalogGrid.innerHTML = '';
      dom.noResultsView.classList.remove('hidden');
    } else {
      dom.noResultsView.classList.add('hidden');
      dom.catalogGrid.innerHTML = filtered.map(createProductCardHTML).join('');
    }
  }

  // Section 06: Best Sellers (Highest Rated Products from Collection)
  function renderBestSellers() {
    // Sort all products by rating descending and pick top 3
    const topRated = [...state.products].sort((a, b) => b.rating - a.rating).slice(0, 3);
    dom.bestSellersGrid.innerHTML = topRated.map(createProductCardHTML).join('');
  }

  // =========================================================================
  // SHOPPING CART OPERATIONS
  // =========================================================================
  function addToCart(productId, quantity = 1) {
    const product = state.products.find(p => p.id === Number(productId));
    if (!product) return;

    const existingIndex = state.cart.findIndex(item => item.id === product.id);
    if (existingIndex > -1) {
      state.cart[existingIndex].quantity += Number(quantity);
    } else {
      state.cart.push({
        id: product.id,
        quantity: Number(quantity),
        product: product
      });
    }

    persistCart();
    renderCartDrawer();
    updateBadges();
    showToast(`Added "${product.title}" to your Shopping Bag.`, 'fa-solid fa-bag-shopping');
    openCartDrawer();
  }

  function removeFromCart(productId) {
    state.cart = state.cart.filter(item => item.id !== Number(productId));
    persistCart();
    renderCartDrawer();
    updateBadges();
    showToast('Piece removed from Shopping Bag.', 'fa-regular fa-trash-can');
  }

  function updateCartQuantity(productId, delta) {
    const item = state.cart.find(it => it.id === Number(productId));
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    persistCart();
    renderCartDrawer();
    updateBadges();
  }

  function calculateCartTotals() {
    let subtotal = 0;
    state.cart.forEach(item => {
      subtotal += Number(item.product.discountedPrice) * item.quantity;
    });

    let discountPercent = 0;
    if (state.appliedCoupon && PROMO_COUPONS[state.appliedCoupon]) {
      discountPercent = PROMO_COUPONS[state.appliedCoupon].discount;
    }

    const discountAmount = subtotal * discountPercent;
    const subtotalAfterDiscount = subtotal - discountAmount;

    // Complimentary shipping threshold $150
    const shippingThreshold = 150.0;
    const shipping = subtotalAfterDiscount >= shippingThreshold || subtotal === 0 ? 0 : 15.0;
    const total = subtotalAfterDiscount + shipping;

    return {
      subtotal,
      discountPercent: Math.round(discountPercent * 100),
      discountAmount,
      shipping,
      total,
      shippingThreshold
    };
  }

  function renderCartDrawer() {
    const totals = calculateCartTotals();
    const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);

    dom.cartItemCountHeader.textContent = totalItems;

    // Free shipping progress bar
    if (totals.subtotal >= totals.shippingThreshold) {
      dom.shippingProgressBar.style.width = '100%';
      dom.shippingThresholdStatus.innerHTML = '<span style="color: var(--color-success); font-weight: 600;"><i class="fa-solid fa-check"></i> You have unlocked complimentary boutique courier delivery.</span>';
    } else {
      const remaining = (totals.shippingThreshold - totals.subtotal).toFixed(2);
      const pct = Math.min(100, Math.round((totals.subtotal / totals.shippingThreshold) * 100));
      dom.shippingProgressBar.style.width = `${pct}%`;
      dom.shippingThresholdStatus.textContent = `Add $${remaining} more for complimentary courier delivery`;
    }

    // Render items or empty state
    if (state.cart.length === 0) {
      dom.cartItemsList.innerHTML = `
        <div class="cart-empty-state">
          <i class="fa-solid fa-bag-shopping cart-empty-icon"></i>
          <h4>Your shopping bag is empty</h4>
          <p>Discover our seasonal collection and add your favorite pieces.</p>
        </div>
      `;
      dom.cartCheckoutBtn.disabled = true;
    } else {
      dom.cartCheckoutBtn.disabled = false;
      dom.cartItemsList.innerHTML = state.cart.map(item => `
        <div class="cart-item" data-id="${item.id}">
          <img src="${item.product.image}" alt="${item.product.title}" class="cart-item-img" onerror="this.src='assets/product-1.webp'">
          <div class="cart-item-details">
            <h4 class="cart-item-title">${item.product.title}</h4>
            <span class="cart-item-price">$${(Number(item.product.discountedPrice) * item.quantity).toFixed(2)}</span>
            
            <div class="cart-item-actions">
              <div class="cart-qty-control">
                <button class="cart-qty-btn cart-minus-btn" data-id="${item.id}" aria-label="Decrease quantity"><i class="fa-solid fa-minus"></i></button>
                <span class="cart-qty-num">${item.quantity}</span>
                <button class="cart-qty-btn cart-plus-btn" data-id="${item.id}" aria-label="Increase quantity"><i class="fa-solid fa-plus"></i></button>
              </div>
              <button class="cart-remove-btn" data-id="${item.id}">Remove</button>
            </div>
          </div>
        </div>
      `).join('');
    }

    // Totals summary display
    dom.cartSubtotalAmount.textContent = `$${totals.subtotal.toFixed(2)}`;
    
    if (totals.discountAmount > 0) {
      dom.discountSummaryRow.classList.remove('hidden');
      dom.discountPercentLabel.textContent = `${totals.discountPercent}%`;
      dom.cartDiscountAmount.textContent = `-$${totals.discountAmount.toFixed(2)}`;
    } else {
      dom.discountSummaryRow.classList.add('hidden');
    }

    dom.cartShippingAmount.textContent = totals.shipping === 0 ? 'Complimentary' : `$${totals.shipping.toFixed(2)}`;
    dom.cartTotalAmount.textContent = `$${totals.total.toFixed(2)}`;

    // Coupon pill status
    if (state.appliedCoupon) {
      dom.appliedCouponInfo.classList.remove('hidden');
      dom.couponTextLabel.textContent = `Coupon ${state.appliedCoupon} Applied (${totals.discountPercent}% OFF)`;
      dom.cartCouponInput.value = state.appliedCoupon;
    } else {
      dom.appliedCouponInfo.classList.add('hidden');
      dom.cartCouponInput.value = '';
    }
  }

  function applyCoupon(code) {
    const cleanCode = code.toUpperCase().trim();
    if (PROMO_COUPONS[cleanCode]) {
      state.appliedCoupon = cleanCode;
      persistCoupon();
      renderCartDrawer();
      showToast(`Coupon "${cleanCode}" applied successfully!`, 'fa-solid fa-tag');
    } else {
      showToast('Invalid coupon code. Try NEW10, STYLE15, or ELORA20.', 'fa-solid fa-triangle-exclamation');
    }
  }

  function removeCoupon() {
    state.appliedCoupon = null;
    persistCoupon();
    renderCartDrawer();
    showToast('Coupon removed.', 'fa-solid fa-xmark');
  }

  // =========================================================================
  // WISHLIST OPERATIONS
  // =========================================================================
  function toggleWishlist(productId) {
    const id = Number(productId);
    const index = state.wishlist.indexOf(id);
    const product = state.products.find(p => p.id === id);

    if (index > -1) {
      state.wishlist.splice(index, 1);
      showToast(`Removed from Wishlist.`, 'fa-regular fa-heart');
    } else {
      state.wishlist.push(id);
      showToast(`Saved "${product ? product.title : 'piece'}" to Wishlist.`, 'fa-solid fa-heart');
    }

    persistWishlist();
    renderAllSections();
    renderWishlistDrawer();
    updateBadges();

    // Update modal button if currently viewing that product
    if (state.activeModalProduct && state.activeModalProduct.id === id) {
      updateModalWishlistBtn();
    }
  }

  function renderWishlistDrawer() {
    const items = state.products.filter(p => state.wishlist.includes(p.id));
    dom.wishlistItemCountHeader.textContent = items.length;

    if (items.length === 0) {
      dom.wishlistItemsList.innerHTML = `
        <div class="cart-empty-state">
          <i class="fa-regular fa-heart cart-empty-icon"></i>
          <h4>Your wishlist is empty</h4>
          <p>Curate your personal collection by clicking the heart icon on any piece.</p>
        </div>
      `;
      dom.moveAllWishlistToCartBtn.disabled = true;
    } else {
      dom.moveAllWishlistToCartBtn.disabled = false;
      dom.wishlistItemsList.innerHTML = items.map(item => `
        <div class="cart-item" data-id="${item.id}">
          <img src="${item.image}" alt="${item.title}" class="cart-item-img" onerror="this.src='assets/product-1.webp'">
          <div class="cart-item-details">
            <h4 class="cart-item-title">${item.title}</h4>
            <span class="cart-item-price">$${item.discountedPrice}</span>
            <div class="cart-item-actions">
              <button class="btn btn-sm btn-primary wishlist-move-btn" data-id="${item.id}">
                <i class="fa-solid fa-bag-shopping"></i> Move to Bag
              </button>
              <button class="cart-remove-btn wishlist-remove-btn" data-id="${item.id}">Remove</button>
            </div>
          </div>
        </div>
      `).join('');
    }
  }

  function moveAllWishlistToCart() {
    const items = state.products.filter(p => state.wishlist.includes(p.id));
    items.forEach(product => {
      const existing = state.cart.find(it => it.id === product.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.cart.push({ id: product.id, quantity: 1, product });
      }
    });

    state.wishlist = [];
    persistCart();
    persistWishlist();
    renderCartDrawer();
    renderWishlistDrawer();
    renderAllSections();
    updateBadges();
    closeWishlistDrawer();
    openCartDrawer();
    showToast('All wishlisted pieces moved to your Shopping Bag.', 'fa-solid fa-bag-shopping');
  }

  // =========================================================================
  // MODAL DETAILS (QUICK VIEW)
  // =========================================================================
  function openProductModal(productId) {
    const product = state.products.find(p => p.id === Number(productId));
    if (!product) return;

    state.activeModalProduct = product;
    state.modalQty = 1;

    dom.modalProductImage.src = product.image;
    dom.modalProductImage.alt = product.title;
    dom.modalProductCategory.textContent = product.category;
    dom.modalProductTitle.textContent = product.title;
    dom.modalRatingStars.innerHTML = renderStarRating(product.rating);
    dom.modalRatingNumber.textContent = product.rating.toFixed(1);
    dom.modalOriginalPrice.textContent = `$${Number(product.price).toFixed(2)}`;
    dom.modalDiscountedPrice.textContent = `$${product.discountedPrice}`;
    dom.modalSavingsAmount.textContent = `Save ${product.discountPercentage}%`;
    dom.modalProductDescription.textContent = product.description;
    dom.modalQtyInput.value = state.modalQty;

    updateModalWishlistBtn();

    dom.productModal.classList.remove('hidden');
    document.body.classList.add('modal-open');
  }

  function updateModalWishlistBtn() {
    if (!state.activeModalProduct) return;
    const isSaved = state.wishlist.includes(state.activeModalProduct.id);
    dom.modalWishlistToggleBtn.classList.toggle('active', isSaved);
    dom.modalWishlistToggleBtn.innerHTML = `<i class="${isSaved ? 'fa-solid' : 'fa-regular'} fa-heart"></i>`;
  }

  function closeProductModal() {
    dom.productModal.classList.add('hidden');
    document.body.classList.remove('modal-open');
    state.activeModalProduct = null;
  }

  // =========================================================================
  // CHECKOUT & ORDER CONFIRMATION
  // =========================================================================
  function openCheckoutModal() {
    if (state.cart.length === 0) {
      showToast('Your shopping bag is empty.', 'fa-solid fa-triangle-exclamation');
      return;
    }

    closeCartDrawer();
    const totals = calculateCartTotals();
    const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);

    dom.checkoutSummaryItemsCount.textContent = `${totalItems} piece${totalItems > 1 ? 's' : ''}`;
    dom.checkoutSummaryTotal.textContent = `$${totals.total.toFixed(2)}`;

    dom.checkoutFormStep.classList.remove('hidden');
    dom.orderConfirmationStep.classList.add('hidden');
    dom.checkoutModal.classList.remove('hidden');
    document.body.classList.add('modal-open');
  }

  function handleOrderSubmission(e) {
    e.preventDefault();

    const firstName = document.getElementById('orderFirstName').value.trim();
    const lastName = document.getElementById('orderLastName').value.trim();
    const email = document.getElementById('orderEmail').value.trim();
    const address = document.getElementById('orderAddress').value.trim();
    const city = document.getElementById('orderCity').value.trim();
    const postal = document.getElementById('orderPostal').value.trim();

    if (!firstName || !lastName || !email || !address || !city || !postal) {
      showToast('Please complete all required fields.', 'fa-solid fa-triangle-exclamation');
      return;
    }

    const totals = calculateCartTotals();
    const orderId = `ELR-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

    const newOrder = {
      orderId,
      date: new Date().toISOString(),
      customer: { firstName, lastName, email, address, city, postal },
      items: [...state.cart],
      totals: totals
    };

    // Save order to LocalStorage
    try {
      const existingOrders = JSON.parse(localStorage.getItem(STORAGE_KEYS.ORDERS) || '[]');
      existingOrders.push(newOrder);
      localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(existingOrders));
    } catch (err) {
      console.warn('Failed to save order to localStorage', err);
    }

    // Populate confirmation receipt step
    dom.receiptOrderId.textContent = orderId;
    dom.receiptCustomerName.textContent = `${firstName} ${lastName}`;
    dom.receiptCustomerEmail.textContent = email;
    dom.receiptOrderTotal.textContent = `$${totals.total.toFixed(2)}`;

    // Clear cart
    state.cart = [];
    state.appliedCoupon = null;
    persistCart();
    persistCoupon();
    updateBadges();

    // Switch view
    dom.checkoutFormStep.classList.add('hidden');
    dom.orderConfirmationStep.classList.remove('hidden');
    showToast('Acquisition confirmed! Order ledger updated.', 'fa-solid fa-circle-check');
  }

  function closeCheckoutModal() {
    dom.checkoutModal.classList.add('hidden');
    document.body.classList.remove('modal-open');
  }

  // =========================================================================
  // NEWSLETTER SUBSCRIPTION
  // =========================================================================
  function handleNewsletterSubmit(e) {
    e.preventDefault();
    const email = dom.newsletterEmail.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      dom.newsletterMessage.className = 'newsletter-feedback error';
      dom.newsletterMessage.textContent = 'Please provide a valid atelier email address.';
      return;
    }

    try {
      const subscribers = JSON.parse(localStorage.getItem(STORAGE_KEYS.NEWSLETTER) || '[]');
      if (subscribers.includes(email.toLowerCase())) {
        dom.newsletterMessage.className = 'newsletter-feedback';
        dom.newsletterMessage.textContent = 'You are already an esteemed member of the ÉLORA community.';
        return;
      }
      subscribers.push(email.toLowerCase());
      localStorage.setItem(STORAGE_KEYS.NEWSLETTER, JSON.stringify(subscribers));
    } catch (err) {
      console.warn('Newsletter storage issue', err);
    }

    dom.newsletterMessage.className = 'newsletter-feedback success';
    dom.newsletterMessage.innerHTML = '<i class="fa-solid fa-check me-2"></i> Welcome to the ÉLORA Community. Welcome code <strong>NEW10</strong> is now active.';
    dom.newsletterEmail.value = '';
    showToast('Welcome to ÉLORA Atelier. Code NEW10 unlocked.', 'fa-solid fa-sparkles');
  }

  // =========================================================================
  // DRAWER HELPERS
  // =========================================================================
  function openCartDrawer() {
    renderCartDrawer();
    dom.cartDrawer.classList.add('open');
    dom.cartBackdrop.classList.add('open');
    document.body.classList.add('drawer-open');
  }

  function closeCartDrawer() {
    dom.cartDrawer.classList.remove('open');
    dom.cartBackdrop.classList.remove('open');
    document.body.classList.remove('drawer-open');
  }

  function openWishlistDrawer() {
    renderWishlistDrawer();
    dom.wishlistDrawer.classList.add('open');
    dom.wishlistBackdrop.classList.add('open');
    document.body.classList.add('drawer-open');
  }

  function closeWishlistDrawer() {
    dom.wishlistDrawer.classList.remove('open');
    dom.wishlistBackdrop.classList.remove('open');
    document.body.classList.remove('drawer-open');
  }

  function openMobileNav() {
    dom.mobileNavDrawer.classList.add('open');
    dom.mobileNavBackdrop.classList.add('open');
    document.body.classList.add('drawer-open');
  }

  function closeMobileNav() {
    dom.mobileNavDrawer.classList.remove('open');
    dom.mobileNavBackdrop.classList.remove('open');
    document.body.classList.remove('drawer-open');
  }

  function openSearch() {
    dom.searchOverlay.classList.add('open');
    dom.searchInput.focus();
  }

  function closeSearch() {
    dom.searchOverlay.classList.remove('open');
    dom.searchInput.value = '';
    state.searchQuery = '';
    renderCatalog();
  }

  function updateBadges() {
    const totalCartCount = state.cart.reduce((sum, it) => sum + it.quantity, 0);
    dom.cartCountBadge.textContent = totalCartCount;
    dom.wishlistCountBadge.textContent = state.wishlist.length;
  }

  // =========================================================================
  // GSAP & AOS ANIMATIONS SETUP
  // =========================================================================
  function initAnimations() {
    // 1. AOS Initialization
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 60
      });
    }

    // 2. GSAP Entrance Animations
    if (typeof gsap !== 'undefined') {
      // Header entrance
      gsap.fromTo('#siteHeader', 
        { y: -90, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', clearProps: 'all' }
      );

      // Hero image scale reveal
      gsap.fromTo(
        '.hero-bg-media',
        { scale: 1.15, opacity: 0.8 },
        { scale: 1.0, opacity: 1, duration: 1.8, ease: 'power2.out', clearProps: 'scale,opacity' }
      );

      // Hero heading stagger animation & CTA fade-up
      gsap.fromTo('.hero-headline',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, delay: 0.25, ease: 'power3.out', clearProps: 'all' }
      );

      gsap.fromTo('.hero-subtitle',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.45, ease: 'power3.out', clearProps: 'all' }
      );

      // Hero CTA buttons fade-up with clearProps to guarantee permanent visibility
      gsap.fromTo('.hero-cta-group .btn',
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.9,
          delay: 0.65,
          ease: 'power3.out',
          clearProps: 'all',
          onComplete: () => {
            document.querySelectorAll('.hero-cta-group, .hero-cta-group .btn').forEach(btn => {
              btn.style.opacity = '1';
              btn.style.visibility = 'visible';
              btn.style.transform = 'none';
            });
          }
        }
      );

      // Special offers card reveal
      if (typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo('.offer-card',
          { y: 40, opacity: 0 },
          {
            scrollTrigger: {
              trigger: '#specialOffers',
              start: 'top 85%',
              once: true
            },
            y: 0,
            opacity: 1,
            stagger: 0.18,
            duration: 0.85,
            ease: 'power3.out',
            clearProps: 'all',
            onComplete: () => {
              document.querySelectorAll('.offer-card').forEach(card => {
                card.style.opacity = '1';
                card.style.visibility = 'visible';
                card.style.transform = 'none';
              });
            }
          }
        );
      }
    }

    // Direct visibility guarantees - prevent any animation freeze from keeping elements hidden
    const ensureElementsVisible = () => {
      document.querySelectorAll('.hero-cta-group, .hero-cta-group .btn').forEach(el => {
        el.style.opacity = '1';
        el.style.visibility = 'visible';
      });
      document.querySelectorAll('.offer-card').forEach(card => {
        card.style.opacity = '1';
        card.style.visibility = 'visible';
      });
    };

    // Run visibility check after animations have elapsed
    setTimeout(ensureElementsVisible, 1200);

    // Fallback IntersectionObserver for Special Offers to ensure visibility upon scroll
    if ('IntersectionObserver' in window) {
      const offersObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            document.querySelectorAll('.offer-card').forEach(card => {
              card.style.opacity = '1';
              card.style.visibility = 'visible';
              card.style.transform = 'none';
            });
            offersObserver.disconnect();
          }
        });
      }, { threshold: 0.05, rootMargin: '50px' });

      const specialOffersEl = document.getElementById('specialOffers');
      if (specialOffersEl) offersObserver.observe(specialOffersEl);
    }
  }

  // =========================================================================
  // EVENT LISTENERS & DELEGATION
  // =========================================================================
  function bindEvents() {
    // Scroll header background transition
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        dom.header.classList.add('scrolled');
      } else {
        dom.header.classList.remove('scrolled');
      }
    }, { passive: true });

    // Mobile nav triggers
    dom.mobileMenuBtn.addEventListener('click', openMobileNav);
    dom.mobileNavCloseBtn.addEventListener('click', closeMobileNav);
    dom.mobileNavBackdrop.addEventListener('click', closeMobileNav);
    dom.mobileNavLinks.forEach(link => link.addEventListener('click', closeMobileNav));

    // Search triggers
    dom.searchOpenBtn.addEventListener('click', openSearch);
    dom.searchCloseBtn.addEventListener('click', closeSearch);
    dom.searchClearBtn.addEventListener('click', () => {
      dom.searchInput.value = '';
      state.searchQuery = '';
      renderCatalog();
      dom.searchInput.focus();
    });

    dom.searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderCatalog();
    });

    dom.searchPills.forEach(pill => {
      pill.addEventListener('click', () => {
        const query = pill.getAttribute('data-query');
        dom.searchInput.value = query;
        state.searchQuery = query;
        renderCatalog();
        document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
      });
    });

    // Cart Drawer triggers
    dom.cartOpenBtn.addEventListener('click', openCartDrawer);
    dom.cartCloseBtn.addEventListener('click', closeCartDrawer);
    dom.cartBackdrop.addEventListener('click', closeCartDrawer);
    dom.cartCheckoutBtn.addEventListener('click', openCheckoutModal);

    // Wishlist Drawer triggers
    dom.wishlistOpenBtn.addEventListener('click', openWishlistDrawer);
    dom.wishlistCloseBtn.addEventListener('click', closeWishlistDrawer);
    dom.wishlistBackdrop.addEventListener('click', closeWishlistDrawer);
    dom.moveAllWishlistToCartBtn.addEventListener('click', moveAllWishlistToCart);

    // Cart coupon application
    dom.cartApplyCouponBtn.addEventListener('click', () => {
      applyCoupon(dom.cartCouponInput.value);
    });
    dom.removeCouponBtn.addEventListener('click', removeCoupon);

    // Category navigation from header and mobile menu
    document.querySelectorAll('[data-category]').forEach(link => {
      link.addEventListener('click', (e) => {
        const cat = link.getAttribute('data-category');
        if (cat) {
          state.activeCategory = cat;
          dom.categoryPills.forEach(p => {
            p.classList.toggle('active', p.getAttribute('data-filter') === cat);
          });
          renderCatalog();
          const target = document.getElementById('catalog');
          if (target) target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Featured Category Cards click: Filters the product collection
    document.querySelectorAll('.category-card').forEach(card => {
      card.addEventListener('click', () => {
        const cat = card.getAttribute('data-category');
        if (cat) {
          state.activeCategory = cat;
          dom.categoryPills.forEach(p => {
            p.classList.toggle('active', p.getAttribute('data-filter') === cat);
          });
          renderCatalog();
          document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
          showToast(`Filtered catalogue by ${cat}.`, 'fa-solid fa-filter');
        }
      });
    });

    // Category pills click
    dom.categoryPills.forEach(pill => {
      pill.addEventListener('click', () => {
        dom.categoryPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        state.activeCategory = pill.getAttribute('data-filter');
        renderCatalog();
      });
    });

    // Sort select change
    dom.productSortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      renderCatalog();
    });

    // Clear filters button
    dom.clearFiltersBtn.addEventListener('click', () => {
      state.activeCategory = 'All';
      dom.categoryPills.forEach(p => p.classList.toggle('active', p.getAttribute('data-filter') === 'All'));
      renderCatalog();
    });

    dom.resetSearchBtn.addEventListener('click', () => {
      state.searchQuery = '';
      state.activeCategory = 'All';
      dom.searchInput.value = '';
      dom.categoryPills.forEach(p => p.classList.toggle('active', p.getAttribute('data-filter') === 'All'));
      renderCatalog();
    });

    // Special offers buttons
    dom.applyCouponBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const code = btn.getAttribute('data-code');
        applyCoupon(code);
        openCartDrawer();
      });
    });

    // Offer cards copy coupon interaction
    dom.offerCards.forEach(card => {
      card.addEventListener('click', () => {
        const code = card.getAttribute('data-coupon');
        if (code) {
          navigator.clipboard?.writeText(code).catch(() => {});
          applyCoupon(code);
        }
      });
    });

    // Quick View Modal
    dom.modalCloseBtn.addEventListener('click', closeProductModal);
    dom.productModal.addEventListener('click', (e) => {
      if (e.target === dom.productModal) closeProductModal();
    });

    dom.qtyDecreaseBtn.addEventListener('click', () => {
      if (state.modalQty > 1) {
        state.modalQty--;
        dom.modalQtyInput.value = state.modalQty;
      }
    });

    dom.qtyIncreaseBtn.addEventListener('click', () => {
      if (state.modalQty < 10) {
        state.modalQty++;
        dom.modalQtyInput.value = state.modalQty;
      }
    });

    dom.modalAddToCartBtn.addEventListener('click', () => {
      if (state.activeModalProduct) {
        addToCart(state.activeModalProduct.id, state.modalQty);
        closeProductModal();
      }
    });

    dom.modalWishlistToggleBtn.addEventListener('click', () => {
      if (state.activeModalProduct) {
        toggleWishlist(state.activeModalProduct.id);
      }
    });

    // Checkout Modal
    dom.checkoutCloseBtn.addEventListener('click', closeCheckoutModal);
    dom.checkoutModal.addEventListener('click', (e) => {
      if (e.target === dom.checkoutModal) closeCheckoutModal();
    });
    dom.checkoutForm.addEventListener('submit', handleOrderSubmission);
    dom.orderFinishBtn.addEventListener('click', closeCheckoutModal);

    // Newsletter
    dom.newsletterForm.addEventListener('submit', handleNewsletterSubmit);

    // 404 Error action buttons
    dom.errorBackBtn.addEventListener('click', () => {
      window.history.back();
    });
    dom.errorHomeBtn.addEventListener('click', () => {
      dom.error404View.classList.add('hidden');
      fetchProducts();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Event delegation for dynamically rendered product grids
    document.addEventListener('click', (e) => {
      // 1. Wishlist button
      const wishlistBtn = e.target.closest('.product-wishlist-btn');
      if (wishlistBtn) {
        e.preventDefault();
        e.stopPropagation();
        const id = wishlistBtn.getAttribute('data-id');
        toggleWishlist(id);
        return;
      }

      // 2. Quick view button
      const quickViewBtn = e.target.closest('.quick-view-btn');
      if (quickViewBtn) {
        e.preventDefault();
        e.stopPropagation();
        const id = quickViewBtn.getAttribute('data-id');
        openProductModal(id);
        return;
      }

      // 3. Quick add to cart button
      const quickCartBtn = e.target.closest('.quick-cart-btn');
      if (quickCartBtn) {
        e.preventDefault();
        e.stopPropagation();
        const id = quickCartBtn.getAttribute('data-id');
        addToCart(id, 1);
        return;
      }

      // 4. Product title or image click -> opens modal details
      const productTitle = e.target.closest('.product-title');
      if (productTitle) {
        const id = productTitle.getAttribute('data-id');
        openProductModal(id);
        return;
      }

      // 5. Cart drawer item actions
      const cartPlus = e.target.closest('.cart-plus-btn');
      if (cartPlus) {
        const id = cartPlus.getAttribute('data-id');
        updateCartQuantity(id, 1);
        return;
      }

      const cartMinus = e.target.closest('.cart-minus-btn');
      if (cartMinus) {
        const id = cartMinus.getAttribute('data-id');
        updateCartQuantity(id, -1);
        return;
      }

      const cartRemove = e.target.closest('.cart-remove-btn:not(.wishlist-remove-btn)');
      if (cartRemove) {
        const id = cartRemove.getAttribute('data-id');
        removeFromCart(id);
        return;
      }

      // 6. Wishlist drawer item actions
      const wishlistMove = e.target.closest('.wishlist-move-btn');
      if (wishlistMove) {
        const id = wishlistMove.getAttribute('data-id');
        addToCart(id, 1);
        toggleWishlist(id);
        return;
      }

      const wishlistRemove = e.target.closest('.wishlist-remove-btn');
      if (wishlistRemove) {
        const id = wishlistRemove.getAttribute('data-id');
        toggleWishlist(id);
        return;
      }
    });

    // Keyboard accessibility: ESC key closes open modals and drawers
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeProductModal();
        closeCheckoutModal();
        closeCartDrawer();
        closeWishlistDrawer();
        closeMobileNav();
        closeSearch();
      }
    });
  }

  // =========================================================================
  // APPLICATION BOOTSTRAP
  // =========================================================================
  function init() {
    loadPersistedData();
    bindEvents();
    initAnimations();
    fetchProducts();
  }

  // Start when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

