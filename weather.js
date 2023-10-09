// api='https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}'
// apikey='f84c43f29800b324c5427bb77c37f7ec'
const inputBox = document.getElementById('input-text');
const searchBtn = document.getElementById('searchBtn');
const temp = document.getElementById('temp');
const cityy = document.getElementById('city');
const humidity=document.getElementById('humidity');
const windSpeed=document.getElementById('windSpeed');
const description = document.getElementById('description');
const cloud = document.querySelector('.cloud');
const rain = document.querySelector('.rain');
const clear = document.querySelector('.clear');
const drizzle = document.querySelector('.drizzle');


async function checkWeather(city){
    const api_key = 'f84c43f29800b324c5427bb77c37f7ec';
    const  url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data =await fetch(`${url}`).then(response=>response.json());
    console.log(weather_data);

    temp.innerHTML = `${Math.round(weather_data.main.temp-273.15)+'°C'}`;
    cityy.innerHTML = `${weather_data.name}`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity +'%'}`;
    windSpeed.innerHTML = `${weather_data.wind.speed +'kmph'}`;
    humidity.style.fontSize='20px';
    humidity.style.marginLeft='0px';
    humidity.style.backgroundColor ='transparent';
    windSpeed.style.fontSize='20px';
    windSpeed.style.marginLeft='0px';
    windSpeed.style.backgroundColor ='transparent';



    if(weather_data.weather[0].description = 'broken clouds'){
           cloud.style.display='block'
    }
    else if(weather_data.weather[0].description = 'overcast clouds'){
        drizzle.style.display='block'
    }
    else if(weather_data.weather[0].main = 'Clear'){
        clear.style.display='block'
    }
    else{
        rain.style.display='block'
    }
}

searchBtn.addEventListener('click',()=>{
    checkWeather(inputBox.value);
});




 