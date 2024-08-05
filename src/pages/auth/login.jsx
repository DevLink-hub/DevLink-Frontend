import React, { useState } from 'react';
import 'animate.css';
import 'tailwindcss/tailwind.css';
import { Mail, Eye, EyeOff } from 'lucide-react';
import { apiLogin } from '../../services/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader';
import { useForm } from 'react-hook-form';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const addToLocalStorage = (accessToken, user) => {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("firstName", user.firstName);
    localStorage.setItem("lastName", user.lastName);
    localStorage.setItem("userName", user.userName);
  };

  const handleLoginSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const res = await apiLogin({
        email: data.email,
        password: data.password,
      });
      console.log("Response: ", res.data);
      addToLocalStorage(res.data.accessToken, res.data.user);

      toast.success(res.data.message);
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000); // Adjusted to 2 seconds
    } catch (error) {
      console.error('Login error:', error);
      toast.error("An error occurred!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-10 bg-white rounded-lg shadow-xl animate__animated animate__bounceIn animate__delay-1s">
        <h1 className="text-5xl font-extrabold text-center text-[#038C7F] animate__animated animate__pulse animate__infinite">
          DevLink!
        </h1>
        <form onSubmit={handleSubmit(handleLoginSubmit)} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
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
                  className="appearance-none rounded-none relative block w-full pl-10 pr-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  {...register('email', { required: true })}
                />
                {errors.email && <span className="text-red-500">This field is required</span>}
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
                  {...register('password', { required: true })}
                />
                {errors.password && <span className="text-red-500">This field is required</span>}
                {showPassword ? (
                  <EyeOff onClick={togglePasswordVisibility} className="absolute right-3 top-3 w-5 h-5 text-gray-500 cursor-pointer" />
                ) : (
                  <Eye onClick={togglePasswordVisibility} className="absolute right-3 top-3 w-5 h-5 text-gray-500 cursor-pointer" />
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between animate__animated animate__fadeInUp animate__delay-3s">
            <div className="text-sm">
              <a href="#" className="font-medium text-[#038C7F] hover:text-indigo-500">
                Forgot your password?
              </a>
            </div>
          </div>
          <div className="animate__animated animate__fadeIn animate__delay-4s">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#123834] hover:bg-[#038C7F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {isSubmitting ? <Loader /> : 'Login'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
