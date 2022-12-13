import { createSlice } from "@reduxjs/toolkit";
import { BalanceState } from "../../types/types";

const initialState: BalanceState = {
  balance: {
    data: [],
    error: {},
    status: "idle"
  },
  currentRiskStatus: 0,
};

export const balanceSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {
    setCurrentRiskStatus: (state, number) => {
      state.currentRiskStatus = number.payload;
    },
    setLoadingStatus: (state, status) => {
      state.balance.status = status.payload;
    },
    setBalanceData: (state, balanceData) => {
      state.balance.data = balanceData.payload;
    }
  }
});

export const {
  setCurrentRiskStatus,
  setLoadingStatus,
  setBalanceData
} = balanceSlice.actions;

export default balanceSlice.reducer;
