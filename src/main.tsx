import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.tsx";
import { BrowserRouter } from "react-router-dom";
import "./scss/index.scss";

if (import.meta.env.DEV) {
  const { worker } = require("./mocks/browser");
  worker.start();
}
console.log("메인");

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
