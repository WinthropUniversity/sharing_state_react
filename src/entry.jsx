import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { SavedProvider } from "./SavedContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SavedProvider>
      <App />
    </SavedProvider>
  </StrictMode>,
);
