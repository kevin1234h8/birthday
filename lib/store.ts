import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/lib/features/authSlice";

export const store = configureStore({
  reducer: {
    authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
