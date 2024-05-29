import { useState } from "react";
import Button from "./Button";
import { hero } from "./constant/index";

const Hero = () => {
  const [heroData] = useState(hero);

  return (
    <section>
      {heroData.map((item, index) => (
        <div
          key={index}
          className="relative flex flex-col items-center justify-center"
        >
          <img
            src={item.img}
            className="h-screen w-full object-cover"
            alt={item.title}
          />
          <div className="absolute pt-28 flex flex-col h-screen w-full items-center justify-between">
            <div className="flex flex-col items-center title">
              <h1 className="text-4xl font-medium">{item.title}</h1>
              <p className=" vvsm:text-base md:text-xl">{item.desc}</p>
            </div>
            <div className="flex flex-col mb-28 w-full gap-y-6 sm:flex">
              {item.button.map((btnText, btnIndex) => (
                <Button key={btnIndex} text={btnText} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Hero;
