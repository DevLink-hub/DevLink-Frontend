import React from 'react';
import { EnvelopeIcon, UserIcon, ComputerDesktopIcon, ShieldCheckIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row mt-12">
      <div className="bg-blue-100 p-6 flex-1">
        <h2 className="text-lg font-semibold mb-4">
          You are almost ready to start earning money as a freelancer, simply complete the following steps:
        </h2>
        <p className="text-gray-500 mb-2">about 23 hours ago</p>
        <div className="flex items-center mb-4">
          <EnvelopeIcon className="h-5 w-5 mr-2" />
          <span>Email Address</span>
          <button className="ml-auto text-gray-500">Already Verified</button>
        </div>
        <div className="flex items-center mb-4">
          <UserIcon className="h-5 w-5 mr-2" />
          <span>Update your profile</span>
          <Link to="/profile" className="ml-auto text-[#123834]">
            Profile Page
          </Link>
        </div>
        <div className="flex items-center mb-4">
          <ComputerDesktopIcon className="h-5 w-5 mr-2" />
          <span>Place your first bid</span>
          <button className="ml-auto text-[#038C7F]">Browse Projects</button>
        </div>
      </div>
      <div className="bg-white p-6 flex-1">
        <h2 className="text-lg font-semibold mb-4">Set up your account</h2>
        <div className="relative pt-1">
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
            <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#123834]" style={{ width: '15%' }}></div>
          </div>
        </div>
        <p className="text-gray-500 mb-4">
          Having a complete verified account will increase the chances of getting jobs.
        </p>
        <div className="flex items-center mb-4">
          <ShieldCheckIcon className="h-5 w-5 mr-2" />
          <span>Complete your account setup by:</span>
          <button className="ml-auto border-2 border-[#038C7F] text-[#038C7F] px-4 py-2 rounded-lg">Add your full name +5%</button>
        </div>
        <div className="flex items-center mb-4">
          <CurrencyDollarIcon className="h-5 w-5 mr-2" />
          <span>Balance</span>
          <button className="ml-auto text-[#038C7F]">Add funds</button>
        </div>
        <div className="mb-4">
          <p className="text-gray-500">Polls</p>
          <form>
            <div className="flex items-center mb-2">
              <input type="radio" name="gender" id="male" className="mr-2" />
              <label htmlFor="male">Male</label>
            </div>
            <div className="flex items-center mb-2">
              <input type="radio" name="gender" id="female" className="mr-2" />
              <label htmlFor="female">Female</label>
            </div>
            <div className="flex">
              <button type="submit" className="mr-2 bg-[#123834] text-white px-4 py-2 rounded-lg">Submit Answer</button>
              <button type="button" className="text-[#123834]">Skip Question</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
