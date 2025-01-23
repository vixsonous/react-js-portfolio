import { configureStore } from "@reduxjs/toolkit";
import { theme } from "./slice/theme";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    theme: theme.reducer
  }
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();