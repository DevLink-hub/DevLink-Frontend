import React, { useState } from 'react';

const PortfolioForm = ({ addPortfolio }) => {
  const [portfolio, setPortfolio] = useState({
    title: '',
    description: '',
    link: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPortfolio((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setPortfolio((prev) => ({ ...prev, image: file }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPortfolio(portfolio);
    setPortfolio({
      title: '',
      description: '',
      link: '',
      image: null,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        name="title"
        value={portfolio.title}
        onChange={handleChange}
        placeholder="Title"
        className="mb-2 p-2 border"
      />
      <input
        type="text"
        name="description"
        value={portfolio.description}
        onChange={handleChange}
        placeholder="Description"
        className="mb-2 p-2 border"
      />
      <input
        type="text"
        name="link"
        value={portfolio.link}
        onChange={handleChange}
        placeholder="Link"
        className="mb-2 p-2 border"
      />
      <input
        type="file"
        name="image"
        onChange={handleImageChange}
        className="mb-2 p-2 border"
      />
      <button type="submit" className="p-2 bg-[#123834] text-white">
        Add Portfolio
      </button>
    </form>
  );
};

export default PortfolioForm;
