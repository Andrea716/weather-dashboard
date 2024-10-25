import React from 'react';

const Background = ({ weatherData }) => {
  let backgroundClass = "default-beach"; // Default background class

  if (weatherData) {
    const { weather, dt } = weatherData;
    const isNight = new Date(dt * 1000).getHours() < 6 || new Date(dt * 1000).getHours() > 18;
    const weatherCondition = weather[0].main.toLowerCase();

    // Update background based on weather condition
    if (isNight) {
      backgroundClass = "night-beach";
    } else if (weatherCondition === "clear") {
      backgroundClass = "sunny-beach";
    } else if (weatherCondition.includes("rain")) {
      backgroundClass = "rainy-beach";
    } else if (weatherCondition.includes("cloud")) {
      backgroundClass = "cloudy-beach";
    }
  }

  return <div className={`${backgroundClass} fixed inset-0 bg-cover bg-center transition-all duration-500`}></div>;
};

export default Background;
