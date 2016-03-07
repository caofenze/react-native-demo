var rootUrl = 'http://api.openweathermap.org/data/2.5/weather?APPID=7e17ca7febd49d90e7e269732d8d23c0';

var _ = require('lodash');

var kelvinTiF = function(kelvin){
	return Math.round((kelvin - 273.15)*1.8 + 32) + ' ~F'
}

module.exports = function(latitude, longitude){
	var url = `${rootUrl}&lat=${latitude}&lon=${longitude}`;
	//rootUrl + '&lat=' + latitude + '&lon' + longitude ;

	return fetch(url)
		.then(function(response){
			return response.json()
		})
		.then(function(json){
			return {
				city : json.name,
				temperature : kelvinTiF(json.main.temp),
				description : _.capitalize(json.weather[0].description)
			}
		});
}