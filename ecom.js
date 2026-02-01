let cart = [];
let orders = [];
const products = [
    { id: 1, name: "Noise Cancelling Headphones", price: 299, category: "Electronics", brand: "Sony", image: "https://picsum.photos/id/1/300/300" },
    { id: 2, name: "Smart Watch Series 7", price: 399, category: "Electronics", brand: "Apple", image: "https://picsum.photos/id/2/300/300" },
    { id: 3, name: "Mechanical Keyboard", price: 120, category: "Electronics", brand: "Logitech", image: "https://picsum.photos/id/3/300/300" },
    { id: 4, name: "Wireless Gaming Mouse", price: 85, category: "Electronics", brand: "Razer", image: "https://picsum.photos/id/4/300/300" },
    { id: 5, name: "4K Ultra HD Monitor", price: 450, category: "Electronics", brand: "Dell", image: "https://picsum.photos/id/5/300/300" },
    { id: 6, name: "Portable SSD 1TB", price: 130, category: "Electronics", brand: "Samsung", image: "https://picsum.photos/id/6/300/300" },
    { id: 7, name: "Bluetooth Speaker", price: 55, category: "Electronics", brand: "JBL", image: "https://picsum.photos/id/7/300/300" },
    { id: 8, name: "DSLR Camera", price: 899, category: "Electronics", brand: "Canon", image: "https://picsum.photos/id/8/300/300" },
    { id: 9, name: "Action Camera 4K", price: 249, category: "Electronics", brand: "GoPro", image: "https://picsum.photos/id/9/300/300" },
    { id: 10, name: "E-Reader Paperwhite", price: 139, category: "Electronics", brand: "Amazon", image: "https://picsum.photos/id/10/300/300" },
    { id: 11, name: "Noise-Isolating Earbuds", price: 129, category: "Electronics", brand: "Bose", image: "https://picsum.photos/id/11/300/300" },
    { id: 12, name: "Tablet Pro 11", price: 799, category: "Electronics", brand: "Apple", image: "https://picsum.photos/id/12/300/300" },
    { id: 13, name: "Smart Home Hub", price: 99, category: "Electronics", brand: "Google", image: "https://picsum.photos/id/13/300/300" },
    { id: 14, name: "Streaming Stick 4K", price: 49, category: "Electronics", brand: "Roku", image: "https://picsum.photos/id/14/300/300" },
    { id: 15, name: "Wireless Charger Pad", price: 25, category: "Electronics", brand: "Belkin", image: "https://picsum.photos/id/15/300/300" },
    { id: 16, name: "Classic White Sneakers", price: 75, category: "Fashion", brand: "Nike", image: "https://picsum.photos/id/16/300/300" },
    { id: 17, name: "Slim Fit Denim Jacket", price: 89, category: "Fashion", brand: "Levi's", image: "https://picsum.photos/id/17/300/300" },
    { id: 18, name: "Leather Crossbody Bag", price: 120, category: "Fashion", brand: "Coach", image: "https://picsum.photos/id/18/300/300" },
    { id: 19, name: "Polarized Sunglasses", price: 155, category: "Fashion", brand: "Ray-Ban", image: "https://picsum.photos/id/19/300/300" },
    { id: 20, name: "Cotton Crewneck Tee", price: 20, category: "Fashion", brand: "Uniqlo", image: "https://picsum.photos/id/20/300/300" },
    { id: 21, name: "Cashmere Sweater", price: 180, category: "Fashion", brand: "Zara", image: "https://picsum.photos/id/21/300/300" },
    { id: 22, name: "Running Shoes", price: 110, category: "Fashion", brand: "Adidas", image: "https://picsum.photos/id/22/300/300" },
    { id: 23, name: "Formal Silk Tie", price: 45, category: "Fashion", brand: "Gucci", image: "https://picsum.photos/id/23/300/300" },
    { id: 24, name: "Canvas Backpack", price: 65, category: "Fashion", brand: "Herschel", image: "https://picsum.photos/id/24/300/300" },
    { id: 25, name: "Winter Puffer Coat", price: 210, category: "Fashion", brand: "North Face", image: "https://picsum.photos/id/25/300/300" },
    { id: 26, name: "Leather Wallet", price: 50, category: "Fashion", brand: "Fossil", image: "https://picsum.photos/id/26/300/300" },
    { id: 27, name: "Yoga Leggings", price: 95, category: "Fashion", brand: "Lululemon", image: "https://picsum.photos/id/27/300/300" },
    { id: 28, name: "Wool Fedora Hat", price: 40, category: "Fashion", brand: "H&M", image: "https://picsum.photos/id/28/300/300" },
    { id: 29, name: "Chrono Sports Watch", price: 250, category: "Fashion", brand: "Seiko", image: "https://picsum.photos/id/29/300/300" },
    { id: 30, name: "Linen Summer Dress", price: 70, category: "Fashion", brand: "Mango", image: "https://picsum.photos/id/30/300/300" },
    { id: 31, name: "Gold Plated Necklace", price: 125, category: "Fashion", brand: "Pandora", image: "https://picsum.photos/id/31/300/300" },
    { id: 32, name: "Leather Boots", price: 160, category: "Fashion", brand: "Timberland", image: "https://picsum.photos/id/32/300/300" },
    { id: 33, name: "Suede Loafers", price: 140, category: "Fashion", brand: "Clarks", image: "https://picsum.photos/id/33/300/300" },
    { id: 34, name: "Graphic Hoodie", price: 55, category: "Fashion", brand: "Champion", image: "https://picsum.photos/id/34/300/300" },
    { id: 35, name: "Belted Trench Coat", price: 299, category: "Fashion", brand: "Burberry", image: "https://picsum.photos/id/35/300/300" },
    { id: 36, name: "Scented Soy Candle", price: 25, category: "Home", brand: "Yankee", image: "https://picsum.photos/id/36/300/300" },
    { id: 37, name: "Ceramic Coffee Mug", price: 15, category: "Home", brand: "Handmade", image: "https://picsum.photos/id/37/300/300" },
    { id: 38, name: "Velvet Throw Pillow", price: 35, category: "Home", brand: "IKEA", image: "https://picsum.photos/id/38/300/300" },
    { id: 39, name: "Indoor Palm Plant", price: 45, category: "Home", brand: "Greenery", image: "https://picsum.photos/id/39/300/300" },
    { id: 40, name: "Minimalist Wall Clock", price: 60, category: "Home", brand: "Modern", image: "https://picsum.photos/id/40/300/300" },
    { id: 41, name: "French Press Maker", price: 30, category: "Home", brand: "Bodum", image: "https://picsum.photos/id/41/300/300" },
    { id: 42, name: "Woven Area Rug", price: 150, category: "Home", brand: "West Elm", image: "https://picsum.photos/id/42/300/300" },
    { id: 43, name: "Adjustable Desk Lamp", price: 40, category: "Home", brand: "PixarStyle", image: "https://picsum.photos/id/43/300/300" },
    { id: 44, name: "Glass Water Carafe", price: 22, category: "Home", brand: "Simple", image: "https://picsum.photos/id/44/300/300" },
    { id: 45, name: "Essential Oil Diffuser", price: 38, category: "Home", brand: "Muji", image: "https://picsum.photos/id/45/300/300" },
    { id: 46, name: "Bamboo Cutting Board", price: 28, category: "Home", brand: "KitchenCo", image: "https://picsum.photos/id/46/300/300" },
    { id: 47, name: "Set of 4 Wine Glasses", price: 55, category: "Home", brand: "Riedel", image: "https://picsum.photos/id/47/300/300" },
    { id: 48, name: "Electric Kettle", price: 65, category: "Home", brand: "KitchenAid", image: "https://picsum.photos/id/48/300/300" },
    { id: 49, name: "Abstract Canvas Art", price: 120, category: "Home", brand: "Gallery", image: "https://picsum.photos/id/49/300/300" },
    { id: 50, name: "Cozy Fleece Blanket", price: 45, category: "Home", brand: "Ugg", image: "https://picsum.photos/id/50/300/300" }
    
];

// --- Initialization ---
window.onload = () => {
    renderProducts(products);
    updateCartUI();
};

// --- Sections & Modals ---
function showSection(section) {
    document.getElementById('shop-section').style.display = section === 'products' ? 'flex' : 'none';
    document.getElementById('tracking-section').style.display = section === 'tracking' ? 'block' : 'none';
    document.getElementById('admin-panel').style.display = section === 'admin' ? 'block' : 'none';
    if(section === 'admin') renderAdminOrders();
}

function openLogin() { closeModals(); document.getElementById('login-modal').style.display = 'block'; }
function openSignup() { closeModals(); document.getElementById('signup-modal').style.display = 'block'; }
function closeModals() {
    document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
}

window.onclick = (e) => { if(e.target.classList.contains('modal')) closeModals(); };

// --- Products & Filters ---
function renderProducts(list) {
    const container = document.getElementById('product-container');
    if(!container) return;
    container.innerHTML = list.map(p => `
        <div class="card">
            <img src="${p.image}" alt="${p.name}">
            <div class="card-content">
                <p style="color:var(--violet-primary); font-size:0.8rem; font-weight:bold;">${p.brand}</p>
                <h3 style="font-size:1rem; margin:5px 0;">${p.name}</h3>
                <p>$${p.price}</p>
                <button class="add-btn" onclick="addToCart(${p.id})">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

function applyFilters() {
    const term = document.getElementById('product-search').value.toLowerCase();
    const price = parseInt(document.getElementById('price-slider').value);
    const cats = Array.from(document.querySelectorAll('.category-check:checked')).map(c => c.value);
    
    const filtered = products.filter(p => 
        (p.name.toLowerCase().includes(term) || p.brand.toLowerCase().includes(term)) &&
        (cats.length === 0 || cats.includes(p.category)) &&
        (p.price <= price)
    );
    renderProducts(filtered);
}

function updatePriceLabel(v) { document.getElementById('price-limit').innerText = `$${v}`; applyFilters(); }
function clearFilters() { 
    document.getElementById('product-search').value = ''; 
    document.getElementById('price-slider').value = 1000;
    document.querySelectorAll('.category-check').forEach(c => c.checked = false);
    renderProducts(products);
}

// --- Cart Logic ---
function toggleCart() { document.getElementById('cart-sidebar').classList.toggle('active'); }

function addToCart(id) {
    const p = products.find(x => x.id === id);
    if(p) { cart.push(p); updateCartUI(); }
}

function removeFromCart(i) { cart.splice(i, 1); updateCartUI(); }

function updateCartUI() {
    const badge = document.getElementById('cart-badge');
    const items = document.getElementById('cart-items');
    const total = document.getElementById('cart-total');
    
    badge.innerText = cart.length;
    if(cart.length === 0) {
        items.innerHTML = '<p style="text-align:center; padding:20px;">Empty Cart</p>';
        total.innerText = '$0';
        return;
    }
    
    items.innerHTML = cart.map((p, i) => `
        <div style="display:flex; justify-content:space-between; margin-bottom:10px; align-items:center; border-bottom:1px solid #eee; padding-bottom:5px;">
            <span style="font-size:0.85rem;">${p.name}</span>
            <span>$${p.price} <button onclick="removeFromCart(${i})" style="color:red; border:none; background:none; cursor:pointer; margin-left:10px;">&times;</button></span>
        </div>
    `).join('');
    total.innerText = `$${cart.reduce((s, x) => s + x.price, 0)}`;
}

// --- Checkout & Tracking ---
function processCheckout() {
    if(cart.length === 0) return alert("Cart empty");
    toggleCart();
    document.getElementById('pay-total').innerText = document.getElementById('cart-total').innerText;
    document.getElementById('payment-modal').style.display = 'block';
}

function completePayment() {
    const id = "ORD" + Math.floor(Math.random() * 100000);
    const order = { id, statusLevel: 1, status: "Ordered" };
    orders.push(order);
    alert("Payment Success! Order: #" + id);
    cart = []; updateCartUI();
    closeModals();
    showSection('tracking');
    updateTrackingUI(id);
}

function updateTrackingUI(id) {
    const order = orders.find(o => o.id === id);
    document.getElementById('track-id').innerText = "#" + id;
    document.getElementById('track-status').innerText = order.status;
    document.querySelectorAll('.step').forEach((s, i) => {
        s.classList.toggle('active', i < order.statusLevel);
    });
}

// --- Admin Panel ---
function renderAdminOrders() {
    const list = document.getElementById('admin-orders-list');
    list.innerHTML = orders.map(o => `
        <div class="admin-order-item">
            <span>#${o.id} - ${o.status}</span>
            <button onclick="advanceOrder('${o.id}')" class="signup-btn" style="padding:5px">Advance</button>
        </div>
    `).join('');
}

function advanceOrder(id) {
    const o = orders.find(x => x.id === id);
    if(o && o.statusLevel < 4) {
        o.statusLevel++;
        o.status = ["", "Ordered", "Shipped", "Out for Delivery", "Delivered"][o.statusLevel];
        renderAdminOrders();
    }
}

function adminAddProduct(e) {
    e.preventDefault();
    const p = {
        id: Date.now(),
        name: document.getElementById('new-p-name').value,
        price: parseInt(document.getElementById('new-p-price').value),
        category: document.getElementById('new-p-cat').value,
        brand: "Admin",
        image: "https://via.placeholder.com/300"
    };
    products.unshift(p);
    renderProducts(products);
    alert("Added!");
}

function openTab(e, name) {
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('show'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(name).classList.add('show');
    e.currentTarget.classList.add('active');
}

function handleSignup(e) { e.preventDefault(); alert("Welcome, " + document.getElementById('reg-name').value); closeModals(); }