import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import SettingContextProvider from "./Context/SettingContext";

ReactDOM.render(
  <SettingContextProvider>
    <App />
  </SettingContextProvider>,
  document.getElementById("root")
);
