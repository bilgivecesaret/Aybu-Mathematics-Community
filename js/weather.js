const apiKey = "4242403e2d70e46b2deeb16e18ab1a30";
const city = "Ankara";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=tr&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("HTTP Hatası: " + response.status);
      }
      return response.json();
    })
    .then(data => {
      const icon = data.weather[0].icon;
      const description = data.weather[0].description;
      const weather = `
        <tr>
          <td>
            <p class="country">
                ${data.name}, ${data.sys.country}
                <img src="https://openweathermap.org/images/flags/tr.png" width="16" height="11">
                ${description}
            </p>
            <p>              
              Temperature: ${data.main.temp}°C (min: ${data.main.temp_min}, max: ${data.main.temp_max})<br>
              Wind: ${data.wind.speed}m/s Cloud: ${data.clouds.all}%
            </p>
          </td>
        </tr>
      `;
      document.getElementById("weather").innerHTML = weather;
    })
    .catch(error => {
      console.error("Hava durumu verisi alınamadı:", error);
      document.getElementById("weather").innerHTML = "<tr><td colspan='2'>Hava durumu bilgisi alınamadı.</td></tr>";
    });