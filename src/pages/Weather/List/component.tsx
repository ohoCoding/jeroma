import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { MouseEvent, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { weatherModel } from "../../../models/weatherModel";

type props = {
  items: weatherModel[]
}

// type ListDataType = {
//   location: {
//     name: string;
//     country: string;
//   },
//   current: {
//     temp_c: number;
//     condition: {
//       text: string;
//       icon: string;
//       code: number;
//     }
//   }
// }

const WeatherMainList = ({ items }: props) => {
  const [listData, setListData] = useState<weatherModel[]>([]);
  const navigate = useNavigate();

  const onDetail = (row: any) => {
    console.log(row)
    navigate('/weather/detail', { state: items.find(item => item.location.name === row.location.name) })
  }

  useEffect(() => {
    console.log(items);
    setListData(items);
    // setListData(items.map((item): ListDataType => {
    //   return {
    //     location: {
    //       name: item.location.name,
    //       country: item.location.country
    //     },
    //     current: {
    //       temp_c: item.current.temp_c,
    //       condition: {
    //         text: item.current.condition.text,
    //         icon: item.current.condition.icon,
    //         code: item.current.condition.code
    //       }
    //     }
    //   }
    // }))
  }, [items]);

  return (
    <>
      <Grid container spacing={2} borderRadius={100} columns={{ xs: 4, sm: 8, md: 12 }}>
        {listData.map((row, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Card onClick={e => onDetail(row)} sx={{ maxWidth: 250 }} style={{ backgroundColor: '#277d97ad', opacity: '5' }} >
              <CardActionArea>
                <Typography color={"white"} style={{ padding: '10px 10px' }}>
                  {row.location.name}
                </Typography>
                <CardContent
                  style={{ display: 'flex', padding: '0px' }}>
                  <CardMedia
                    style={{ width: '50%' }}
                    component="img"
                    image={row.current.condition.icon} />
                  <Typography color={"white"} style={{ padding: '40px' }}>
                    {row.current.temp_c}&deg;C
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid >
    </>
  )
}
export default WeatherMainList;