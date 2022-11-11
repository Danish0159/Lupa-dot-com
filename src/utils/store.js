import { configureStore } from "@reduxjs/toolkit";
import userSliceEn from "../Features/user/userSlice";

const store = configureStore({
  reducer: {
    userEn: userSliceEn,
  },
  devTools: true,
});

export default store;
