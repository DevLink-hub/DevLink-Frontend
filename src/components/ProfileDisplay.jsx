import React from 'react';
// import ProfileHeader from '../components/ProfileHeader';
// import profilePhoto from '../path/to/profilePhoto.png'; // Add correct path for profile photo

const ProfileDisplay = ({ profile = {}, education = [], workExperience = [], portfolio = [] }) => {
  const handleUploadCover = () => {
    // Handle upload cover photo functionality
  };

  const handleViewClient = () => {
    // Handle view client profile functionality
  };

  return (
    <div className="pt-40">
      {/* <ProfileHeader 
        coverPhoto="/path/to/coverPhoto.png" // Replace with the actual path
        // profilePhoto={profilePhoto}
        onUploadCover={handleUploadCover}
        onViewClient={handleViewClient}
      /> */}
      <h2 className="text-xl mb-4">Profile</h2>
      <div className="mb-4">
        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        {/* Add other profile fields as needed */}
      </div>
      
      <h2 className="text-xl mb-4">Education</h2>
      <div className="mb-4">
        {education.map((edu, index) => (
          <div key={index} className="mb-2 p-2 border">
            <p><strong>Institution:</strong> {edu.institution}</p>
            <p><strong>Degree:</strong> {edu.degree}</p>
            <p><strong>Field of Study:</strong> {edu.fieldOfStudy}</p>
            <p><strong>Year:</strong> {edu.year}</p>
            {/* Add other education fields as needed */}
          </div>
        ))}
      </div>
      
      <h2 className="text-xl mb-4">Work Experience</h2>
      <div className="mb-4">
        {workExperience.map((work, index) => (
          <div key={index} className="mb-2 p-2 border">
            <p><strong>Company:</strong> {work.company}</p>
            <p><strong>Position:</strong> {work.position}</p>
            <p><strong>Start Date:</strong> {work.startDate}</p>
            <p><strong>End Date:</strong> {work.endDate}</p>
            <p><strong>Description:</strong> {work.description}</p>
          </div>
        ))}
      </div>

      <h2 className="text-xl mb-4">Portfolio</h2>
      <div className="mb-4">
        {portfolio.map((item, index) => (
          <div key={index} className="mb-2 p-2 border">
            <p><strong>Title:</strong> {item.title}</p>
            <p><strong>Description:</strong> {item.description}</p>
            <p><strong>Link:</strong> <a href={item.link} target="_blank" rel="noopener noreferrer">{item.link}</a></p>
            {item.image && (
              <div className="mt-2">
                <img src={URL.createObjectURL(item.image)} alt={item.title} className="max-w-xs h-auto" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileDisplay;
