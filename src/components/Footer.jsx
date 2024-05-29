import React from "react";
import carImage from "../assets/images/car.png";
import Button from "./Button";
import Copyright from "./Copyright";
import { motion } from "framer-motion";

function Footer({ data }) {
  // Receive the 'data' prop
  return (
    <>
      <div className=" bg-black font-Poppins h-[90vh] text-white">
        <div className="container mx-auto lg:pl-24 vvsm:pl-0 flex flex-col md:flex-row">
          {/* Left Column */}
          <div className="md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">{data.title}</h2>
            <p className="mb-4">
              Design yours or get a trade-in estimate for your current vehicle.
            </p>
          </div>
          {/* Right Column */}
          <motion.div
            whileHover={{ scale: 0.8 }}
            whileTap={{
              scale: 0.8,
              borderRadius: "100%",
            }}
            className="md:w-1/2 flex justify-center mt-8 md:mt-0"
          >
            <img src={carImage} alt="Car" className="w-full h-auto max-w-md" />
          </motion.div>
        </div>
        <Button button={data.button} />
      </div>
      <Copyright />
    </>
  );
}

export default Footer;
