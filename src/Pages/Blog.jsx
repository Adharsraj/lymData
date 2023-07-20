import React, { useEffect } from 'react'
import AllBlogs from '../Components/Blog/AllBlogs'
import BlogFeatured from '../Components/Blog/BlogFeatured'
import Footer from '../Components/FooterZipsy'
import Navbar from '../Components/Navbar'

const Blog = () => {
  useEffect(() => {
    document.title = 'LYM DATA - Blogs';
  }, []);
  return (
    <>
    <Navbar/>
    <BlogFeatured/>
    <AllBlogs/>
    <Footer/>
    </>
  )
}

export default Blog