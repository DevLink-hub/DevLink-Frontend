import React from 'react';
import { CodeBracketIcon, UserCircleIcon, ShieldCheckIcon, StarIcon, CheckBadgeIcon, DocumentTextIcon, ShieldExclamationIcon, CursorArrowRaysIcon } from '@heroicons/react/24/outline';
import hireImage from '../../assets/images/hire.webp';
import seaImage from '../../assets/images/sea.webp';
import colorImage from '../../assets/images/color.webp';
import marjanImage from '../../assets/images/marjan.webp';
import gauravImage from '../../assets/images/gaurav.webp';
import { motion } from 'framer-motion';
import 'animate.css';

const Hire = () => {
  return (
    <div className="p-8">
      <div className="relative h-screen bg-cover bg-center mt-8" style={{ backgroundImage: `url(${hireImage})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-start justify-center h-full text-left text-[#038C7F] p-8 ml-16">
          <h1 className="text-5xl font-bold mb-4">Hire expert<br /> JavaScript Developers <br /> for any job.</h1>
          <ul className="text-lg mb-8 space-y-2 text-white">
            <li>Millions of people use</li>
            <li>DevLink to turn their ideas</li>
            <li>into reality.</li>
          </ul>
          <div className="flex space-x-4 mt-12">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 mt-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <CodeBracketIcon className="h-12 w-12 text-[#038C7F] mr-4" />
            <h2 className="text-xl font-semibold">What is JavaScript?</h2>
          </div>
          <p className="text-gray-700">
            JavaScript (often shortened to JS) is the programming language of HTML and the Web. While it is best known as the scripting language for web pages, it is also used in many non-browser environments.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md mt-12">
          <div className="flex items-center mb-4">
            <UserCircleIcon className="h-12 w-12 text-[#038C7F] mr-4" />
            <h2 className="text-xl font-semibold">Hire a JavaScript Developer</h2>
          </div>
          <p className="text-gray-700">
            At Freelancer.com you will find JavaScript professionals to help you with all your website building and interactivity needs. You'll also find experts in HTML, Bootstrap CSS...and more!
          </p>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 animate__animated animate__fadeInUp">Hire JavaScript Developers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: 'Seabit Media', rate: '$15 per hour', jobs: '6391 jobs', rating: '4.9', img: seaImage, iconColor: 'blue-500' },
            { name: 'colorgraphicz', rate: '$10 per hour', jobs: '5321 jobs', rating: '4.8', img: colorImage, iconColor: 'orange-500' },
            { name: 'Marjan A.', rate: '$130 per hour', jobs: '4384 jobs', rating: '4.9', img: marjanImage, iconColor: 'red-500' },
            { name: 'Gaurav C.', rate: '$40 per hour', jobs: '4362 jobs', rating: '4.9', img: gauravImage, iconColor: 'green-500' },
          ].map((developer, index) => (
            <motion.div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center animate__animated animate__fadeInUp animate__delay-1s" whileHover={{ scale: 1.05 }}>
              <img src={developer.img} alt={developer.name} className="w-24 h-24 rounded-full mb-4" />
              <h3 className="text-lg font-semibold">{developer.name}</h3>
              <p className="text-gray-600">{developer.rate}</p>
              <div className="flex items-center text-gray-600 mb-4">
                <ShieldCheckIcon className={`h-5 w-5 text-${developer.iconColor} mr-1`} />
                <span>{developer.jobs}</span>
              </div>
              <div className="flex items-center mb-4">
                <StarIcon className="h-5 w-5 text-yellow-400 mr-1" />
                <span>{developer.rating}</span>
              </div>
              <button className="bg-[#038C7F] text-white px-4 py-2 rounded-lg">View Profile</button>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">How hiring a JavaScript Developer works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { title: 'Post a job', description: 'Tell us what you need done in seconds.', icon: UserCircleIcon },
            { title: 'Choose freelancers', description: 'Get your first bid in seconds and choose from the best.', icon: CursorArrowRaysIcon },
            { title: 'Track progress', description: 'Chat with your freelancer and review their work 24/7.', icon: DocumentTextIcon },
            { title: 'Pay safely', description: "Only pay when you're completely satisfied.", icon: ShieldExclamationIcon },
          ].map((step, index) => (
            <div key={index} className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md animate__animated animate__fadeInUp animate__delay-1s">
              <step.icon className="h-12 w-12 text-[#038C7F] mb-4" />
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hire;
