import { createContext, useContext , useState} from "react";
import { getWeatherData, getWeatherDataLocation } from "../api";

const weatherContext = createContext(null);

export function useWeather() {
    return useContext(weatherContext);
}
export function WeatherProvider(props) {
    const [data,setData]= useState(null);
    const[searchCity,setSearchCity]= useState("");
    const fetchData= async ()=>{
        const response = await getWeatherData(searchCity);
        setData(response);
    }
    const fetchDataLocation= ()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            // console.log(position)
            getWeatherDataLocation(position.coords.latitude,position.coords.longitude).then((response)=>{
                setData(response);
            })
        })
        
    }
    return(
        <weatherContext.Provider value={{searchCity,data,fetchData,setSearchCity,fetchDataLocation}}>
            {props.children}
        </weatherContext.Provider>
    )
}
