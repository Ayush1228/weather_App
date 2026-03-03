import { useWeather } from "../context/Weather";
export default function Card() {
    const weather = useWeather();
    return (
        <div className="card">
            <img src={weather.data?.current?.condition?.icon} alt="IMG" />
            <h2>{weather.data?.current?.temp_c}°C</h2>
            {weather.data?.location && (
            <h5>{weather.data?.location?.name}, {weather.data?.location?.region}, {weather.data?.location?.country}</h5>
            )}
        </div>
    )
}
