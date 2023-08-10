import React from 'react'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";

export const WorksNew = () => {
    gsap.registerPlugin(ScrollTrigger);

    const gT1 = gsap.timeline();
    gT1.from("img1", 4, {scale: 1.4, ease: "expo.out"}, "-=2");

  return (
    <div className="max-w-[1640px] mx-auto p-4 font-dm grid mb-20  gap-8">
      <h1 className="mt-24 font-bold md:text-7xl text-4xl text-center">ALL WORKS</h1>
<div className='lg:hidden'>

      <div className='flex flex-col md:flex-row'>
        <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691644001/LYMDATALABS/Pages/Works/work1_j1n22u.jpg" alt="works1" className='md:w-[750px] w-full md:h-[450px] h-[180px]' id='img1'/>
        <div > 
            <h2 className='font-bold md:text-5xl text-2xl mt-3 md:px-5 '>paper sky 2023 SS</h2>  
            <div className='md:mt-96 flex md:justify-center md:item-center gap-96'>
            <h5 className='md:px-5'>2023</h5>
            <div className="md:flex hidden  group hover:cursor-pointer  w-full   mx-auto">
                  <h1 className="p-1 rounded-full w-[120px] text-white text-center bg-[#7B7B7B] transition-all duration-300 transform group-hover:-translate-x-[-56px]">
                    view more
                  </h1>
                  <h1 className="p-2 rounded-full w-[40px] bg-[#7B7B7B]">
                    <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg" />
                  </h1>
            </div>
            </div>
            </div>
            </div>


            <div className='flex mt-10 gap-5 flex-col md:flex-row'>
            <div className='order-2'>
            <h2 className='font-bold md:text-5xl text-2xl md:px-5'>GARDEN RESTAURANT TOKUGAWAEN</h2>  
            <div className='md:mt-96 flex md:justify-center md:item-center gap-96'>
            <h5 className='md:px-5'>2023</h5>
            <div className="md:flex hidden  group hover:cursor-pointer  w-full   mx-auto">
                  <h1 className="p-1 rounded-full w-[120px] text-white text-center bg-[#7B7B7B] transition-all duration-300 transform group-hover:-translate-x-[-56px]">
                    view more
                  </h1>
                  <h1 className="p-2 rounded-full w-[40px] bg-[#7B7B7B]">
                    <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg" />
                  </h1>
            </div>
            </div>
            </div>
                <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691644008/LYMDATALABS/Pages/Works/work2_vboqnx.jpg" alt="works4" className='md:w-[750px] w-full md:h-[450px] h-[180px] order-1'/>
            </div>


        {/* <div className='flex mt-10 flex-col md:flex-row'>
            <div className='order-2'>
            <h2 className='font-bold md:text-5xl text-2xl md:px-5'>GARDEN RESTAURANT TOKUGAWAEN</h2>  
            <div className='md:mt-80 flex md:justify-center md:item-center md:gap-96'>
            <h5 className='md:px-5'>2023</h5>
            <div className="md:flex hidden  group hover:cursor-pointer  w-full   mx-auto">
                  <h1 className="p-1 rounded-full w-[120px] text-white text-center bg-[#7B7B7B] transition-all duration-300 transform group-hover:-translate-x-[-56px]">
                    view more
                  </h1>
                  <h1 className="p-2 rounded-full w-[40px] bg-[#7B7B7B]">
                    <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg" />
                  </h1>
            </div>
            </div>
            </div>
            <div className='order-1'>
            <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691644008/LYMDATALABS/Pages/Works/work2_vboqnx.jpg" alt="works2" className='md:w-[750px] w-full md:h-[450px] h-[180px]'/>
            </div>
            </div> */}

            <div className='flex mt-10 flex-col md:flex-row'>
        <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691644013/LYMDATALABS/Pages/Works/work3_r282ao.jpg" alt="works3" className='md:w-[750px] w-full md:h-[450px] h-[180px]'/>
        <div>
            <h2 className='font-bold md:text-5xl text-2xl md:px-5'>SERGIO</h2>  
            <div className='md:mt-96 flex md:justify-center md:item-center gap-96'>
            <h5 className='md:px-5'>2022</h5>
            <div className="md:flex hidden  group hover:cursor-pointer  w-full   mx-auto">
                  <h1 className="p-1 rounded-full w-[120px] text-white text-center bg-[#7B7B7B] transition-all duration-300 transform group-hover:-translate-x-[-56px]">
                    view more
                  </h1>
                  <h1 className="p-2 rounded-full w-[40px] bg-[#7B7B7B]">
                    <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg" />
                  </h1>
            </div>
            </div>
            </div>
            </div>

            <div className='flex mt-10 gap-5 flex-col md:flex-row'>
            <div className='order-2'>
            <h2 className='font-bold md:text-5xl text-2xl md:px-5'>Arimatsu SDGs Project</h2>  
            <div className='md:mt-96 flex md:justify-center md:item-center gap-96'>
            <h5 className='md:px-5'>2022</h5>
            <div className="md:flex hidden  group hover:cursor-pointer  w-full   mx-auto">
                  <h1 className="p-1 rounded-full w-[120px] text-white text-center bg-[#7B7B7B] transition-all duration-300 transform group-hover:-translate-x-[-56px]">
                    view more
                  </h1>
                  <h1 className="p-2 rounded-full w-[40px] bg-[#7B7B7B]">
                    <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg" />
                  </h1>
            </div>
            </div>
            </div>
                <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691644018/LYMDATALABS/Pages/Works/work4_spzagb.jpg" alt="works4" className='md:w-[750px] w-full md:h-[450px] h-[180px] order-1'/>
            </div>

            <div className='flex mt-10 flex-col md:flex-row'>
        <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691644034/LYMDATALABS/Pages/Works/work5_o8ei7z.jpg" alt="works5" className='md:w-[750px] w-full md:h-[450px] h-[180px]'/>
        <div>
            <h2 className='font-bold md:text-5xl text-2xl md:px-5'>YOKKAICHI HARBOR ONOE BESSO</h2>  
            <div className='md:mt-80 flex md:justify-center md:item-center gap-96'>
            <h5 className='md:px-5'>2022</h5>
            <div className="md:flex hidden  group hover:cursor-pointer  w-full   mx-auto">
                  <h1 className="p-1 rounded-full w-[120px] text-white text-center bg-[#7B7B7B] transition-all duration-300 transform group-hover:-translate-x-[-56px]">
                    view more
                  </h1>
                  <h1 className="p-2 rounded-full w-[40px] bg-[#7B7B7B]">
                    <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg" />
                  </h1>
            </div>
            </div>
            </div>
            </div>

            <div className='flex mt-10 flex-col md:flex-row'>
            <div className='order-2'>
            <h2 className='font-bold md:text-5xl text-2xl md:px-5'>BISHO EN - SHIKEMICHI KIMONO STUDIO</h2>  
            <div className='md:mt-80 flex md:justify-center md:item-center gap-96'>
            <h5 className='md:px-5'>2022</h5>
            <div className="md:flex hidden  group hover:cursor-pointer  w-full   mx-auto">
                  <h1 className="p-1 rounded-full w-[120px] text-white text-center bg-[#7B7B7B] transition-all duration-300 transform group-hover:-translate-x-[-56px]">
                    view more
                  </h1>
                  <h1 className="p-2 rounded-full w-[40px] bg-[#7B7B7B]">
                    <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg" />
                  </h1>
            </div>
            </div>
            </div>
        
            <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691644052/LYMDATALABS/Pages/Works/work6_dhveap.jpg" alt="works6" className='md:w-[750px] w-full md:h-[450px] h-[180px] order-1'/>
            
            </div>

            <div className='flex mt-10 flex-col md:flex-row'>
        <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691644059/LYMDATALABS/Pages/Works/work7_pa7lj1.jpg" alt="works7" className='md:w-[750px] w-full md:h-[450px] h-[180px]'/>
        <div>
            <h2 className='font-bold md:text-5xl text-2xl md:px-5'>FUSION DE TROISA</h2>  
            <div className='md:mt-96 flex md:justify-center md:item-center gap-96'>
            <h5 className='md:px-5'>2022</h5>
            <div className="md:flex hidden  group hover:cursor-pointer  w-full   mx-auto">
                  <h1 className="p-1 rounded-full w-[120px] text-white text-center bg-[#7B7B7B] transition-all duration-300 transform group-hover:-translate-x-[-56px]">
                    view more
                  </h1>
                  <h1 className="p-2 rounded-full w-[40px] bg-[#7B7B7B]">
                    <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg" />
                  </h1>
            </div>
            </div>
            </div>
            </div>

            <div className='flex mt-10 flex-col md:flex-row'>
            <div className='order-2'>
            <h2 className='font-bold md:text-5xl text-2xl md:px-5'>Anouk | dress shop</h2>  
            <div className='md:mt-96 flex md:justify-center md:item-center gap-96'>
            <h5 className='md:px-5'>2022</h5>
            <div className="md:flex hidden  group hover:cursor-pointer  w-full   mx-auto">
                  <h1 className="p-1 rounded-full w-[120px] text-white text-center bg-[#7B7B7B] transition-all duration-300 transform group-hover:-translate-x-[-56px]">
                    view more
                  </h1>
                  <h1 className="p-2 rounded-full w-[40px] bg-[#7B7B7B]">
                    <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg" />
                  </h1>
            </div>
            </div>
            </div>
        
            <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691644072/LYMDATALABS/Pages/Works/work8_eptznq.jpg" alt="works8" className='md:w-[750px] w-full md:h-[450px] h-[180px] order-1'/>
            
            </div>

            <div className='flex mt-10 flex-col md:flex-row'>
        <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691644079/LYMDATALABS/Pages/Works/work9_a0npgk.jpg" alt="works9" className='md:w-[750px] w-full md:h-[450px] h-[180px]'/>
        <div>
            <h2 className='font-bold md:text-5xl text-2xl md:px-5'>Yamai pottery Co., Ltd.</h2>  
            <div className='md:mt-96 flex md:justify-center md:item-center gap-96'>
            <h5 className='md:px-5'>2022</h5>
            <div className="md:flex hidden  group hover:cursor-pointer  w-full   mx-auto">
                  <h1 className="p-1 rounded-full w-[120px] text-white text-center bg-[#7B7B7B] transition-all duration-300 transform group-hover:-translate-x-[-56px]">
                    view more
                  </h1>
                  <h1 className="p-2 rounded-full w-[40px] bg-[#7B7B7B]">
                    <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg" />
                  </h1>
            </div>
            </div>
            </div>
            </div>

            <div className='flex mt-10 flex-col md:flex-row'>
            <div className='order-2'>
            <h2 className='font-bold md:text-5xl text-2xl md:px-5'>Gero Onsen Yunoshimakan</h2>  
            <div className='md:mt-96 flex md:justify-center md:item-center gap-96'>
            <h5 className='md:px-5'>2022</h5>
            <div className="md:flex hidden  group hover:cursor-pointer  w-full   mx-auto">
                  <h1 className="p-1 rounded-full w-[120px] text-white text-center bg-[#7B7B7B] transition-all duration-300 transform group-hover:-translate-x-[-56px]">
                    view more
                  </h1>
                  <h1 className="p-2 rounded-full w-[40px] bg-[#7B7B7B]">
                    <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg" />
                  </h1>
            </div>
            </div>
            </div>
        
            <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691644088/LYMDATALABS/Pages/Works/work10_su8uvr.jpg" alt="works10" className='md:w-[750px] w-full md:h-[450px] h-[180px] order-1'/>
            
            </div>
            </div>



            <div className='hidden lg:block'>

      <div className='flex flex-col md:flex-row'>
        <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691644001/LYMDATALABS/Pages/Works/work1_j1n22u.jpg" alt="works1" className='md:w-[750px] w-[350px] md:h-[450px] h-[180px]'/>
        <div > 
            <h2 className='font-bold md:text-5xl text-2xl mt-3 md:px-5 '>paper sky 2023 SS</h2>  
            <div className='md:mt-96 flex md:justify-center md:item-center gap-96'>
            <h5 className='md:px-5'>2023</h5>
            <div className="md:flex hidden  group hover:cursor-pointer  w-full   mx-auto">
                  <h1 className="p-1 rounded-full w-[120px] text-white text-center bg-[#7B7B7B] transition-all duration-300 transform group-hover:-translate-x-[-56px]">
                    view more
                  </h1>
                  <h1 className="p-2 rounded-full w-[40px] bg-[#7B7B7B]">
                    <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg" />
                  </h1>
            </div>
            </div>
            </div>
            </div>

        <div className='flex mt-10 flex-col md:flex-row'>
            <div className=''>
            <h2 className='font-bold md:text-5xl text-2xl md:px-5'>GARDEN RESTAURANT TOKUGAWAEN</h2>  
            <div className='md:mt-80 flex md:justify-center md:item-center md:gap-96'>
            <h5 className='md:px-5'>2023</h5>
            <div className="md:flex hidden  group hover:cursor-pointer  w-full   mx-auto">
                  <h1 className="p-1 rounded-full w-[120px] text-white text-center bg-[#7B7B7B] transition-all duration-300 transform group-hover:-translate-x-[-56px]">
                    view more
                  </h1>
                  <h1 className="p-2 rounded-full w-[40px] bg-[#7B7B7B]">
                    <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg" />
                  </h1>
            </div>
            </div>
            </div>
            <div className='order-1'>
            <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691644008/LYMDATALABS/Pages/Works/work2_vboqnx.jpg" alt="works2" className='md:w-[750px] w-[350px] md:h-[450px] h-[180px]'/>
            </div>
            </div>

            <div className='flex md:mt-10 flex-col md:flex-row'>
        <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691644013/LYMDATALABS/Pages/Works/work3_r282ao.jpg" alt="works3" className='md:w-[750px] w-[350px] md:h-[450px] h-[180px]'/>
        <div>
            <h2 className='font-bold md:text-5xl text-2xl md:px-5'>SERGIO</h2>  
            <div className='md:mt-96 flex md:justify-center md:item-center gap-96'>
            <h5 className='md:px-5'>2022</h5>
            <div className="md:flex hidden  group hover:cursor-pointer  w-full   mx-auto">
                  <h1 className="p-1 rounded-full w-[120px] text-white text-center bg-[#7B7B7B] transition-all duration-300 transform group-hover:-translate-x-[-56px]">
                    view more
                  </h1>
                  <h1 className="p-2 rounded-full w-[40px] bg-[#7B7B7B]">
                    <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg" />
                  </h1>
            </div>
            </div>
            </div>
            </div>

            <div className='flex mt-10 gap-5 flex-col md:flex-row'>
            <div className='order'>
            <h2 className='font-bold md:text-5xl text-2xl md:px-5'>Arimatsu SDGs Project</h2>  
            <div className='md:mt-96 flex md:justify-center md:item-center gap-96'>
            <h5 className='md:px-5'>2022</h5>
            <div className="md:flex hidden  group hover:cursor-pointer  w-full   mx-auto">
                  <h1 className="p-1 rounded-full w-[120px] text-white text-center bg-[#7B7B7B] transition-all duration-300 transform group-hover:-translate-x-[-56px]">
                    view more
                  </h1>
                  <h1 className="p-2 rounded-full w-[40px] bg-[#7B7B7B]">
                    <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg" />
                  </h1>
            </div>
            </div>
            </div>
                <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691644018/LYMDATALABS/Pages/Works/work4_spzagb.jpg" alt="works4" className='md:w-[750px] w-[350px] md:h-[450px] h-[180px] order-1'/>
            </div>

            <div className='flex mt-10 flex-col md:flex-row'>
        <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691644034/LYMDATALABS/Pages/Works/work5_o8ei7z.jpg" alt="works5" className='md:w-[750px] w-[350px] md:h-[450px] h-[180px]'/>
        <div>
            <h2 className='font-bold md:text-5xl text-2xl md:px-5'>YOKKAICHI HARBOR ONOE BESSO</h2>  
            <div className='md:mt-80 flex md:justify-center md:item-center gap-96'>
            <h5 className='md:px-5'>2022</h5>
            <div className="md:flex hidden  group hover:cursor-pointer  w-full   mx-auto">
                  <h1 className="p-1 rounded-full w-[120px] text-white text-center bg-[#7B7B7B] transition-all duration-300 transform group-hover:-translate-x-[-56px]">
                    view more
                  </h1>
                  <h1 className="p-2 rounded-full w-[40px] bg-[#7B7B7B]">
                    <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg" />
                  </h1>
            </div>
            </div>
            </div>
            </div>

            <div className='flex mt-10 flex-col md:flex-row'>
            <div className='order-'>
            <h2 className='font-bold md:text-5xl text-2xl md:px-5'>BISHO EN - SHIKEMICHI KIMONO STUDIO</h2>  
            <div className='md:mt-80 flex md:justify-center md:item-center gap-96'>
            <h5 className='md:px-5'>2022</h5>
            <div className="md:flex hidden  group hover:cursor-pointer  w-full   mx-auto">
                  <h1 className="p-1 rounded-full w-[120px] text-white text-center bg-[#7B7B7B] transition-all duration-300 transform group-hover:-translate-x-[-56px]">
                    view more
                  </h1>
                  <h1 className="p-2 rounded-full w-[40px] bg-[#7B7B7B]">
                    <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg" />
                  </h1>
            </div>
            </div>
            </div>
        
            <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691644052/LYMDATALABS/Pages/Works/work6_dhveap.jpg" alt="works6" className='md:w-[750px] w-[350px] md:h-[450px] h-[180px] order-1'/>
            
            </div>

            <div className='flex md:mt-10 flex-col md:flex-row'>
        <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691644059/LYMDATALABS/Pages/Works/work7_pa7lj1.jpg" alt="works7" className='md:w-[750px] w-[350px] md:h-[450px] h-[180px]'/>
        <div>
            <h2 className='font-bold md:text-5xl text-2xl md:px-5'>FUSION DE TROISA</h2>  
            <div className='md:mt-96 flex md:justify-center md:item-center gap-96'>
            <h5 className='md:px-5'>2022</h5>
            <div className="md:flex hidden  group hover:cursor-pointer  w-full   mx-auto">
                  <h1 className="p-1 rounded-full w-[120px] text-white text-center bg-[#7B7B7B] transition-all duration-300 transform group-hover:-translate-x-[-56px]">
                    view more
                  </h1>
                  <h1 className="p-2 rounded-full w-[40px] bg-[#7B7B7B]">
                    <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg" />
                  </h1>
            </div>
            </div>
            </div>
            </div>

            <div className='flex md:mt-10 flex-col md:flex-row'>
            <div className='order-'>
            <h2 className='font-bold md:text-5xl text-2xl md:px-5'>Anouk | dress shop</h2>  
            <div className='md:mt-96 flex md:justify-center md:item-center gap-96'>
            <h5 className='md:px-5'>2022</h5>
            <div className="md:flex hidden  group hover:cursor-pointer  w-full   mx-auto">
                  <h1 className="p-1 rounded-full w-[120px] text-white text-center bg-[#7B7B7B] transition-all duration-300 transform group-hover:-translate-x-[-56px]">
                    view more
                  </h1>
                  <h1 className="p-2 rounded-full w-[40px] bg-[#7B7B7B]">
                    <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg" />
                  </h1>
            </div>
            </div>
            </div>
        
            <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691644072/LYMDATALABS/Pages/Works/work8_eptznq.jpg" alt="works8" className='md:w-[750px] w-[350px] md:h-[450px] h-[180px] order-1'/>
            
            </div>

            <div className='flex md:mt-10 flex-col md:flex-row'>
        <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691644079/LYMDATALABS/Pages/Works/work9_a0npgk.jpg" alt="works9" className='md:w-[750px] w-[350px] md:h-[450px] h-[180px]'/>
        <div>
            <h2 className='font-bold md:text-5xl text-2xl md:px-5'>Yamai pottery Co., Ltd.</h2>  
            <div className='md:mt-96 flex md:justify-center md:item-center gap-96'>
            <h5 className='md:px-5'>2022</h5>
            <div className="md:flex hidden  group hover:cursor-pointer  w-full   mx-auto">
                  <h1 className="p-1 rounded-full w-[120px] text-white text-center bg-[#7B7B7B] transition-all duration-300 transform group-hover:-translate-x-[-56px]">
                    view more
                  </h1>
                  <h1 className="p-2 rounded-full w-[40px] bg-[#7B7B7B]">
                    <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg" />
                  </h1>
            </div>
            </div>
            </div>
            </div>

            <div className='flex md:mt-10 flex-col md:flex-row'>
            <div className='order-'>
            <h2 className='font-bold md:text-5xl text-2xl md:px-5'>Gero Onsen Yunoshimakan</h2>  
            <div className='md:mt-96 flex md:justify-center md:item-center gap-96'>
            <h5 className='md:px-5'>2022</h5>
            <div className="md:flex hidden  group hover:cursor-pointer  w-full   mx-auto">
                  <h1 className="p-1 rounded-full w-[120px] text-white text-center bg-[#7B7B7B] transition-all duration-300 transform group-hover:-translate-x-[-56px]">
                    view more
                  </h1>
                  <h1 className="p-2 rounded-full w-[40px] bg-[#7B7B7B]">
                    <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg" />
                  </h1>
            </div>
            </div>
            </div>
        
            <img src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691644088/LYMDATALABS/Pages/Works/work10_su8uvr.jpg" alt="works10" className='md:w-[750px] w-[350px] md:h-[450px] h-[180px] order-1'/>
            
            </div>
            </div>

          </div>

  )
}

export default WorksNew