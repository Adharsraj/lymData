import React, { useEffect } from 'react'
import Footer from '../Components/FooterZipsy'
import Navbar from '../Components/Navbar'
import Approaches from '../Components/Services/Approaches'
import ServicesEnd from '../Components/Services/ServicesEnd'
import ServicesLanding from '../Components/Services/ServicesLanding'

const Services = () => {
  useEffect(() => {
    document.title = 'LYM DATA - Services';
  }, []);
  return (
    <>
    <Navbar/>
      <ServicesLanding/>
      {/* <Approaches/> */}
      {/* <ServicesEnd/> */}
<Footer/>
    </>
  )
}

export default Services
