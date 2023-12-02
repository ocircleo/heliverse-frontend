import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice/dataSlice";
import countReducer from "./dataSlice/countSlice";

const store = configureStore({
  reducer: {
    dataReducer: dataReducer,
    countReducer: countReducer,
  },
});
export default store;
