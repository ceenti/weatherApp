import { Forecast } from "@/app/components/ForecastCard";
import { CurrentWeather } from "@/app/components/WeatherCard";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  current: CurrentWeather | null,
  daily: Forecast[]
}
const initialState = {
  current: null,
  daily: []
} as InitialState;

export const weather = createSlice({
  name: "weather",
  initialState,
  reducers:{
    setWeather: (state, action: PayloadAction<InitialState>) => {
      return {
        current:action.payload.current,
        daily:action.payload.daily
      }
    }
  }
})

export const { setWeather } = weather.actions;
export default weather.reducer;