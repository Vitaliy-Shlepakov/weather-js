// Init weather
const weather = new Weather('Boston', 'MA');

//Get weather onload
document.addEventListener('DOMContentLoaded', getWeather);

weather.changeLocation('Miami', 'Fl');

function getWeather(){
    weather.getWeather()
        .then(results => {
            console.log(results)
        })
        .catch(err => console.log(err));
}

