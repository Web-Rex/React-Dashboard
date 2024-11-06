import { call, put, take } from "redux-saga/effects";
import {
  get_data_failure,
  get_data_successful,
  set_market_price,
} from "./actions";
import { io } from "socket.io-client";
import { END, eventChannel } from "redux-saga";

export const LOGGED_IN = "LOGGED_IN";
export const LOGGED_OUT = "LOGGED_OUT";

export const SET_EMAIL = "SET_EMAIL";
export const SET_MARKET_PRICE = "SET_MARKET_PRICE";

export const CONNECT_SOCKET = "CONNECT_SOCKET";

export const GET_DATA = "GET_USERS";
export const GET_DATA_SUCCESSFUL = "GET_USERS_SUCCESSFUL";
export const GET_DATA_FAILURE = "GET_USERS_FAILURE";

// -------------------------------------------------------------
const _get_data_ = () => {
  return fetch("/db.json").then((res) => res.json());
};
const _get_mrk_pice_ = () => {
  return fetch("http://localhost:3000/").then((res) => res.json());
};
const _connect_socket_ = (url) => {
  return io(url);
};
const current_mk_price = (socket) => {
  return eventChannel((emitter) => {
    socket.on("current_market_price", (res) => {
      emitter(res);
    });

    return () => {
      emitter(END);
    };
  });
};
// -----------------------------------------------------------
export function* get_user_handler() {
  try {
    const response = yield call(_get_data_);
    const mrk_prc = yield call(_get_mrk_pice_);
    console.log("mrk_prc: ", mrk_prc);

    yield put(get_data_successful(response));
    yield put(set_market_price(mrk_prc?.value));
  } catch (err) {
    console.log(err.message);
    yield put(get_data_failure(err.message));
  }
}
export function* handle_socket_connection() {
  const socket = yield call(_connect_socket_, "http://localhost:3000/");
  const current_mk_prc_ = yield call(current_mk_price, socket);

  while (true) {
    try {
      const current_mk_pr_res = yield take(current_mk_prc_);
      console.log("current_mk_prc_", current_mk_pr_res);

      yield put(set_market_price(current_mk_pr_res?.data));
    } catch (err) {
      // console.log("error: ", err);
      socket.close();
      break;
    }
  }
}
