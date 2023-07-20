import React, { useEffect } from 'react'
import Footer from '../Components/FooterZipsy'
import Hero from '../Components/Home/Hero'
import HowweThinkdhn from '../Components/Home/HowweThinkdhn'
import HowWeThinkk from '../Components/Home/HowWeThinkk'
import IndustriesWeKnow from '../Components/Home/IndustriesWeKnow2'
import IndustriesWeknowdhn from '../Components/Home/IndustriesWeknowdhn'
import Marque from '../Components/Home/Marque'
import ProcessDrivenDesign from '../Components/Home/ProcessDrivenDesign'
import ProcessDrivendhn from '../Components/Home/ProcessDrivendhn'
// import Test from '../Components/Home/Test'
import Within7Industries from '../Components/Home/Within7Industries'
import Within7Industriesdhn from '../Components/Home/Within7Industriesdhn'
import Navbar from '../Components/Navbar'
import UseDocumentTitle from '../Hooks/UseDocumentTitle'
const Home = () => {
  UseDocumentTitle("LYM DATA | Home")

  
  return (
    <>
    <Navbar />
    <Hero/>
    {/* <Test/> */}
    {/* <HowWeThinkk/> */}
    <HowweThinkdhn/>
    <ProcessDrivendhn/>
    {/* <ProcessDrivenDesign/> */}
    <IndustriesWeknowdhn/>

    {/* <IndustriesWeKnow/> */}
    <Marque/>
    <Within7Industriesdhn/>
    {/* <Within7Industries/> */}
    <Footer/>
    </>
  )
}

export default Home