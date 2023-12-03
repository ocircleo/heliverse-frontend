import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchUser = createAsyncThunk("users/fetchuser", async (query) => {
  const res = await axios.get(
    `https://heliverse-omega.vercel.app/api/get/users?domain=${query?.domain}&gender=${query?.gender}&available=${query?.available}&text=${query?.text}&limit=20&page=${query?.page}`
  );

  return res.data;
});

const dataSlice = createSlice({
  name: "users",
  initialState: {
    isLoading: false,
    data: [],
    selected: {},
    totalSelected: 0,
    error: null,
  },
  reducers: {
    select: (state, action) => {
      const id = action.payload;
      state.selected[id] = true;
      state.totalSelected = state.totalSelected + 1;
    },
    deselct: (state, action) => {
      const id = action.payload;
      delete state.selected[id];
      state.totalSelected = state.totalSelected - 1;
    },
    deselctAll: (state) => {
      state.selected = {};
      state.totalSelected = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.isLoading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});
export const { select, deselct, deselctAll, togglePage } = dataSlice.actions;
export default dataSlice.reducer;
