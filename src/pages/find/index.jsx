import React from 'react';
import webImage from '../../assets/images/web.jpg';
import chromeImage from '../../assets/images/chrome.jpg';
import geolocationImage from '../../assets/images/geolocation.jpg';

const Find = () => {
  return (
    <div className="p-4 border-2 border-gray-200 rounded-lg mt-12">
      {/* Search Section */}
      <div className="flex items-center space-x-4 mb-4">
        <input
          type="text"
          placeholder="Search Keyword"
          className="p-2 border border-gray-300 rounded-lg flex-grow"
        />
        <button className="bg-[#123834] text-white px-4 py-2 rounded-lg">Search</button>
      </div>

      {/* Filter Section */}
      <div className="flex space-x-4 mb-4">
        <div className="w-1/4 border p-4 rounded-lg">
          <h2 className="font-bold mb-2 text-[#038C7F]">My recent searches</h2>
          {/* Add recent searches here */}
        </div>
        <div className="w-1/4 border p-4 rounded-lg">
          <h2 className="font-bold mb-2 text-[#038C7F]">Filter by:</h2>
          <div className="mb-2">
            <input type="checkbox" id="fixed-price" className="mr-2" />
            <label htmlFor="fixed-price">Fixed Price Projects</label>
          </div>
          <div className="flex space-x-2 mb-2">
            <input
              type="number"
              placeholder="min"
              className="p-2 border border-gray-300 rounded-lg w-1/2"
            />
            <input
              type="number"
              placeholder="max"
              className="p-2 border border-gray-300 rounded-lg w-1/2"
            />
          </div>
          <div>
            <input type="checkbox" id="hourly" className="mr-2" />
            <label htmlFor="hourly">Hourly Projects</label>
          </div>
        </div>
      </div>

      {/* Job Listing Section */}
      <div className="border p-4 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <select className="p-2 border border-gray-300 rounded-lg ">
            <option>Newest first</option>
            {/* Add other options here */}
          </select>
          <span>40 jobs found</span>
        </div>
        <div className="border-t p-4">
          <h3 className="font-bold text-[#038C7F]">Instagram-Style AD Integration to Webview</h3>
          <div className="flex justify-between items-center">
            <span>6 days left</span>
            <span>$1292 Avg Bid</span>
          </div>
          <p>I'm seeking a skilled developer to create a responsive webapp to integrate via webview...</p>
        </div>
        {/* Additional Job Listings */}
        <div className="border-t p-4">
          <h3 className="font-bold text-[#038C7F]">Full-Stack Web Development with API and DevOps</h3>
          <div className="flex justify-between items-center">
            <span>6 days left</span>
            <span>$1292 Avg Bid</span>
          </div>
          <p>I'm looking for a skilled full-stack developer to handle the complete development of a web application. This project involves:</p>
          <li>Web Front-end Development: I need the website to have a responsive design, interactive elements, and user registration/login functionality.</li>
          <li>API Development: While I'm open to suggestions, I'd ideally prefer the use of Python or Node.js for the API.</li>
          <li>Backend Development: - Scalability: The backend should be built with scalability in mind, as I'm looking to grow</li>
        </div>
        {/* Additional Job Listings */}
        {/* ... Other job listings ... */}
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
}

export default Find;
