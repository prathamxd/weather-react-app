const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInWeek = new Date().getDay();
  const forecastDays = DAYS.slice(dayInWeek, DAYS.length).concat(
    DAYS.slice(0, dayInWeek)
  );

  const capitalizeFirstLetter = (str) => {
    if (str.length === 0) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="flex flex-wrap md:flex-nowrap w-[90%] md:mt-28 mt-20 mx-auto py-12 px-10 bg-blue-900 bg-opacity-50 rounded-xl text-white">
      {data.list.slice(0, 7).map((item, index) => {
        return (
          <div
            key={index}
            className="flex flex-col space-y-1 w-96 items-center mx-auto py-5 md:py-0"
          >
            <p className="font-semibold text-lg">{forecastDays[index]}</p>
            <img
              src={`icons/${item.weather[0].icon}.svg`}
              alt="weather image"
            />
            <p className="text-lg font-bold">
              {Math.round(item.main.temp_min)}° -{" "}
              {Math.round(item.main.temp_max)}°
            </p>
            <p>{capitalizeFirstLetter(item.weather[0].description)}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Forecast;
