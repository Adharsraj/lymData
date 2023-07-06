import React from 'react'
import AllBlogs from '../Components/AllBlogs'
import BlogFeatured from '../Components/BlogFeatured'
import Footer from '../Components/Footer'
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