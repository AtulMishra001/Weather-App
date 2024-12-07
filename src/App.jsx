
import './App.css'
import Forcast from './components/Forcast'
import Input from './components/Input'
import TempAndDetails from './components/TempAndDetails'
import TimeandLocation from './components/TimeandLocation'
import { TopButtons } from './components/TopButtons'
import react, { useState } from 'react'
import "./services/service"

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [unit , setUnit] = useState("C");
  // setInterval(()=>{console.log(unit)}, 2000)

  return (
    <>
    <div className="navbar mx-auto mt-5 py-10 px-32 max-w-screen-lg h-auto min-h-[770px] bg-gradient-to-br shadow-xl shadow-gray-400 from-cyan-600  to-blue-700 text-white flex gap-7 flex-col justify-center">
      <div className='flex flex-col gap-6'>
      <TopButtons setWeatherData={setWeatherData}/>
      <Input setWeatherData={setWeatherData} setUnit = {setUnit}/>
      <TimeandLocation weather = {weatherData} unit = {unit}/>
      </div>
      <TempAndDetails data = {weatherData}/>
      <Forcast weatherdata = {weatherData} />
      {/* <Forcast weatherdata = {weatherData}/> */}
    </div>
    </>
  )
}

export default App
