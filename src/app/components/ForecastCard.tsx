import * as React from 'react';
import {Box} from '@mui/material';

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { IWeatherBg, weatherBg } from '@/utils/colorSchema';

interface ForcastCardProps {
  forecast: Forecast
}

export interface Forecast {
  dt:         number;
  main:       Main;
  weather:    Weather[];
  wind:       Wind;
  visibility: number;
  pop:        number;
  sys:        Sys;
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

export interface Sys {
  pod: string;
}

interface Weather {
  id:          number;
  main:        string;
  description: string;
  icon:        string;
}

export interface Wind {
  speed: number;
  deg:   number;
  gust:  number;
}


export default function ForecastCard({forecast}:ForcastCardProps) {
  const forecastDate = new Date(forecast.dt * 1000);
  const tempMax = Math.round(forecast.main.temp_max);
  const bg = weatherBg[forecast.weather[0].main as keyof IWeatherBg];
  return (
    <Box 
      pt={2}
      pb={2}
      mt={2}
      mb={2}
      paddingInline={1}
      borderRadius={'0.5rem'}
      sx={{display: 'flex', justifyContent:'space-between', alignItems:'flex-end', background: `linear-gradient(${bg})`}}
      maxWidth={1200}
      width={'100%'}
      boxShadow={'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;'}
    >
      <Box>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} pl={1}>
          <Avatar
            variant="rounded"
            sx={{ bgcolor: '#ffffff', width: 70, height: 70 }}
            alt={forecast.weather[0].main}
            src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@4x.png`}
          >
            {forecast && forecast.weather[0].main}
          </Avatar>
          <Stack direction="column" spacing={1} pl={1}>
            <strong>{forecast ? forecast.weather[0].main : 'No forecast info available'}</strong>
            {forecastDate && <small>Forecast for: {forecastDate && forecastDate.toDateString()}</small>}
            {forecast && <p>Max: {tempMax}°C - Min: {forecast && forecast.main.temp_min}°C</p>}
          </Stack>
          {forecast && <p><strong>Summary: </strong><br/>{forecast.weather[0].description}</p>}
        </Stack>
      </Box>
    </Box>
  );
}
