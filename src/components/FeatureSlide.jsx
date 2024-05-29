
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images
import sliderimg1 from "../assets/images/slideimg1.png";
import sliderimg2 from "../assets/images/sliderimg2.png";
import sliderimg3 from "../assets/images/sliderimg3.png";
import sliderimg4 from "../assets/images/sliderimg4.png";
import sliderimg5 from "../assets/images/sliderimg5.png";
import sliderimg6 from "../assets/images/sliderimg6.png";

// Slider settings
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "0",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

// Data for slides
const data = [
  {
    img: sliderimg1,
    Review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus in aut ullam autem suscipit illo, ratione, natus iste, rem itaque ea beatae nulla quis recusandae nobis fuga molestiae.",
  },
  {
    img: sliderimg2,
    Review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus in aut ullam autem suscipit illo, ratione, natus iste, rem itaque ea beatae nulla quis recusandae nobis fuga molestiae.",
  },
  {
    img: sliderimg3,
    Review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus in aut ullam autem suscipit illo, ratione, natus iste, rem itaque ea beatae nulla quis recusandae nobis fuga molestiae.",
  },
  {
    img: sliderimg4,
    Review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus in aut ullam autem suscipit illo, ratione, natus iste, rem itaque ea beatae nulla quis recusandae nobis fuga molestiae.",
  },
  {
    img: sliderimg5,
    Review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus in aut ullam autem suscipit illo, ratione, natus iste, rem itaque ea beatae nulla quis recusandae nobis fuga molestiae.",
  },
  {
    img: sliderimg6,
    Review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus in aut ullam autem suscipit illo, ratione, natus iste, rem itaque ea beatae nulla quis recusandae nobis fuga molestiae.",
  },
];

function FeatureSlide({ isVisible, onClose }) {
  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg max-w-3xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full">
          <Slider {...settings}>
            {data.map((d, index) => (
              <div
                key={index}
                className="h-[450px] text-white text-opacity-30 bg-black border flex"
              >
                <div className="flex-1 flex justify-center items-center p-4">
                  <img
                    src={d.img}
                    alt={`slide_image_${index}`}
                    className="h-[50vh] w-full object-contain"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center items-center p-4">
                  <p className="text-center">{d.Review}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default FeatureSlide;
