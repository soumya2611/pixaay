import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import PixaayState from "./Context/PixaayState.jsx";
createRoot(document.getElementById("root")).render(
  <PixaayState>
    <App />
  </PixaayState>
);
