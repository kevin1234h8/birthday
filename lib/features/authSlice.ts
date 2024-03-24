"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const initialState = {
  value: cookies.get("username") ? cookies.get("username") : "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getAuth: (state, action) => {
      return { value: action.payload };
    },
  },
});

export const { getAuth } = authSlice.actions;
export default authSlice.reducer;
