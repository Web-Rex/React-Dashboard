import {
  LOGGED_IN,
  LOGGED_OUT,
  SET_EMAIL,
  SET_MARKET_PRICE,
  CONNECT_SOCKET,
  GET_DATA,
  GET_DATA_SUCCESSFUL,
  GET_DATA_FAILURE,
} from "../utils";

export const is_logged_in = () => ({ type: LOGGED_IN });
export const is_logged_out = () => ({ type: LOGGED_OUT });

export const get_data = () => ({ type: GET_DATA });
export const get_data_successful = (payload) => ({ type: GET_DATA_SUCCESSFUL, payload });
export const get_data_failure = (payload) => ({ type: GET_DATA_FAILURE, payload });
export const set_email = (payload) => ({ type: SET_EMAIL, payload });
export const set_market_price = (payload) => ({ type: SET_MARKET_PRICE, payload });

export const connect_socket = () => ({ type: CONNECT_SOCKET });
