import React, { useState } from 'react';
import ProfileForm from '../../components/ProfileForm';
import EducationForm from '../../components/EducationForm';
import WorkExperienceForm from '../../components/WorkExperienceForm';
import PortfolioForm from '../../components/PortfolioForm';
import ProfileDisplay from '../../components/ProfileDisplay';
import ProfileHeader from '../../components/ProfileHeader';

const Profile = () => {
  const [profile, setProfile] = useState({});
  const [education, setEducation] = useState([]);
  const [workExperience, setWorkExperience] = useState([]);
  const [portfolio, setPortfolio] = useState([]);

  const [showProfileForm, setShowProfileForm] = useState(false);
  const [showEducationForm, setShowEducationForm] = useState(false);
  const [showWorkExperienceForm, setShowWorkExperienceForm] = useState(false);
  const [showPortfolioForm, setShowPortfolioForm] = useState(false);

  const addProfile = (profileData) => {
    setProfile(profileData);
    setShowProfileForm(false); // Hide form after submission
  };

  const addEducation = (educationData) => {
    setEducation((prev) => [...prev, educationData]);
    setShowEducationForm(false); // Hide form after submission
  };

  const addWorkExperience = (workExperienceData) => {
    setWorkExperience((prev) => [...prev, workExperienceData]);
    setShowWorkExperienceForm(false); // Hide form after submission
  };

  const addPortfolio = (portfolioData) => {
    setPortfolio((prev) => [...prev, portfolioData]);
    setShowPortfolioForm(false); // Hide form after submission
  };

  const coverPhoto = "/path/to/coverPhoto"; // Replace with actual cover photo path or state
  const profilePhoto = "/path/to/profilePhoto"; // Replace with actual profile photo path or state

  return (
    <div className="container mx-auto p-4 mt-12">
      <ProfileHeader 
        initialCoverPhoto={coverPhoto} 
        initialProfilePhoto={profilePhoto} 
        onViewClient={() => alert("View Client Profile")} 
      />
      <h1 className="text-2xl mb-4">Profile Management</h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 pr-4">
          <div className="mb-4">
            <h2 className="text-xl mb-2">Profile</h2>
            <button onClick={() => setShowProfileForm(!showProfileForm)} className="flex items-center text-blue-500">
              <span className="mr-2">+</span> Add profile
            </button>
            {showProfileForm && <ProfileForm addProfile={addProfile} />}
          </div>
          
          <div className="mb-4">
            <h2 className="text-xl mb-2">Education</h2>
            <button onClick={() => setShowEducationForm(!showEducationForm)} className="flex items-center text-blue-500">
              <span className="mr-2">+</span> Add education
            </button>
            {showEducationForm && <EducationForm addEducation={addEducation} />}
          </div>
          
          <div className="mb-4">
            <h2 className="text-xl mb-2">Work Experience</h2>
            <button onClick={() => setShowWorkExperienceForm(!showWorkExperienceForm)} className="flex items-center text-blue-500">
              <span className="mr-2">+</span> Add experience
            </button>
            {showWorkExperienceForm && <WorkExperienceForm addWorkExperience={addWorkExperience} />}
          </div>
          
          <div className="mb-4">
            <h2 className="text-xl mb-2">Portfolio</h2>
            <button onClick={() => setShowPortfolioForm(!showPortfolioForm)} className="flex items-center text-blue-500">
              <span className="mr-2">+</span> Add portfolio
            </button>
            {showPortfolioForm && <PortfolioForm addPortfolio={addPortfolio} />}
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 pl-4">
          <ProfileDisplay
            profile={profile}
            education={education}
            workExperience={workExperience}
            portfolio={portfolio}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;