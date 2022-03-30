import { createStore, applyMiddleware, Store, Middleware } from "redux";
import thunk from "redux-thunk";

import { rootReducer } from "ducks";

export const store: Store<{}> = configureStore();

export function configureStore(): Store<{}> {
  return createStore(rootReducer, {}, applyMiddleware(...([thunk] as Middleware[])));
}
