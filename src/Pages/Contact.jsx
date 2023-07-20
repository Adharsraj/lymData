import React, { useEffect } from 'react'
import Footer from '../Components/FooterZipsy'
import Navbar from '../Components/Navbar'
import OurHubs from '../Components/Contact/OurHubs'
import ReachOut from '../Components/Contact/ReachOut'
import ContactUs from '../Components/Contact/Contact'
const Contact = () => {
  useEffect(() => {
    document.title = 'LYM DATA - Contact';
  }, []);
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