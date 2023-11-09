
import React from 'react'
import img from '../../assets/Images/login.jpeg'
import email from "../../assets/Images/email.svg"
import password from "../../assets/Images/password.svg"
import hand from "../../assets/Images/hand.svg"

const Login = () => {
  return (
    <div className='grid md:grid-cols-2 '>
      <div className=' w-[300px] mx-auto some-ele'>
<div className='flex flex-col  min-h-screen  items-center justify-center'>
  <div className='flex'>
  <h1 className='font-bold text-4xl'>Welcome  Back</h1>
  <img src={hand} alt="" className='w-10 h-10'/>
  </div>
  <h1 className='mt-7'>Please enter your details.</h1>
{/* <h1 className='flex bg-red-200 rounded-full'>
  <img src="" alt="logo" />
  <h1>login with apple</h1>
</h1> */}
<div className='flex justify-between items-center px-2  w-full'>
  {/* <h1 className='w-14 h-1 mt-5 bg-red-200'></h1>
  <h1 className='mt-5'> or</h1>
  <h1 className='w-14 h-1 mt-5 bg-red-200'></h1> */}
</div>
<div className='flex relative mt-10'>
<input className=' rounded-full border border-gray-300 w-[250px] px-2 pt-1 pb-1' type="email" placeholder='Email' />
<img className='absolute right-2 mt-3 w-3 h-3' src={email} alt="dw" srcset="" />

</div>
<div className='flex relative mt-5'>
<input className=' rounded-full border border-gray-300 w-[250px] px-2 pt-1 pb-1' type="password" placeholder='Password' />
<img className='absolute right-2 mt-3 w-3 h-3' src={password} alt="dw" srcset="" />

</div>
<div className='flex w-full justify-around mt-5'>
  <div className='flex justify-center items-center'>
<input type="checkbox" name="" id="" />
<h1 className='text-[12px]'>Remember for 30 days </h1>
  </div>
  <div>
    <h1 className='text-[12px] '>Forgot password ?</h1>
  </div>
</div>
<div>
  <h1 className='bg-red-200 mt-10 w-[180px] p-2 text-center text-sm rounded-full'>Log In</h1>
</div>
<h1 className='mt-10'>Don't have an account? <strong>Sign Up</strong></h1>
</div>
      </div>



      <div className='hidden md:flex'>
<img src={img} className=' w-[550px] h-screen md:p-3  rounded-3xl' alt="" srcset="" />
      </div>
    </div>
  )
}

export default Login