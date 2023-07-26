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
      // <Suspense fallback={<div>loading</div>}>
        <Wrapper>
          <Home />
        </Wrapper>
      // </Suspense>
    ),
  },
  {
    path: "/contact",
    element: (
      <Suspense fallback={<div>loading</div>}>
        <Wrapper>
          <Contact />
        </Wrapper>
      </Suspense>
    ),
  },
  {
    path: "/careers",
    element: (
      <Suspense fallback={<div>loading</div>}>
        <Wrapper>
          <Careers />
        </Wrapper>
      </Suspense>
    ),
  },
  {
    path: "/about",
    element: (
      <Suspense fallback={<div>loading</div>}>
        <Wrapper>
          <About />
        </Wrapper>
      </Suspense>
    ),
  },
  {
    path: "/blog",
    element: (
      <Suspense fallback={<div>loading</div>}>
        <Wrapper>
          <Blog />
        </Wrapper>
      </Suspense>
    ),
  },
  {
    path: "/blog/:id",
    element: (
      <Suspense fallback={<div>loading</div>}>
        <Wrapper>
          <BlogDetailed />
        </Wrapper>
      </Suspense>
    ),
  },
  {
    path: "/works",
    element: (
      <Suspense fallback={<div>loading</div>}>
        <Wrapper>
          <Works />
        </Wrapper>
      </Suspense>
    ),
  },
  {
    path: "/works/:id",
    element: (
      <Suspense fallback={<div>loading</div>}>
        <Wrapper>
          <WorkDetailed />
        </Wrapper>
      </Suspense>
    ),
  },
  {
    path: "/terms",
    element: (
      <Suspense fallback={<div>loading</div>}>
        <Wrapper>
          <TermsOfUse />
        </Wrapper>
      </Suspense>
    ),
  },
  {
    path: "/services",
    element: (
      <Suspense fallback={<div>loading</div>}>
        <Wrapper>
          <Services />
        </Wrapper>
      </Suspense>
    ),
  },
  {
    path: "/privacy",
    element: (
      <Suspense fallback={<div>loading</div>}>
        <Wrapper>
          <PrivacyPolicy />
        </Wrapper>
      </Suspense>
    ),
  },
  {
    path: "/culture",
    element: (
      <Suspense fallback={<div>loading</div>}>
        <Wrapper>
          <Culture />
        </Wrapper>
      </Suspense>
    ),
  },
]);

export default Router;
