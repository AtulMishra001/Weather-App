import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { FaThermometerEmpty } from "react-icons/fa";
import { FiWind } from "react-icons/fi";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { BiSolidDropletHalf } from "react-icons/bi";



const TempAndDetails = ({data}) => {

// console.log(data?.updatedsunrise)
  const verticalDetails = [
    {
      id: 1,
      Icon: FaThermometerEmpty,
      tital: "Real Feel",
      value: data?.feels_like || 15,
    },

    {
      id: 2,
      Icon: BiSolidDropletHalf,
      tital: "Humidity",
      value: `${data?.humidity} %` || 15,
    },

    {
      id: 3,
      Icon: FiWind,
      tital: "Wind",
      value: `${data?.speed} m/sec` || "waiting",
    },
  ];

  const horizontalDetails = [
    {
      id: 1,
      Icon: GiSunrise,
      tital: "Sunrise",
      value: data?.updatedsunrise || "6:43 AM",
    },

    {
      id: 2,
      Icon: GiSunset,
      tital: "Sunset",
      value: data?.updatedsunset || "5:23 PM",
    },

    {
      id: 3,
      Icon: MdKeyboardArrowUp,
      tital: "High",
      value: `${Math.round(data?.temp_max || 15)}˚`,
    },

    {
      id: 4,
      Icon: MdKeyboardArrowDown,
      tital: "Low",
      value: `${Math.round(data?.temp_min || 15)}˚`,
    },
  ];
  // console.log(data);
  const skyMood = data?.main || "waiting";
  const temperature = data?.temp || 15;
  const icon = data?.icon || "01d";
  const iconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`

  return (
    <>
      <div className="flex items-center justify-center mt-6 pt-6 text-xl text-cyan-300">
        <p className="">{skyMood}</p>
      </div>
      <div className="flex justify-between items-center w-full ">
        <img src={iconURL} alt="" />
        <p className="text-5xl opacity-80 ">{`${Math.round(temperature)}˚`}</p>
        <div className="flex flex-col items-start space-y-3">
          {verticalDetails.map(({ id, Icon, tital, value }) => (
            <div key={id} className="flex font-light text-sm items-center justify-center">
              <Icon className="mr-1" size={18} /> {tital}
              <span className="font-medium ml-1"> {value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex felx-row items-center justify-center space-x-10 text-sm py-3">
          {horizontalDetails.map(({id,tital,value,Icon})=>(
           
            <div key={id} className="flex flex-row items-center">
              <Icon size={30} className=""/><p className="font-light ml-1">{tital}
              <span className="font-medium ml-1"> {value}</span></p>
            </div>
          ))}

        </div>
    </>
  );
};

export default TempAndDetails;