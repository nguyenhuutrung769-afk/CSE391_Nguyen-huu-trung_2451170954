const products = [
    { id: 1, name: "iPhone 16", price: 25990000, category: "phone", image: "https://placehold.co/200", rating: 4.5, inStock: true },
    { id: 2, name: "MacBook Pro", price: 45990000, category: "laptop", image: "https://placehold.co/200", rating: 4.8, inStock: true },
    { id: 3, name: "AirPods Pro", price: 6990000, category: "accessory", image: "https://placehold.co/200", rating: 4.3, inStock: true },
    { id: 4, name: "iPad Air", price: 16990000, category: "tablet", image: "https://placehold.co/200", rating: 4.6, inStock: false },
    { id: 5, name: "Samsung S24", price: 22990000, category: "phone", image: "https://placehold.co/200", rating: 4.4, inStock: true },
    { id: 6, name: "Dell XPS 15", price: 35990000, category: "laptop", image: "https://placehold.co/200", rating: 4.7, inStock: true },
    { id: 7, name: "Galaxy Buds", price: 3490000, category: "accessory", image: "https://placehold.co/200", rating: 4.1, inStock: true },
    { id: 8, name: "Xiaomi Pad 6", price: 7990000, category: "tablet", image: "https://placehold.co/200", rating: 4.2, inStock: true },
    { id: 9, name: "Pixel 9", price: 19990000, category: "phone", image: "https://placehold.co/200", rating: 4.6, inStock: true },
    { id: 10, name: "ThinkPad X1", price: 32990000, category: "laptop", image: "https://placehold.co/200", rating: 4.5, inStock: true },
    { id: 11, name: "Surface Pro", price: 29990000, category: "tablet", image: "https://placehold.co/200", rating: 4.4, inStock: true },
    { id: 12, name: "Logitech MX Master", price: 2490000, category: "accessory", image: "https://placehold.co/200", rating: 4.7, inStock: true }
];

let currentFilter = "all";
let currentSearch = "";
let currentSort = "priceAsc";
let cartCount = 0;

const productList = document.querySelector("#productList");
const searchInput = document.querySelector("#searchInput");
const filterButtons = document.querySelectorAll("#filters button");
const sortSelect = document.querySelector("#sortSelect");
const modal = document.querySelector("#modal");
const cartBadge = document.querySelector("#cartBadge");
const darkToggle = document.querySelector("#darkToggle");

function renderProducts() {
    productList.innerHTML = "";
    let filtered = products.filter(p =>
        (currentFilter === "all" || p.category === currentFilter) &&
        p.name.toLowerCase().includes(currentSearch.toLowerCase())
    );
    if (currentSort === "priceAsc") filtered.sort((a, b) => a.price - b.price);
    if (currentSort === "priceDesc") filtered.sort((a, b) => b.price - a.price);
    if (currentSort === "nameAZ") filtered.sort((a, b) => a.name.localeCompare(b.name));
    if (currentSort === "rating") filtered.sort((a, b) => b.rating - a.rating);

    filtered.forEach(p => {
        const card = document.createElement("div");
        card.className = "card";
        card.dataset.id = p.id;

        const img = document.createElement("img");
        img.src = p.image;
        const name = document.createElement("h3");
        name.textContent = p.name;
        const price = document.createElement("p");
        price.textContent = p.price.toLocaleString("vi-VN") + "đ";
        const rating = document.createElement("p");
        rating.textContent = "⭐ " + p.rating;
        const btn = document.createElement("button");
        btn.textContent = "Thêm giỏ";

        btn.addEventListener("click", e => {
            e.stopPropagation();
            cartCount++;
            cartBadge.textContent = cartCount;
        });

        card.append(img, name, price, rating, btn);
        card.addEventListener("click", () => showModal(p));
        productList.appendChild(card);
    });
}

function showModal(product) {
    modal.innerHTML = `
    <div id="modalContent">
      <h2>${product.name}</h2>
      <img src="${product.image}" width="200">
      <p>Giá: ${product.price.toLocaleString("vi-VN")}đ</p>
      <p>Category: ${product.category}</p>
      <p>Rating: ⭐ ${product.rating}</p>
      <p>${product.inStock ? "Còn hàng" : "Hết hàng"}</p>
      <button id="closeModal">Đóng</button>
    </div>`;
    modal.classList.remove("hidden");
    document.querySelector("#closeModal").addEventListener("click", () => modal.classList.add("hidden"));
}

// Search realtime
searchInput.addEventListener("input", e => {
    currentSearch = e.target.value;
    renderProducts();
});

// Filter
filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentFilter = btn.dataset.category;
        renderProducts();
    });
});

// Sort
sortSelect.addEventListener("change", e => {
    currentSort = e.target.value;
    renderProducts();
});

// Dark mode
document.querySelector("#darkToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

renderProducts();