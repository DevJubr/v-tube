import ReactDOM from "react-dom/client";

import React from "react";
import store from "./store";
import "./style.css";
import { StoreProvider } from "easy-peasy";
import { RouterProvider } from "react-router-dom";
import router from "./router/index";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <RouterProvider router={router} />
    </StoreProvider>
  </React.StrictMode>
);
