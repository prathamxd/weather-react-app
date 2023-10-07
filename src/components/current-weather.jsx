import { FaTemperatureHalf } from "react-icons/fa6";
import { PiDropBold } from "react-icons/pi";
import { BsWind } from "react-icons/bs";

const CurrentWeather = ({ data }) => {

  const capitalizeFirstLetter = (str) => {
    if (str.length === 0) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="flex md:flex-row flex-col-reverse items-center justify-between mx-auto mt-20 w-[82%] text-white">
      <h1 className="absolute md:top-7 top-24 md:left-36 left-36 md:text-3xl text-2xl  font-semibold">
        {data.city}
      </h1>
      <div className=" flex items-end md:mt-0 mt-7 ">
        <p className="md:text-9xl text-8xl">{Math.round(data.main.temp)}</p>
        <div className="mx-5 mb-2 text-xl font-semibold">
          <p>°C</p>
          <p className="ml-2 mt-1">
            {capitalizeFirstLetter(data.weather[0].description)}
          </p>
        </div>
      </div>

      <div className="flex md:flex-row flex-col ml-10 md:ml-0 items-center space-x-2 mr-10">
        <img
          src={`icons/${data.weather[0].icon}.svg`}
          alt="weather image"
          className="md:w-52 w-44 md:h-52 h-44"
        />
        <div className="flex md:flex-col mt-1 md:mt-5 w-80 md:w-auto md:text-lg text-sm space-y-1 font-semibold">
          <div className="flex md:items-center items-start space-x-2 mt-1 md:mt-0">
            <FaTemperatureHalf size={20} />
            <p>Feels like: {Math.round(data.main.feels_like)}°</p>
          </div>
          <div className="flex md:items-center items-start space-x-2">
            <PiDropBold size={20} />
            <p>Humidity: {data.main.humidity}%</p>
          </div>
          <div className="flex md:items-center items-start space-x-2">
            <BsWind size={20} />
            <p>Wind: {Math.round(data.wind.speed)} m/s</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
