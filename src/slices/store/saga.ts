import { call, takeLatest, put } from "redux-saga/effects";

import { actions } from "./";
import { api } from "api";

const apiGetInventory = () => api.store.getInventory();

export function* getInventory() {
  try {
    const data: Record<string, number> = yield call(apiGetInventory);

    yield put(actions.storeLoaded(data));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.error(err);
  }
}

export function* getInventorySaga() {
  yield takeLatest(actions.loadStore.type, getInventory);
}
