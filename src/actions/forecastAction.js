export const RECEIVE_FORECAST = 'RECEIVE_FORECAST';

export const receiveForecast = forecast => ({
	type: RECEIVE_FORECAST,
	forecast
});

export const requestForecast = (location) => dispatch => {
	let city;
	if (location.geo) {
		city = `lat=${location.geo.latitude}&lon=${location.geo.longitude}`;
	} else if (location.city) {
		city = `q=${location.city}`;
	} else {
		city = window.localStorage.getItem('city');
		city = `q=${city}`;
	}
	let key = 'a630c31d9071d7173ad0f2d7806c4225';
	let url = `https://api.openweathermap.org/data/2.5/forecast/daily?`;
	let query = `${url}${city}&appid=${key}&cont=7`;
	return fetch( query )
	.then(res => res.json())
	.then(forecast => {
		window.localStorage.setItem('city', forecast.city.name)
		return dispatch(receiveForecast(forecast))
	})
};
