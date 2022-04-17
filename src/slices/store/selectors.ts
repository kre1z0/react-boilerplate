import { createSelector } from "@reduxjs/toolkit";

import { initialState } from "./";

import { RootState } from "types";

const selectDomain = (state: RootState) => state.store || initialState;

export const selectData = createSelector(
  [selectDomain],
  (githubRepoFormState) => githubRepoFormState.data,
);
