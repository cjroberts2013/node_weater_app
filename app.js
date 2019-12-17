const request = require("request");

const url =
	"https://api.darksky.net/forecast/43d628f35fc3d59c4d799d2da28f4075/37.8267,-122.4233?units=us&lang=es";

const geocodeURL =
	"https://api.mapbox.com/geocoding/v5/mapbox.places/Austin.json?access_token=pk.eyJ1IjoiY2pyb2JlcnRzMjAxMyIsImEiOiJjazRhZ3hqd2wwNDA3M21tdm8yaXhsZTJ3In0.CCZ8fwxgeZq_H6tqbNqgRQ&limit=1";

request({ url: geocodeURL, json: true }, (error, response) => {
	const lat = response.body.features[0].center[1];
	const long = response.body.features[0].center[0];

	console.log(lat + ", " + long);
});

request({ url: url, json: true }, (error, response) => {
	console.log(
		response.body.daily.data[0].summary +
			" It is currently " +
			response.body.currently.temperature +
			" degrees out. There is a " +
			response.body.currently.precipProbability * 100 +
			"% chance of rain."
	);
});
