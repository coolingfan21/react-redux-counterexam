import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import counterReducer from "./reducer/index";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

const store = createStore(counterReducer, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
