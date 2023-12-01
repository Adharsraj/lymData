import React, { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import awards from '../../assets/scrollings/awards.jpg'
import experts from '../../assets/scrollings/experts.png'
import offices from '../../assets/scrollings/offices.jpg'
import projects from '../../assets/scrollings/projects.png'
import years from '../../assets/scrollings/years.png'

gsap.registerPlugin(ScrollTrigger);

const DhnnScroller = () => {
    useGSAP(()=>{
        const vh = (value) => `${value * window.innerHeight / 100}px`;

        gsap.to('.img1', {
          y: vh(230),
          scaleY: 0,
          scaleX: 0.5,
          opacity: 0,
      
          scrollTrigger: {
            trigger: ".img2",
            start: "top 0px",
            end: `+=${vh(100)}`, 
            scrub: true,
            
          }
        });
      
      
      gsap.to('.img1count', {
        y: vh(210),
        scrollTrigger: {
          trigger:".img2",
          start: "top 0px",
          end: `+=${vh(100)}`,
          scrub: true,
          
        }
      });
      
      
      
      
      gsap.to('.img2',{
        y: vh(185),
        scaleY:0,
        scaleX:0.2,
        opacity:0,
        scrollTrigger: {
        trigger:".img1count",
        start:"top 0px",
        end: `+=${vh(130)}`,
        scrub: true,
        
        }
      })
      
      gsap.to('.img2count',{
        y: vh(163),
        scrollTrigger: {
        trigger:".img2",
        start:"top 0px",
        end: `+=${vh(130)}`,
        scrub: true,
        
        }
      })
      
      
      gsap.to('.img3',{
        y: vh(128),
        scaleY:0,
        scaleX:1,
        opacity:0,
        x:-50,
      
        scrollTrigger: {
        trigger:".img2",
        start:"top 0px",
        end: `+=${vh(130)}`,
        scrub: true,
        
        }
      })
      
      gsap.to('.img3count',{
        y: vh(108),
        x:-50,
      
        scrollTrigger: {
        trigger:".img2",
        start:"top 0px",
        end: `+=${vh(130)}`,
        scrub: true,
        
        }
      })
      
      
      gsap.to('.img4',{
        y: vh(100),
        scaleY:0,
        scaleX:1,
        opacity:0,
        x:-50,
      
        scrollTrigger: {
        trigger:".img3",
        start:"top 0px",
        end: `+=${vh(70)}`,
        scrub: true,
        
        }
      })
      
      gsap.to('.img4count',{
        y: vh(62),
        x:-50,
      
        scrollTrigger: {
          trigger:".img3",
          start:"top 0px",
          end: `+=${vh(70)}`,
          scrub: true,
        
        }
      })
      
      gsap.to('.img5',{
        y: vh(100),
        scaleY:0,
        scaleX:1,
        opacity:0,
        x:-50,
      
        scrollTrigger: {
        trigger:".im",
        start:"top 0px",
        end: `+=${vh(80)}`,
        scrub: true,
        
        }
      })
      
      gsap.to('.img5count',{
        y: vh(60),
        x:-50,
      
        scrollTrigger: {
          trigger:".im",
          start:"top 0px",
          end: `+=${vh(80)}`,
        scrub: true,
        
        }
      })
      
      
          
          
          
    },[])
  return (


    <>
<div  className='overflow-hidden md:hidden'>
    <div  className='w-full  flex justify-end ml-10'>
      <img
        src={awards}
        className='h-[350px] rounded-3xl  '    />
    </div>
    <div className='mt-20  w-full ml-[-100px]'>
      <img
        src={projects}
        alt="dhnn"
        className='rounded-3xl'
      />
    </div>
    <div className='mt-20  w-full ml-16'>
        <img
        src={experts}
        className='rounded-3xl'

        alt="dhnn"
      />
    </div>
    <div className='mt-20  w-full  flex justify-center ml-5'>
      <img
        src={years}
        alt="dhnn"
        className='rounded-3xl h-[250px] w-[250px]'

      />
    </div>

    <div className='mt-20  w-full pb-10 '>
      <img
              src={offices}
              className='rounded-3xl h-[400px] w-[300px] ml-[-100px]'

        alt="dhnn"
      />
    </div>

  </div> 

<div class="bg-black text-white hidden md:block ">
    <div class="flex flex-col   justify-center ml-[500px] items-center">
      <img
        src={awards}
        alt="dhnn"
        class="  img1 object-cover  rounded-xl flex justify-end w-[300px] h-[300px] home-weare-card-img img-mobile"
      />
      {/* <h1 class="img1count">1</h1> */}
    </div>
                
    <div className='z-50 border mx-auto w-[700px] fixed'>
    <h5 className='md:text-7xl font-bold'>DATA-DRIVEN</h5>
    <h5 className='md:text-7xl font-bold'>SOLUTIONS</h5>
    <h5 className='md:text-7xl font-bold'>SHAPING YOUR</h5>
    <h5 className='md:text-7xl font-bold'>DIGITAL SUCCESS</h5>
    </div>

    <div class="flex   flex-col justify-center ml-[-500px] items-center">
      <img
        src={experts}
        alt="dhnn"
        class=" img2 object-cover h-[350px]  rounded-xl home-weare-card-img"
        data-v-15ca7abc=""
      />
      {/* <h1 class="img2count">2</h1> */}
    </div>
    <div class="flex  flex-col justify-end items-end">
<h1 class="im h-[20px] "></h1>
        <img
        src={offices}
        alt="dhnn"
        class=" img3  rounded-xl object-cover h-[400px] mt-[-10vh] w-[350px] home-weare-card-img"
        data-v-15ca7abc=""
      />
      {/* <h1 class="img3count">3</h1> */}
    </div>
    <div class="flex  flex-col justify-start ml-20 items-start">
      <img
        src={projects}
        alt="dhnn"
        class=" rounded-xl img4 mt-[-10vh] h-[400px] w-[350px] object-cover home-weare-card-img"
        data-v-15ca7abc=""
      />
      {/* <h1 class="img4count">4</h1> */}
    </div>

    <div class="flex  flex-col ml-40 justify-center items-center">
      <img
        src={years}
        alt="dhnn"
        class=" rounded-xl w-[252px] h-[509px] img5 mt-[-70vh] object-cover home-weare-card-img"
        data-v-15ca7abc=""
      />
      {/* <h1 class="img5count">5</h1> */}
    </div>
<div class="h-[500px]"></div>
    {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.4.0/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.4.0/ScrollTrigger.min.js"></script>
    <script src="./script.js"></script> */}
  </div> 
  </>

   )
}

export default DhnnScroller