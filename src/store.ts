import { configureStore } from "@reduxjs/toolkit";
import { currentLocationSlice } from "./module/main/reducer/currentLocation";

export const store = configureStore({
  reducer: {
    currentLocation: currentLocationSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
