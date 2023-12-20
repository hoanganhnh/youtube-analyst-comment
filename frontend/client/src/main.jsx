import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "event-source-polyfill";

import App from "./App";
import { AuthenticateProvider } from "./contexts/AuthContext";
import { ViewerProvider } from "./contexts/ViewerContext";
import { SocketProvider } from "./contexts/SocketContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <AuthenticateProvider>
        <ViewerProvider>
          <SocketProvider>
            <App />
          </SocketProvider>
        </ViewerProvider>
      </AuthenticateProvider>
    </BrowserRouter>
  </>
);
