import { createBrowserRouter } from "react-router-dom";
import BlogDetailed from "../Components/BlogDetailed";
import About from "../Pages/About";
import Blog from "../Pages/Blog";
import Careers from "../Pages/Careers";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
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
]);

export default Router;
