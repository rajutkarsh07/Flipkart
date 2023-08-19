import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import recommendationReducer from "./recommendationSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    recommendation: recommendationReducer,
  },
});

export default store;
