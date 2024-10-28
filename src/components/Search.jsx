import React, { useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useDispatch } from "react-redux";
import { setWeatherData } from "../store/reducers/weatherSlice";
import {setSpinner} from "../store/reducers/spinnerSlice";
import { fetchLocations } from "../services/locationSuggestions";
import { fetchCurrentWeather } from "../services/weather";

const Search = () => {
  const dispatch = useDispatch();
  const [suggestions, setSuggestions] = useState([]);

  const handleOnSearch = (string, results) => {
    fetchLocations(string)
      .then((result) => {
        if (result && result.length !== 0) {
          let address = result.features.map((item) => item.properties);
          setSuggestions(address);
        }
      })
      .catch((error) => console.log("error", error));
  };

  const handleOnSelect = (item) => {
    // the item selected
    dispatch(setSpinner({spinner:true}))
    fetchCurrentWeather(item.lat, item.lon).then((result) => {
      if (result) {
        dispatch(
          setWeatherData({
            ...result,
          })
        );
        dispatch(setSpinner({spinner:false}))
      }
    });
  };

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>
          {item.address_line1}
        </span>
      </>
    );
  };

  return (
    <div>
      <ReactSearchAutocomplete
        items={suggestions}
        onSearch={handleOnSearch}
        onSelect={handleOnSelect}
        fuseOptions={{ keys: ["address_line1"] }}
        resultStringKeyName="address_line1"
        autoFocus
        placeholder="Search for a location"
        formatResult={formatResult}
      />
    </div>
  );
};

export default Search;
