import { createBrowserRouter } from "react-router-dom";
import BlogDetailed from '../Components/Blog/BlogDetailed'
// import BlogDetailed from "../Components/BlogDetailed";
import WorkDetailed from "../Components/Works/WorkDetailed";
import About from "../Pages/About";
import Blog from "../Pages/Blog";
import Careers from "../Pages/Careers";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import TermsOfUse from "../Pages/TermsOfUse";
import Works from "../Pages/Works";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/careers",
    element: <Careers />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/blog/:id",
    element: <BlogDetailed />,
  },
  {
    path: "/works",
    element: <Works />,
  },
  {
    path: "/works/:id",
    element: <WorkDetailed />,
  },
  {
    path: "/terms",
    element: <TermsOfUse />,
  },
  {
    path: "/services",
    element: <Services />,
  },
]);

export default Router;
