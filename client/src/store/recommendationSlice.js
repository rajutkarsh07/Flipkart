import { createSlice } from "@reduxjs/toolkit";

const recommendationSlice = createSlice({
  name: "recommendation",
  initialState: [],
  reducers: {
    addId(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addId } = recommendationSlice.actions;
export default recommendationSlice.reducer;
