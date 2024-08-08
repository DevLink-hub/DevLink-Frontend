import React, { useState } from 'react';
import EducationForm from '../../components/EducationForm';
import WorkExperienceForm from '../../components/WorkExperienceForm';
import PortfolioForm from '../../components/PortfolioForm';
import ProfileDisplay from '../../components/ProfileDisplay';
import ProfileHeader from '../../components/ProfileHeader';

const Profile = () => {
  const [education, setEducation] = useState([]);
  const [workExperience, setWorkExperience] = useState([]);
  const [portfolio, setPortfolio] = useState([]);

  const [showEducationForm, setShowEducationForm] = useState(false);
  const [showWorkExperienceForm, setShowWorkExperienceForm] = useState(false);
  const [showPortfolioForm, setShowPortfolioForm] = useState(false);

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

  const coverPhoto = "/path/to/coverPhoto";
  const profilePhoto = "/path/to/profilePhoto";

  return (
    <div className="container mx-auto p-6 mt-12">
      {/* Header Section */}
      <ProfileHeader 
        initialCoverPhoto={coverPhoto} 
        initialProfilePhoto={profilePhoto} 
        onViewClient={() => alert("View Client Profile")} 
      />

      {/* Main Content */}
      <div className="flex flex-wrap mt-6 gap-6">
        {/* Left Column */}
        <div className="w-full lg:w-2/3 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Add Details</h2>
          <div className="flex flex-wrap gap-4 mb-6">
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
        </div>
        
        {/* Right Column */}
        <div className="w-full lg:w-1/3 bg-white shadow-lg rounded-lg p-6">
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

export default Profile;
