const { useState } = require('react');
import Weather from './components/Weather';
import Country from './components/Country';

const App = () => {
    const [city, setCity] = useState('');
    const [countryData, setCountryData] = useState(null);
    const [weatherData, setWeatherData] = useState(null);

    const handleCityChange = (e) => {
        setCity(e.target.value);
    };

    const fetchWeatherAndCountry = async () => {
        // Fetch weather and country data based on the city
        // Implement the logic to call the weather API and country API
    };

    return (
        <div>
            <h1>Weather and Country Info</h1>
            <input 
                type="text" 
                value={city} 
                onChange={handleCityChange} 
                placeholder="Enter city name" 
            />
            <button onClick={fetchWeatherAndCountry}>Get Info</button>
            {weatherData && <Weather result={weatherData} />}
            {countryData && <Country result={countryData} />}
        </div>
    );
};

export default App;