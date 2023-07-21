import React, { useEffect } from 'react'
import AllBlogs from '../Components/Blog/AllBlogs'
import BlogFeatured from '../Components/Blog/BlogFeatured'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import UseDocumentTitle from '../Hooks/UseDocumentTitle'

const Blog = () => {
  UseDocumentTitle("LYM DATA | Home")

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