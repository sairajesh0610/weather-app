
import {LOCATION_API_URL, LOCATION_API_KEY } from "../utils/constants"; 



export const fetchLocations = (address) => {
    return new Promise((resolve, reject) => {
        fetch(`${LOCATION_API_URL}/autocomplete?text=${address}&type=city&apiKey=${LOCATION_API_KEY}`)
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