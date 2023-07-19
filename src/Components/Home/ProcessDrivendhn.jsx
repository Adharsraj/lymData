import React from 'react'
import star from "../../assets/assets/asset 62.svg";
import arrowright from "../../assets/assets/asset 60.svg";
import { productDrivenDesign } from '../../assets/Data/data';
import { Link } from 'react-router-dom';

const ProcessDrivendhn = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };
  return (
    <div className='bg-[#BCBCBC]'>

    <div className="max-w-[1640px]  bg-[#BCBCBC] mb-10  mx-auto p-4 font-dm  md:text-xl  ">
        <div className='flex flex-between'>
            <h1 className='md:hidden'>Fields of expertise</h1>
            <div className='hidden md:flex md:flex-col w-[200px] ml-auto mr-16 text-white text-sm'>

            <h1 className=' mt-5 mb-5'>
  Products that matter are anticipated, personal and relevant to people.
</h1>
<h1>  They aren’t created by chance, nor are the fruit of inspiration. Products that matter are the end result of a curated process of ideation, incubation and implementation.
</h1>
</div>

</div>

<div className='hidden md:block text-white'>
    <div>
    <h1 className='text-[100px] lg:text-[150px] xl:text-[200px]' >process</h1>
    </div>
    <div className='flex items-center justify-around text-[100px] xl:text-[200px] xl:mt-32 lg:text-[140px] mt-14 lg:mt-20 '>
    <img className='lg:w-20 hover:animate-spin' src={star} alt="imgsmallviewstar " style={{ animationDuration: '3s' }} />
<h2>driven
</h2>
<h2>design</h2>
    </div>
</div>

<Link to="/services" onClick={handleLinkClick}>
<div className='hidden group hover:cursor-pointer md:flex text-white mt-32 xl:ml-20  justify-between md:items-center w-[600px] xl:w-[900px] lg:mb-32 '>
    <h1>Fields of expertise </h1>
    <div className="flex xl:gap-1 gap-4 w-[200px] justify-end md:w-[200px]  items-center xl:w-[560px] ">
  <h1 className="p-4 xl:w-[160px] flex text-center items-center justify-center lg:w-[160px] lg:h-10 rounded-full w-[220px] bg-[#000] transition-all duration-300  transform group-hover:-translate-x-[-56px]">
    What we do
  </h1>
  <h1 className="p-4 rounded-full text-white flex text-center items-center w-[40px]  xl:h-10   xl:w-[50px] bg-[#000]">
    <img className='lg:w-56' src={arrowright}  />
  </h1>
</div>
</div>
</Link>

<div className='md:hidden text-white text-7xl'>
    <h1>process</h1>
    <div className=' md: items-center justify-center'>
        {/* <img src={star} alt="imgsmallviewstar"  /> */}
        <h1>Driven</h1>

    </div>
    <h1>Design</h1>

</div>




<div className=' md:hidden md:flex-col w-[200px]  mr-16 text-white  text-sm'>

<h1 className=' mt-5 w-[300px] mb-5'>
Products that matter are anticipated, personal and relevant to people.
</h1>
<h1 className='w-[300px]'>  They aren’t created by chance, nor are the fruit of inspiration. Products that matter are the end result of a curated process of ideation, incubation and implementation.
</h1>
<div className="flex gap-4 w-[200px] xl:w-[560px] mx-auto">
  <h1 className="p-2 mt-10 rounded-full w-[220px] bg-[#000] transition-all duration-300  transform hover:-translate-x-[-56px]">
    Dive into our culture
  </h1>
  <h1 className="p-2 mt-10 flex items-center rounded-full text-white w-[40px] bg-[#000]">
    <img className='' src={arrowright}  />
  </h1>
</div>
</div>


<div className="z-10 relative mx-20 md:mx-12 ">
  <style>
    {`
      .hide-scrollbar::-webkit-scrollbar {
        display: none;
      }
    `}
  </style>
  <div className="w-2  md:grid md:grid-cols-3 md:gap-[200px] xxl:ml-12  lg:gap-[185px] lg:grid-cols-5 xl:gap-56 xxl:gap-[250px] hide-scrollbar">
    {productDrivenDesign.map((m) => (
      <div className="flex hover:cursor-pointer  ml-[-50px]    h-96 justify-between flex-wrap gap-5  mt-10 group">
<div className="relative lg:px-[5px] border md:border-l-transparent  md:border-t-transparent  md:border-b-transparent xl:px-10 py-2.5 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-white before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">
          <h1 className="group-hover:text-black">{m.head1}</h1>
          <h1 className="p-4 md:invisible mt-5 mb-5 group-hover:visible rounded-full text-white flex text-center items-center w-[40px] xl:h-10 xl:w-[50px] bg-[#282728]">
            <img className="lg:w-56" src={arrowright} />
          </h1>
          <h1 className="lg:text-transparent mt-20 md:invisible w-[250px] lg:w-[175px] md:w-[200px] xl:w-[145px] xxl:w-[170px] group-hover:visible text-black text-[12px] group-hover:text-black">
             {m.head2}
          </h1>
        </div>
      </div>
    ))}
  </div>
</div>






    </div>
    </div>

  )
}

export default ProcessDrivendhn