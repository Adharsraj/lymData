import React from 'react'

const SignUp = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="md:flex-1 bg-black p-8 md:pt-56 hidden md:block">
        <img
          src="https://res.cloudinary.com/db5gkedee/image/upload/v1690187573/assets/Logos/Companylogo_lok0s3.svg"
          alt="Login"
          className="max-w-md mx-auto"
        />
      </div>
      <div className="flex-1 bg-gray-100 flex items-center justify-center p-8">
        <div className="max-w-md w-full">
          <h2 className="text-3xl font-semibold mb-4">Sign Up</h2>
          <form>
            <div className="mb-4">
              <label className="block mb-1">Username</label>
              <input
                type="text"
                className="w-full border border-gray-500 rounded-full py-2 px-3"
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Email</label>
              <input
                type="email"
                className="w-full border border-gray-500 rounded-full py-2 px-3"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Password</label>
              <input
                type="password"
                className="w-full border border-gray-500 rounded-full py-2 px-3"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Confirm Password</label>
              <input
                type="password"
                className="w-full border border-gray-500 rounded-full py-2 px-3"
                placeholder="Confirm password"
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-indigo-400 to-cyan-400 text-white py-2 px-4 rounded-full w-full hover:bg-blue-600"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp
