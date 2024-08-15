import React, { useState } from 'react';
import { motion } from 'framer-motion';
import EducationForm from '../../components/EducationForm';
import WorkExperienceForm from '../../components/WorkExperienceForm';
import PortfolioForm from '../../components/PortfolioForm';
import ProfileHeader from '../../components/ProfileHeader';

const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Profile = () => {
  const [education, setEducation] = useState([]);
  const [workExperience, setWorkExperience] = useState([]);
  const [portfolio, setPortfolio] = useState([]);

  const [showEducationForm, setShowEducationForm] = useState(false);
  const [showWorkExperienceForm, setShowWorkExperienceForm] = useState(false);
  const [showPortfolioForm, setShowPortfolioForm] = useState(false);

  const [activeTab, setActiveTab] = useState('education');

  const addEducation = (educationData) => {
    setEducation((prev) => [...prev, educationData]);
    setShowEducationForm(false);
    setActiveTab('education');
  };

  const addWorkExperience = (workExperienceData) => {
    setWorkExperience((prev) => [...prev, workExperienceData]);
    setShowWorkExperienceForm(false);
    setActiveTab('workExperience');
  };

  const addPortfolio = (portfolioData) => {
    setPortfolio((prev) => [...prev, portfolioData]);
    setShowPortfolioForm(false);
    setActiveTab('portfolio');
  };

  const coverPhoto = "/path/to/coverPhoto";
  const profilePhoto = "/path/to/profilePhoto";

  return (
    <motion.div
      className="container mx-auto p-6 mt-12 bg-gradient-to-r from-purple-400 to-[#78FEC1]"
      initial="hidden"
      animate="visible"
      variants={formVariants}
    >
      {/* Header Section */}
      <ProfileHeader
        initialCoverPhoto={coverPhoto}
        initialProfilePhoto={profilePhoto}
        onViewClient={() => alert("View Client Profile")}
      />

      {/* Main Content */}
      <div className="flex flex-col mt-6">
        {/* Tabs */}
        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={() => setActiveTab('education')}
            className={`py-2 px-4 rounded-md text-white border-2 transition-colors ${activeTab === 'education' ? 'bg-[#1B627E] border-[#1B627E]' : 'bg-[#1B627E] border-[#1B627E]'} focus:outline-none`}
          >
            Education
          </button>
          <button
            onClick={() => setActiveTab('workExperience')}
            className={`py-2 px-4 rounded-md text-white border-2 transition-colors ${activeTab === 'workExperience' ? 'bg-[#1B627E] border-[#1B627E]' : 'bg-[#1B627E] border-[#1B627E]'} focus:outline-none`}
          >
            Work Experience
          </button>
          <button
            onClick={() => setActiveTab('portfolio')}
            className={`py-2 px-4 rounded-md text-white border-2 transition-colors ${activeTab === 'portfolio' ? 'bg-[#1B627E] border-[#1B627E]' : 'bg-[#1B627E] border-[#1B627E]'} focus:outline-none`}
          >
            Portfolio
          </button>
        </div>

        {/* Forms */}
        <motion.div
          className="w-full bg-white shadow-lg rounded-lg p-6 mb-6"
          variants={formVariants}
        >
          <h2 className="text-2xl font-semibold mb-4">Add Details</h2>
          <div className="flex justify-center gap-4 mb-6">
            <button
              onClick={() => setShowEducationForm(!showEducationForm)}
              className="btn-primary"
            >
              <span className="mr-2">+</span> Add Education
            </button>
            <button
              onClick={() => setShowWorkExperienceForm(!showWorkExperienceForm)}
              className="btn-primary"
            >
              <span className="mr-2">+</span> Add Work Experience
            </button>
            <button
              onClick={() => setShowPortfolioForm(!showPortfolioForm)}
              className="btn-primary"
            >
              <span className="mr-2">+</span> Add Portfolio
            </button>
          </div>
          {showEducationForm && <EducationForm addEducation={addEducation} />}
          {showWorkExperienceForm && <WorkExperienceForm addWorkExperience={addWorkExperience} />}
          {showPortfolioForm && <PortfolioForm addPortfolio={addPortfolio} />}
        </motion.div>

        {/* Display content based on active tab */}
        <div className="flex flex-col items-center">
          {activeTab === 'education' && (
            <motion.div
              className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6 mb-6"
              variants={formVariants}
            >
              <h2 className="text-2xl font-bold mb-4 text-[#1B627E]">Education</h2>
              <ul className="list-none space-y-8">
                {education.map((edu, index) => (
                  <li key={index} className="text-lg mb-8">
                    <div className="bg-gray-100 rounded-lg p-6 shadow-sm">
                      <div className="font-bold text-gray-800">{edu.institution}</div>
                      <div className="text-sm text-gray-600">{edu.degree}</div>
                      <div className="text-sm text-gray-600">{edu.date}</div>
                      <div className="text-sm text-gray-600">{edu.description}</div>
                      <div className="text-sm text-gray-600 flex items-center">
                        <span className="mr-2">💼</span>{edu.skills}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {activeTab === 'workExperience' && (
            <motion.div
              className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6 mb-6"
              variants={formVariants}
            >
              <h2 className="text-2xl font-bold mb-4 text-[#1B627E]">Experience</h2>
              <ul className="list-none space-y-8">
                {workExperience.map((work, index) => (
                  <li key={index} className="text-lg mb-8">
                    <div className="bg-gray-100 rounded-lg p-6 shadow-sm">
                      <div className="font-bold text-gray-800">{work.company}</div>
                      <div className="text-sm text-gray-600">{work.location}</div>
                      <div className="text-sm text-gray-600">{work.type}</div>
                      <div className="font-semibold text-gray-800">{work.position}</div>
                      <div className="text-sm text-gray-600">{work.startDate} - {work.endDate}</div>
                      <div className="text-sm text-gray-600">{work.duration}</div>
                      <div className="text-sm text-gray-700 mb-4">{work.description}</div>
                      <div className="text-sm text-gray-600 flex items-center">
                        <span className="mr-2">💼</span>{work.skills}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {activeTab === 'portfolio' && (
            <motion.div
              className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6 mb-6"
              variants={formVariants}
            >
              <h2 className="text-2xl font-bold mb-4 text-[#1B627E]">Portfolio</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolio.map((item, index) => (
                  <li key={index} className="bg-[#F3F4F6] rounded-lg shadow-lg overflow-hidden">
                    <div className="p-4">
                      <div className="font-bold text-white">{item.projectName}</div>
                      <div className="text-sm mb-2 text-gray-400">{item.description}</div>
                      {item.image && (
                        <div className="mt-4">
                          <img
                            src={URL.createObjectURL(item.image)}
                            alt={item.projectName}
                            className="w-full h-40 object-cover rounded-lg"
                          />
                        </div>
                      )}
                      <div className="mt-4">
                        <a
                          href={item.projectLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#1B627E] hover:underline"
                        >
                          View Project
                        </a>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;
