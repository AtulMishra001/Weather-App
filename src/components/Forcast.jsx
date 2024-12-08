import React from 'react'

const Forcast = ({weatherdata}) => {
    const data = weatherdata?.forcast || [1,2,3,4,5];
    const icon = weatherdata?.icon || "01d"
    const temp = weatherdata?.temp || 15;
    
    function iconURL(icon) {
        const iconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        return iconURL;
    }
    console.log(weatherdata)
  return (
    <div>
        <div className='flex items-center justify-start '></div>
        <p className='font-medium uppercase'>3 Hour step Forcast</p>
        <hr className='my-3 font-light'/>
        <div className='flex item-center justify-between'>
            {
                data.map((data,index)=>(
                    <div key={data} className='flex flex-col items-center justify-center'>
                        <p className='font-lite text-sm'>{data?.main || "Sun"}</p>
                        <img src={iconURL(data?.icon || icon)} 
                        alt="weather-icon" 
                        className='my-1 w-12'/>
                        <p className='font-medium'>{Math.round(data?.temp || temp)}°</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Forcast