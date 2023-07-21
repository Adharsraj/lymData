import React, { useEffect } from 'react'
import AllBlogs from '../Components/Blog/AllBlogs'
import BlogFeatured from '../Components/Blog/BlogFeatured'
import Footer from '../Components/FooterZipsy'
import Navbar from '../Components/NavbarNew'
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