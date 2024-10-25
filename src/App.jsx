import { useState } from 'react';
import axios from 'axios';
import Background from './components/Background';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import ErrorMessage from './components/ErrorMessage';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    const apiKey1 = import.meta.env.VITE_API_KEY_1;
    const apiKey2 = import.meta.env.VITE_API_KEY_2;
    let apiKey = apiKey1;

    try {
      setError(null);
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeatherData(response.data);
    } catch (err) {
      setError("City not found. Please try again.");
      setWeatherData(null);
    }
  };

  return (
    <div className="relative">
      <Background weatherData={weatherData} />
      <div className="container mx-auto p-4 relative z-10">
        <SearchBar onSearch={fetchWeather} />
        {error && <ErrorMessage message={error} />}
        {weatherData && <WeatherCard weather={weatherData} />}
      </div>
    </div>
  );
};

export default App;
