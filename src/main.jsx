import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import Router from "./Routers/Routes.jsx";

function ScrollToTopOnNavigate() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={Router} />
    <ScrollToTopOnNavigate />
  </>
);
