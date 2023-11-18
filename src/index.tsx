import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./module/main/App";

const rootElement = document.querySelector("#root");

if (!rootElement) {
  throw new Error("Cannot find element with that id");
}

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
