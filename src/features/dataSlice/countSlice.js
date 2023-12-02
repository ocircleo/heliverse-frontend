import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchCount = createAsyncThunk("users/fetchcount", async () => {
  const res = await axios.get(
    `https://heliverse-omega.vercel.app/api/get/estimate`
  );
  return res.data;
});

const countSlice = createSlice({
  name: "count",
  initialState: {
    count_isLoading: false,
    count: 0,
    count_error: null,
    currentPage: 1,
  },
  reducers: {
    togglePage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCount.pending, (state) => {
      state.count_isLoading = true;
    });
    builder.addCase(fetchCount.fulfilled, (state, action) => {
      state.count_isLoading = false;
      state.count = action.payload.totalUser;
    });
    builder.addCase(fetchCount.rejected, (state, action) => {
      state.count_isLoading = false;
      state.count = 0;
      state.count_error = action.error.message;
    });
  },
});
export const { togglePage } = countSlice.actions;
export default countSlice.reducer;
