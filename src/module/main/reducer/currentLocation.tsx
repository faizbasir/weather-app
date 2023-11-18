import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../store";

interface CurrentLocation {
  value: string;
}

const initialState: CurrentLocation = {
  value: "Singapore",
};

export const currentLocationSlice = createSlice({
  name: "currentLocation",
  initialState,
  reducers: {},
});

export const {} = currentLocationSlice.actions;
export const selectCurrentLocation = (state: RootState) =>
  state.currentLocation.value;
export default currentLocationSlice.reducer;
