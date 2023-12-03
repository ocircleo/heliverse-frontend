import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice/dataSlice";
import countReducer from "./dataSlice/countSlice";
import userReducer from "./dataSlice/userSlice";
import groupReducer from "./dataSlice/groupSlice";
import queryReducer from "./dataSlice/querySlice";

const store = configureStore({
  reducer: {
    dataReducer: dataReducer,
    countReducer: countReducer,
    userReducer: userReducer,
    groupReducer: groupReducer,
    queryReducer: queryReducer,
  },
});
export default store;
