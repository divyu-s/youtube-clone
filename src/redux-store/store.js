import { configureStore } from "@reduxjs/toolkit";
import appSliceReducer from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    app: appSliceReducer,
    search: searchSlice,
    chat: chatSlice,
  },
});

export default store;
