import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    createFilter: {
      reducer(state, action) {
        state.name = action.payload;
      },
    },
  },
});

export const { createFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
