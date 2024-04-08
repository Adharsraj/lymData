import { createBrowserRouter, useLocation } from "react-router-dom";
import { lazy, Suspense, useLayoutEffect } from "react";
import Loading from "../Components/loaders/TextLoading";
import SkeltonLoader from "../Components/loaders/SkeltonLoader";
import PageNotFound from "../Pages/PageNotFound";
import InsideServices from "../Pages/InsideServices";
import Login from "../Components/Home/Login";
import SignUp from "../Components/Home/SignUp";
import ComingSoon from "../Pages/ComingSoon";
import WhatsNew from "../Pages/WhatsNew";
import Popup from "../Components/Home/Popup";
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

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

const Router = createBrowserRouter([
  // {
  // path: "/",
  // element: <Wrapper/>,
  // children : [
  {
    path: "/",
    element: (
      <Suspense fallback={<SkeltonLoader />}>
        <Wrapper>
          <Home />
        </Wrapper>
      </Suspense>
    ),
  },
  {
    path: "/contact",
    element: (
      <Suspense fallback={<Loading />}>
        <Wrapper>
          <Contact />
        </Wrapper>
      </Suspense>
    ),
  },
  {
    path: "/careers",
    element: (
      <Suspense fallback={<Loading />}>
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
      <Suspense fallback={<Loading />}>
        <Wrapper>
          <Blog />
        </Wrapper>
      </Suspense>
    ),
  },
  {
    path: "/blog/:id",
    element: (
      <Suspense fallback={<Loading />}>
        <Wrapper>
          <BlogDetailed />
        </Wrapper>
      </Suspense>
    ),
  },
  {
    path: "/works",
    element: (
      <Suspense fallback={<Loading />}>
        <Wrapper>
          <Works />
        </Wrapper>
      </Suspense>
    ),
  },
  {
    path: "/works/:title",
    element: (
      <Suspense fallback={<Loading />}>
        <Wrapper>
          <WorkDetailed />
        </Wrapper>
      </Suspense>
    ),
  },
  {
    path: "/terms",
    element: (
      <Suspense fallback={<Loading />}>
        <Wrapper>
          <TermsOfUse />
        </Wrapper>
      </Suspense>
    ),
  },
  {
    path: "/services",
    element: (
      <Suspense fallback={<Loading />}>
        <Wrapper>
          <Services />
        </Wrapper>
      </Suspense>
    ),
  },
  {
    path: "/privacy",
    element: (
      <Suspense fallback={<Loading />}>
        <Wrapper>
          <PrivacyPolicy />
        </Wrapper>
      </Suspense>
    ),
  },
  {
    path: "/about",
    element: (
      <Suspense fallback={<Loading />}>
        <Wrapper>
          <Culture />
        </Wrapper>
      </Suspense>
    ),
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<Loading />}>
        <Wrapper>
          <Login />
        </Wrapper>
      </Suspense>
    ),
  },
  {
    path: "/signup",
    element: (
      <Suspense fallback={<Loading />}>
        <Wrapper>
          <SignUp />
        </Wrapper>
      </Suspense>
    ),
  },
  // {
  //   path: "/comingsoon",
  //   element: (
  //     <Suspense fallback={<Loading />}>
  //       <Wrapper>
  //         <ComingSoon />
  //       </Wrapper>
  //     </Suspense>
  //   ),
  // },
  // {
  //   path: "/comingnew",
  //   element: (
  //     <Suspense fallback={<Loading />}>
  //       <Wrapper>
  //         <WhatsNew />
  //       </Wrapper>
  //     </Suspense>
  //   ),
  // },
  {
    path: "/popup",
    element: (
      <Suspense fallback={<Loading />}>
        <Wrapper>
          <Popup />
        </Wrapper>
      </Suspense>
    ),
  },
  {
    path: "/inside-services",
    element: (
      <Suspense fallback={<Loading />}>
        <Wrapper>
          <InsideServices></InsideServices>
        </Wrapper>
      </Suspense>
    ),
  },
  {
    path: "/services/inside-services",
    element: (
      <Suspense fallback={<Loading />}>
        <Wrapper>
          <InsideServices></InsideServices>
        </Wrapper>
      </Suspense>
    ),
  },

  {
    path: "*",
    element: (
      <Suspense fallback={<Loading />}>
        <Wrapper>
          <PageNotFound />
        </Wrapper>
      </Suspense>
    ),
  },

  // },
  // {
  //   path: "/contact",
  //   element: (
  //     <Suspense fallback={<Loading />}>
  //       <Wrapper>
  //         <Contact />
  //       </Wrapper>
  //     </Suspense>
  //   ),
  // },
  // {
  //   path: "/sitemap",
  //   element: (
  //     <Suspense fallback={<Loading />}>
  //       <Wrapper>
  //         <SiteMap />
  //       </Wrapper>
  //     </Suspense>
  //   ),
  // },
  // {
  //   path: "/careers",
  //   element: (
  //     <Suspense fallback={<Loading />}>
  //       <Wrapper>
  //         <Careers />
  //       </Wrapper>
  //     </Suspense>
  //   ),
  // },
  // {
  //   path: "/ab",
  //   element: (
  //     <Suspense fallback={<Loading />}>
  //       <Wrapper>
  //         <About />
  //       </Wrapper>
  //     </Suspense>
  //   ),
  // },

  // {
  //   path: "/blog",
  //   element: (
  //     <Suspense fallback={<SkeltonLoader />}>
  //       <Wrapper>
  //         <Blog />
  //       </Wrapper>
  //     </Suspense>
  //   ),
  // },
  // {
  //   path: "/blog/:id",
  //   element: (
  //     <Suspense fallback={<Loading />}>
  //       <Wrapper>
  //         <BlogDetailed />
  //       </Wrapper>
  //     </Suspense>
  //   ),
  // },
  // {
  //   path: "/works",
  //   element: (
  //     <Suspense fallback={<Loading />}>
  //       <Wrapper>
  //         <Works />
  //       </Wrapper>
  //     </Suspense>
  //   ),
  // },
  // {
  //   path: "/works/:title",
  //   element: (
  //     <Suspense fallback={<Loading />}>
  //       <Wrapper>
  //         <WorkDetailed />
  //       </Wrapper>
  //     </Suspense>
  //   ),
  // },
  // {
  //   path: "/terms",
  //   element: (
  //     <Suspense fallback={<Loading />}>
  //       <Wrapper>
  //         <TermsOfUse />
  //       </Wrapper>
  //     </Suspense>
  //   ),
  // },
  // {
  //   path: "/services",
  //   element: (
  //     <Suspense fallback={<Loading />}>
  //       <Wrapper>
  //         <Services />
  //       </Wrapper>
  //     </Suspense>
  //   ),
  // },
  // {
  //   path: "/privacy",
  //   element: (
  //     <Suspense fallback={<Loading />}>
  //       <Wrapper>
  //         <PrivacyPolicy />
  //       </Wrapper>
  //     </Suspense>
  //   ),
  // },
  // {
  //   path: "/about",
  //   element: (
  //     <Suspense fallback={<Loading />}>
  //       <Wrapper>
  //         <Culture />
  //       </Wrapper>
  //     </Suspense>
  //   ),
  // },
  // {
  //   path: "/login",
  //   element: (
  //     <Suspense fallback={<Loading />}>
  //       <Wrapper>
  //         <Login />
  //       </Wrapper>
  //     </Suspense>
  //   ),
  // },
  // {
  //   path: "/signup",
  //   element: (
  //     <Suspense fallback={<Loading />}>
  //       <Wrapper>
  //         <SignUp />
  //       </Wrapper>
  //     </Suspense>
  //   ),
  // },
  // {
  //   path: "*",
  //   element: (
  //     <Suspense fallback={<Loading />}>
  //       <Wrapper>
  //         <PageNotFound />
  //       </Wrapper>
  //     </Suspense>
  //   ),
  // },
]);

export default Router;
