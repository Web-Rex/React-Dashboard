import { call, put } from "redux-saga/effects";
import { get_data_failure, get_data_successful } from "./actions";

export const LOGGED_IN = "LOGGED_IN";
export const LOGGED_OUT = "LOGGED_OUT";

export const SET_EMAIL = "SET_EMAIL";
export const GET_DATA = "GET_USERS";
export const GET_DATA_SUCCESSFUL = "GET_USERS_SUCCESSFUL";
export const GET_DATA_FAILURE = "GET_USERS_FAILURE";

// -------------------------------------------------------------
const _get_data_ = () => {
  return fetch("/db.json").then((res) => res.json());
};
// -------------------------------------------------------------
export function* get_user_handler() {
  try {
    const response = yield call(_get_data_);
    yield put(get_data_successful(response));
  } catch (err) {
    console.log(err.message);
    yield put(get_data_failure(err.message));
  }
}
