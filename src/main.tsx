import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom"; // <-- Import the router
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* --- This is the ONLY router for your whole app --- */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);