const WeatherCard = ({ weather }) => {
    const { name, main, wind, weather: weatherData } = weather;
    
    // Dynamically set background image based on the weather condition
    const weatherCondition = weatherData[0].main.toLowerCase();
    
    // Sample mapping for weather backgrounds (replace these URLs with actual image URLs)
    const weatherBackgrounds = {
      clear: './src/images/Sunny.png', 
      rain: './src/images/Raining.png',
      clouds: './src/images/Cloudy.png',
      snow: './src/images/Snowing.png',
      thunderstorm: './src/images/ThunderStorms.png',
      drizzle: './src/images/Drizzle.png',
      mist: './src/images/Misty',
    };
    
    const backgroundImage = weatherBackgrounds[weatherCondition] || 'url_to_default_weather_image';
  
    return (
      <div 
        className="p-4 bg-cover bg-center text-white rounded-md text-center shadow-md" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <h2 className="text-3xl font-bold">{name}</h2>
        <p className="text-6xl">{main.temp}°C</p>
        <p className="text-lg capitalize">{weatherData[0].description}</p>
        
        <div className="flex justify-center space-x-4 mt-4">
          <p>Humidity: {main.humidity}%</p>
          <p>Wind Speed: {wind.speed} km/h</p>
        </div>
        
        <img 
          src={`https://openweathermap.org/img/wn/${weatherData[0].icon}@2x.png`} 
          alt={weatherData[0].description} 
          className="mx-auto mt-4"
        />
      </div>
    );
  };
  
  export default WeatherCard;
  
