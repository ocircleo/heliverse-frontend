import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getGroup = createAsyncThunk("groups/getgroup", async (email) => {
  const result = await axios.get(
    `https://heliverse-omega.vercel.app/get/group/${email}`
  );
  return result.data;
});
export const makeGroup = createAsyncThunk("groups/makegroup", async (body) => {
  const result = await axios.post(
    "https://heliverse-omega.vercel.app/post/makegroup",
    body
  );
  return result.data;
});
export const addToGroup = createAsyncThunk(
  "groups/addtogroup",
  async (body) => {
    const result = await axios.put(
      "https://heliverse-omega.vercel.app/put/addToGroup",
      body
    );
    return result.data;
  }
);
export const removeFromGroup = createAsyncThunk(
  "groups/removefromgroup",
  async (body) => {
    const result = await axios.put("url", body);
    return result.data;
  }
);
const groupSlice = createSlice({
  name: "groups",
  initialState: {
    group_isLoading: false,
    groups: [],
    group_error: null,
  },
  extraReducers: (builder) => {
    //Get Group
    builder.addCase(getGroup.pending, (state) => {
      state.group_isLoading = true;
    });
    builder.addCase(getGroup.fulfilled, (state, action) => {
      state.group_isLoading = false;
      state.group_error = null;
      state.groups = action.payload;
    });
    builder.addCase(getGroup.rejected, (state, action) => {
      state.group_isLoading = false;
      state.group_error = action.error.message;
      state.groups = [];
    });
    //Make Group
    builder.addCase(makeGroup.pending, (state) => {
      state.group_isLoading = true;
    });

    builder.addCase(makeGroup.fulfilled, (state, action) => {
      state.group_isLoading = false;
      state.group_error = null;
      state.groups.push(action.payload);
    });
    builder.addCase(makeGroup.rejected, (state, action) => {
      state.group_isLoading = false;
      state.group_error = action.error.message;
      state.groups = [];
    });
    //Add to Group
    builder.addCase(addToGroup.pending, (state) => {
      state.group_isLoading = true;
    });

    builder.addCase(addToGroup.fulfilled, (state, action) => {
      state.group_isLoading = false;
      state.group_error = null;
      const newgroup = state.groups.filter(
        (gr) => gr._id != action.payload._id
      );
      state.groups = newgroup;
      state.groups.push(action.payload);
    });
    builder.addCase(addToGroup.rejected, (state, action) => {
      state.group_isLoading = false;
      state.group_error = action.error.message;
      state.groups = [];
    });
    //Remove from Group
    builder.addCase(removeFromGroup.pending, (state) => {
      state.group_isLoading = true;
    });

    builder.addCase(removeFromGroup.fulfilled, (state, action) => {
      state.group_isLoading = false;
      state.group_error = null;
      state.groups = action.payload;
    });
    builder.addCase(removeFromGroup.rejected, (state, action) => {
      state.group_isLoading = false;
      state.group_error = action.error.message;
      state.groups = [];
    });
  },
});

export default groupSlice.reducer;
