"use client";
import styles from './page.module.css'
import { Dispatch, SetStateAction, useCallback, useState } from 'react';
import { useRouter } from "next/navigation";
import InfoAlert from './components/InfoAlert';
import WeatherCard from './components/WeatherCard';
import { CurrentWeather } from './components/WeatherCard';
import { Forecast } from './components/ForecastCard';
import { Button, Stack } from '@mui/material';
import { Position } from './components/DashboardLayout';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { setGeolocation } from '@/redux/features/geolocation-slice';
interface WeatherData {
  current: CurrentWeather,
  daily: Forecast[]
}

export default function Home() {
  const [infoMsg, setInfoMsg] = useState<string>('');
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const getLocation = useCallback(() => {
    navigator.geolocation.getCurrentPosition(
    function(currPosition){
      dispatch(setGeolocation({ geoLocation: { latitude: currPosition.coords.latitude, longitude: currPosition.coords.longitude }}))
    },
    function(error){
      if(error.code === 1){ // Code 1 error is set when User denied Geolocation
        setInfoMsg("We are showing a default location, please accept the geolocation and click again.");
      }
    })
  }, []);

  return (
    <div>
      {infoMsg && <InfoAlert message={infoMsg}></InfoAlert>}
      <main className={styles.main}>
      <Stack direction="row" spacing={4} sx={{ justifyContent: 'space-between', width: '100%', maxWidth: '1200px' }}>
          <Button  variant='contained' color="secondary" onClick={() => router.push('/forecast')} sx={{ justifySelf: 'right' }}>
            FORECAST
          </Button>
          <Button  variant="outlined" color="secondary" onClick={getLocation} sx={{ justifySelf: 'right' }}>
            Click to find your location
          </Button>
        </Stack>
        <WeatherCard />
      </main>
    </div>
  )
}
