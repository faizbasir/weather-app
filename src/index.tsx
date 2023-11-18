import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./module/main/container/App";
import { Provider } from "react-redux";
import { store } from "./store";
import "./index.scss";

const rootElement = document.querySelector("#root");

if (!rootElement) {
  throw new Error("Cannot find element with that id");
}

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
