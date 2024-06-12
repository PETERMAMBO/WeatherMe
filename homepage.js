
document.addEventListener('DOMContentLoaded' ,function(){
    var scrollFromBottom = document.getElementById('bottomWM');
    scrollFromBottom.addEventListener('click', function(){
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    })
    
})

document.addEventListener('DOMContentLoaded', function() {
    var apiKey = '253ecd2da2de0313c6d5c328a6a20f9c'; // Replace with your OpenWeatherMap API key
    var weatherDiv = document.getElementById('weather');
    var getWeatherText = document.getElementById('weatherDetails');
    var locationInput = document.getElementById('inputLocation');
    var LocationSearch = document.getElementById('Location');

    getWeatherText.addEventListener('click', function() {
        var location = locationInput.value;
        if (location) {
            getWeather(location, apiKey);
        } else {
            weatherDiv.textContent = '...';
        }
    });
    getWeatherText.addEventListener('click', function() {
        var location = LocationSearch.value;
        if (location) {
            getWeather(location, apiKey);
        } else {
            weatherDiv.textContent = '...';
        }
    });

    function getWeather(location, apiKey) {
        var url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    displayWeather(data);
                } else {
                    weatherDiv.textContent = 'Location not found.';
                }
            })
            .catch(error => {
                console.error('Error fetching the weather data:', error);
                weatherDiv.textContent = 'Error fetching the weather data.';
            });
    }

    function displayWeather(data) {
        var location = data.name;
        var temperature = data.main.temp;
        var description = data.weather[0].description;
        var humidity = data.main.humidity;
        var windSpeed = data.wind.speed;

        weatherDiv.innerHTML = `
            <h2 style="color:white">${location}</h2>
            <p>Temperature: ${temperature}°C</p>
            <p>Description: ${description}</p>
            <p>Humidity: ${humidity}%</p>
            <p>Wind Speed: ${windSpeed} m/s</p>
        `;
       weatherDiv.style.cssText='position:absolute; top:250px; left:100px; color:white;'
    }
});
document.addEventListener('DOMContentLoaded', function(){
    let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slideImages");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}


})
