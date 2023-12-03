import { createSlice } from "@reduxjs/toolkit";

const querySlice = createSlice({
  name: "query",
  initialState: {
    text: "null",
    domain: "null",
    gender: "null",
    available: "null",
  },
  reducers: {
    updateQuery: (state, action) => {
      state.text = action.payload.text;
      state.domain = action.payload.domain;
      state.gender = action.payload.gender;
      state.available = action.payload.available;
    },
  },
});
export const { updateQuery } = querySlice.actions;
export default querySlice.reducer;
