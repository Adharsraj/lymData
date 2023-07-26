import { createBrowserRouter, useLocation } from "react-router-dom";
import { lazy, Suspense, useLayoutEffect } from "react";
const BlogDetailed = lazy(() => import("../Components/Blog/BlogDetailed"));
const Blog = lazy(() => import("../Pages/Blog"));
const WorkDetailed = lazy(() => import("../Components/Works/WorkDetailed"));
const About = lazy(() => import("../Pages/About"));
const Careers = lazy(() => import("../Pages/Careers"));
const Contact = lazy(() => import("../Pages/Contact"));
const Home = lazy(() => import("../Pages/Home"));
const Services = lazy(() => import("../Pages/Services"));
const TermsOfUse = lazy(() => import("../Pages/TermsOfUse"));
const Works = lazy(() => import("../Pages/Works"));
const PrivacyPolicy = lazy(() => import("../Pages/PrivacyPolicy"));
const Culture = lazy(() => import("../Pages/Culture"));

// import WorkDetailed from "../Components/Works/WorkDetailed";
// import About from "../Pages/About";
// import BlogDetailed from "../Components/Blog/BlogDetailed";
// import Blog from "../Pages/Blog";
// import Careers from "../Pages/Careers";
// import Contact from "../Pages/Contact";
// import Home from "../Pages/Home";
// import Services from "../Pages/Services";
// import TermsOfUse from "../Pages/TermsOfUse";
// import Works from "../Pages/Works";
// import PrivacyPolicy from "../Pages/PrivacyPolicy";
// import Culture from "../Pages/Culture";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      // <Suspense fallback={<div>loading</div>} >
        <Wrapper>
          <Home />
        </Wrapper>
      // </Suspense>
    ),
  },
  {
    path: "/contact",
    element: (
      <Suspense >
        <Wrapper>
          <Contact />
        </Wrapper>
      </Suspense>
    ),
  },
  {
    path: "/careers",
    element: (
      <Suspense >
        <Wrapper>
          <Careers />
        </Wrapper>
      </Suspense>
    ),
  },
  {
    path: "/about",
    element: (
      <Suspense >
        <Wrapper>
          <About />
        </Wrapper>
      </Suspense>
    ),
  },
  {
    path: "/blog",
    element: (
      <Suspense >
        <Wrapper>
          <Blog />
        </Wrapper>
      </Suspense>
    ),
  },
  {
    path: "/blog/:id",
    element: (
      <Suspense >
        <Wrapper>
          <BlogDetailed />
        </Wrapper>
      </Suspense>
    ),
  },
  {
    path: "/works",
    element: (
      <Suspense >
        <Wrapper>
          <Works />
        </Wrapper>
      </Suspense>
    ),
  },
  {
    path: "/works/:id",
    element: (
      <Suspense >
        <Wrapper>
          <WorkDetailed />
        </Wrapper>
      </Suspense>
    ),
  },
  {
    path: "/terms",
    element: (
      <Suspense >
        <Wrapper>
          <TermsOfUse />
        </Wrapper>
      </Suspense>
    ),
  },
  {
    path: "/services",
    element: (
      <Suspense >
        <Wrapper>
          <Services />
        </Wrapper>
      </Suspense>
    ),
  },
  {
    path: "/privacy",
    element: (
      <Suspense >
        <Wrapper>
          <PrivacyPolicy />
        </Wrapper>
      </Suspense>
    ),
  },
  {
    path: "/culture",
    element: (
      <Suspense >
        <Wrapper>
          <Culture />
        </Wrapper>
      </Suspense>
    ),
  },
]);

export default Router;
