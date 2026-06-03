async function loadDashboard() {
    const startTime = Date.now();

    // Hiển thị loading cho từng widget
    document.querySelectorAll(".content").forEach(c => c.innerHTML = "<p class='loading'>Loading...</p>");

    const results = await Promise.allSettled([
        fetch("https://jsonplaceholder.typicode.com/users").then(r => r.json()),
        fetch("https://api.open-meteo.com/v1/forecast?latitude=21.03&longitude=105.85&current_weather=true").then(r => r.json()),
        fetch("https://restcountries.com/v3.1/all").then(r => r.json())
    ]);

    results.forEach((result, index) => {
        if (result.status === "fulfilled") {
            renderWidget(index, result.value);
        } else {
            renderWidgetError(index, result.reason.message);
        }
    });

    document.querySelector("#fetchTime").textContent = `Data loaded in ${Date.now() - startTime} ms`;
}

function renderWidget(index, data) {
    const content = document.querySelector(`#widget${index} .content`);
    content.innerHTML = "";
    if (index === 0) {
        // Users
        data.slice(0, 5).forEach(u => {
            content.innerHTML += `<p>${u.name} (${u.email})</p>`;
        });
    }
    if (index === 1) {
        // Weather
        const w = data.current_weather;
        content.innerHTML = `
      <p>Temperature: ${w.temperature}°C</p>
      <p>Windspeed: ${w.windspeed} km/h</p>
    `;
    }
    if (index === 2) {
        // Countries
        data.slice(0, 5).forEach(c => {
            content.innerHTML += `<p>${c.name.common} - Pop: ${c.population}</p>`;
        });
    }
}

function renderWidgetError(index, message) {
    const content = document.querySelector(`#widget${index} .content`);
    content.innerHTML = `<p class='error'>Error: ${message}</p>`;
}

document.querySelector("#refreshBtn").addEventListener("click", loadDashboard);

// Init
loadDashboard();
