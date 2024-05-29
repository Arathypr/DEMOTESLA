// CustomerOrder.js
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

  const handleFeatureButtonClick = () => {
    setIsFeatureVisible(true);
  };

  const handleCloseFeature = () => {
    setIsFeatureVisible(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <div className="relative vvsm:pr-0">
        <div className="flex flex-col md:flex-row mt-10">
          <div className="md:w-3/5">
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
            <h1 className="p-4 w-full text-black text-center text-4xl font-bold">
              {currentCar.title}
            </h1>
            <div className="w-full px-4">
              <div className="flex justify-between py-2 border-b border-gray-400">
                <div className="text-gray-700">
                  <span className="mr-2">402</span>
                  <span>mi</span>
                </div>
                <div className="text-gray-700">Range (EPA est.)</div>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-400">
                <div className="text-gray-700">
                  <span className="mr-2">130</span>
                  <span>mph</span>
                </div>
                <div className="text-gray-700">Top Speed</div>
              </div>
              <div className="flex justify-between py-2">
                <div className="text-gray-700">
                  <span className="mr-2">3.1</span>
                  <span>sec</span>
                </div>
                <div className="text-gray-700">0-60 mph</div>
              </div>
            </div>

            <div className="w-full px-4">
              <div className="flex justify-center">
                <button className="my-4 bg-zinc-100 hover:border-black border text-black text-opacity-50 font-bold py-2 px-4 rounded">
                  ALL-WHEEL DRIVE <span className="ml-2">$891/mo</span>
                </button>
              </div>
              <div className="flex justify-center">
                <button className="my-4 bg-zinc-100 hover:border-black border text-black text-opacity-50 font-bold py-2 px-[60px] rounded">
                  plaid <span className="ml-2">$1,142/mo</span>
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

            {/* Color buttons */}
            <div className="w-full px-4">
              <h1 className="p-4 w-full text-black text-center text-3xl font-bold">
                Paint
              </h1>
              <div className="w-full flex justify-center mt-4">
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
      className="mx-2 bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center focus:outline-none cursor-pointer"
      onClick={onClick}
    >
      <img src={image} alt="Option" className="w-12 h-12 rounded-full" />
    </div>
  );
}

export default CustomerOrder;
