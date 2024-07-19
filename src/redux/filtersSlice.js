import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = {
  filters: {
    name: "",
  },
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    createFilter: {
      reducer(state, action) {
        state.filters.name = action.payload;
      },
    },
  },
});

export const { createFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
