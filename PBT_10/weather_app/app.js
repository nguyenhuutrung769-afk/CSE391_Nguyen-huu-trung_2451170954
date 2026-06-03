const cityInput = document.querySelector("#cityInput");
const searchBtn = document.querySelector("#searchBtn");
const stateDiv = document.querySelector("#state");
const weatherDiv = document.querySelector("#weather");
const historyUl = document.querySelector("#history");

let history = JSON.parse(localStorage.getItem("history")) || [];

function renderHistory() {
    historyUl.innerHTML = "";
    history.forEach(city => {
        const li = document.createElement("li");
        li.textContent = city;
        li.addEventListener("click", () => fetchWeather(city));
        historyUl.appendChild(li);
    });
}

async function fetchWeather(city) {
    try {
        stateDiv.innerHTML = `<span class="spinner"></span> Đang tải...`;
        weatherDiv.innerHTML = "";
        // API wttr.in
        const res = await fetch(`https://wttr.in/${city}?format=j1`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();

        // Parse dữ liệu
        const current = data.current_condition[0];
        const temp = current.temp_C;
        const humidity = current.humidity;
        const desc = current.weatherDesc[0].value;
        const icon = current.weatherIconUrl[0].value;

        stateDiv.textContent = "Thành công!";
        weatherDiv.innerHTML = `
      <p>Nhiệt độ: ${temp}°C</p>
      <p>Độ ẩm: ${humidity}%</p>
      <p>Mô tả: ${desc}</p>
      <img src="${icon}">
    `;

        // Lưu lịch sử
        history = history.filter(c => c.toLowerCase() !== city.toLowerCase());
        history.unshift(city);
        if (history.length > 5) history.pop();
        localStorage.setItem("history", JSON.stringify(history));
        renderHistory();
    } catch (err) {
        stateDiv.textContent = "Lỗi: " + err.message;
    }
}

searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (city) fetchWeather(city);
});

renderHistory();
