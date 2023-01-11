import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../../src/features/user/userSlice";
import userSlice from "../../src/features/user/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
