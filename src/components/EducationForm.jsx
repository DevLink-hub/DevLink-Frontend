import React, { useState } from 'react';

const EducationForm = ({ addEducation }) => {
  const [education, setEducation] = useState({
    institution: '',
    degree: '',
    fieldOfStudy: '',
    year: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEducation(education);
    setEducation({
      institution: '',
      degree: '',
      fieldOfStudy: '',
      year: '',
    }); // Clear the form after submission
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        name="institution"
        value={education.institution}
        onChange={handleChange}
        placeholder="Institution"
        className="mb-2 p-2 border"
      />
      <input
        type="text"
        name="degree"
        value={education.degree}
        onChange={handleChange}
        placeholder="Degree"
        className="mb-2 p-2 border"
      />
      <input
        type="text"
        name="fieldOfStudy"
        value={education.fieldOfStudy}
        onChange={handleChange}
        placeholder="Field of Study"
        className="mb-2 p-2 border"
      />
      <input
        type="text"
        name="year"
        value={education.year}
        onChange={handleChange}
        placeholder="Year"
        className="mb-2 p-2 border"
      />
      <button type="submit" className="p-2 bg-[#123834] text-white">
        Add Education
      </button>
    </form>
  );
};

export default EducationForm;
