import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const loginUser = createAsyncThunk("user/login", async (body) => {
  const res = await axios.post(
    `https://heliverse-omega.vercel.app/api/post/login`,
    body
  );
  return res.data;
});
export const register = createAsyncThunk("user/regiter", async (body) => {
  const res = await axios.post(
    `https://heliverse-omega.vercel.app/api/post/register`,
    body
  );
  return res.data;
});
export const jwt = createAsyncThunk("user/regiter", async (body) => {
  const res = await axios.post(`https://heliverse-omega.vercel.app/jwt`, body);
  return res.data;
});
export const autoLogin = createAsyncThunk(
  "user/autologin",
  async ({ headers, data }) => {
    const res = await axios.post(
      `https://heliverse-omega.vercel.app/api/post/autoLogin`,
      data,
      {
        headers,
      }
    );
    return res.data;
  }
);
const userSlice = createSlice({
  name: "user",
  initialState: {
    user_loading: false,
    user_data: {},
    user_error: null,
  },
  reducers: {
    logout: (state) => {
      state.user_loading = false;
      state.user_data = {};
      state.user_error = null;
    },
  },
  extraReducers: (builder) => {
    //Log in User
    builder.addCase(loginUser.pending, (state) => {
      state.user_loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user_loading = false;
      state.user_error = null;
      state.user_data = action.payload;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.user_loading = false;
      state.user_error = action.error.message;
      state.user_data = {};
    });
    //Register
    builder.addCase(register.pending, (state) => {
      state.user_loading = true;
    });

    builder.addCase(register.fulfilled, (state, action) => {
      state.user_loading = false;
      state.user_error = null;
      state.user_data = action.payload;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.user_loading = false;
      state.user_error = action.error.message;
      state.user_data = {};
    });
    //Auto Login
    builder.addCase(autoLogin.pending, (state) => {
      state.user_loading = true;
    });

    builder.addCase(autoLogin.fulfilled, (state, action) => {
      state.user_loading = false;
      state.user_error = null;
      state.user_data = action.payload;
    });
    builder.addCase(autoLogin.rejected, (state, action) => {
      state.user_loading = false;
      state.user_error = action.error.message;
      state.user_data = {};
    });
  },
});
export const { logout } = userSlice.actions;
export default userSlice.reducer;
