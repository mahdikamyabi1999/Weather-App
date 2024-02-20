import { useState } from "react";
import "./App.css";
import axios from "axios";
import Weather from "./components/Weather";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const API_KEY = '1ac5fc8b0c6716a702e32ccf86a5b5eb';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;

  const searchLoction = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((res) => {
        setData(res.data);
        console.log(res.data);
      });
      setLocation("");
    }
  };
  return (
    <div className="w-full h-full relative">
      <div className="flex justify-center"><img src='/public/cloudy.png' alt="weather" className="w-32 mb-12" /></div>
      <h1 className=" text-6xl text-[#F9F871]">WEATHER APP</h1>
      <p className="text-white text-xl mt-10 mb-5">Enter the City and click Enter</p>
      <div className="text-center p-4">
        <input
          type="text"
          className="py-3 px-6 w-[700px] text-lg rounded-3xl border border-gray-200 text-gray-600 placeholder:text-gray-400 focus:outline-none bg-white-600/100 shadow-md"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyDownCapture={searchLoction}
        />
        
      </div>
      <Weather weatherData={data}/>
    </div>
  );
}

export default App;
