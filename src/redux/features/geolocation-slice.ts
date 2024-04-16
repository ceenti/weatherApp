import { Position } from "@/app/components/DashboardLayout";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  geoLocation: Position
}
const initialState = {
  geoLocation: {}
} as InitialState;

export const geolocation = createSlice({
  name: "geolocation",
  initialState,
  reducers:{
    setGeolocation: (state, action: PayloadAction<InitialState>) => {
      return {
        geoLocation: action.payload.geoLocation
      }
    }
  }
})

export const { setGeolocation } = geolocation.actions;
export default geolocation.reducer;