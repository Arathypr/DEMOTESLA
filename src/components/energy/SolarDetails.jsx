import React, { useState } from "react";
import { motion } from "framer-motion";

import footersolar1 from "../../assets/images/imagesolar1.png";
import footersolar2 from "../../assets/images/imagesolar3.png";
import footersolar3 from "../../assets/images/roofsolar.png";

function SolarDetail() {
  // State to manage which image is currently selected
  const [selectedImage, setSelectedImage] = useState(footersolar1); // Initially set to the first image
  const [activeText, setActiveText] = useState(1); // Active text index, initially set to the first text

  // Function to handle text click and set the selected image and active text
  const handleTextClick = (image, index) => {
    setSelectedImage(image);
    setActiveText(index);
  };

  // Variants for animation
  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center h-screen bg-black text-white px-4 vvsm:pt-10 lg:px-20">
      <div className="lg:w-1/2 flex flex-col justify-center px-4">
        {/* Example text elements */}
        <motion.p
          className={`cursor-pointer mb-2 py-2 px-4 rounded text-sm lg:text-base lg:w-[80%] ${
            activeText === 1 ? "bg-gray-700 bg-opacity-45" : ""
          }`}
          onClick={() => handleTextClick(footersolar1, 1)}
          whileHover={{ scale: 1.05 }}
          initial="hidden"
          animate="visible"
          variants={animationVariants}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-lg lg:text-2xl pb-3">From Order to Design</h1>
          {activeText === 1 && (
            <p className="text-xs lg:text-sm leading-6">
              Share a few details about your home and energy usage. Tesla will
              then design your solar system to complement your home and meet
              your current or future energy needs.
            </p>
          )}
        </motion.p>
        <motion.p
          className={`cursor-pointer mb-2 py-2 px-4 rounded text-sm lg:text-base lg:w-[80%] ${
            activeText === 2 ? "bg-gray-700 bg-opacity-45" : ""
          }`}
          onClick={() => handleTextClick(footersolar2, 2)}
          whileHover={{ scale: 1.05 }}
          initial="hidden"
          animate="visible"
          variants={animationVariants}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-lg lg:text-xl  pb-3">From Install to Power On</h1>
          {activeText === 2 && (
            <p className="text-xs lg:text-sm leading-6">
              Tesla completes most solar panel installations within a few
              months. We handle all the permitting and utility approvals for
              you. Your Tesla Project Advisor and our Support team are available
              throughout the entire process.
            </p>
          )}
        </motion.p>
        <motion.p
          className={`cursor-pointer mb-2 py-2 px-4 rounded text-sm lg:text-base lg:w-[80%] ${
            activeText === 3 ? "bg-gray-700 bg-opacity-45" : ""
          }`}
          onClick={() => handleTextClick(footersolar3, 3)}
          whileHover={{ scale: 1.05 }}
          initial="hidden"
          animate="visible"
          variants={animationVariants}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-lg lg:text-xl  pb-3">From Day One to Onward</h1>
          {activeText === 3 && (
            <p className="text-xs lg:text-sm ">
              Solar panels come with a 25-year warranty. Our Support team will
              be available to you throughout the lifetime of your system.
            </p>
          )}
        </motion.p>
      </div>
      <div className="lg:w-1/2 p-4 relative">
        {/* Render the selected image */}
        <motion.img
          key={selectedImage} // Add key prop to trigger animation when image changes
          src={selectedImage}
          alt="Selected"
          className="lg:w-[80%] vvsm-w-full h-[50vh]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  );
}

export default SolarDetail;
