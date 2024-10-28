import { createSlice } from "@reduxjs/toolkit";

const spinnerSlice = createSlice({
  name: "spinner",
  initialState: {spinner:false},
  reducers: {
    setSpinner: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
      
    },
  },
});

export const { setSpinner} = spinnerSlice.actions;
export default spinnerSlice.reducer;
