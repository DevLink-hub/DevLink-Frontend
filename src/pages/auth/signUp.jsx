import React, { useState, useEffect } from 'react';
import 'animate.css';
import 'tailwindcss/tailwind.css';
import { Mail, Eye, EyeOff } from 'lucide-react';
import { apiCheckUsernameExists, apiSignUp } from '../../services/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader';
import { debounce } from 'lodash';
import { useForm } from 'react-hook-form';
import signsImage from '../../assets/images/signs.jpeg';

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [usernameAvailable, setUsernameAvailable] = useState(false);
  const [usernameNotAvailable, setUsernameNotAvailable] = useState(false);
  const [isUsernameLoading, setIsUsernameLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const userNameWatch = watch("username");

  const checkUsername = async (username) => {
    setIsUsernameLoading(true);
    try {
      const res = await apiCheckUsernameExists(username);
      const user = res.data.user;
      if (user) {
        setUsernameNotAvailable(true);
        setUsernameAvailable(false);
      } else {
        setUsernameAvailable(true);
        setUsernameNotAvailable(false);
      }
    } catch (error) {
      console.error('Error checking username:', error);
      toast.error("An error occurred!");
    } finally {
      setIsUsernameLoading(false);
    }
  };

  useEffect(() => {
    const debouncedSearch = debounce(async () => {
      if (userNameWatch) {
        await checkUsername(userNameWatch);
      }
    }, 1000);
    debouncedSearch();

    return () => {
      debouncedSearch.cancel();
    };
  }, [userNameWatch]);

  const handleSignUpSubmit = async (data) => {
    if (!usernameAvailable) {
      toast.error('Username is already taken. Please choose another one.');
      return;
    }

    setIsSubmitting(true);
    let payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      userName: data.username,
      password: data.password,
      // confirmedPassword: data.password,
      email: data.email,
    };
    if (data.otherNames) {
      payload = { ...payload, otherNames: data.otherNames };
    }
    try {
      const res = await apiSignUp(payload);
      toast.success("Signup successful!");
      setSignupSuccess(true);
      setTimeout(() => {
        setSignupSuccess(false);
        navigate('/login');
      }, 3000);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        if (error.response.data === 'User has already signed up') {
          toast.error('User already exists. Please log in.');
        } else {
          toast.error('Unauthorized. Please check your credentials.');
        }
      } else {
        console.error('Signup error:', error);
        toast.error("An error occurred!");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative flex items-center justify-center h-screen mt-12">
      <img
        src={signsImage}
        alt="Sign Up Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative p-10 bg-white bg-opacity-70 backdrop-blur-md rounded-lg shadow-xl animate__animated animate__bounceIn animate__delay-1s">
        <h1 className="text-5xl font-extrabold text-center text-[#038C7F] animate__animated animate__pulse animate__infinite">
          DevLink!
        </h1>
        <div className="mt-8 space-y-6">
          <div className="relative flex py-5 items-center animate__animated animate__fadeIn animate__delay-1s">
            <div className="flex-grow border-t border-gray-400"></div>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <form onSubmit={handleSubmit(handleSignUpSubmit)} className="space-y-6">
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
                    {...register('firstName', { required: true })}
                  />
                  {errors.firstName && <span className="text-red-500">This field is required</span>}
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
                    {...register('lastName', { required: true })}
                  />
                  {errors.lastName && <span className="text-red-500">This field is required</span>}
                </div>
              </div>
              <div className="animate__animated animate__fadeIn animate__delay-2s">
                <label htmlFor="user_name" className="sr-only">User Name</label>
                <input
                  id="user_name"
                  name="user_name"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="User Name"
                  {...register('username', { required: true })}
                />
                {errors.username && <span className="text-red-500">This field is required</span>}
                <div className="flex items-center gap-x-2">
                  {isUsernameLoading && <Loader />}
                  {usernameNotAvailable && (
                    <p className="text-red-500">Username is already taken</p>
                  )}
                  {usernameAvailable && (
                    <p className="text-green-500">Username is available</p>
                  )}
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
                  {showPassword ? (
                    <EyeOff onClick={togglePasswordVisibility} className="absolute right-3 top-3 w-5 h-5 text-gray-500 cursor-pointer" />
                  ) : (
                    <Eye onClick={togglePasswordVisibility} className="absolute right-3 top-3 w-5 h-5 text-gray-500 cursor-pointer" />
                  )}
                  {errors.password && <span className="text-red-500">This field is required</span>}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#038C7F] hover:bg-[#038c7f7e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 animate__animated animate__fadeInUp animate__delay-3s"
                disabled={isSubmitting || isUsernameLoading}
              >
                {isSubmitting ? <Loader /> : 'Sign Up'}
              </button>
            </div>
          </form>
          <p className="mt-2 text-center text-sm text-gray-600">
            Already have an account? <a href="/login" className="font-medium text-[#038C7F] hover:text-indigo-500">Log In</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
