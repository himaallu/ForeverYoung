import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/auth/user.slice";
import opportunityReducer from "../features/opportunity/opportunity.slice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    user: userReducer,
    opportunity: opportunityReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
