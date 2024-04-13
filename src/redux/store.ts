import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./features/weather-slice";
import locationReducer from "./features/location-slice"
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    weatherReducer,
    locationReducer
  }
});

export type RootState = ReturnType <typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;