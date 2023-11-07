
import React from 'react'
import img from '../../assets/Images/login.jpeg'

const Login = () => {
  return (
    <div className='grid md:grid-cols-2 '>
      <div className='border border-red-300 w-[300px] mx-auto '>
<div className='flex flex-col  border  min-h-screen  items-center justify-center'>
  <h1>welcome back</h1>
  <h1>please enter your details</h1>
<h1 className='flex bg-red-200 rounded-full'>
  <img src="" alt="logo" />
  <h1>login with apple</h1>
</h1>
<div className='flex justify-between items-center border px-2  w-full'>
  <h1 className='w-14 h-1 mt-5 bg-red-200'></h1>
  <h1 className='mt-5'> or</h1>
  <h1 className='w-14 h-1 mt-5 bg-red-200'></h1>
</div>
<div className='flex relative'>
<input className=' rounded-full border border-black px-2' type="text" placeholder='Email' />
<img className='absolute right-0' src="" alt="dw" srcset="" />

</div>
<div className='flex relative mt-5'>
<input className=' rounded-full border border-black px-2' type="text" placeholder='Email' />
<img className='absolute right-0' src="" alt="dw" srcset="" />

</div>
<div className='flex border w-full justify-around mt-5'>
  <div className='flex justify-center items-center'>
<input type="checkbox" name="" id="" />
<h1 className='text-[8px]'>Remember for 30 days </h1>
  </div>
  <div>
    <h1 className='text-[8px] '>forgot password ?</h1>
  </div>
</div>
<div>
  <h1 className='bg-red-200 mt-5 w-[150px] text-center text-sm rounded-full'>Login</h1>
</div>
<h1>Dont have an account? sign up</h1>
</div>
      </div>











      <div className='hidden md:flex'>
<img src={img} className=' w-full h-screen md:p-3  rounded-3xl' alt="" srcset="" />
      </div>
    </div>
  )
}

export default Login