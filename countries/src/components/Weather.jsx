import axios from "axios"
import { useEffect, useState } from "react"
const Weather = ({city}) => {
    const [weatherData, setWeatherData] = useState(null)
    const api_key = import.meta.env.VITE_WEATHER_API_KEY
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`
    useEffect(
        () => {
            axios.get(url)
            .then(res => {
                setWeatherData(res.data)
        })
            .catch(err => console.log(err))
        }, []
    )
    if (weatherData) {
        return (
            <>
            <h2>Weather in {city}</h2>
            <p>Temperature: {weatherData.main.temp}</p>
            <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="weather" />
            <p>wind: {weatherData.wind.speed}</p>

        </>
        )
    }
    else {
        return <p>Loading</p>
    }
}

export default Weather