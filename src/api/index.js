const baseURL ="https://api.weatherapi.com/v1/current.json?key=cd72f579c95947b4baa101701251612";

export async function getWeatherData(city){
    const respose = await fetch(`${baseURL}&q=${city}&aqi=yes`);
    return await respose.json();
}

export async function getWeatherDataLocation(lat,lon){
    const response = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`);
    return await response.json();
}
