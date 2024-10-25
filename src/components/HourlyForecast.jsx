const HourlyForecast = ({ hourlyData }) => (
    <div className="flex overflow-x-scroll space-x-4 py-4">
      {hourlyData.map((hour, index) => (
        <div key={index} className="text-center min-w-[80px]">
          <p>{new Date(hour.dt * 1000).getHours()}:00</p>
          <img src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}.png`} alt="weather" />
          <p>{hour.temp}°C</p>
        </div>
      ))}
    </div>
  );
  
  export default HourlyForecast;
  
