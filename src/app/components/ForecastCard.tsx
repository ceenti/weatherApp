import * as React from 'react';
import FilterDramaOutlinedIcon from '@mui/icons-material/FilterDramaOutlined';
import {Box} from '@mui/material';

import { Weather } from './WeatherCard';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { IWeatherBg, weatherBg } from '@/utils/colorSchema';

export interface Forecast {
  dt:         number;
  sunrise:    number;
  sunset:     number;
  moonrise:   number;
  moonset:    number;
  moon_phase: number;
  summary:    string;
  temp:       Temp;
  feels_like: FeelsLike;
  pressure:   number;
  humidity:   number;
  dew_point:  number;
  wind_speed: number;
  wind_deg:   number;
  wind_gust:  number;
  weather:    Weather[];
  clouds:     number;
  pop:        number;
  uvi:        number;
}

export interface FeelsLike {
  day:   number;
  night: number;
  eve:   number;
  morn:  number;
}

export interface Temp {
  day:   number;
  min:   number;
  max:   number;
  night: number;
  eve:   number;
  morn:  number;
}

interface ForcastCardProps {
  forecast: Forecast
}

export default function ForecastCard({forecast}:ForcastCardProps) {
  const forecastDate = new Date(forecast.dt * 1000);
  const tempMax = Math.round(forecast.temp.max);
  const bg = weatherBg[forecast.weather[0].main as keyof IWeatherBg];
  return (
    <Box 
      pt={2}
      pb={2}
      mt={2}
      mb={2}
      borderRadius={'0.5rem'}
      sx={{background: `linear-gradient(${bg})`}}
    >
      <Box>
        <Stack direction="row" spacing={2} pl={1}>
          <Avatar
            variant="rounded"
            sx={{ bgcolor: '#ffffff', width: 70, height: 70, boxShadow: '1px 1px 2px 1px rgba(0, 0, 0, 0.2)' }}
            alt={forecast.weather[0].main}
            src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@4x.png`}
          >
            {forecast.weather[0].main}
          </Avatar>
          <Stack direction="column" spacing={1} pl={1}>
            <strong>{forecast.weather[0].main}</strong>
            <small>Forecast for: {forecastDate.toDateString()}</small>
            <p>Max: {tempMax}°C - Min: {forecast.temp.min}°C</p>
          </Stack>
          <p><strong>Summary: </strong><br/>{forecast.summary}</p>
        </Stack>
      </Box>
    </Box>
  );
}
