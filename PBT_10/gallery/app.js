const gallery = document.querySelector("#gallery");
const loadTrigger = document.querySelector("#load-trigger");
const lightbox = document.querySelector("#lightbox");

let page = 1;
let loading = false;

// Lazy loading images
const imgObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            imgObserver.unobserve(img);
        }
    });
});

// Load photos
async function loadMorePhotos() {
    if (loading) return;
    loading = true;
    loadTrigger.textContent = "Đang tải thêm...";
    try {
        const res = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=20`);
        const data = await res.json();
        data.forEach(photo => {
            const img = document.createElement("img");
            img.dataset.src = photo.download_url;
            img.alt = photo.author;
            img.addEventListener("click", () => openLightbox(photo.download_url));
            gallery.appendChild(img);
            imgObserver.observe(img);
        });
        page++;
    } catch (err) {
        loadTrigger.textContent = "Lỗi tải ảnh!";
    } finally {
        loading = false;
        loadTrigger.textContent = "Kéo xuống để tải thêm...";
    }
}

// Lightbox
function openLightbox(src) {
    lightbox.innerHTML = `<img src="${src}"><button id="closeBtn">Đóng</button>`;
    lightbox.classList.remove("hidden");
    document.querySelector("#closeBtn").addEventListener("click", () => lightbox.classList.add("hidden"));
}

// Infinite scroll trigger
const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
        loadMorePhotos();
    }
});
observer.observe(loadTrigger);

// Init
loadMorePhotos();
