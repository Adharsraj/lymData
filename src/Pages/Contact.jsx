import React, { useEffect } from 'react'
import Footer from '../Components/FooterZipsy'
import Navbar from '../Components/NavbarNew'
import OurHubs from '../Components/Contact/OurHubs'
import ReachOut from '../Components/Contact/ReachOut'
import ContactUs from '../Components/Contact/Contact'
import UseDocumentTitle from '../Hooks/UseDocumentTitle'
const Contact = () => {
  UseDocumentTitle("LYM DATA | Home")

  return (
    <>
    <Navbar/>
    <ContactUs/>
    {/* <ReachOut/> */}
    {/* <OurHubs/> */}
    <Footer/>
    </>
  )
}

export default Contact