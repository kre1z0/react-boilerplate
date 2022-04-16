import { useInjectReducer as useReducer } from "redux-injectors";

import { InjectReducerParams, RootStateKeyType } from "store/types";

export function useInjectReducer<Key extends RootStateKeyType>(params: InjectReducerParams<Key>) {
  return useReducer(params);
}
