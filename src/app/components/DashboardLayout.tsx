"use client"
import { useEffect, useState } from "react";
import useSWR from "swr";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { setWeather } from '@/redux/features/weather-slice';
import { fetcher } from '@/utils/fetch';
import InfoAlert from './InfoAlert';
import LoadingSkeletonMain from "./LoadingSkeletonMain";
import SearchAppBar from "./SearchAppBar"

interface IDashboardLayout {
  children: React.ReactNode
}

export interface Position {
  latitude: number,
  longitude: number,
}

export default function DashboardLayout({
  children,
}: IDashboardLayout) {
  const [position, setPosition] = useState<Position>({latitude: 19.432608, longitude: -9.133209})
  const dispatch = useDispatch<AppDispatch>();
  const locationData = useAppSelector(state => state.locationReducer);
  const geolocationData = useAppSelector(state => state.geolocationReducer.geoLocation)

  const { data, error, isLoading } = useSWR(`api/weather?lat=${position.latitude}&long=${position.longitude}`, fetcher)

  useEffect(() => {
    if(locationData.selectedLocation?.name) {
      setPosition({
        latitude: locationData.selectedLocation.latitude,
        longitude: locationData.selectedLocation.longitude,
      });
    }
  }, [locationData])

  useEffect(() => {
    if(geolocationData.latitude && geolocationData.longitude) {
      setPosition({
        latitude: geolocationData.latitude,
        longitude: geolocationData.longitude,
      });
    }
  }, [geolocationData])

  useEffect(() => {
    if(data && data.info.cod === "200") {
      dispatch(setWeather({current: data.info.list[0], daily: data.info.list.slice(1,6), city: data.info.city}));
    }
  }, [data]);

  return (
    <section>
      <SearchAppBar/>
      <nav></nav>
      {error && <InfoAlert message={"Please try again later"}></InfoAlert>}
      {isLoading ?
        <LoadingSkeletonMain/> :
        children
      }
    </section>
  )
}
