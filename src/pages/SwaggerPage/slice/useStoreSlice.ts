import { useInjectReducer, useInjectSaga } from "utils/redux-injectors";
import { getInventorySaga } from "./saga";
import { actions, name, reducer } from "./";

export const useStoreSlice = () => {
  useInjectReducer({ key: name, reducer });
  useInjectSaga({ key: name, saga: getInventorySaga });

  return { actions };
};
