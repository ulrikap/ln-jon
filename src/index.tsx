import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { TranslationProvider } from "./state/translation";

ReactDOM.render(
  <React.StrictMode>
    <TranslationProvider>
      <App />
    </TranslationProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
