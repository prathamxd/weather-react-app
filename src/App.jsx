import { useState } from "react";
import CurrentWeather from "./components/current-weather";
import Search from "./components/search";
import Forecast from "./components/forecast";
import bgImage from "/images/background-day.png";

const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleSearchChange = async (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const apiURL = `${import.meta.env.VITE_SERVER_URL}/api/data?lat=${lat}&lon=${lon}`

    const fetchData = await fetch(apiURL)
    const fetchDataJSON = await fetchData.json()

    

    setCurrentWeather({city: searchData.label, ...fetchDataJSON.currentWeatherData})
    setForecast({city: searchData.label, list: fetchDataJSON.forecastData.list})
    
  };

  // console.log(currentWeather);
  // console.log(forecast);

  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="bg-cover bg-center min-h-screen"
    >
      <Search onSearchChange={handleSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
};

export default App;
