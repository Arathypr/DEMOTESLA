import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeatureSlide from "./FeatureSlide";
import AutoPark from "./AutoPark";
import { cars } from "./constant/index"; // Adjust the import path as needed

import white from "../assets/images/white.png";
import black from "../assets/images/black.png";
import blue from "../assets/images/blue.png";
import red from "../assets/images/red.png";

function CustomerOrder() {
  const [isFeatureVisible, setIsFeatureVisible] = useState(false);
  const [selectedColor, setSelectedColor] = useState("RED"); // Default color
  const [currentCar, setCurrentCar] = useState(cars[0]); // Default to the first car
  const [range, setRange] = useState("402");
  const [topSpeed, setTopSpeed] = useState("130");
  const [acceleration, setAcceleration] = useState("3.1");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: null,
    prevArrow: null,
  };

  const handleColorButtonClick = (color) => {
    setSelectedColor(color);
  };

  const handleLotteryButtonClick = () => {
    const ranges = ["402", "300", "350", "400"];
    const speeds = ["130", "120", "140", "150"];
    const accelerations = ["3.1", "3.5", "4.0", "2.9"];

    const randomRange = ranges[Math.floor(Math.random() * ranges.length)];
    const randomSpeed = speeds[Math.floor(Math.random() * speeds.length)];
    const randomAcceleration =
      accelerations[Math.floor(Math.random() * accelerations.length)];

    setRange(randomRange);
    setTopSpeed(randomSpeed);
    setAcceleration(randomAcceleration);
  };

  const handleFeatureButtonClick = () => {
    setIsFeatureVisible(true);
  };

  const handleCloseFeature = () => {
    setIsFeatureVisible(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <div className="relative">
        <div className="flex flex-col-reverse md:flex-row mt-10 px-4 md:px-16">
          <div className="md:w-3/4 mt-4 md:mt-0">
            <Slider {...settings}>
              {currentCar.images[selectedColor].map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`${currentCar.title} ${selectedColor} ${index + 1}`}
                  />
                </div>
              ))}
            </Slider>
          </div>

          <div className="md:w-1/4 flex flex-wrap rounded-lg overflow-hidden">
            <h1 className="p-4 w-full text-black text-center vvsm:text-xl lg:text-4xl font-bold">
              {currentCar.title}
            </h1>
            <div className="w-full px-4">
              <div className="flex justify-between vvsm:text-sm py-2 border-b border-gray-400">
                <div className="text-gray-700">
                  <span className="mr-2">{range}</span>
                  <span>mi</span>
                </div>
                <div className="text-gray-700">Range (EPA est.)</div>
              </div>
              <div className="flex justify-between vvsm:text-sm py-2 border-b border-gray-400">
                <div className="text-gray-700">
                  <span className="mr-2">{topSpeed}</span>
                  <span>mph</span>
                </div>
                <div className="text-gray-700">Top Speed</div>
              </div>
              <div className="flex justify-between vvsm:text-sm py-2">
                <div className="text-gray-700">
                  <span className="mr-2">{acceleration}</span>
                  <span>sec</span>
                </div>
                <div className="text-gray-700">0-60 mph</div>
              </div>
            </div>

            <div className="w-full px-4">
              <div className="flex justify-center">
                <button
                  className="my-4 bg-zinc-100 hover:border-black border text-black text-opacity-50 font-bold py-2 px-4 rounded text-sm"
                  onClick={handleLotteryButtonClick}
                >
                  ALL-WHEEL DRIVE <span className="ml-2">$891/mo</span>
                </button>
              </div>
              <div className="flex justify-center">
                <button
                  className="my-4 bg-zinc-100 hover:border-black border uppercase text-black text-opacity-50 font-bold py-2 vvsm:px-[55px] md:px-[40px] sm:px-[50px] lg:px-[53px] rounded text-sm"
                  onClick={handleLotteryButtonClick}
                >
                  plaid <span className="ml-2 lowercase">$1,142/mo</span>
                </button>
              </div>
              <div className="lg:flex vvsm:hidden justify-center">
                <button
                  className="text-xs border hover:bg-zinc-50 text-gray-800 font-semibold py-1 px-2 rounded"
                  onClick={handleFeatureButtonClick}
                >
                  Feature Details
                </button>
              </div>
            </div>

            <div className="w-full px-4">
              <h1 className="p-4 w-full text-black text-center text-3xl font-bold vvsm:text-xl">
                Paint
              </h1>
              <div className="lg:w-[80%] vvsm:w-[100%] lg:ml-10 flex justify-center mt-4">
                <RoundButton
                  image={white}
                  onClick={() => handleColorButtonClick("WHITE")}
                />
                <RoundButton
                  image={black}
                  onClick={() => handleColorButtonClick("BLACK")}
                />
                <RoundButton
                  image={blue}
                  onClick={() => handleColorButtonClick("BLUE")}
                />
                <RoundButton
                  image={red}
                  onClick={() => handleColorButtonClick("RED")}
                />
              </div>
            </div>
          </div>
        </div>
        <FeatureSlide
          isVisible={isFeatureVisible}
          onClose={handleCloseFeature}
        />
      </div>
      <AutoPark />
    </>
  );
}

function RoundButton({ image, onClick }) {
  return (
    <div
      className="mx-2 rounded-full w-16 h-16 flex items-center justify-center focus:outline-none cursor-pointer"
      onClick={onClick}
    >
      <img src={image} alt="Option" className="w-10 h-10 rounded-full" />
    </div>
  );
}

export default CustomerOrder;
