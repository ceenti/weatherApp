"use client";
import styles from './page.module.css'
import { useCallback, useEffect, useState } from 'react';
import ForecastCard from './components/ForecastCard';
import InfoAlert from './components/InfoAlert';
import WeatherCard from './components/WeatherCard';
import { CurrentWeather } from './components/WeatherCard';
import { Forecast } from './components/ForecastCard';
import TabComponent from './components/TabComponent';
import { useDispatch } from 'react-redux';
import { Stack, Button } from '@mui/material';
import useSWR from 'swr'
import { fetcher } from '@/utils/fetch';
import { Box } from '@mui/material';
import LoadingSkeleton from './components/LoadingSkeleton'

import { setWeather } from '@/redux/features/weather-slice';
import { AppDispatch, useAppSelector } from '@/redux/store';
interface WeatherData {
  current: CurrentWeather,
  daily: Forecast[]
}

export default function Home() {
  const [position, setPosition] = useState({latitude: 19.432608, longitude: -9.133209})
  const [infoMsg, setInfoMsg] = useState<string>('');
  const forecastData = useAppSelector(state => state.weatherReducer.daily);
  const locationData = useAppSelector(state => state.locationReducer);
  const dispatch = useDispatch<AppDispatch>();
  
  const { data, error, isLoading } = useSWR(`api/weather?lat=${position.latitude}&long=${position.longitude}`, fetcher)
  console.log("DATA Current", data);
  
  useEffect(() => {
    if(locationData.selectedLocation?.name) {
      setPosition({
        latitude: locationData.selectedLocation.latitude,
        longitude: locationData.selectedLocation.longitude,
      });
      setInfoMsg("");
    }
  }, [locationData])
  
  useEffect(() => {
    if(data && data.info.cod === "200") {
      dispatch(setWeather({current: data.info.list[0], daily: data.info.list.slice(1,6), city: data.info.city}));
      setInfoMsg("");
    }
  }, [data]);

  const getLocation = useCallback(() => {
      navigator.geolocation.getCurrentPosition(
      function(currPosition){
        setPosition({latitude: currPosition.coords.latitude, longitude: currPosition.coords.longitude})
      },
      function(error){
        if(error.code === 1){ // Code 1 error is set when User denied Geolocation
          setInfoMsg("We are showing a default location, please accept the geolocation and click again.");
        }
      })
  }, []);

  return (
    isLoading ? 
     <LoadingSkeleton/>
    : (
    <div>
      {error && <InfoAlert message={"Please try again later"} severity={"warning"}></InfoAlert>}
      {infoMsg && <InfoAlert message={infoMsg} severity={"error"}></InfoAlert>}
      <main className={styles.main}>
      <Stack direction="row" spacing={4} sx={{ justifyContent: 'space-between', width: '100%', maxWidth: '1200px' }}>
        <Button  variant='contained' color="secondary" onClick={()=>{}} sx={{ justifySelf: 'right' }}>
          FORECAST
        </Button>
        <Button  variant="outlined" color="secondary" onClick={getLocation} sx={{ justifySelf: 'right' }}>
          Click to find your location
        </Button>
      </Stack>
        <WeatherCard />
      </main>
    </div>)
    )
}
