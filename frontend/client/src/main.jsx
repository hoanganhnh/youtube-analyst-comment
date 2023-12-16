import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "event-source-polyfill";

import App from "./App";
import { ViewerProvider } from "./contexts/ViewerContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ViewerProvider>
        <App />
      </ViewerProvider>
    </BrowserRouter>
  </React.StrictMode>
);
