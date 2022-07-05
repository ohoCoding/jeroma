import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { weatherModel } from "../../../models/weatherModel";

const WeatherDetailPage = () => {
  const location = useLocation();
  const [data, setData] = useState<weatherModel>({
    location: {
      name: ' ',
      region: ' ',
      country: ' ',
      lat: 0,
      lon: 0,
      tz_id: ' ',
      localtime_epoch: 0,
      localtime: ' ',
    },
    current: {
      last_updated_epoch: 0,
      last_updated: ' ',
      temp_c: 0,
      temp_f: 0,
      is_day: 0,
      condition: {
        text: ' ',
        icon: ' ',
        code: 0,
      },
      wind_mph: 0,
      wind_kph: 0,
      wind_degree: 0,
      wind_dir: ' ',
      pressure_mb: 0,
      pressure_in: 0,
      precip_mm: 0,
      precip_in: 0,
      humidity: 0,
      cloud: 0,
      feelslike_c: 0,
      feelslike_f: 0,
      vis_km: 0,
      vis_miles: 0,
      uv: 0,
      gust_mph: 0,
      gust_kph: 0
    }
  });

  useEffect(() => {
    if (location.state != null) {
      setData(location.state as weatherModel);
    }
  }, [location])

  return (
    <>
      <HeaderWrapper>
        <Header>
          {data.location.localtime}
        </Header>
      </HeaderWrapper>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Box >
            {data.location.name}
          </Box>
        </Grid>
      </Grid>
    </>

  )
}

const HeaderWrapper = styled(Box)(
  () => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  })
)

const Header = styled(Box)(
  () => ({
    display: 'flex',
    alignItems: 'center',
    fontWeight: 400,
    gap: 10,
  })
)


export default WeatherDetailPage;