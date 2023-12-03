import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice/dataSlice";
import countReducer from "./dataSlice/countSlice";
import userReducer from "./dataSlice/userSlice";
import groupReducer from "./dataSlice/groupSlice";

const store = configureStore({
  reducer: {
    dataReducer: dataReducer,
    countReducer: countReducer,
    userReducer: userReducer,
    groupReducer: groupReducer,
  },
});
export default store;
