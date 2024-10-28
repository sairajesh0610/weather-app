import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import Spinner from "../components/Spinner/Spinner";
import { fetchWeatherHistory} from '../services/weather';

const History = () => {
  const weather = useSelector((state) => state.weather);
  const [history, setHistory] = useState([]);
  const [loader, setLoader] = useState(true);
  
  useEffect(()=>{
    if(weather){
      fetchWeatherHistory(weather?.lat, weather?.lon).then(data =>{
        if(data && data.data.length !==0){
          setHistory(data.data);
          setLoader(false);
        }else{
          setLoader(false);
        }
      }).catch(()=>  setLoader(false))
    }
    
  },[weather])
  
  return (
    <div className="h-screen w-full bg-gradient-to-br from-sky-100 to-sky-500 flex justify-center">
      {loader && <Spinner />}
      <div className="mt-12 md:w-3/5 w-full">
        <div className="text-slate-600 font-semibold text-3xl mb-4">
          History
        </div>
        <div className="h-auto w-full bg-white rounded-2xl md:p-8 p-3 mt-6">
          <ResponsiveContainer width="100%" height={350}>
          <LineChart width={800} height={350} data={history}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="datetime" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="max_temp" name="Max" stroke="red" />
            <Line type="monotone" dataKey="min_temp" name="Min" stroke="green" />
          </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default History;
