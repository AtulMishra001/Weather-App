import React from 'react'

const Forcast = ({weatherdata}) => {
    const data = [1,2,3,4,5];
    const icon = weatherdata?.icon || "01d"
    const temp = weatherdata?.temp || 15;
    const iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    console.log(weatherdata)
  return (
    <div>
        <div className='flex items-center justify-start '></div>
        <p className='font-medium uppercase'>3 Hour step Forcast</p>
        <hr className='my-1 font-light'/>
        <div className='flex item-center justify-between'>
            {
                data.map((data,index)=>(
                    <div key={data} className='flex flex-col items-center justify-center'>
                        <p className='font-lite text-sm'>Sun</p>
                        <img src={iconURL} 
                        alt="weather-icon" 
                        className='my-1 w-12'/>
                        <p className='font-medium'>{Math.round(temp)}°</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Forcast