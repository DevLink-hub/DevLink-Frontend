import React, { useState } from 'react';
import 'animate.css';
import 'tailwindcss/tailwind.css';
import { Mail, Eye, EyeOff } from 'lucide-react';
import googleImage from '../../assets/images/google.jpg';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 mt-12">
      <div className="p-10 bg-white rounded-lg shadow-xl animate__animated animate__bounceIn animate__delay-1s">
        <h1 className="text-5xl font-extrabold text-center text-[#038C7F] animate__animated animate__pulse animate__infinite">
          DevLink!
        </h1>
        <div className="mt-8 space-y-6">
          {/* <div className="animate__animated animate__fadeIn animate__delay-1s">
            <button
              className="flex items-center justify-center w-full px-4 py-2 mb-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50"
            >
              <img src={googleImage} alt="Google logo" className="w-5 h-5 mr-3" /> 
              Continue with Google
            </button>
          </div> */}
          <div className="relative flex py-5 items-center animate__animated animate__fadeIn animate__delay-1s">
            <div className="flex-grow border-t border-gray-400"></div>
            {/* <span className="flex-shrink mx-4 text-gray-400">OR</span> */}
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <form className="space-y-6">
            <div className="rounded-md shadow-sm space-y-4">
              <div className="flex space-x-4 animate__animated animate__fadeIn animate__delay-2s">
                <div className="flex-1">
                  <label htmlFor="first_name" className="sr-only">First Name</label>
                  <input 
                    id="first_name" 
                    name="first_name" 
                    type="text" 
                    required 
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                    placeholder="First Name" 
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="last_name" className="sr-only">Last Name</label>
                  <input 
                    id="last_name" 
                    name="last_name" 
                    type="text" 
                    required 
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                    placeholder="Last Name" 
                  />
                </div>
              </div>
              <div className="animate__animated animate__fadeInLeft animate__delay-2s">
                <label htmlFor="email" className="sr-only">Email address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                  <input 
                    id="email" 
                    name="email" 
                    type="email" 
                    autoComplete="email" 
                    required 
                    className="appearance-none rounded-none relative block w-full pl-10 pr-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                    placeholder="Email address" 
                  />
                </div>
              </div>
              <div className="animate__animated animate__fadeInRight animate__delay-2s">
                <label htmlFor="password" className="sr-only">Password</label>
                <div className="relative">
                  <input 
                    id="password" 
                    name="password" 
                    type={showPassword ? 'text' : 'password'} 
                    autoComplete="current-password" 
                    required 
                    className="appearance-none rounded-none relative block w-full pl-10 pr-10 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                    placeholder="Password" 
                  />
                  {showPassword ? (
                    <EyeOff onClick={togglePasswordVisibility} className="absolute right-3 top-3 w-5 h-5 text-gray-500 cursor-pointer" />
                  ) : (
                    <Eye onClick={togglePasswordVisibility} className="absolute right-3 top-3 w-5 h-5 text-gray-500 cursor-pointer" />
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between animate__animated animate__fadeInUp animate__delay-3s">
              <div className="flex items-center">
                <input 
                  id="terms" 
                  name="terms" 
                  type="checkbox" 
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" 
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                  I agree to the <a href="#" className="text-[#038C7F] hover:text-indigo-500">User Agreement</a> and <a href="#" className="text-[#038C7F] hover:text-indigo-500">Privacy Policy</a>.
                </label>
              </div>
            </div>
            <div className="animate__animated animate__fadeIn animate__delay-4s">
              <button 
                type="submit" 
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#123834] hover:bg-[#038C7F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Join DevLink!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
