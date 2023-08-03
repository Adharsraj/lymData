import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Image1 from "../assets/Images/image1.jpg"
import Image2 from "../assets/Images/image2.jpg"
import Image3 from "../assets/Images/image3.jpg"
import Image4 from "../assets/Images/image4.jpeg"
import Image5 from "../assets/Images/image5.jpg"
import Image6 from "../assets/Images/image6.jpg"
import Image7 from "../assets/Images/image7.jpeg"
import Image8 from "../assets/Images/image8.jpg"
import Image9 from "../assets/Images/image9.jpg"
import Image10 from "../assets/Images/image10.svg"

const AlHubDemo = () => {
  return (
    <>
    <Navbar />
      <div className="max-w-[1640px] mx-auto p-4 font-dm grid justify-center mb-20  gap-8 ">
        <div className="mt-32">
          <img src={Image1} alt="Image1" className='px-32'/>
        <div className="grid grid-rows-3 grid-flow-col gap-4 item-center justify-center  px-32 mt-14">
            <div className="font-bold text-6xl">Gouter
            <h2 className='text-2xl mt-5'>Simple to use online QR-code menu</h2>
            <h3 className='text-3xl mt-5'>Overview</h3>
            <h3 className='text-xl text-gray-500 mt-5'>Gouter is a modern, simple to use Online QR-code Menu that allows customers to browse digital menu using their mobile devices. It gives possibility to guests not only to dine-in, but also reserve a table and make a pre-order.</h3>
            <h3 className='text-xl mt-10'>Project length &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4 months</h3>
            <h3 className='text-xl mt-3'>Sector &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Restaurant industry</h3>
            <h3 className='text-xl mt-3'>Project Goal &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Create a product that will cover all processes of restaurant life cycle</h3>
            <h3 className='text-xl mt-3'>Services &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
            Product design, Brand strategy</h3>
            </div>
            <img src={Image2} alt="Image2"/>

            <div >
                <h2 className='text-center font-bold text-4xl'>Challenge</h2>
                <h3 className='text-center mt-5 text-2xl'>Improve the efficiency of the dining experience by allowing customers to view and order from the menu digitally, reducing the need for waitstaff and streamlining the order process.
                </h3>
                <img src={Image3} alt="Image3" className='mt-14'/>

                <div className='w-[1200px] h-[500px] bg-gray-200 flex mt-14 gap-8 px-10'>
                <div className='w-[700px] mt-7'>
                <h2 className='font-bold text-4xl'>Process</h2>
                <h3 className='font-bold text-2xl mt-10'>Understanding Primary Goals & Objectives</h3>
                <h3 className='mt-5 text-xl'>Through our key findings, we identified strategies to approach user problems in the most relevant way - defining the customer journey. A critical success factor of this effort was to make sure that the value proposition was directly correlated to each stage of the journey.
                </h3>
                
                <div className='flex mt-7 gap-24 px-10'>
                <div>
                <h2 className='font-bold'>Research</h2>
                <ul className='mt-3'>
                  <li>Ethnographic User Study</li>
                  <li>User personas</li>
                  <li>Requirements Definition</li>
                  <li>Expert Analysis</li>
                </ul>
                </div>

                <div>
                  <h2 className='font-bold'>Strategy</h2>
                  <ul className='mt-3'>
                    <li>Competitive Analysis</li>
                    <li>Discovery Workshop</li>
                    <li>User Flows</li>
                    <li>Wireframes</li>
                  </ul>
                </div>
                </div>

                </div>
                
                <div>
                <img src={Image4} alt="Image4" className='mt-14 w-[600px] h-[350px]'/>
                </div>
                </div>

                <div className='flex mt-14 gap-12 border-solid'>
                <div>
                  <img src={Image5} alt="Image5" />
                </div>
                <div>
                  <img src={Image6} alt="Image6" />
                </div>
                </div>

                <div className='w-[1200px] h-[500px] bg-gray-200 flex mt-14 gap-8 px-10'>
                <div className='w-[700px] mt-7'>
                <h2 className='font-bold text-4xl'>Result</h2>
                <h3 className='font-bold text-2xl mt-10'>Functionable & Usable Design</h3>
                <h3 className='mt-5 text-xl'>Through our key findings, we identified strategies to approach user problems in the most relevant way - defining the customer journey. A critical success factor of this effort was to make sure that the value proposition was directly correlated to each stage of the journey.
                </h3>
                
                <div className='flex mt-7 gap-24 px-10'>
                <div>
                <h2 className='font-bold'>Design</h2>
                <ul className='mt-3'>
                  <li>Clickable Prototyping</li>
                  <li>250+ High Fidelity Designs</li>
                  <li>Desktop and Mobile Design</li>
                </ul>
                </div>

                <div>
                  <ul className='mt-10'>
                    <li>Style Guide</li>
                    <li>Wireframes</li>
                  </ul>
                </div>
                </div>

                </div>
                
                <div>
                <img src={Image7} alt="Image7" className='mt-16 w-[600px] h-[350px]'/>
                </div>
                </div>

                <div className='mt-14'>
                  <img src={Image8} alt="Image8" />
                </div>

                <div className='mt-14'>
                  <img src={Image9} alt="Image9" />
                </div>

               
                <div className='w-[700px] mt-7'>
                
                <div className='w-[1200px] h-[500px] bg-gray-200 flex mt-14 gap-4 px-10'>
                <div>
                <h2 className='font-bold text-xl w-[350px] mt-20'>Engineering the end-to-end experience</h2>
                </div>

                <div className='mt-10'>
                <h3 className='text-xl'>YML teams built the Obie app from scratch, along with the cloud and architecture, a machine-learning recommendation engine, a custom CMS, and an integration to sync users’ Apple HealthKit data for more comprehensive health recommendations. Our partnership transformed Obie's approach into a backend framework that iterates in sync with design — a modern, agile, empathetic approach to democratizing reproductive health.
                </h3>
                </div>
                
                </div>
                <img src={Image10} alt="Image10" className=''/>
                </div>
                
                
            </div>
            
            </div>
            
        </div>
        </div>
      <Footer />
    </>
  )
}

export default AlHubDemo
