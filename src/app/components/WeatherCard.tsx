import * as React from 'react';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { createTheme } from '@mui/system';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { IWeatherBg, mainWeatherBg } from '@/utils/colorSchema';

import { useAppSelector } from '../../redux/store';

export interface CurrentWeather {
  dt:         number;
  sunrise:    number;
  sunset:     number;
  temp:       number;
  feels_like: number;
  pressure:   number;
  humidity:   number;
  dew_point:  number;
  uvi:        number;
  clouds:     number;
  visibility: number;
  wind_speed: number;
  wind_deg:   number;
  weather:    Weather[];
}

export interface Weather {
  id:          number;
  main:        string;
  description: string;
  icon:        string;
}

const theme = createTheme({
  palette: {
    background: {
      paper: '#fff',
    },
    text: {
      primary: '#173A5E',
      secondary: '#46505A',
    },
    action: {
      active: '#001E3C',
    },
  },
});

export default function WeatherCard() {
  const currentWeather = useAppSelector((state) => state.weatherReducer.current);
  if(!currentWeather) return;

  const today = new Date(currentWeather.dt * 1000);
  const bg:string = mainWeatherBg[currentWeather.weather[0].main as keyof IWeatherBg];

  return (
      <Card 
      sx={{
        width: '100%',
        p: 2,
        borderRadius: 2,
        minWidth: 300,
        boxShadow: 0,
        border: '1 solid #EEEEF0',
        margin: 2,
        background: bg,
        backgroundSize: 'cover',
        backgroundRepeat: 'none'
      }}
      >
        <CardActionArea sx={{ p: 2 }}>
          <CardContent sx={{ p: 2 }}>  
            <Stack direction="row" spacing={3}>
              <Avatar
                variant="rounded"
                sx={{ bgcolor: '#ffffff', width: 100, height: 100, boxShadow: '1px 1px 2px 1px rgba(0, 0, 0, 0.2)' }}
                alt={currentWeather.weather[0].main}
                src={`https://openweathermap.org/img/wn/${currentWeather?.weather[0].icon}@4x.png`}
              >
                {currentWeather?.weather[0].main}
              </Avatar>
              <Stack direction="column" spacing={3}>
                <Typography variant="h5" component="div">{today.toDateString()}</Typography>
                <Typography gutterBottom variant="h2" component="div">{currentWeather.weather[0].main}: {Math.round(currentWeather?.temp)}°C</Typography>
              </Stack>
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
  )
}
