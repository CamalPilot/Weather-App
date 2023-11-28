import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";
import Days from "./Days";

import Heading from "./Heading";
import Input from "./Input";
import TemperatureConverter from "./TemperatureConverter";
import WeatherBoard from "./WeatherBoard";
import axios from "axios";
import cloud from "./assets/cloud.svg";
import rain from "./assets/thunderstorm.svg";
import sunny from "./assets/sunny.svg";
import drizzle from "./assets/drizzle.svg";

function App() {
  const [data, setData] = useState({});

  const [name, setName] = useState("");
  const [searchHistory, setSearchHistory] = useState(localStorage.getItem('searchHistory')?JSON.parse(localStorage.getItem('searchHistory')):[]);
  const [unit, setUnit] = useState("celsius");
  
  const imgObj = {
    drizzle: "Drizzle",
    sunny: "Clear",
    rain: "Rain",
    cloud: "Cloud"
  }

  const getData = async (url) => {
    const res = await fetch(url)
    return await res.json()
  }

  useEffect(() => {
    getData(`https://api.openweathermap.org/data/2.5/weather?q=${searchHistory[0].name}&appid=8d348a62ee12b2bb05648ea0a4a52078`).then(res =>{
      setData({
        celcius: res.main.temp,
        name: res.name,
        humidity: res.main.humidity,
        speed: res.wind.speed,
        // image: imagePath,
        image: imgObj[res.main],
        id:  res.id,
      })
    })
  }, [])

  const handleSearch = (cityName) => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=8d348a62ee12b2bb05648ea0a4a52078`;
    axios
      .get(apiUrl)
      .then((res) => {
        let imagePath = cloud;
        switch (res.data.weather[0].main) {
          case "Clouds":
            imagePath = cloud;
            break;
          case "Rain":
            imagePath = rain;
            break;
          case "Clear":
            imagePath = sunny;
            break;
          case "Drizzle":
            imagePath = drizzle;
            break;
          default:
            imagePath = cloud;
        }

        const newCityId = res.data.id;

        const idExists = searchHistory.find((cityData) => cityData.id === newCityId);

        const newData = {
          celcius: res.data.main.temp,
          name: res.data.name,
          humidity: res.data.main.humidity,
          speed: res.data.wind.speed,
          image: imagePath,
          id:  res.data.id,
        };
        setData(newData);
        
        if(!idExists) {
          const newHistory = [newData, ...searchHistory.slice(0, 4)];
          setSearchHistory(newHistory);
          localStorage.setItem('searchHistory', JSON.stringify(newHistory))
        } else {
          return newHistory
        }

        
        console.log(searchHistory);
      })
      .catch((err) => console.log(err));
  };
  const handleClick = () => {
    if (name !== "") {
      handleSearch(name);
    }
    console.log(searchHistory);
  };

  const handleUnitToggle = () => {
    setUnit(unit === "celsius" ? "fahrenheit" : "celsius");
  };

  return (
    <>
      <Heading />
      <TemperatureConverter handleUnitToggle={handleUnitToggle} />
      <div className="section">
        <Days />
        <Input
          onClick={handleClick}
          onChange={(e) => setName(e.target.value)}
        />
        <WeatherBoard
          unit={unit}
          celcius={data?.celcius}
          name={data?.name}
          humidity={data?.humidity}
          speed={data?.speed}
          image={data?.image}
        />
      </div>
      <Card
        newHistory={searchHistory}
        cityName={data.name}
        temperature={data.celcius}
        image={data.image}
      />
      <div>
        {searchHistory.length
          ? searchHistory?.map((cityData, index) => (
              <Card
                key={index}
                city={cityData?.name}
                temperature={cityData?.celcius}
                image={cityData?.image}
                onClick={() => handleClick(cityData?.name)}
              />
            ))
          : null}
      </div>
    </>
  );
}

export default App;
