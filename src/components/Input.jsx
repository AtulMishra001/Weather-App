import { BiSearch, BiCurrentLocation } from "react-icons/bi";
import React from "react";
import { useState } from "react";
import { fetchData } from "../services/service";

const Input = ({setWeatherData, setUnit}) => {
  const [inputValue, setInputValue] = useState('');

  const handleSearch = async () => {
    if (inputValue.trim()) {
      const weatherData = await fetchData(inputValue);
      setWeatherData(weatherData);
      setInputValue(''); // Clear the input after fetching
    }
  };

  const handleKeyDown = async (event) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  };

  const getlocation= async ()=> {
    async function gotcordinates(position) {
    let reverseGeoCodingURL = `https://api.geoapify.com/v1/geocode/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&apiKey=05843a77fdab406f879dc3867e97c9a9`
    const reverseGeoCodingData = await (await fetch(reverseGeoCodingURL)).json();
    const cityName = reverseGeoCodingData.features[0].properties.city;
    const weatherData = await fetchData(cityName);
      setWeatherData(weatherData);
    }

    function failedLocation() {
      console.log('there was some Issue');
    }
    navigator.geolocation.getCurrentPosition(gotcordinates,failedLocation)
  }
  return (
    <div className="input-wrapper w-[90%] m-auto flex flex-row  items-center justify-between space-x-3 ">
      <div className="w-3/4 h-[5vh]  flex flex-row  items-center space-x-3 ">
      <input
        id="search"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="search by city..."
        className="w-[80%] h-full p-3 focus: outline-none text-gray-400 capitalize placeholder:lowercase rounded-3xl"
      />
      <BiSearch
        size={30}
        className="cursor-pointer hover:scale-125 transition ease-out"
        onClick={handleSearch}
      />
      <BiCurrentLocation
        size={30}
        className="cursor-pointer hover:scale-125 transition ease-out"
        onClick={getlocation}
      />
      </div>

      <div className=" flex w-20 space-x-2 ">
      <button 
      className="text-xl hover:scale-125 transition ease-out cursor-default"
      onClick={()=> setUnit('C')}        
      >°C</button>
      <p className="text-xl">|</p>
      <button 
      className="text-xl hover:scale-125 transition ease-out cursor-default"
      onClick={()=> setUnit('F')}
      >F°</button>
      </div>
    </div>
  );
};

export default Input;