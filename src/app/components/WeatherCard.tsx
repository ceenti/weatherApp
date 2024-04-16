import * as React from 'react';
import { Card, CardActionArea, CardContent, Skeleton, Typography } from '@mui/material';
import { createTheme } from '@mui/system';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { IWeatherBg, mainWeatherBg } from '@/utils/colorSchema';
import LoadingSkeleton from './LoadingSkeleton'

import { useAppSelector } from '../../redux/store';

export interface Weather {
  id:          number;
  main:        string;
  description: string;
  icon:        string;
}

export interface CurrentWeather {
  dt:         number;
  main:       Main;
  weather:    Weather[];
  visibility: number;
  pop:        number;
  dt_txt:     string;
}
export interface Main {
  temp:       number;
  feels_like: number;
  temp_min:   number;
  temp_max:   number;
  pressure:   number;
  sea_level:  number;
  grnd_level: number;
  humidity:   number;
  temp_kf:    number;
}

export default function WeatherCard() {
  const currentWeather = useAppSelector((state) => state.weatherReducer.current);
  const city = useAppSelector((state)=> state.weatherReducer.city)
  if(!currentWeather || !city) return <LoadingSkeleton/>;

  const today = new Date(currentWeather.dt * 1000);
  const bg:string = mainWeatherBg[currentWeather.weather[0].main as keyof IWeatherBg];

  console.log('city',city);

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
      backgroundRepeat: 'none',
      maxWidth: 1200,
      height: 1200,
    }}
    >
      <CardActionArea sx={{ p: 2 }} onClick={() => {}}>
        <CardContent sx={{ p: 2 }}>  
          <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
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
              <Typography gutterBottom variant="h2" component="div">{currentWeather && currentWeather.weather[0].main}: { currentWeather && currentWeather?.main.temp && Math.round(currentWeather?.main.temp)}°C</Typography>
            </Stack>
            <Stack direction="column">
            <Typography variant="h5" component="div">Region:</Typography>
              <Typography gutterBottom variant="h3" component="div">{city && city.name && city['name']}, {city && city.country && city['country']}</Typography>
            </Stack>
          </Stack>
          <Stack direction={{ xs: "column" }} spacing={3}>
            <Typography variant="h4" component="div">Weather conditions</Typography>
            <p>
              <Typography gutterBottom variant="h5" component="div">Feels like {Math.round(currentWeather.main.feels_like)}°C</Typography>
            </p>
            <p>
              <Typography gutterBottom variant="h5" component="div">Max: {Math.round(currentWeather.main.temp_max)}°C - Min: {Math.round(currentWeather.main.temp_min)}°C</Typography>
            </p>
            <p>
              <Typography gutterBottom variant="h5" component="div">Humidity {currentWeather.main.humidity}%</Typography>
            </p>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
