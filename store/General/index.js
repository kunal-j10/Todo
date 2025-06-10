import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const generalStore = createSlice({
  name: "general",
  initialState,
  reducers: {
    setGeneralStore: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },

    resetGeneralStore: (state) => {
      return {};
    },
  },
});

export const { setGeneralStore, resetGeneralStore } = generalStore.actions;

export default generalStore.reducer;
