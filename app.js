
//Init UI
const ui = new UI();
// //Init storage
const storage = new Storage();
//Get storage locationData
const weatherLocation = storage.getLocationData();
// Init weather
const weather = new Weather(weatherLocation.city, weatherLocation.state);

//Get weather onload
document.addEventListener('DOMContentLoaded', getWeather);

//Change LocATION
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    weather.changeLocation(city, state);

    storage.setLocationData(city, state)

    //Get and display weather
    weather.getWeather()

    //Close modal
    $('#locModal').modal('hide');
});



function getWeather(){
    weather.getWeather()
        .then(results => {
            ui.paint(results)
        })
        .catch(err => console.log(err));
}

