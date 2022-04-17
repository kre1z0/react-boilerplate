import { PayloadAction } from "@reduxjs/toolkit";

import { createSlice } from "utils/toolkit";
import { useInjectReducer } from "utils/redux-injectors";
import { getThemeFromStorage } from "styles/theme/utils";

import { ThemeKeyType, ThemeState } from "./types";

export const initialState: ThemeState = {
  selected: getThemeFromStorage() || "system",
};

const slice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme(state, action: PayloadAction<ThemeKeyType>) {
      state.selected = action.payload;
    },
  },
});

export const { actions: themeActions, reducer, name } = slice;

export const useThemeSlice = () => {
  useInjectReducer({ key: name, reducer });

  return { actions: themeActions };
};
