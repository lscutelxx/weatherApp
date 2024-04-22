const apiKey = '03158bc5e169f6a88cf0116744e9c6dd';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric';

const searchBox = document.querySelector('.search input');

const searchBtn = document.querySelector('.search button');

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
})

async function checkWeather(city) {
    const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';

    } else {
        document.querySelector('.error').style.display = 'none';
        document.querySelector('.weather').style.display = 'block';
        let data = await response.json();

        console.log(data);

        document.querySelector('.city').textContent = data.name;
        document.querySelector('.temp').textContent = Math.round(data.main.temp) + '°C';
        document.querySelector('.humidity').textContent = data.main.humidity + '%';
        document.querySelector('.wind').textContent = data.wind.speed + ' km/h';

        switch(data.weather[0].main) {
            case 'Clear':
                document.querySelector('.weather img').src = './images/clear.png';
                break;
            case 'Clouds':
                document.querySelector('.weather img').src = './images/clouds.png';
                break;
            case 'Drizzle':
                document.querySelector('.weather img').src = './images/drizzle.png';
                break;
            case 'Snow':
                document.querySelector('.weather img').src = './images/snow.png';
                break;
            case 'Mist':
                document.querySelector('.weather img').src = './images/mist.png';
                break;
            case 'Rain':
                document.querySelector('.weather img').src = './images/rain.png';
                break;
            default:
                document.querySelector('.weather img').src = './images/clouds.png';
                break;
        }
    }
}