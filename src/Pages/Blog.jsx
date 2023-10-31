import React from "react";
import AllBlogs from "../Components/Blog/AllBlogs";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import UseDocumentTitle from "../Hooks/UseDocumentTitle";
import BlogNew from "../Components/Blog/BlogNew";
import BlogCards from "../Components/Blog/BlogCards";

const Blog = () => {
  UseDocumentTitle("LYM DATA | Blogs");

  return (
    <>
      <div className="App">
        <div className="App-inner">
          <Navbar />
          {/* <AllBlogs /> */}
          <BlogNew />
          <BlogCards />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Blog;
