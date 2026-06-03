// API Layer
const api = {
    baseURL: "https://jsonplaceholder.typicode.com",

    async getUsers() {
        const res = await fetch(`${this.baseURL}/users`);
        if (!res.ok) throw new Error("Failed to fetch users");
        return res.json();
    },
    async getUser(id) {
        const res = await fetch(`${this.baseURL}/users/${id}`);
        if (!res.ok) throw new Error("Failed to fetch user");
        return res.json();
    },
    async createUser(data) {
        const res = await fetch(`${this.baseURL}/users`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        if (!res.ok) throw new Error("Failed to create user");
        return res.json();
    },
    async updateUser(id, data) {
        const res = await fetch(`${this.baseURL}/users/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        if (!res.ok) throw new Error("Failed to update user");
        return res.json();
    },
    async deleteUser(id) {
        const res = await fetch(`${this.baseURL}/users/${id}`, { method: "DELETE" });
        if (!res.ok) throw new Error("Failed to delete user");
        return true;
    }
};

// UI Layer
const ui = {
    renderUsers(users) {
        const list = document.querySelector("#userList");
        list.innerHTML = "";
        users.forEach(u => {
            const card = document.createElement("div");
            card.className = "user-card";
            card.innerHTML = `
        <h3>${u.name}</h3>
        <p>${u.email}</p>
        <button class="editBtn">Edit</button>
        <button class="deleteBtn">Delete</button>
      `;
            card.querySelector(".editBtn").addEventListener("click", () => openEditForm(u));
            card.querySelector(".deleteBtn").addEventListener("click", () => deleteUser(u.id));
            list.appendChild(card);
        });
    },
    showLoading() {
        const list = document.querySelector("#userList");
        list.innerHTML = "";
        for (let i = 0; i < 5; i++) {
            const sk = document.createElement("div");
            sk.className = "skeleton";
            list.appendChild(sk);
        }
    },
    hideLoading() { document.querySelector("#userList").innerHTML = ""; },
    showError(message) {
        const state = document.querySelector("#state");
        state.innerHTML = `<div class="toast">${message}</div>`;
    },
    showSuccess(message) {
        const state = document.querySelector("#state");
        state.innerHTML = `<div class="success">${message}</div>`;
    }
};

// Logic
let allUsers = [];

async function loadUsers() {
    try {
        ui.showLoading();
        allUsers = await api.getUsers();
        ui.renderUsers(allUsers);
    } catch (err) {
        ui.showError(err.message);
    }
}

function openCreateForm() {
    const modal = document.querySelector("#modal");
    modal.classList.remove("hidden");
    modal.innerHTML = `
    <div>
      <h2>Create User</h2>
      <input id="nameInput" placeholder="Name">
      <input id="emailInput" placeholder="Email">
      <button id="saveBtn">Save</button>
      <button id="closeBtn">Close</button>
    </div>`;
    document.querySelector("#saveBtn").addEventListener("click", async () => {
        const name = document.querySelector("#nameInput").value;
        const email = document.querySelector("#emailInput").value;
        try {
            const newUser = await api.createUser({ name, email });
            allUsers.push(newUser);
            ui.renderUsers(allUsers);
            ui.showSuccess("User created!");
            modal.classList.add("hidden");
        } catch (err) { ui.showError(err.message); }
    });
    document.querySelector("#closeBtn").addEventListener("click", () => modal.classList.add("hidden"));
}

function openEditForm(user) {
    const modal = document.querySelector("#modal");
    modal.classList.remove("hidden");
    modal.innerHTML = `
    <div>
      <h2>Edit User</h2>
      <input id="nameInput" value="${user.name}">
      <input id="emailInput" value="${user.email}">
      <button id="updateBtn">Update</button>
      <button id="closeBtn">Close</button>
    </div>`;
    document.querySelector("#updateBtn").addEventListener("click", async () => {
        const name = document.querySelector("#nameInput").value;
        const email = document.querySelector("#emailInput").value;
        try {
            const updated = await api.updateUser(user.id, { name, email });
            const idx = allUsers.findIndex(u => u.id === user.id);
            allUsers[idx] = updated;
            ui.renderUsers(allUsers);
            ui.showSuccess("User updated!");
            modal.classList.add("hidden");
        } catch (err) { ui.showError(err.message); }
    });
    document.querySelector("#closeBtn").addEventListener("click", () => modal.classList.add("hidden"));
}

function openForm(mode, user = null) {
    const modal = document.querySelector("#formModal");
    const title = document.querySelector("#formTitle");
    const nameInput = document.querySelector("#nameInput");
    const emailInput = document.querySelector("#emailInput");
    const saveBtn = document.querySelector("#saveBtn");
    const closeBtn = document.querySelector("#closeBtn");

    modal.classList.remove("hidden");
    title.textContent = mode === "create" ? "Create User" : "Edit User";
    nameInput.value = user ? user.name : "";
    emailInput.value = user ? user.email : "";

    saveBtn.onclick = async () => {
        try {
            if (mode === "create") {
                const newUser = await api.createUser({ name: nameInput.value, email: emailInput.value });
                allUsers.push(newUser);
                ui.renderUsers(allUsers);
                ui.showSuccess("User created!");
            } else {
                const updated = await api.updateUser(user.id, { name: nameInput.value, email: emailInput.value });
                const idx = allUsers.findIndex(u => u.id === user.id);
                allUsers[idx] = updated;
                ui.renderUsers(allUsers);
                ui.showSuccess("User updated!");
            }
            modal.classList.add("hidden");
        } catch (err) { ui.showError(err.message); }
    };

    closeBtn.onclick = () => modal.classList.add("hidden");
}

// Gọi khi click nút "Thêm User"
document.querySelector("#createBtn").addEventListener("click", () => openForm("create"));

// Gọi khi click "Edit" trên card
function openEditForm(user) { openForm("edit", user); }

async function deleteUser(id) {
    if (!confirm("Delete this user?")) return;
    try {
        await api.deleteUser(id);
        allUsers = allUsers.filter(u => u.id !== id);
        ui.renderUsers(allUsers);
        ui.showSuccess("User deleted!");
    } catch (err) { ui.showError(err.message); }
}

// Search filter
document.querySelector("#searchInput").addEventListener("input", e => {
    const q = e.target.value.toLowerCase();
    const filtered = allUsers.filter(u => u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q));
    ui.renderUsers(filtered);
});

// Init
document.querySelector("#createBtn").addEventListener("click", openCreateForm);
loadUsers();
