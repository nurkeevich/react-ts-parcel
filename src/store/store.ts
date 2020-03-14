import { createStore, applyMiddleware } from "redux";
import { rootReducer, AppState } from "../store/reducers/index";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { AppActions } from "./actions";

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)
);

export type AppDispatch = typeof store.dispatch;
