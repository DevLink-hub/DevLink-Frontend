import React, { useState } from 'react';

const ProfileForm = ({ addProfile }) => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProfile(profile);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        name="name"
        value={profile.name}
        onChange={handleChange}
        placeholder="Name"
        className="mb-2 p-2 border"
      />
      <input
        type="email"
        name="email"
        value={profile.email}
        onChange={handleChange}
        placeholder="Email"
        className="mb-2 p-2 border"
      />
      <input
        type="text"
        name="phone"
        value={profile.phone}
        onChange={handleChange}
        placeholder="Phone"
        className="mb-2 p-2 border"
      />
      <button type="submit" className="p-2 bg-[#123834] text-white">
        Add Profile
      </button>
    </form>
  );
};

export default ProfileForm;
