import React, { useState } from 'react';

const ProfileHeader = ({ initialCoverPhoto, initialProfilePhoto, onViewClient }) => {
  const [coverPhoto, setCoverPhoto] = useState(initialCoverPhoto);
  const [profilePhoto, setProfilePhoto] = useState(initialProfilePhoto);

  const handleCoverPhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfilePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative">
      <div className="h-40 bg-cover bg-center" style={{ backgroundImage: `url(${coverPhoto})` }}>
        <input
          type="file"
          id="coverPhotoUpload"
          style={{ display: 'none' }}
          onChange={handleCoverPhotoChange}
        />
        <label htmlFor="coverPhotoUpload" className="absolute top-2 right-2 bg-white py-1 px-3 border rounded-md shadow-md cursor-pointer">
          Upload Cover Photo
        </label>
      </div>
      <div className="flex items-center p-4 bg-white shadow-md relative -mt-12">
        <div className="relative">
          <img src={profilePhoto} alt="Profile" className="h-24 w-24 rounded-full border-4 border-white -mt-12" />
          <input
            type="file"
            id="profilePhotoUpload"
            style={{ display: 'none' }}
            onChange={handleProfilePhotoChange}
          />
          <label htmlFor="profilePhotoUpload" className="absolute bottom-0 right-0 bg-white border rounded-full p-1 shadow-md cursor-pointer">
            <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-1.5a2.5 2.5 0 11-3.536-3.536l-8.036 8.036A4.992 4.992 0 005 16.001V20h3.999a4.992 4.992 0 004.293-2.232l8.036-8.036z"></path>
            </svg>
          </label>
        </div>
        <div className="ml-4">
          <h2 className="text-xl font-semibold">Stephen Sappor</h2>
          <p className="text-gray-600">Front-end Web Dev | AWS Cloud Practitioner | Food QA & QC</p>
          <p className="text-gray-500">Accra, Greater Accra Region, Ghana</p>
          <button className="text-blue-600 flex items-center mt-2">
            <svg className="h-5 w-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v8m4-4H8"></path>
            </svg>
            Add profile
          </button>
        </div>
        <button className="ml-auto bg-white py-1 px-3 border rounded-md shadow-md" onClick={onViewClient}>
          View Client Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileHeader;
