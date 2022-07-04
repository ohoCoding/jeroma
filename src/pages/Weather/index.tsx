import { TextField } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { weatherModel } from "../../models/weatherModel";
import WeatherMainList from "./component";


const WeatherMainPage = () => {
  const [input, setInput] = useState<string>('');
  const [weather, setWeather] = useState<weatherModel[]>([]);
  const location = useState<Array<string>>(["Incheon", "Seoul"]);
  // const city = ['Seoul', 'Incheon'];
  const weatherApiKey = "4c691f9812474151a1b43106220407";

  const changeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  async function getData(region: string) {
    try {
      const response = await axios.get('http://api.weatherapi.com/v1/current.json?key='
        + weatherApiKey + '&q=' + region + '&aqi=no');
      console.log(response.data);
      setWeather(weather.concat(response.data));
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    location[0].forEach((region) => {
      console.log(region);
      getData(region);
    })
    // location[0].forEach((region) => console.log(region));
    // console.log(location);  // location = useState(...)
    // console.log(input);       // input = useState(...)[0]
    // city.forEach((city) => console.log(city));
  }, []);

  return (
    <>
      <TextField
        value={input}
        onChange={changeSearch}
        placeholder="Search for city weather"
      >
      </TextField>
      <WeatherMainList items={weather} />
    </>

  )

}

export default WeatherMainPage;