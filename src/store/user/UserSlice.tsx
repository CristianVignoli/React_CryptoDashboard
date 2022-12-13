import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "../../types/types";

const initialState: UserState = {
  name: "Betty Cooper",
  address: "0x00000000219ab540356cbb839cbe05303d7705fa",
};

export const userSlice = createSlice({
  name: "mixed",
  initialState,
  reducers: {
    setUserName: (state, user) => {
      state.name = user.payload;
    },
    setUserAccountAddress: (state, address) => {
      state.address = address.payload;
    },
  },
});

export const { setUserName, setUserAccountAddress } = userSlice.actions;

export default userSlice.reducer;
