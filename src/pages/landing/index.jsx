import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import landImage from '../../assets/images/land.png';
import Card from '../../components/Card.jsx';
import codeImage from '../../assets/images/code.jpg';
import programImage from '../../assets/images/program.jpg';
import serviceImage from '../../assets/images/service.jpg';
import phpImage from '../../assets/images/php.jpg';

const Landing = () => {
  const [skill, setSkill] = useState('');
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (skill.trim()) {
      navigate(`/hire?skill=${encodeURIComponent(skill)}&location=${encodeURIComponent(location)}`);
    }
  };

  return (
    <div>
      {/* First Section */}
      <div className="relative h-auto lg:h-screen bg-gradient-to-r from-purple-400 to-[#78FEC1] flex flex-col lg:flex-row items-center lg:items-start p-6 lg:p-12 mt-4">
        <div className="w-full lg:w-2/3 mb-8 lg:mb-0">
          <div className="mb-8">
            <button className="bg-green-200 text-green-700 font-bold py-2 px-4 rounded-lg">
              Get Started
            </button>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Freelance Services For Your Business
          </h1>
          <p className="text-base md:text-lg mb-8">
            Work with talented people at the most affordable price to get the most out of your time and cost
          </p>
          <div className="flex flex-col lg:flex-row lg:items-center mb-8 space-y-4 lg:space-y-0 lg:space-x-4">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="py-2 px-4 rounded-l-full outline-none border border-gray-300 flex-1"
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
            />
            <input
              type="text"
              placeholder="City, state, or zip"
              className="py-2 px-4 outline-none border border-gray-300 flex-1"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <button className="bg-black text-white py-2 px-4 rounded-r-full" onClick={handleSearch}>
              Search
            </button>
          </div>
          <div className="flex flex-wrap justify-center lg:justify-start mb-8 space-x-2 lg:space-x-4">
            {['Designer', 'Developer', 'Web', 'IOS', 'PHP', 'Senior'].map((tab) => (
              <button
                key={tab}
                className="bg-white text-black py-2 px-4 rounded-full"
                onClick={() => {
                  setSkill(tab);
                  handleSearch();
                }}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="absolute bottom-20 left-4 bg-white text-black py-2 px-4 rounded-full text-xs lg:text-sm">
            +12M Project Completed
          </div>
          <div className="absolute bottom-4 left-4 bg-white text-black py-2 px-4 rounded-full text-xs lg:text-sm">
            4.9/5 Clients rate professionals
          </div>
        </div>
        <div className="w-full lg:w-1/3 flex items-center justify-center">
          <img
            src={landImage}
            alt="Land"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
      {/* Second Section */}
      <div className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card
              title="Management software to help you manage your mobile"
              description="Development & IT"
              rating="4.5"
              reviews="2"
              startingPrice="89"
              imageUrl={serviceImage}
              author="Ali Tufan"
            />
            <Card
              title="Web development, with HTML, CSS, JavaScript and PHP"
              description="Development & IT"
              rating="4.5"
              reviews="2"
              startingPrice="69"
              imageUrl={phpImage}
              author="Agent Paku"
            />
            <Card
              title="Developers drop the framework folder into a new"
              description="Design & Creative"
              rating="4.5"
              reviews="2"
              startingPrice="128"
              imageUrl={codeImage}
              author="John Powell"
            />
            <Card
              title="Flexibility & Customization with CMS vs PHP Framework"
              description="Development & IT"
              rating="5.0"
              reviews="1"
              startingPrice="69"
              imageUrl={programImage}
              author="Thomas Paul"
            />
          </div>
        </div>
      </div>
      {/* Third Section */}
      <div className="h-auto flex flex-col justify-center items-center bg-[#F8F9FA] p-6 lg:p-12">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#123834]">
            DevLink is The world's largest workplace
          </h2>
          <p className="text-base md:text-md mt-2">
            Millions of users, from small businesses to large enterprises, entrepreneurs to startups, use DevLink to turn their ideas into reality.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:space-x-12">
          <div className="text-center mb-4 lg:mb-0">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#038C7F]">75.1M</h3>
            <p className="text-base md:text-md mt-1">REGISTERED USERS</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#038C7F]">24.0M</h3>
            <p className="text-base md:text-md mt-1">TOTAL JOBS POSTED</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
