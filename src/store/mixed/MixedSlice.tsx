import { createSlice } from "@reduxjs/toolkit";

export interface MixedState {
  isStatusModalVisible: boolean;
  currentView: string;
  currentNumberOfRecords: number;
  currentPage: number;
}

const initialState: MixedState = {
  isStatusModalVisible: false,
  currentView: "dashboard",
  currentNumberOfRecords: 5,
  currentPage: 1,
};

export const mixedSlice = createSlice({
  name: "mixed",
  initialState,
  reducers: {
    closeStatusModal: (state) => {
      state.isStatusModalVisible = false;
    },
    openStatusModal: (state) => {
      state.isStatusModalVisible = true;
    },
    setCurrentView: (state, view) => {
      state.currentView = view.payload;
    },
    setCurrentNumberOfRecords: (state, number) => {
      state.currentNumberOfRecords = number.payload;
    },
    setCurrentPage: (state, page) => {
      state.currentPage = page.payload;
    },
  },
});

export const {
  closeStatusModal,
  openStatusModal,
  setCurrentView,
  setCurrentNumberOfRecords,
  setCurrentPage,
} = mixedSlice.actions;

export default mixedSlice.reducer;
