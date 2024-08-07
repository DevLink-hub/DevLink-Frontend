import React from 'react';
import { motion } from 'framer-motion';
import heroVideo from '../../assets/images/hero.mp4';

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.5 } },
  hover: { scale: 1.1, transition: { duration: 0.3 } },
};

const hoverContentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const Landing = () => {
  return (
    <div>
      {/* First Section */}
      <div className="relative h-screen bg-black">
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-start justify-center h-full text-left text-[#038C7F] p-8 ml-16">
          <h1 className="text-5xl font-bold mb-4">Hire the best <br /> freelancers for any <br /> job, online.</h1>
          <ul className="text-lg mb-8 space-y-2 text-white">
            <li>World's largest freelance marketplace</li>
            <li>Any job you can possibly think of</li>
            <li>Save up to 90% & get quotes for free</li>
            <li>Pay only when you're 100% happy</li>
          </ul>
          <div className="flex space-x-4">
            <motion.button
              className="bg-[#123834] text-white font-bold py-2 px-4 rounded hover:bg-[#038C7F]"
              whileHover={{ scale: 1.05 }}
            >
              Hire a Freelancer
            </motion.button>
            <motion.button
              className="bg-transparent border border-white text-white font-bold py-2 px-4 rounded hover:bg-white hover:text-black"
              whileHover={{ scale: 1.05 }}
            >
              Earn Money Freelancing
            </motion.button>
          </div>
        </div>
      </div>
      {/* New Section */}
      <div className="h-3/4 flex flex-col justify-center items-center bg-[#F8F9FA] p-6">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-[#123834]">DevLink is The world's largest workplace</h2>
          <p className="text-md mt-2">Millions of users, from small businesses to large enterprises, entrepreneurs to startups, use DevLink to turn their ideas into reality.</p>
        </div>
        <div className="flex space-x-12">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-[#038C7F]">75.1M</h3>
            <p className="text-md mt-1">REGISTERED USERS</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-[#038C7F]">24.0M</h3>
            <p className="text-md mt-1">TOTAL JOBS POSTED</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Landing;
