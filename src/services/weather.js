
import { WEATHER_API_KEY, WEATHER_3_API_URL,WEATHER_HISTORY_API_URL,WEATHER_HISTORY_API_KEY } from "../utils/constants"; 
import { formatDate } from "../utils/utils";


export const fetchCurrentWeather = (lat,lon) => {
    return new Promise((resolve, reject) => {
        fetch(`${WEATHER_3_API_URL}/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=imperial&appid=${WEATHER_API_KEY}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
};

export const fetchWeatherHistory=(lat,lon)=>{
    return new Promise((resolve, reject) => {
        let endDate = new Date();
        let startDate = new Date(endDate);
        startDate.setMonth(endDate.getMonth() - 1);
        const formattedStartDate = formatDate(startDate);
        const formattedEndDate = formatDate(endDate); 
        fetch(`${WEATHER_HISTORY_API_URL}/daily?lat=${lat}&lon=${lon}&start_date=${formattedStartDate}&end_date=${formattedEndDate}&units=I&key=${WEATHER_HISTORY_API_KEY}`).then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => resolve(data))
        .catch(error => reject(error));
}); 
}