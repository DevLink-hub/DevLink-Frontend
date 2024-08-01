import React from 'react';
import { motion } from 'framer-motion';
import artImage from '../../assets/images/art.webp';
import streamerImage from '../../assets/images/streamer.webp';
import interiorImage from '../../assets/images/interior.webp';
import packageImage from '../../assets/images/package.webp';
import mobileImage from '../../assets/images/mobile.webp';
import hireImage from '../../assets/images/hire.webp';


const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.5 } },
  hover: { scale: 1.1, transition: { duration: 0.3 } },
};

const hoverContentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const Landing = () => {
  return (
    <div>
      {/* First Section */}
      <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${hireImage})` }}>
      {/* <div>
        <video 
          src={bgVideo} 
          autoPlay 
          loop 
          muted 
          className="object-cover w-[100vw] h-[100vh]"
        />
      </div> */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-start justify-center h-full text-left text-[#038C7F] p-8 ml-16">
          <h1 className="text-5xl font-bold mb-4">Hire the best <br /> freelancers for any <br /> job, online.</h1>
          <ul className="text-lg mb-8 space-y-2 text-white">
            <li>World's largest freelance marketplace</li>
            <li>Any job you can possibly think of</li>
            <li>Save up to 90% & get quotes for free</li>
            <li>Pay only when you're 100% happy</li>
          </ul>
          <div className="flex space-x-4">
            <motion.button
              className="bg-[#123834] text-white font-bold py-2 px-4 rounded hover:bg-[#038C7F]"
              whileHover={{ scale: 1.05 }}
            >
              Hire a Freelancer
            </motion.button>
            <motion.button
              className="bg-transparent border border-white text-white font-bold py-2 px-4 rounded hover:bg-white hover:text-black"
              whileHover={{ scale: 1.05 }}
            >
              Earn Money Freelancing
            </motion.button>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="h-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-8">
        <motion.div 
          className="col-span-2 relative"
          initial="hidden"
          animate="visible"
          whileHover="hover"
          variants={imageVariants}
        >
          <img src={artImage} alt="Art" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center p-8 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="text-center text-white">
              <h3 className="text-2xl font-semibold mb-2">Real Art.</h3>
              <p className="mb-4">$200 USD in 7 days.</p>
              <motion.button
                className="bg-pink-500 text-white font-bold py-2 px-4 rounded hover:bg-pink-600"
                whileHover={{ scale: 1.05 }}
              >
                Discover
              </motion.button>
            </div>
          </div>
        </motion.div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { src: streamerImage, alt: "Streamer", label: "Streamer.", price: "$150 USD in 5 days." },
            { src: interiorImage, alt: "Interior", label: "Interior 3D model.", price: "$300 USD in 10 days." },
            { src: packageImage, alt: "Package", label: "Packaging design.", price: "$250 USD in 8 days." },
            { src: mobileImage, alt: "Mobile", label: "Mobile app.", price: "$350 USD in 12 days." }
          ].map((image, index) => (
            <motion.div 
              key={index}
              className="relative"
              initial="hidden"
              animate="visible"
              whileHover="hover"
              variants={imageVariants}
            >
              <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center p-8 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-semibold mb-2">{image.label}</h3>
                  <p className="mb-4">{image.price}</p>
                  <motion.button
                    className="bg-pink-500 text-white font-bold py-2 px-4 rounded hover:bg-pink-600"
                    whileHover={{ scale: 1.05 }}
                  >
                    Discover
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landing;
