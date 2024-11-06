import { takeEvery } from "redux-saga/effects";
import { get_user_handler, handle_socket_connection, GET_DATA, CONNECT_SOCKET } from "./utils";

export function* watch_saga() {
  yield takeEvery(GET_DATA, get_user_handler);
  yield takeEvery(CONNECT_SOCKET, handle_socket_connection);
}
