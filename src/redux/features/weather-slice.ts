import { Forecast } from "@/app/components/ForecastCard";
import { CurrentWeather } from "@/app/components/WeatherCard";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type City = {
  id:         number;
  name:       string;
  coord:      Coord;
  country:    string;
  population: number;
  timezone:   number;
  sunrise:    number;
  sunset:     number;
}

type Coord = {
  lat: number;
  lon: number;
}


type InitialState = {
  current: CurrentWeather | null,
  daily: Forecast[],
  city: City | null
}

const initialState = {
  current: null,
  daily: [],
  city: null
} as InitialState;

export const weather = createSlice({
  name: "weather",
  initialState,
  reducers:{
    setWeather: (state, action: PayloadAction<InitialState>) => {
      return {
        current:action.payload.current,
        daily:action.payload.daily,
        city:action.payload.city
      }
    }
  }
})

export const { setWeather } = weather.actions;
export default weather.reducer;