import React from 'react'
import AllBlogs from '../Components/Blog/AllBlogs'
import BlogFeatured from '../Components/Blog/BlogFeatured'
import Footer from '../Components/FooterNew'
import Navbar from '../Components/Navbar'

const Blog = () => {
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