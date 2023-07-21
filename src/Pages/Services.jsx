import React, { useEffect } from 'react'
import Footer from '../Components/FooterZipsy'
import Navbar from '../Components/NavbarNew'
import Approaches from '../Components/Services/Approaches'
import ServicesEnd from '../Components/Services/ServicesEnd'
import ServicesLanding from '../Components/Services/ServicesLanding'
import UseDocumentTitle from '../Hooks/UseDocumentTitle'

const Services = () => {
  UseDocumentTitle("LYM DATA | Home")

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
