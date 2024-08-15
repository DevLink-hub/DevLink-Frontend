import React from 'react';
import { EnvelopeIcon, UserIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { motion } from 'framer-motion';
import 'animate.css';

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

const Dashboard = () => {
  return (
    <div className="flex flex-col mt-12">
      {/* Main Dashboard Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-lg shadow-lg text-white animate__animated animate__fadeIn">
        <motion.h2
          className="text-lg font-semibold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          You are almost ready to start earning money as a freelancer, simply complete the following steps:
        </motion.h2>
        <p className="text-gray-200 mb-2">about 23 hours ago</p>
        <div className="flex items-center mb-4">
          <EnvelopeIcon className="h-5 w-5 mr-2" />
          <span>Email Address</span>
          <button className="ml-auto text-gray-300">Already Verified</button>
        </div>
        <div className="flex items-center mb-4">
          <UserIcon className="h-5 w-5 mr-2" />
          <span>Update your profile</span>
          <Link to="/profile" className="ml-auto bg-[#123834] text-white px-4 py-2 rounded-lg hover:bg-[#0f2e26] transition duration-300">
            Profile Page
          </Link>
        </div>
        <div className="flex items-center mb-4">
          <ComputerDesktopIcon className="h-5 w-5 mr-2" />
          <span>Place your first bid</span>
          <button className="ml-auto text-[#038C7F] hover:underline transition duration-300">Browse Projects</button>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 bg-white rounded-lg shadow-lg">
        {[
          { title: 'PRODUCTS', icon: <BsFillArchiveFill />, value: '300', gradient: 'bg-gradient-to-r from-green-400 to-blue-500' },
          { title: 'CATEGORIES', icon: <BsFillGrid3X3GapFill />, value: '12', gradient: 'bg-gradient-to-r from-red-400 to-yellow-500' },
          { title: 'CUSTOMERS', icon: <BsPeopleFill />, value: '33', gradient: 'bg-gradient-to-r from-purple-400 to-pink-500' },
          { title: 'ALERTS', icon: <BsFillBellFill />, value: '42', gradient: 'bg-gradient-to-r from-indigo-400 to-teal-500' }
        ].map((card, index) => (
          <motion.div
            key={index}
            className={`card p-4 rounded-lg shadow-lg text-white ${card.gradient}`}
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{card.title}</h3>
              {card.icon}
            </div>
            <h1 className="text-2xl font-bold">{card.value}</h1>
          </motion.div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div
            className="bg-white p-4 rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            className="bg-white p-4 rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
