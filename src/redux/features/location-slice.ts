import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Location = {
  latitude: number,
  longitude: number,
  name: string
}

type InitialState = {
  selectedLocation: Location
}
const initialState = {
  selectedLocation: {}
} as InitialState;

export const location = createSlice({
  name: "location",
  initialState,
  reducers:{
    setLocation: (state, action: PayloadAction<InitialState>) => {
      return {
        selectedLocation: action.payload.selectedLocation
      }
    }
  }
})

export const { setLocation } = location.actions;
export default location.reducer;