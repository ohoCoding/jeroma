import { Box, TextField } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { weatherModel } from "../../../models/weatherModel";
import WeatherMainList from "./component";


const WeatherMainPage = () => {
  const [input, setInput] = useState<string>('');
  const [weather, setWeather] = useState<weatherModel[]>([]);
  // const location = useState<Array<string>>(["Incheon", "Seoul"]);
  const city = ['Seoul', 'Incheon', 'Daejeon', 'Mokpo', 'Gwangju',
    'Gangneung', 'Daegu', 'Busan', 'Jeju'];
  const weatherApiKey = "4c691f9812474151a1b43106220407";

  const changeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  // async function getData(region: string) {
  //   try {
  //     const response = await axios.get('http://api.weatherapi.com/v1/current.json?key='
  //       + weatherApiKey + '&q=' + region + '&aqi=no');
  //     console.log(response.data);
  //     setWeather([response.data]);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  const getData = async () => {
    // location[0].forEach(async (region) => {
    //   try {
    //     const response = await axios.get('http://api.weatherapi.com/v1/current.json?key='
    //       + weatherApiKey + '&q=' + region + '&aqi=no');
    //     console.log(response.data);
    //     setWeather([response.data]);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // })
    let tempWeatherList: Array<weatherModel> = [];
    await Promise.all(
      city.map(async (region: string, index: number): Promise<void> => {
        const response = await axios.get('http://api.weatherapi.com/v1/current.json?key='
          + weatherApiKey + '&q=' + region + '&aqi=no');
        console.log(`index: ${index}`, response.data);
        tempWeatherList.push(response.data);
        setWeather(tempWeatherList)
        // setWeather(weather.concat(response.data));
      })
    )
  }

  useEffect(() => {
    // location[0].forEach((region) => {
    //   console.log(region);
    //   getData(region);
    // })
    getData()
    // location[0].forEach((region) => console.log(region));
    // console.log(location);  // location = useState(...)
    // console.log(input);       // input = useState(...)[0]
    // city.forEach((city) => console.log(city));
  }, []);

  return (
    <Box style={{
      lineHeight: '5',
    }}>
      <TextField
        id="standard-basic"
        label="Search for city weather"
        variant="standard"
        value={input}
        onChange={changeSearch}
        style={{ alignItems: 'center' }}
      >
      </TextField>
      <WeatherMainList items={weather} />
    </Box >

  )

}

export default WeatherMainPage;