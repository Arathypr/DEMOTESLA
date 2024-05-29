import React from "react";
import footersolar from "../../assets/images/footersolar.jpg";

function SolarFooter() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-black text-white font-Poppins p-4">
      <div className="flex-1 text-center md:text-left p-4 lg:pl-32">
        <h1 className="md:text-3xl vvsm:text-2xl  font-bold mb-2">
          Install Solar Panels
        </h1>
        <p className="sm:text-base vvsm:text-xs">
          Design your solar system or schedule a virtual consultation with a
          Tesla Advisor to learn more.
        </p>
        <div className="flex flex-col vvsm:flex-col space-y-4 vvsm:space-y-4 md:flex-row md:space-y-0 md:space-x-4 mt-[20%]">
          <button className="bg-[#393c41] text-white font-semibold py-2 ssm:px-20 rounded">
            Order Now
          </button>
          <button className="bg-[#e5e6e5] text-black font-semibold py-2 ssm:px-6 vvsm:px-5 rounded">
            Schedule a Consultation
          </button>
        </div>
      </div>
      <div className="flex-1 p-4">
        <img
          src={footersolar}
          alt="Solar Panels"
          className="w-full h-auto object-cover rounded-md"
        />
      </div>
    </div>
  );
}

export default SolarFooter;
