import React, { useEffect } from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
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