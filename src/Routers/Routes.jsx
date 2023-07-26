import { createBrowserRouter, useLocation } from "react-router-dom";
import {lazy, Suspense, useLayoutEffect } from "react";
import BlogDetailed from '../Components/Blog/BlogDetailed'
import WorkDetailed from "../Components/Works/WorkDetailed";
import About from "../Pages/About";
// import Blog from "../Pages/Blog";
const Blog=lazy(()=>import("../Pages/Blog"))
import Careers from "../Pages/Careers";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import TermsOfUse from "../Pages/TermsOfUse";
import Works from "../Pages/Works";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import Culture from "../Pages/Culture";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
}

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper>
      <Home />
      </Wrapper>,
  },
  {
    path: "/contact",
    element: <Wrapper><Contact /></Wrapper>,
  },
  {
    path: "/careers",
    element: <Wrapper><Careers /></Wrapper>,
  },
  {
    path: "/about",
    element: <Wrapper><About /></Wrapper>,
  },
  {
    path: "/blog",
    element: 
      <Suspense fallback={<div>loading</div>}>
    <Wrapper>
      <Blog />
      </Wrapper>
      </Suspense>
  },
  {
    path: "/blog/:id",
    element: <Wrapper><BlogDetailed /></Wrapper>,
  },
  {
    path: "/works",
    element: <Wrapper><Works /></Wrapper>,
  },
  {
    path: "/works/:id",
    element: <Wrapper><WorkDetailed /></Wrapper>,
  },
  {
    path: "/terms",
    element: <Wrapper><TermsOfUse /></Wrapper>,
  },
  {
    path: "/services",
    element: <Wrapper><Services /></Wrapper>,
  },
  {
    path: "/privacy",
    element: <Wrapper><PrivacyPolicy /></Wrapper>,
  },
  {
    path: "/culture",
    element: <Wrapper><Culture /></Wrapper>,
  },
]);

export default Router;