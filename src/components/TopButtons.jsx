import React from 'react'
import { fetchData } from '../services/service';

export const TopButtons = ({setWeatherData}) => {
    const cities = [
        {
            id: 1,
            name: "Delhi"
        },

        {
            id: 2,
            name: "Mumbai"
        },

        {
            id: 3,
            name: "London"
        },

        {
            id: 4,
            name: "Tokyo"
        },

        {
            id: 5,
            name: "New york"
        }
     ]
     async function clicked(name) {
        const weatherData = await fetchData(name);
        setWeatherData(weatherData);
     }

  return (
    <div className='flex justify-around items-center'>
        {cities.map((city) => (
            <button key={city.id} 
            onClick={()=> clicked(city.name)}
            className="text-xl hover:bg-gray-700/20 px-3 py-0 rounded-md transition ease-in
            ">{city.name}</button>
        ))}
    </div>
  )
}