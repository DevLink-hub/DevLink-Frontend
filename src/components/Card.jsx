import React from 'react';

const Card = ({ title, description, rating, reviews, startingPrice, imageUrl, author }) => {
  return (
    <div className="max-w-xs mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex-shrink-0">
        <img className="h-48 w-full object-cover" src={imageUrl} alt="Card image" />
      </div>
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{title}</div>
        <p className="block mt-1 text-lg leading-tight font-medium text-black">{description}</p>
        <div className="mt-2 text-gray-500">
          <span className="font-bold">{rating}</span> ({reviews} Reviews)
        </div>
        <div className="mt-2 text-gray-900 font-bold">Starting at: ${startingPrice}</div>
        <div className="mt-2 text-gray-500">By {author}</div>
      </div>
    </div>
  );
};

export default Card;
