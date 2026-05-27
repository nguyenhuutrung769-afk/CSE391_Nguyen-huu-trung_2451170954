const images = Array.from({ length: 9 }, (_, i) => `https://placehold.co/400x300?text=Image+${i + 1}`);
const gallery = document.querySelector("#gallery");
const modal = document.querySelector("#modal");
const commandPalette = document.querySelector("#commandPalette");
const commandInput = document.querySelector("#commandInput");
const commandList = document.querySelector("#commandList");
let currentIndex = 0, slideshow = null;

function renderGallery() {
    images.forEach((src, i) => {
        const img = document.createElement("img");
        img.src = src; img.tabIndex = 0; img.dataset.index = i;
        gallery.appendChild(img);
    });
}
renderGallery();

function showImage(i) {
    currentIndex = i;
    const src = images[i];
    modal.innerHTML = `<div id="modalContent"><img src="${src}" width="400"><button id="closeModal">Đóng</button></div>`;
    modal.classList.remove("hidden");
    document.querySelector("#closeModal").addEventListener("click", () => modal.classList.add("hidden"));
}

document.addEventListener("keydown", e => {
    if (modal.classList.contains("hidden")) {
        if (e.key === "ArrowRight") { currentIndex = (currentIndex + 1) % images.length; showImage(currentIndex); }
        if (e.key === "ArrowLeft") { currentIndex = (currentIndex - 1 + images.length) % images.length; showImage(currentIndex); }
        if (/[1-9]/.test(e.key)) { const idx = parseInt(e.key) - 1; if (idx < images.length) showImage(idx); }
        if (e.code === "Space") { e.preventDefault(); if (slideshow) { clearInterval(slideshow); slideshow = null; } else { slideshow = setInterval(() => { currentIndex = (currentIndex + 1) % images.length; showImage(currentIndex); }, 2000); } }
    }
    if (e.key === "Escape") { modal.classList.add("hidden"); commandPalette.classList.add("hidden"); }
    if (e.ctrlKey && e.key.toLowerCase() === "k") { e.preventDefault(); openCommandPalette(); }
});

const commands = ["Open Gallery", "Toggle Dark Mode", "Show Cart"];
function openCommandPalette() {
    commandPalette.classList.remove("hidden");
    commandInput.value = ""; commandList.innerHTML = "";
    commands.forEach(cmd => {
        const li = document.createElement("li"); li.textContent = cmd;
        commandList.appendChild(li);
    });
    commandInput.focus();
}
commandInput.addEventListener("input", () => {
    const val = commandInput.value.toLowerCase();
    Array.from(commandList.children).forEach(li => {
        li.style.display = li.textContent.toLowerCase().includes(val) ? "block" : "none";
    });
});
commandInput.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        const cmd = commandInput.value.toLowerCase();
        if (cmd.includes("gallery")) showImage(0);
        if (cmd.includes("dark")) document.body.classList.toggle("dark-mode");
        if (cmd.includes("cart")) alert("Cart opened!");
        commandPalette.classList.add("hidden");
    }
});

