import { combineReducers } from "@reduxjs/toolkit";

import { InjectedReducersType, RootState } from "./types";

export function createReducer(injectedReducers: InjectedReducersType = {}) {
  if (Object.keys(injectedReducers).length === 0) {
    return (state: RootState) => state;
  }

  return combineReducers({
    ...injectedReducers,
  });
}
