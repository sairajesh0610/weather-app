import React from "react";
import { useSelector } from "react-redux";
import Search from "../components/Search";
import CurrentWeather from "../components/CurrentWeather";
import Spinner from "../components/Spinner/Spinner";
import Forecast from "../components/Forecast";

const Home = () => {
  const {spinner} = useSelector((state) => state.spinner);
  const weather = useSelector((state) => state.weather);

  return (
    <div className={`w-full bg-gradient-to-br from-sky-100 to-sky-500 flex justify-center align-center ${Object.keys(weather).length === 0 ? 'h-screen' : 'h-full'}`}>
      {spinner && <Spinner/>}
      <div className="mt-12 md:w-3/5 w-full">
        {Object.keys(weather).length === 0 && (
          <div className="mt-10 flex justify-center">
            <img
              src={require("../assets/weather.png")}
              alt="Weather App"
              height={300}
              width={300}
            />
          </div>
        )}
        <div className="text-slate-600 font-semibold text-3xl mb-4">
          Weather
        </div>
        <Search />
        {Object.keys(weather).length !== 0 ? (
          <>
            <CurrentWeather />
            <Forecast />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
