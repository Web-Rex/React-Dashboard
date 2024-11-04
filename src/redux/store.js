import { UserReducer } from "./reducers";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import { watch_saga } from "./saga";

const Root_Reducer = combineReducers({
  user_reducer: UserReducer,
});

const saga_Middleware = createSagaMiddleware();

const store = configureStore({
  reducer: Root_Reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saga_Middleware),
});
saga_Middleware.run(watch_saga);

export default store;
