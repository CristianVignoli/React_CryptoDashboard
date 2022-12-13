import { configureStore } from "@reduxjs/toolkit";
import mixedSlice from "./mixed/MixedSlice";
import balanceSlice from "./balance/BalanceSlice";
import userSlice from "./user/UserSlice";

export const store = configureStore({
  reducer: {
    balance: balanceSlice,
    mixed: mixedSlice,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
