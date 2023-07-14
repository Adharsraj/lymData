import React from 'react'
import Footer from '../Components/Footer'
import Hero from '../Components/Home/Hero'
import HowWeThinkk from '../Components/Home/HowWeThinkk'
import IndustriesWeKnow from '../Components/Home/IndustriesWeKnow'
import ProcessDrivenDesign from '../Components/Home/ProcessDrivenDesign'
// import Test from '../Components/Home/Test'
import Within7Industries from '../Components/Home/Within7Industries'
import Navbar from '../Components/Navbar'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    {/* <Test/> */}
    <HowWeThinkk/>
    <ProcessDrivenDesign/>
    <IndustriesWeKnow/>
    <Within7Industries/>
    <Footer/>
    </>
  )
}

export default Home