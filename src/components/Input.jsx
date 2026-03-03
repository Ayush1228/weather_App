import { useWeather } from "../context/Weather"
export default function Input() {
    const weather = useWeather();
    // console.log(weather)
    return (
            <input type="text"placeholder="Enter city name" className="input-field" value={weather.searchCity} onChange={(e) => weather.setSearchCity(e.target.value)} />
    )
}
