
const url = "https://restcountries-v1.p.rapidapi.com/all";

var settings = {
	"async": true,
	"crossDomain": true,
	"url": `${url}`,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
		"x-rapidapi-key": "3b58b55b0emshe54f91f0f13fd68p10b582jsnc6ada90fd832"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
	let countries = [];
	let currencies = [];

	for (let i = 0; i < response.length; i ++){
		countries.push(response[i].name);
	}
	
	for (let i = 0; i < response.length; i ++){
		if (currencies.includes(response[i].currencies[0])){
			continue;
		}
		else {
			currencies.push(response[i].currencies[0]);
		}
	}
	console.log(countries);
	console.log(currencies);
});