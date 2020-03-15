import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./App";
import "./sass/styles.scss";
import { Provider } from "react-redux";
import { store } from "./store/store";

const ROOT = document.getElementById("root");
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    ROOT
);
