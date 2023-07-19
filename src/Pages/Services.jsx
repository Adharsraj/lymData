import React from 'react'
import Footer from '../Components/FooterNew'
import Navbar from '../Components/Navbar'
import Approaches from '../Components/Services/Approaches'
import ServicesEnd from '../Components/Services/ServicesEnd'
import ServicesLanding from '../Components/Services/ServicesLanding'

const Services = () => {
  return (
    <>
    <Navbar/>
      <ServicesLanding/>
      <Approaches/>
      <ServicesEnd/>
<Footer/>
    </>
  )
}

export default Services
