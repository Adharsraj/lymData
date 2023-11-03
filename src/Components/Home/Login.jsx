import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../../Configs/axiosInstance';
import wnew9 from "../../assets/Images/wnew9.png"

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    setErrorMessage('');

    try {
      // Make an API call to your backend here
      const response = await axiosInstance.post('/api/user/login', formData);

      // Handle the response as needed (e.g., show a success message or redirect)
      console.log('API Response:', response.data);
    } catch (error) {
      // Handle errors (e.g., show an error message)
      console.error('API Error:', error);
      if (error.response) {
        // If the server responds with an error message, set it in the state
        setErrorMessage(error.response.data.message);
      } else {
        // Handle other types of errors
        setErrorMessage('Invalid username or password');
      }
    }
  };



  return (
    // <div className="flex flex-col md:flex-row h-screen">
    //   <div className="md:flex-1 bg-white p-8 md:pt-56 hidden md:block">
    //     <div className='flex justify-center items-center gap-5'>
    //     <img
    //       src="https://res.cloudinary.com/db5gkedee/image/upload/v1690187573/assets/Logos/Companylogo_lok0s3.svg"
    //       alt="Login"
    //       className="w-20 h-20"
    //     />
    //     <h1 className='font-bold text-5xl'>LYMData</h1>
    //     </div>
    //     <h3 className='text-center font-semibold mt-10 text-xl'>A One-Stop Tool for Product Design</h3>
    //     <h3 className='text-justify mt-14 p-2 px-10'>In the world of fleeting options, Love You Million Data delivers you a zillion of perpetual future-oriented design principles to increase an organisation's innovation and competitiveness, according to the convenience of every single user, and save time by capitalising on technologies.</h3>
    //   </div>
    //   <div className="flex-1 flex items-center justify-center p-8">
    //     <div className="max-w-md w-full bg-gray-100 p-14 shadow-2xl">
    //       <h2 className="text-3xl font-semibold mb-4 text-center">Login</h2>
    //       <form onSubmit={handleSubmit}>
    //         <div className="mb-4">
    //           <label className="block mb-1">Username</label>
    //           <input
    //             type="text"
    //             name="username" 
    //             value={formData.username}
    //             onChange={handleChange}                                      
    //             className="w-full border border-gray-500 rounded-full py-2 px-3"
    //             placeholder="Enter your username"
    //             required
    //           />
    //         </div>
    //         <div className="mb-4">
    //           <label className="block mb-1">Password</label>
    //           <input
    //             type="password"
    //             name="password"
    //             value={formData.password}
    //             onChange={handleChange}
    //             className="w-full border border-gray-500 rounded-full py-2 px-3"
    //             placeholder="Enter your password"
    //             required
    //           />
    //         </div>
    //         {errorMessage && (
    //           <p className="text-red-500 text-center mb-4">{errorMessage}</p>
    //         )}
    //         <button
    //           type="submit"
    //           className="bg-gradient-to-r from-indigo-400 to-cyan-400 text-white py-2 px-4 rounded-full w-full hover:bg-blue-600"
    //         >
    //           Log in
    //         </button>

    //         <div className='flex justify-between mt-3 text-gray-500'>
    //       {/* <h3>Create account</h3> */}
    //       <h3>Forgot password?</h3>
    //       </div>

    //       {/* <h3 className='text-center mt-7 text-gray-500'>OR</h3>

    //       <div className='flex justify-center items-center gap-3 mt-7'>
    //         <img src={Icon} alt="google" className='w-7 h-7'/>
    //         <h3>Sign in with Google</h3>
    //       </div> */}


    //       <div className='px-24 mt-7'>
    //       <Link to="/" className="mt-5">
    //         <button className="bg-white  hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full shadow mt-5">
    //           Back to Home?
    //         </button>
    //       </Link>
    //       </div>
    //       </form>
           
    //     </div>
    //   </div>
    // </div>






    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-screen-xl mx-auto bg-white w-full rounded-lg shadow-lg p-6 space-y-4 flex flex-col md:flex-row">
        {/* Left Side - Login Details */}
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl font-bold text-gray-700">Login</h2>
          <form>
            {/* Add your login form fields here */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600 font-medium">Email</label>
              <input type="email" id="email" name="email" className="border rounded-md w-full py-2 px-3" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-600 font-medium">Password</label>
              <input type="password" id="password" name="password" className="border rounded-md w-full py-2 px-3" />
            </div>
            <button type="submit" className="bg-blue-500 text-white font-semibold rounded-md py-2 px-4 hover:bg-blue-600">Login</button>
          </form>
        </div>
        {/* Right Side - Image */}
        <div className="md:w-1/2 p-4 flex items-center justify-center">
          <img src={wnew9} alt="Login Image" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Login;
