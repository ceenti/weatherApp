"use client";
import Image from 'next/image'
import styles from './page.module.css'
import { useEffect, useState } from 'react';
import ForecastCard from './components/ForecastCard';
import InfoAlert from './components/InfoAlert';
import WeatherCard from './components/WeatherCard';
import { CurrentWeather } from './components/WeatherCard';
import { Forecast } from './components/ForecastCard';
import TabComponent from './components/TabComponent';
interface WeatherData {
  current: CurrentWeather,
  daily: Forecast[]
}

export default function Home() {
  const [position, setPosition] = useState({latitude: 19.432608, longitude: -99.133209})
  const [currentWeather, setCurrentWeather] = useState<WeatherData | null>(null);
  const [infoMsg, setInfoMsg] = useState<string>('');

  useEffect(() => {
    (async() => {
      navigator.geolocation.getCurrentPosition(
      function(currPosition){
        setPosition({latitude: currPosition.coords.latitude, longitude: currPosition.coords.longitude})
        console.log(position);
      },
      function(error){
        if(error.code === 1){ // Code 1 error is set when User denied Geolocation
          setInfoMsg("We are showing a default location, please use the search to find your location");
        }
      })
      const response = await fetch(`api/weather?lat=${position.latitude}&long=${position.longitude}`);
      const currentInfo = (await response.json()).info
      setCurrentWeather(currentInfo);
      console.log('RESPONSE', currentInfo);
    })();
  }, [])
  return (
    <div>
      {infoMsg && <InfoAlert message={infoMsg}></InfoAlert>}
      <main className={styles.main}>
        <WeatherCard weather={currentWeather?.current} ></WeatherCard>
        <TabComponent children={<section>
          Forecast
          {currentWeather?.daily.slice(0,5).map((forecast, i) =>
            <ForecastCard forecast={forecast} key={i}></ForecastCard>
          )}
        </section>}/>
        
      </main>
    </div>
  )
}
