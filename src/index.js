import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import AuthProvider from "./Context/AuthProvider";
import { BrowserRouter } from "react-router-dom";
import StateProvider from "./Context/StateProvider";
import ThemeContextProvider from "./Context/ThemeContextProvider";

// Call make Server
makeServer();

ReactDOM.render(
  <ThemeContextProvider>
    <StateProvider>
      <AuthProvider>
        <BrowserRouter>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </BrowserRouter>
      </AuthProvider>
    </StateProvider>
  </ThemeContextProvider>


  ,
  document.getElementById("root")
);
