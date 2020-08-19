const skyapi = {
  key: "47fad82b7328c6ef23295c8bcd9116f0",
  base: "https://api.openweathermap.org/data/2.5/"
}
const searchbox = document.querySelector('.city');
const codebox = document.querySelector('.code');
searchbox.addEventListener('keydown', setQuery);
codebox.addEventListener('keypress', setQuery);


function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchbox.value, codebox.value);
  }
}
function isEmpty(strIn) {
    if (strIn === undefined) {
        return true;
    }
    else if(strIn == null) {
        return true;
    }
    else if(strIn == "") {
        return true;
    }
	else if(strIn == " ") {
        return true;
	}
    else {
        return false;
    }
}
function getResults (p1, p2) {
	if (isEmpty(p1) && isEmpty(p2)) {
		document.querySelector('.current .temp').innerText = `C'mon sunshine pick a destination`;
	}
	else if ((isEmpty(p1) == false && isEmpty(p2) ==true) || (isEmpty(p1) == true && isEmpty(p2) ==false) ) {
		document.querySelector('.current .temp').innerText = 'You seem to have MIST a field';
	}
	else if (p1 == 'Claire' && p2 =='Flavin') {
		document.querySelector('.current .temp').innerHTML =`<img src="cf.jpeg" alt="Smiley face" height='50%' width="100%">`;
	}
	else if (p1 == 'atlantis' && p2 == 'ocean') {
		console.log(p1);
		console.log(p2);
document.querySelector('.location .city').innerText = 'Atlantis,Ocean'
let now = new Date();
	let date = document.querySelector('.location .date');
	date.innerText = dateBuilder(now);
document.querySelector('.location .time').innerText = ''
document.querySelector('.current .temp').innerText = `${Math.floor((Math.random() * 3) + 1)}°c`
document.querySelector ('.current .feels-like').innerText = '-100°c'
document.querySelector('.current .weather').innerText = 'Very Wet'
document.querySelector('.hi-low').innerText = '0°c / 3°c'
	}
	else{
  fetch(`${skyapi.base}weather?q=${p1},${p2}&units=metric&APPID=${skyapi.key}`)
    .then(weather => {
      return weather.json();
    }).then(displayResults);
	}
}



function displayResults (weather) {
	let city = document.querySelector('.location .city');
	city.innerText = `${weather.name}, ${weather.sys.country}`;
	
	let now = new Date();
	let date = document.querySelector('.location .date');
	date.innerText = dateBuilder(now);
	
	let time = document.querySelector('.location .time');
	ewTime = weather.dt + weather.timezone
	T = new Date(newTime * 1000);
	ime.innerText = timeBuilder(tT);
	
	let temp = document.querySelector('.current .temp');
	temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;
	
	let feelsLike = document.querySelector ('.current .feels-like');
	feelsLike.innerText = `Feels Like: ${Math.round(weather.main.feels_like)}°c`;
	
	let weather_el = document.querySelector('.current .weather');
	weather_el.innerText = weather.weather[0].main;
	
	let hilow = document.querySelector('.hi-low');
	hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
}

function dateBuilder (d) {
	let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	
	let day = days[d.getDay()];
	let date = d.getDate();
	let month = months[d.getMonth()];
	let year = d.getFullYear();
	
	return `${day} ${date} ${month} ${year}`;
}

function timeBuilder(time) {
	let hours = ("0" + tT.getHours()).slice(-2);
	let mins =  ("0" + tT.getMinutes()).slice(-2);
	let secs = ("0" + tT.getSeconds()).slice(-2);
	
	return `${hours}:${mins}:${secs}`;
}