'use client'
import React from 'react'
import TabComponent from '../components/TabComponent';
import { Box } from '@material-ui/core';
import ForecastCard from '../components/ForecastCard';
import LoadingSkeleton from '../components/LoadingSkeleton'

import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from '@/redux/store';


const Forecast = () => {
  const forecastData = useAppSelector(state => state.weatherReducer.daily);
  const dispatch = useDispatch<AppDispatch>();

  return (
    forecastData.length > 0 ? 
    <LoadingSkeleton/>
   : (
   <div>
    <TabComponent children={
      <Box sx={{ alignItems:'start', justifyContent:'space-evenly' }}>
        {forecastData.slice(0,5).map((forecast, i) =>
          <ForecastCard forecast={forecast} key={i}></ForecastCard>
        )}
      </Box>}
    />
  </div>
  )
)}

export default Forecast