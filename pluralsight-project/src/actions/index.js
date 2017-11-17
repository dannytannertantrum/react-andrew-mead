import axios from 'axios';

const API_KEY = '71dfb0fca41f86f8b240535071514203';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
	const url = `${ROOT_URL}&q=${city},us`;
	// the request is the promise - it doesn't contain any data yet...
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		// ...we return the promise of the request as the payload
		payload: request
	};
}