import { PayloadAction } from "@reduxjs/toolkit";

import { createSlice } from "utils/toolkit";

export const initialState = {
  data: {},
  loading: false,
  error: null,
};

const slice = createSlice({
  name: "store",
  initialState,
  reducers: {
    loadStore(state) {
      state.loading = true;
      state.error = null;
      state.data = {};
    },
    storeLoaded(state, action: PayloadAction<Record<string, number>>) {
      const data = action.payload;

      state.data = data;
      state.loading = false;
    },
  },
});

export const { actions, reducer, name } = slice;
