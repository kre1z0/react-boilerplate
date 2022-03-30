import { applyDefaultState } from "../applyDefaultState";

import { ReducerActions } from "constants/actions";

import { ReducerState } from "./types";

const DEFAULT_STATE: ReducerState = null;

export const reduc: Reducer<ReducerState, ReducerActions> = (
  state = DEFAULT_STATE,
  action,
): ReducerState => {
  switch (action.type) {
    case ReducerActions.Add:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return applyDefaultState(action.type, state);
  }
};
