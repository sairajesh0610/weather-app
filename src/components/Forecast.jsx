import React, { useEffect, useState } from "react";
import WeatherIcon from "./WeatherIcon";
import { useSelector } from "react-redux";
import { getShortDayFromTimestamp } from "../utils/utils";

const Forecast = () => {
  const weather = useSelector((state) => state.weather);
 
  return (
    <div className="h-60 w-full bg-white rounded-2xl p-8 mt-6">
      <div className="text-gray-500 font-semibold text-lg">
        Extended Forecast
      </div>
      <div className="flex flex-row mt-3  justify-between overflow-x-auto">
        {Object.keys(weather).length !== 0 &&
          weather.daily.map((item) => (
            <div className="flex flex-col mr-8">
              <div className="text-lg text-sky-600 font-semibold mb-3">{getShortDayFromTimestamp(item?.dt)}</div>
              <WeatherIcon code={item?.weather[0].id} />
              <p className="text-lg text-sky-700 font-medium mt-3">{item?.weather[0].main}</p>
              <div className="flex flex-row text-lg text-slate-500">
                <div >{item?.temp?.max.toFixed()}&deg;</div>
                <small >/</small>
                <div>{item?.temp?.min.toFixed()}&deg;</div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Forecast;
