'use client'
import React, { useState } from 'react'
import TabComponent from '../components/TabComponent';
import ForecastCard from '../components/ForecastCard';
import styles from '../page.module.css'
import { useRouter } from "next/navigation";
import { useAppSelector, AppDispatch } from '@/redux/store';
import { useDispatch } from 'react-redux';
import { setGeolocation } from '@/redux/features/geolocation-slice';
import { Box, Button, Stack } from '@mui/material';
import InfoAlert from '../components/InfoAlert';

const Forecast = () => {
  const [infoMsg, setInfoMsg] = useState<string>('');
  const forecastData = useAppSelector(state => state.weatherReducer.daily);
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
    function(currPosition){
      dispatch(setGeolocation({ geoLocation: { latitude: currPosition.coords.latitude, longitude: currPosition.coords.longitude }}));
    },
    function(error){
      if(error.code === 1){ // Code 1 error is set when User denied Geolocation
        setInfoMsg("We are showing a default location, please accept the geolocation and click again.");
      }
    })
  };

  return (
   <div>
    {infoMsg && <InfoAlert message={infoMsg}></InfoAlert>}
    <main className={styles.main}>
    <Stack direction="row" spacing={4} sx={{ justifyContent: 'space-between', width: '100%', maxWidth: '1200px' }}>
      <Button  variant='contained' color="secondary" onClick={() => router.push('/')} sx={{ justifySelf: 'right' }}>
        Go Back
      </Button>
      <Button  variant="outlined" color="secondary" onClick={getLocation} sx={{ justifySelf: 'right' }}>
        Click to find your location
      </Button>
    </Stack>
    <TabComponent>
      <Box sx={{ alignItems:'start', justifyContent:'space-evenly' }}>
        {forecastData.slice(0,5).map((forecast, i) =>
          <ForecastCard forecast={forecast} key={i}></ForecastCard>
        )}
      </Box>
    </TabComponent>
    </main>
  </div>
  )
}

export default Forecast