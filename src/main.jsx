import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import Router from "./Routers/Routes.jsx";
import App from "./App";
import LocomotiveScroll from "locomotive-scroll";

function InitLocomotiveScroll({ children }) {

  useEffect(() => {
    let scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      // smoothMultiplier: 0.1,
    });

    new ResizeObserver(() => scroll.update()).observe(document.querySelector("[data-scroll-container]"))
  }, []);

  return (
    <div className="data-scroll-container" data-scroll-container>
      {children}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
<InitLocomotiveScroll>
<App />
</InitLocomotiveScroll>  
  </>
);
