import React, { useState } from 'react';

const WorkExperienceForm = ({ addWorkExperience }) => {
  const [workExperience, setWorkExperience] = useState({
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkExperience((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addWorkExperience(workExperience);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        name="company"
        value={workExperience.company}
        onChange={handleChange}
        placeholder="Company"
        className="mb-2 p-2 border"
      />
      <input
        type="text"
        name="position"
        value={workExperience.position}
        onChange={handleChange}
        placeholder="Position"
        className="mb-2 p-2 border"
      />
      <input
        type="date"
        name="startDate"
        value={workExperience.startDate}
        onChange={handleChange}
        placeholder="Start Date"
        className="mb-2 p-2 border"
      />
      <input
        type="date"
        name="endDate"
        value={workExperience.endDate}
        onChange={handleChange}
        placeholder="End Date"
        className="mb-2 p-2 border"
      />
      <textarea
        name="description"
        value={workExperience.description}
        onChange={handleChange}
        placeholder="Description"
        className="mb-2 p-2 border"
      />
      <button type="submit" className="p-2 bg-[#123834] text-white">
        Add Work Experience
      </button>
    </form>
  );
};

export default WorkExperienceForm;