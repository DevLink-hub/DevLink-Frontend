import React, { useState } from 'react';
import EducationForm from '../../components/EducationForm';
import WorkExperienceForm from '../../components/WorkExperienceForm';
import PortfolioForm from '../../components/PortfolioForm';
import ProfileDisplay from '../../components/ProfileDisplay';
import ProfileHeader from '../../components/ProfileHeader';

const ClientProfile = () => {
  const [profileData, setProfileData] = useState({
    coverPhoto: '',
    profilePhoto: '',
    companyName: '',
    location: '',
    Industry: '',
    companyAddress: '',
    companyEmail: '',
    companyPhone: '',
    Bio: '',
    socialLink: '',
  });

  const [education, setEducation] = useState([]);
  const [workExperience, setWorkExperience] = useState([]);
  const [portfolio, setPortfolio] = useState([]);

  const [showEducationForm, setShowEducationForm] = useState(false);
  const [showWorkExperienceForm, setShowWorkExperienceForm] = useState(false);
  const [showPortfolioForm, setShowPortfolioForm] = useState(false);

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    console.log('Profile Data Submitted:', profileData);
  };

  const addEducation = (educationData) => {
    setEducation((prev) => [...prev, educationData]);
    setShowEducationForm(false);
  };

  const addWorkExperience = (workExperienceData) => {
    setWorkExperience((prev) => [...prev, workExperienceData]);
    setShowWorkExperienceForm(false);
  };

  const addPortfolio = (portfolioData) => {
    setPortfolio((prev) => [...prev, portfolioData]);
    setShowPortfolioForm(false);
  };

  return (
    <div className="container mx-auto p-4 mt-12">
      <ProfileHeader
        initialCoverPhoto={profileData.coverPhoto}
        initialProfilePhoto={profileData.profilePhoto}
        onViewClient={() => alert("View Client Profile")}
      />

      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 pr-4">
          <div className="mb-4">
            <h2 className="text-xl mb-2">Edit Profile</h2>
            <form onSubmit={handleProfileSubmit} className="space-y-4">
              <label className="block">
                <span className="text-gray-700">Cover Photo URL:</span>
                <input
                  type="text"
                  name="coverPhoto"
                  value={profileData.coverPhoto}
                  onChange={handleProfileChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Profile Photo URL:</span>
                <input
                  type="text"
                  name="profilePhoto"
                  value={profileData.profilePhoto}
                  onChange={handleProfileChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Company Name:</span>
                <input
                  type="text"
                  name="companyName"
                  value={profileData.companyName}
                  onChange={handleProfileChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Location:</span>
                <input
                  type="text"
                  name="location"
                  value={profileData.location}
                  onChange={handleProfileChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Industry:</span>
                <input
                  type="text"
                  name="Industry"
                  value={profileData.Industry}
                  onChange={handleProfileChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Company Address:</span>
                <input
                  type="text"
                  name="companyAddress"
                  value={profileData.companyAddress}
                  onChange={handleProfileChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Company Email:</span>
                <input
                  type="email"
                  name="companyEmail"
                  value={profileData.companyEmail}
                  onChange={handleProfileChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Company Phone:</span>
                <input
                  type="text"
                  name="companyPhone"
                  value={profileData.companyPhone}
                  onChange={handleProfileChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Bio:</span>
                <textarea
                  name="Bio"
                  value={profileData.Bio}
                  onChange={handleProfileChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Social Link:</span>
                <input
                  type="text"
                  name="socialLink"
                  value={profileData.socialLink}
                  onChange={handleProfileChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </label>
              <button
                type="submit"
                className="w-full mt-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
              >
                Save Profile
              </button>
            </form>
          </div>

          <div className="mb-4">
            <h2 className="text-xl mb-2">Add Details</h2>
            <div className="flex flex-wrap space-x-4">
              <button onClick={() => setShowEducationForm(!showEducationForm)} className="flex items-center text-blue-500">
                <span className="mr-2">+</span> Add Education
              </button>
              <button onClick={() => setShowWorkExperienceForm(!showWorkExperienceForm)} className="flex items-center text-blue-500">
                <span className="mr-2">+</span> Add Work Experience
              </button>
              <button onClick={() => setShowPortfolioForm(!showPortfolioForm)} className="flex items-center text-blue-500">
                <span className="mr-2">+</span> Add Portfolio
              </button>
            </div>
            {showEducationForm && <EducationForm addEducation={addEducation} />}
            {showWorkExperienceForm && <WorkExperienceForm addWorkExperience={addWorkExperience} />}
            {showPortfolioForm && <PortfolioForm addPortfolio={addPortfolio} />}
          </div>
        </div>

        <div className="w-full lg:w-1/2 pl-4">
          <ProfileDisplay
            education={education}
            workExperience={workExperience}
            portfolio={portfolio}
          />
        </div>
      </div>
    </div>
  );
};

export default ClientProfile;
