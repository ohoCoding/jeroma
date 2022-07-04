import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { weatherModel } from "../../models/weatherModel";

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

      <Grid container spacing={2}>
        <Grid item xs={5}>
          {listData.map((row, index) => (
            <Card sx={{ maxWidth: 200 }} key={index}>
              <CardActionArea>
                <Typography>
                  {row.location.name}
                </Typography>
                <CardContent>
                  <CardMedia
                    component="img"
                    height="150"
                    image={row.current.condition.icon} />
                  <Typography>
                    {row.current.temp_c}&deg;C
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Grid>
      </Grid >
    </>
  )
}
export default WeatherMainList;