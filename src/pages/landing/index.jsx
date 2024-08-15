import React, { useState } from 'react';
import { motion } from 'framer-motion';
import mapImage from '../../assets/images/map.png';
import landImage from '../../assets/images/land.png';

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.5 } },
  hover: { scale: 1.1, transition: { duration: 0.3 } },
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const developerData = {
  React: {
    total: 912,
    NorthAmerica: 480,
    SouthAmerica: 39,
    Europe: 209,
    Asia: 115,
    Africa: 62,
    Oceania: 7,
  },
  'Node.js': {
    total: 753,
    NorthAmerica: 320,
    SouthAmerica: 50,
    Europe: 200,
    Asia: 100,
    Africa: 70,
    Oceania: 13,
  },
  JavaScript: {
    total: 1123,
    NorthAmerica: 500,
    SouthAmerica: 60,
    Europe: 300,
    Asia: 150,
    Africa: 100,
    Oceania: 13,
  },
  Python: {
    total: 980,
    NorthAmerica: 400,
    SouthAmerica: 45,
    Europe: 250,
    Asia: 200,
    Africa: 70,
    Oceania: 15,
  },
  Java: {
    total: 800,
    NorthAmerica: 350,
    SouthAmerica: 40,
    Europe: 230,
    Asia: 130,
    Africa: 40,
    Oceania: 10,
  },
  Ruby: {
    total: 600,
    NorthAmerica: 300,
    SouthAmerica: 30,
    Europe: 150,
    Asia: 80,
    Africa: 30,
    Oceania: 10,
  },
  PHP: {
    total: 850,
    NorthAmerica: 370,
    SouthAmerica: 35,
    Europe: 200,
    Asia: 150,
    Africa: 75,
    Oceania: 20,
  },
  'Vue.js': {
    total: 730,
    NorthAmerica: 320,
    SouthAmerica: 30,
    Europe: 180,
    Asia: 150,
    Africa: 40,
    Oceania: 10,
  },
};

const Landing = () => {
  const [selectedTab, setSelectedTab] = useState('React');

  const renderMapUI = () => {
    if (selectedTab) {
      const data = developerData[selectedTab];

      return (
        <div className="relative flex justify-center items-center bg-[#F8F9FA] p-6">
          <motion.img
            src={mapImage}
            alt="Map"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="w-[95%] h-[70vh]"
          />
          <motion.div
            className="absolute text-center"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <h3 className="text-4xl font-bold text-[#38EF7D] mb-4">{selectedTab}</h3>
            <p className="text-xl text-white">{data.total} total developers across six continents</p>
            <div className="mt-4 text-white">
              <p>North America: {data.NorthAmerica}</p>
              <p>South America: {data.SouthAmerica}</p>
              <p>Europe: {data.Europe}</p>
              <p>Asia: {data.Asia}</p>
              <p>Africa: {data.Africa}</p>
              <p>Oceania: {data.Oceania}</p>
            </div>
          </motion.div>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      // First Section
      <div className="relative h-screen bg-gradient-to-r from-purple-400 to-pink-500 flex items-center">
        <div className="w-2/3 pl-12">
          <div className="mb-8">
            <button className="bg-green-200 text-green-700 font-bold py-2 px-4 rounded">
              Get Started
            </button>
          </div>
          <h1 className="text-5xl font-bold mb-4">Freelance Services For Your Business</h1>
          <p className="text-lg mb-8">
            Work with talented people at the most affordable price to get the most out of your time and cost
          </p>
          <div className="flex mb-8">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="py-2 px-4 rounded-l-full outline-none border border-gray-300"
            />
            <div className="border-r border-gray-300"></div>
            <input
              type="text"
              placeholder="City, state, or zip"
              className="py-2 px-4 outline-none border border-gray-300"
            />
            <button className="bg-black text-white py-2 px-4 rounded-r-full">
              Search
            </button>
          </div>
          <div className="flex space-x-4 mb-8">
            {['Designer', 'Developer', 'Web', 'IOS', 'PHP', 'Senior'].map((tab) => (
              <button
                key={tab}
                className="bg-white text-black py-2 px-4 rounded-full"
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="absolute bottom-16 left-4 bg-white text-black py-2 px-4 rounded-full">
            +12M Project Completed
          </div>
          <div className="absolute bottom-4 left-4 bg-white text-black py-2 px-4 rounded-full">
            4.9/5 Clients rate professionals
          </div>
        </div>
        <div className="w-1/3 h-full flex items-center justify-center">
          <img
            src={landImage}
            alt="Land"
            className="w-auto h-auto object-cover"
          />
        </div>
      </div>
      {/* Second Section */}
      <div className="bg-[#202126] text-white py-16 px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">
            Access top engineers from around the globe
          </h2>
          <p className="text-lg mt-2 text-gray-400">
            We have thousands of vetted, elite software professionals ready to get to work
          </p>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">
            Most popular frameworks and languages
          </h3>
          <div className="flex justify-center space-x-4 flex-wrap">
            {['React', 'Node.js', 'JavaScript', 'Python', 'Java', 'Ruby', 'PHP', 'Vue.js'].map((tab) => (
              <button
                key={tab}
                className={`${selectedTab === tab ? 'bg-[#38ef7d] text-black' : 'bg-gray-800 text-[#38EF7D]'
                  } font-semibold py-2 px-4 rounded-lg`}
                onClick={() => setSelectedTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <p className="text-sm mt-6 text-gray-400">
            Tap a skill to see geographic distribution
          </p>
        </div>
      </div>
      {renderMapUI()}

      {/* Third Section */}
      <div className="h-3/4 flex flex-col justify-center items-center bg-[#F8F9FA] p-6">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-[#123834]">
            DevLink is The world's largest workplace
          </h2>
          <p className="text-md mt-2">
            Millions of users, from small businesses to large enterprises, entrepreneurs to startups, use DevLink to turn their ideas into reality.
          </p>
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
