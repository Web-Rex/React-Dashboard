import {
  GET_DATA,
  GET_DATA_FAILURE,
  GET_DATA_SUCCESSFUL,
  SET_EMAIL,
  LOGGED_IN,
  LOGGED_OUT,
} from "../utils";

const default_state = {
  data: {},
  user_email: "",
  is_logged_in: false,
  is_loading: false,
  error: null,
};

export const UserReducer = (state = default_state, action) => {
  switch (action.type) {
    case LOGGED_IN:
      return { ...state, is_logged_in: true };

    case LOGGED_OUT:
      return { ...state, is_logged_in: false };

    case GET_DATA:
      return { ...state, is_loading: true };

    case GET_DATA_SUCCESSFUL:
      return { ...state, is_loading: false, data: action.payload };

    case GET_DATA_FAILURE:
      return { ...state, is_loading: false, error: action.payload };

    case SET_EMAIL:
      return { ...state, user_email: action.payload };

    default:
      return state;
  }
};
