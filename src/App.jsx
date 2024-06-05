import { Children, useState } from "react";
import { lazy, Suspense, useLayoutEffect } from "react";
import Loading from "./Components/loaders/TextLoading";
import {
  RouterProvider,
  createBrowserRouter,
  useLocation,
} from "react-router-dom";
import SkeltonLoader from "./Components/loaders/SkeltonLoader";
import PageNotFound from "./Pages/PageNotFound";
import Login from "./Components/Home/Login";
import SignUp from "./Components/Home/SignUp";
import WhatsNew from "./Pages/WhatsNew";
const BlogDetailed = lazy(() => import("./Components/Blog/BlogDetailed"));
const Blog = lazy(() => import("./Pages/Blog"));
const WorkDetailed = lazy(() => import("./Components/Works/WorkDetailed"));
const About = lazy(() => import("./Pages/About"));
const InsideServices = lazy(() => import("./Pages/InsideServices"));
const GetAQuote = lazy(() => import("./Pages/GetAQuote"));
const Careers = lazy(() => import("./Pages/Careers"));
const Contact = lazy(() => import("./Pages/Contact"));
const Home = lazy(() => import("./Pages/Home"));
const Services = lazy(() => import("./Pages/Services"));
const TermsOfUse = lazy(() => import("./Pages/TermsOfUse"));
const Works = lazy(() => import("./Pages/Works"));
const PrivacyPolicy = lazy(() => import("./Pages/PrivacyPolicy"));
const Culture = lazy(() => import("./Pages/Culture"));

function App() {
  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense>
          <Wrapper>
            <Home />
          </Wrapper>
        </Suspense>
      ),
    },
    {
      path: "/contact",
      element: (
        <Suspense>
          <Wrapper>
            <Contact />
          </Wrapper>
        </Suspense>
      ),
    },
    {
      path: "/careers",
      element: (
        <Suspense>
          <Wrapper>
            <Careers />
          </Wrapper>
        </Suspense>
      ),
    },
    {
      path: "/ab",
      element: (
        <Suspense fallback={<Loading />}>
          <Wrapper>
            <About />
          </Wrapper>
        </Suspense>
      ),
    },
    {
      path: "/blog",
      element: (
        <Suspense>
          <Wrapper>
            <Blog />
          </Wrapper>
        </Suspense>
      ),
    },
    {
      path: "/blog/:name",
      element: (
        <Suspense>
          <Wrapper>
            <BlogDetailed />
          </Wrapper>
        </Suspense>
      ),
    },
    {
      path: "/works",
      element: (
        <Suspense>
          <Wrapper>
            <Works />
          </Wrapper>
        </Suspense>
      ),
    },
    {
      path: "/works/:title",
      element: (
        <Suspense>
          <Wrapper>
            <WorkDetailed />
          </Wrapper>
        </Suspense>
      ),
    },
    {
      path: "/terms",
      element: (
        <Suspense>
          <Wrapper>
            <TermsOfUse />
          </Wrapper>
        </Suspense>
      ),
    },
    {
      path: "/services",
      element: (
        <Suspense>
          <Wrapper>
            <Services />
          </Wrapper>
        </Suspense>
      ),
    },
    {
      path: "/inside-services",
      element: (
        <Suspense fallback={<Loading />}>
          <Wrapper>
            <InsideServices />
          </Wrapper>
        </Suspense>
      ),
    },
    {
      path: "/privacy",
      element: (
        <Suspense>
          <Wrapper>
            <PrivacyPolicy />
          </Wrapper>
        </Suspense>
      ),
    },
    {
      path: "/about",
      element: (
        <Suspense>
          <Wrapper>
            <Culture />
          </Wrapper>
        </Suspense>
      ),
    },
    {
      path: "/login",
      element: (
        <Suspense>
          <Wrapper>
            <Login />
          </Wrapper>
        </Suspense>
      ),
    },
    {
      path: "/signup",
      element: (
        <Suspense>
          <Wrapper>
            <SignUp />
          </Wrapper>
        </Suspense>
      ),
    },
    {
      path: "/getaquote",
      element: (
        <Suspense>
          <Wrapper>
            <GetAQuote />
          </Wrapper>
        </Suspense>
      ),
    },
    {
      path: "/coming",
      element: (
        <Suspense fallback={<Loading />}>
          <Wrapper>
            <WhatsNew />
          </Wrapper>
        </Suspense>
      ),
    },
    {
      path: "*",
      element: (
        <Suspense>
          <Wrapper>
            <PageNotFound />
          </Wrapper>
        </Suspense>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
