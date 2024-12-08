import React from 'react'

const TimeandLocation = ({weather}) => {
    const name = weather?.name || "Search to see"; // Default to "Delhi" if weather.name is undefined
  const country = weather?.country || "real Weather report";
  const dt = weather?.dt || Math.floor(new Date().getTime() / 1000);
  const date = dt ? new Date(dt * 1000) : new Date();
  const formattedDate = date.toDateString();
  console.log(formattedDate);
  return (
    <div>
        <div className='flex items-center justify-center '>
            <p className='text-xl font-extralight'>
            {formattedDate} | Local time: {new Date().toLocaleTimeString()}
            </p>
        </div>

        <div className='flex items-center justify-center mt-3 mb-0'>
            <p className='text-3xl font-medium -mb-10'>
                {`${name},${country}`}
                {/* Delhi, IN */}
            </p>
        </div>
    </div>
  )
}

export default TimeandLocation