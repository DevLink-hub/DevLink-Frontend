import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProfileHeader from '../../components/ProfileHeader';

const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ClientProfile = () => {
  const [profileData, setProfileData] = useState({
    companyName: '',
    location: '',
    industry: '',
    companyAddress: '',
    companyEmail: '',
    companyPhone: '',
    bio: '',
    socialLink: '',
    projects: '',
  });

  const [activeTab, setActiveTab] = useState('profileDetails');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(profileData);
  };

  return (
    <motion.div
      className="mx-auto p-6 mt-12 bg-gradient-to-r from-purple-400 to-[#78FEC1]"
      initial="hidden"
      animate="visible"
      variants={formVariants}
    >
      {/* Header Section */}
      <ProfileHeader
        initialCoverPhoto={profileData.coverPhoto}
        initialProfilePhoto={profileData.profilePhoto}
      />

      {/* Main Content */}
      <div className="flex flex-col mt-6">
        {/* Tabs */}
        <div className="flex justify-center space-x-8 mb-6">
          <button
            onClick={() => setActiveTab('profileDetails')}
            className={`py-2 px-4 rounded-md text-white border-2 transition-colors ${activeTab === 'profileDetails' ? 'bg-[#1B627E] border-[#1B627E]' : 'bg-[#1B627E] border-[#1B627E]'} focus:outline-none`}
            >   
            Profile Details
          </button>
          <button
            onClick={() => setActiveTab('projects')}
            className={`py-2 px-4 rounded-md text-white border-2 transition-colors ${activeTab === 'projects' ? 'bg-[#1B627E] border-[#1B627E]' : 'bg-[#1B627E] border-[#1B627E]'} focus:outline-none`}
          >
            Projects
          </button>
        </div>

        {/* Content */}
        {activeTab === 'profileDetails' && (
          <motion.div
            className="w-full bg-white shadow-lg rounded-lg p-6 mb-6"
            variants={formVariants}
          >
            <h2 className="text-2xl font-semibold mb-4">Client Profile Details</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {Object.entries(profileData).map(([key, value]) => (
                key !== 'projects' && (
                  <div key={key} className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 capitalize">{key.replace(/([A-Z])/g, ' $1')}</label>
                    <input
                      type={key.includes('Email') ? 'email' : key.includes('Phone') ? 'tel' : 'text'}
                      name={key}
                      value={value}
                      onChange={handleChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                )
              ))}
              <button
                type="submit"
                className="px-4 py-2 bg-[#1B627E] text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                Save Profile
              </button>
            </form>
          </motion.div>
        )}

        {activeTab === 'projects' && (
          <motion.div
            className="w-full bg-white shadow-lg rounded-lg p-6 mb-6"
            variants={formVariants}
          >
            <h2 className="text-2xl font-semibold mb-4">Projects</h2>
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <p>{profileData.projects}</p>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ClientProfile;
