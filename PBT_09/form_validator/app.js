const form = document.querySelector("#registerForm");
const nameInput = document.querySelector("#name");
const nameStatus = document.querySelector("#nameStatus");
const emailInput = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const passwordInput = document.querySelector("#password");
const strengthBar = document.querySelector("#strengthBar div");
const confirmInput = document.querySelector("#confirmPassword");
const confirmError = document.querySelector("#confirmError");
const phoneInput = document.querySelector("#phone");
const submitBtn = document.querySelector("#submitBtn");
const modal = document.querySelector("#modal");

function validateName() {
    const val = nameInput.value.trim();
    if (val.length >= 2 && val.length <= 50) {
        nameStatus.textContent = "✅"; return true;
    } else { nameStatus.textContent = "❌"; return false; }
}

function validateEmail() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(emailInput.value)) { emailError.textContent = ""; return true; }
    else { emailError.textContent = "Email không hợp lệ"; return false; }
}

function checkStrength(pw) {
    let score = 0;
    if (pw.length >= 8) score++;
    if (/[a-z]/.test(pw) && /[0-9]/.test(pw)) score++;
    if (/[A-Z]/.test(pw) && /[^A-Za-z0-9]/.test(pw)) score++;
    return score;
}

function validatePassword() {
    const pw = passwordInput.value;
    const s = checkStrength(pw);
    let color = "red", width = "33%";
    if (s === 1) { color = "red"; width = "33%"; }
    if (s === 2) { color = "orange"; width = "66%"; }
    if (s === 3) { color = "green"; width = "100%"; }
    strengthBar.style.background = color;
    strengthBar.style.width = width;
    return s > 0;
}

function validateConfirm() {
    if (confirmInput.value === passwordInput.value) { confirmError.textContent = ""; return true; }
    else { confirmError.textContent = "Không khớp"; return false; }
}

function formatPhone() {
    let digits = phoneInput.value.replace(/\D/g, "").slice(0, 10);
    let formatted = digits.replace(/(\d{4})(\d{3})(\d{3})/, "$1-$2-$3");
    phoneInput.value = formatted;
    return digits.length === 10;
}

function checkAll() {
    const valid = validateName() && validateEmail() && validatePassword() && validateConfirm() && formatPhone();
    submitBtn.disabled = !valid;
}

[nameInput, emailInput, passwordInput, confirmInput, phoneInput].forEach(inp => {
    inp.addEventListener("input", checkAll);
});

form.addEventListener("submit", e => {
    e.preventDefault();
    modal.innerHTML = `
    <div id="modalContent">
      <h2>Đăng ký thành công!</h2>
      <p>Tên: ${nameInput.value}</p>
      <p>Email: ${emailInput.value}</p>
      <p>Phone: ${phoneInput.value}</p>
      <button id="closeModal">Đóng</button>
    </div>`;
    modal.classList.remove("hidden");
    document.querySelector("#closeModal").addEventListener("click", () => modal.classList.add("hidden"));
});
