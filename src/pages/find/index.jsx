import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import webImage from '../../assets/images/web.jpg';
import chromeImage from '../../assets/images/chrome.jpg';
import geolocationImage from '../../assets/images/geolocation.jpg';
import richImage from '../../assets/images/rich.jpg';
import jamesImage from '../../assets/images/james.jpg';

const Find = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleApplyClick = () => {
    navigate('/signup'); // Redirect to the /signup page
  };

  return (
    <div className="p-4 border-2 border-gray-200 rounded-lg mt-12">
      {/* Profile Section */}
      <div className="border p-4 rounded-lg">
        <div className="flex">
          <img
            src={richImage}
            alt="Profile"
            className="w-48 h-48 rounded-lg mr-4"
          />
          <div className="flex-grow">
            <h2 className="text-2xl font-bold">Richard Parker</h2>
            <p className="text-green-500">is available to hire</p>
            <button 
              onClick={handleApplyClick} // Attach the click handler to the button
              className="bg-[#1B627E] text-white px-4 py-2 rounded-lg mt-2"
            >
              APPLY
            </button>
            <div className="mt-4">
              <h3 className="font-bold">WEB DEVELOPERS</h3>
              <p>Seeking a talented Web Developer to join our dynamic team. The ideal candidates will have experience in building responsive and interactive websites using modern web technologies. <br />
              You will collaborate with our design and development teams to create seamless user experiences.</p>
            </div>
            <div className="mt-4 flex space-x-4 text-white">
              <span className="border rounded-full px-2 py-0 bg-[#1B627E] border-[#1B627E]">JAVASCRIPT</span>
              <span className="border rounded-full px-2 py-0 bg-[#1B627E] border-[#1B627E]">ANGULAR</span>
              <span className="border rounded-full px-2 py-0 bg-[#1B627E] border-[#1B627E]">HTML</span>
              <span className="border rounded-full px-2 py-0 bg-[#1B627E] border-[#1B627E]">REACT</span>
              <span className="border rounded-full px-2 py-0 bg-[#1B627E] border-[#1B627E]">Next.js</span>
              <span className="border rounded-full px-2 py-0 bg-[#1B627E] border-[#1B627E]">MERN</span>
              <span className="border rounded-full px-2 py-0 bg-[#1B627E] border-[#1B627E]">Vue</span>
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="font-bold">Availability</h3>
            <p>Full-time</p>
          </div>
        </div>
      </div>

      <div className="border p-4 rounded-lg">
        <div className="flex">
          <img
            src={jamesImage}
            alt="Profile"
            className="w-48 h-48 rounded-lg mr-4"
          />
          <div className="flex-grow">
            <h2 className="text-2xl font-bold">James Ayden</h2>
            <p className="text-green-500">is available to hire</p>
            <button 
              onClick={handleApplyClick} // Attach the click handler to the button
              className="bg-[#1B627E] text-white px-4 py-2 rounded-lg mt-2"
            >
              APPLY
            </button>
            <div className="mt-4">
              <h3 className="font-bold">AWS CLOUD PRACTITIONERS</h3>
              <p>I am seeking for AWS Cloud Practitioners with experience in cloud computing, a deep understanding of AWS services, <br /> 
              and the ability to collaborate with infrastructure and development teams for seamless cloud resource management.</p>
            </div>
            <div className="mt-4 flex space-x-4 text-white">
              <span className="border rounded-full px-2 py-0 bg-[#1B627E] border-[#1B627E]">AWS EC2</span>
              <span className="border rounded-full px-2 py-0 bg-[#1B627E] border-[#1B627E]">AWS RDS</span>
              <span className="border rounded-full px-2 py-0 bg-[#1B627E] border-[#1B627E]">AWS S3</span>
              <span className="border rounded-full px-2 py-0 bg-[#1B627E] border-[#1B627E]">AWS EBS</span>
              <span className="border rounded-full px-2 py-0 bg-[#1B627E] border-[#1B627E]">AWS IAM</span>
              <span className="border rounded-full px-2 py-0 bg-[#1B627E] border-[#1B627E]">CLOUDFRONT</span>
              <span className="border rounded-full px-2 py-0 bg-[#1B627E] border-[#1B627E]">AWS LAMBDA</span>
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="font-bold">Availability</h3>
            <p>Remote</p>
          </div>
        </div>
      </div>

      {/* Recommended Articles Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Recommended Articles Just For You</h2>
        <div className="flex space-x-4">
          {/* Article 1 */}
          <div className="border rounded-lg overflow-hidden w-1/3">
            <img
              src={webImage}
              alt="web"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold">The ultimate guide to hiring a web developer in 2021</h3>
              <p>If you want to stay competitive in 2021, you need a high quality website. Learn how to hire the best possible web developer for your business fast.</p>
            </div>
          </div>
          {/* Article 2 */}
          <div className="border rounded-lg overflow-hidden w-1/3">
            <img
              src={chromeImage}
              alt="Chrome"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold">Mastering Google Chrome Development: Your Guide to Hire a Freelancer</h3>
              <p>Learn how to find and work with a top-rated Google Chrome Developer for your project today!</p>
            </div>
          </div>
          {/* Article 3 */}
          <div className="border rounded-lg overflow-hidden w-1/3">
            <img
              src={geolocationImage}
              alt="Geolocation"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold">Guide to Hiring a Geolocation Developer</h3>
              <p>Learn how to find and work with a skilled Geolocation Developer for your project. Tips and tricks to ensure successful collaboration.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Find;
