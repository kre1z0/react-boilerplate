import { call, takeLatest } from "redux-saga/effects";

import { actions } from "./";
import { api } from "api";

const apiGetInventory = () => api.store.getInventory();

export function* getInventory() {
  try {
    const ggwp: Record<string, number> = yield call(apiGetInventory);

    console.info("--> ggwp 4444 !!!!", ggwp);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.error(err);
  }
}

export function* getInventorySaga() {
  yield takeLatest(actions.loadStore.type, getInventory);
}
