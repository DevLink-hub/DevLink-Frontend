import React from 'react';

const ProfileDisplay = ({ profile = {}, education = [], workExperience = [], portfolio = [] }) => {
  return (
    <div className="pt-40 space-y-8 ">
      {/* Education Section */}
      <div className="text-center">
        <h2 className="text-xl mb-4">Education</h2>
        <div className="mb-4">
          {education.map((edu, index) => (
            <div key={index} className="mb-2 p-2 border">
              <p><strong>Institution:</strong> {edu.institution}</p>
              <p><strong>Degree:</strong> {edu.degree}</p>
              <p><strong>Field of Study:</strong> {edu.fieldOfStudy}</p>
              <p><strong>Year:</strong> {edu.year}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Work Experience Section */}
      <div className="text-center">
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
      </div>

      {/* Portfolio Section */}
      <div className="text-center">
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
    </div>
  );
};

export default ProfileDisplay;
