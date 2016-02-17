import axios from 'axios';

const API_KEY = '44db6a862fba0b067b1930da0d769e98';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// convention to create a variable that holds our action type
// instead of a string so that we don't have a problem with a
// use mistyping the action type and not realizing there's
// a problem since there's no error message when the reducer
// tries to interpret it
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    console.log('Request:', request);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
