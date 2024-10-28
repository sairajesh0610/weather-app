import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ReactComponent as HighIcon } from "../assets/high-icon.svg";
import { ReactComponent as HumidityIcon } from "../assets/humidity-icon.svg";
import { ReactComponent as LowIcon } from "../assets/low-icon.svg";
import { ReactComponent as PressureIcon } from "../assets/pressure-icon.svg";
import { ReactComponent as WindIcon } from "../assets/wind-icon.svg";
import { ReactComponent as HistoryIcon } from "../assets/history.svg";

import WeatherIcon from "./WeatherIcon";

const CurrentWeather = () => {
  const navigate = useNavigate();
  const weather = useSelector((state) => state.weather);

  return (
    <div className="md:h-80 h-auto w-full bg-white rounded-2xl p-8 mt-6">
      <div className="flex justify-between items-center mb-4">
        <div className="text-gray-500 font-medium text-lg">Current Weather</div>
        <button onClick={() => navigate("/history")}>
          <HistoryIcon />
        </button>
      </div>
      <div className="flex md:flex-row flex-col justify-center items-start">
        <div className="md:basis-1/2 basis-1 p-4">
          <h4 className="text-sky-700 font-bold text-xl capitalize">
            {weather?.current?.weather[0].main}
          </h4>
          <div className="flex flex-row items-center mt-6">
            <WeatherIcon code={weather?.current?.weather[0].id} big />
            <div className="text-8xl ml-3 font-normal text-sky-700">
              <span>{weather?.current?.temp.toFixed()}</span>
              <sup>&deg;</sup>
            </div>
          </div>
          <h6 className="text-2xl font-semibold text-slate-400 mt-4 capitalize">
            {weather?.current?.weather[0].description}
          </h6>
        </div>
        <div className="md:basis-1/2 basis-1">
          <div className="text-xl text-slate-500 mb-4">
            Feels like {weather?.current?.feels_like.toFixed()}&deg;
          </div>
          <div className="flex flex-row items-center">
            <div className="flex flex-row items-center mr-10">
              <HighIcon className="fill-slate-400 h-10" />
              <span className="text-lg text-sky-700 ml-2 font-medium">
                {weather?.current?.temp.toFixed()}&deg;
              </span>
            </div>
            <div className="flex flex-row items-center">
              <LowIcon className="fill-slate-400 h-10" />
              <span className="text-lg text-sky-700 ml-2 font-medium">
                {weather?.current?.dew_point.toFixed()}&deg;
              </span>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <HumidityIcon className="fill-slate-400 h-10" />
            <div className="text-lg w-24 ml-3 text-slate-400">Humidity</div>
            <span className="text-lg text-sky-700 font-medium">
              {weather.current?.humidity}%
            </span>
          </div>
          <div className="flex flex-row items-center">
            <WindIcon className="fill-slate-400 h-10" />
            <div className="text-lg w-24 ml-3 text-slate-400">Wind</div>
            <span className="text-lg text-sky-700 font-medium">
              {weather.current?.wind_speed}mph
            </span>
          </div>
          <div className="flex flex-row items-center">
            <PressureIcon className="fill-slate-400 h-10" />
            <div className="text-lg w-24 ml-3 text-slate-400">Pressure</div>
            <span className="text-lg text-sky-700 font-medium">
              {weather.current?.pressure}hPa
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
