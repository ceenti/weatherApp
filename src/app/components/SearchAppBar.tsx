"use client";
import * as React from 'react';
import { styled, Box, Typography } from '@material-ui/core';
import { fetcher } from '@/utils/fetch';
import useSWR from 'swr';
import { useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { Location as SelectedLocation, setLocation } from '@/redux/features/location-slice';
import { AppDispatch } from '@/redux/store';
import { useDispatch } from 'react-redux';

type Location = {
  name: string;
  sys: {
    country: string;
  };
  coord: {
    lat: number,
    lon: number
  }
}

const StyledAppBar = styled('header')(({ theme }) => ({
  background: "#EDEEF6"
}));

const StyledToolBar = styled('div')(({theme}) => ({
  justifyContent: 'space-between',
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  minHeight: '4rem',
  marginInline: '1rem'
}))

export default function SearchAppBar() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { data, error, isLoading } = useSWR(`api/find?q=${searchQuery}`, fetcher)
  const dispatch = useDispatch<AppDispatch>();
  let optionData = [];

  const searchPlace = (value: React.SetStateAction<string>) => {setSearchQuery(value)}
  const setSelectedLocation = (value:any) => {

    if(!value?.label) return;
    const loc = {
      name: value.label,
      latitude: parseFloat(value.value.split(",")[0]),
      longitude: parseFloat(value.value.split(",")[1]),
    } as SelectedLocation;
    dispatch(setLocation({selectedLocation: loc}));
  }

  if(data?.info?.list) {
    optionData = []
    optionData = data?.info?.list?.map(
      (item: Location) => (
        {
          label: `${item.name}, ${item.sys.country}`,
          value: `${item.coord.lat},${item.coord.lon}`
        }
      )
    )
  }
  
  return (
    <Box p={0} m={0} sx={{ flexGrow: 1 }}>
      <StyledAppBar>
        <StyledToolBar>
          <Typography
            variant="h6"
            noWrap
            component="div"
          >
            WEATHER
          </Typography>
          <Autocomplete
            id="combo-box-demo"
            options={optionData || []}
            sx={{ width: 300 }}
            onInputChange={(_, value) => searchPlace(value as string)}
            renderInput={(params) => <TextField {...params} label="Search for city or place..."/> }
            onChange={(_, value) => setSelectedLocation(value)}
            size='small'
          />
        </StyledToolBar>
      </StyledAppBar>
    </Box>
  );
}
