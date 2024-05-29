import React, { useRef } from "react";
import { motion } from "framer-motion";
import section1 from "../assets/images/section1.png";
import section2 from "../assets/images/section2.png";
import section3 from "../assets/images/section3.png";

import useInView from "./useView"; // import the custom hook
import useWindowSize from "./useWindowSize.jsx"; // import the window size hook

function Detail() {
  const section1TextRef = useRef(null);
  const section1ImageRef = useRef(null);
  const section2TextRef = useRef(null);
  const section2ImageRef = useRef(null);
  const section3TextRef = useRef(null);
  const section3ImageRef = useRef(null);

  const textInView = useInView(
    [section1TextRef, section2TextRef, section3TextRef],
    { threshold: 0.5 }
  );
  const imageInView = useInView(
    [section1ImageRef, section2ImageRef, section3ImageRef],
    { threshold: 0.5 }
  );

  const { width } = useWindowSize();

  const isLargeScreen = width > 640;

  return (
    <>
      {/* bigger screen */}
      <div className=" sm:block vvsm:hidden mx-auto p-4 bg-black text-white text-opacity-35">
        {/* First Section */}
        <div className="flex flex-col md:flex-row mb-8">
          {/* Image */}
          <motion.div
            ref={section1ImageRef}
            initial={{ opacity: 0, y: 50 }}
            animate={
              isLargeScreen && imageInView[0] ? { opacity: 1, y: 0 } : {}
            }
            transition={{ duration: 1 }}
            className="md:w-1/2 mr-4"
          >
            <img src={section1} alt="Section 1" className="w-full h-auto" />
          </motion.div>
          {/* Text */}
          <motion.div
            ref={section1TextRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isLargeScreen && textInView[0] ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="md:w-1/2 flex flex-col justify-center"
          >
            <h2 className="text-2xl font-bold mb-4 text-center">
              Stay Connected
            </h2>
            <p className="lg:text-base md:text-sm vvsm:text-xs md:w-[80%] md:ml-10 lg:ml-20 xl:ml-24 sm:text-sm vvsm:text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              obcaecati iste magnam. Vitae ullam officia corrupti esse optio,
              maiores ducimus delectus sunt! Hic quis esse accusantium,
              cupiditate fugiat ad eius?
            </p>
          </motion.div>
        </div>
        {/* Second Section */}

        <div className=" flex flex-col md:flex-row mb-8">
          {/* Text */}
          <motion.div
            ref={section2TextRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isLargeScreen && textInView[1] ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="md:w-1/2 mr-4 order-2 md:order-1 flex flex-col justify-center"
          >
            <h2 className="md:text-2xl vvsm:text-xl font-bold mb-4 text-center">
              Immersive Sound
            </h2>
            <p className="lg:text-base md:text-sm vvsm:text-xs sm:text-sm md:w-[80%] md:ml-10 lg:ml-20 xl:ml-24 vvsm:text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam minus
              ex cumque nobis itaque reiciendis a. Voluptas fugit repellendus
              facere odit tenetur, saepe blanditiis ut at, ab placeat sapiente
              alias!
            </p>
          </motion.div>
          {/* Image */}
          <motion.div
            ref={section2ImageRef}
            initial={{ opacity: 0, y: 50 }}
            animate={
              isLargeScreen && imageInView[1] ? { opacity: 1, y: 0 } : {}
            }
            transition={{ duration: 1 }}
            className="md:w-1/2 order-1 md:order-2"
          >
            <img src={section2} alt="Section 2" className="w-full h-auto" />
          </motion.div>
        </div>
        {/* Third Section */}
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <motion.div
            ref={section3ImageRef}
            initial={{ opacity: 0, y: 50 }}
            animate={
              isLargeScreen && imageInView[2] ? { opacity: 1, y: 0 } : {}
            }
            transition={{ duration: 1 }}
            className="md:w-1/2 mr-4"
          >
            <img src={section3} alt="Section 3" className="w-full h-auto" />
          </motion.div>
          {/* Text */}
          <motion.div
            ref={section3TextRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isLargeScreen && textInView[2] ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="md:w-1/2 flex flex-col justify-center"
          >
            <h2 className="md:text-2xl vvsm:text-xl font-bold mb-4 text-center">
              Room for Everything
            </h2>
            <p className="lg:text-base md:text-sm vvsm:text-xs md:w-[80%] md:ml-10 lg:ml-20 xl:ml-24 sm:text-sm vvsm:text-center md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptates corporis quibusdam libero fugit officia ea quasi soluta
              odio enim culpa suscipit quas eius tenetur aliquid, excepturi
              mollitia. Quae, ad nihil?
            </p>
          </motion.div>
        </div>
      </div>
      {/* smaller screen */}
      <div className=" sm:hidden vvsm:block mx-auto p-4 bg-black text-white text-opacity-35">
        {/* First Section */}
        <div className="flex flex-col md:flex-row mb-8">
          {/* Image */}
          <div className="md:w-1/2 mr-4">
            <img src={section1} alt="Section 1" className="w-full h-auto" />
          </div>
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="md:w-1/2 flex flex-col justify-center"
          >
            <h2 className="text-2xl font-bold mb-4 text-center">
              Stay Connected
            </h2>
            <p className="md:text-base vvsm:text-xs md:w-[80%] md:ml-10 lg:ml-20 xl:ml-24 sm:text-sm vvsm:text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              obcaecati iste magnam. Vitae ullam officia corrupti esse optio,
              maiores ducimus delectus sunt! Hic quis esse accusantium,
              cupiditate fugiat ad eius?
            </p>
          </motion.div>
        </div>
        {/* Second Section */}
        <div className="flex flex-col md:flex-row mb-8">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="md:w-1/2 mr-4 order-2 md:order-1 flex flex-col justify-center"
          >
            <h2 className="md:text-2xl vvsm:text-xl font-bold mb-4 text-center">
              Immersive Sound
            </h2>
            <p className="md:text-base vvsm:text-xs sm:text-sm md:w-[80%] md:ml-10 lg:ml-20 xl:ml-24 vvsm:text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam minus
              ex cumque nobis itaque reiciendis a. Voluptas fugit repellendus
              facere odit tenetur, saepe blanditiis ut at, ab placeat sapiente
              alias!
            </p>
          </motion.div>
          {/* Image */}
          <div className="md:w-1/2 order-1 md:order-2">
            <img src={section2} alt="Section 2" className="w-full h-auto" />
          </div>
        </div>
        {/* Third Section */}
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="md:w-1/2 mr-4">
            <img src={section3} alt="Section 3" className="w-full h-auto" />
          </div>
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="md:w-1/2 flex flex-col justify-center"
          >
            <h2 className="md:text-2xl vvsm:text-xl font-bold mb-4 text-center">
              Room for Everything
            </h2>
            <p className="md:text-base vvsm:text-xs md:w-[80%] md:ml-10 lg:ml-20 xl:ml-24 sm:text-sm vvsm:text-center md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptates corporis quibusdam libero fugit officia ea quasi soluta
              odio enim culpa suscipit quas eius tenetur aliquid, excepturi
              mollitia. Quae, ad nihil?
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Detail;
