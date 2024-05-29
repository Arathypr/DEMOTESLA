import React, { useState } from "react";

import Driving from "../assets/images/driving.mp4";
import FeaturedVideo from "./FeatureVideo";

function AutoPark() {
  const [isFeatureVisible, setIsFeatureVisible] = useState(false);

  const handleCloseFeature = () => {
    setIsFeatureVisible(false);
    document.body.style.overflow = "auto";
  };

  const handleFeatureButtonClick = () => {
    setIsFeatureVisible(true);
  };

  return (
    <div className="flex flex-col md:flex-row mt-8 md:mt-32 font-Poppins p-10">
      <div className="md:w-3/4 p-4">
        <video
          autoPlay
          muted
          loop
          className="w-full"
          style={{ outline: "none", border: "none" }}
        >
          <source src={Driving} type="video/mp4" />
        </video>
        <p className="text-center mt-2">Navigate on Autopilot</p>
      </div>
      <div className="md:w-1/2 p-4">
        <div>
          <h2 className="text-center font-semibold text-2xl">
            Full Self-Driving <br className="md:hidden" /> Capability
          </h2>
          <p className="mt-2 text-sm leading-loose">
            Receive a 30 day trial of Full Self-Driving Capability with a new
            vehicle purchase. Your car will be able to drive itself almost
            anywhere with minimal driver intervention and will continuously
            improve.
          </p>
          <ul className="mt-2 list-disc list-inside leading-7 text-sm">
            <li>Navigate on Autopilot</li>
            <li>Auto Lane Change</li>
            <li>Autopark</li>
            <li>Summon</li>
            <li>Smart Summon</li>
            <li>Autosteer on city streets</li>
            <li>Traffic Light and Stop Sign Control</li>
          </ul>
          <div className="lg:flex vvsm:hidden justify-center mt-5">
            <button
              className="text-xs border hover:bg-zinc-50 text-gray-800 font-semibold py-1 px-2 rounded "
              onClick={handleFeatureButtonClick}
            >
              Feature Details
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-20">
          <h1 className=" vvsm:text-lg md:text-2xl font-bold mb-4">
            Order Your Model S
          </h1>
          <p className="text-xs">Est. Delivery: May – Jun 2024</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 md:mt-6">
            Continue
          </button>
        </div>
        <FeaturedVideo
          isVisible={isFeatureVisible}
          onClose={handleCloseFeature}
        />
      </div>
    </div>
  );
}

export default AutoPark;
