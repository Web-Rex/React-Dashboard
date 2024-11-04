import { takeEvery } from "redux-saga/effects";
import { get_user_handler, GET_DATA } from "./utils";

export function* watch_saga() {
  yield takeEvery(GET_DATA, get_user_handler);
}
