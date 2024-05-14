"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {
  ImageOne,
  ImageTwo,
  ImageThree,
  EuroSymbol,
  GameIcon,
  EuroBg,
} from "../../../assets";
import { Button } from "../ui/button";

const SectionOne = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [rotate, setRotate] = useState(true);
  const [fade, setFade] = useState(false);

  const images = [ImageOne, ImageTwo, ImageThree];

  const switchImage = () => {
    setFade(true);

    setTimeout(() => {
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setFade(false);
    }, 1000);
  };

  useEffect(() => {
    const interval = setInterval(switchImage, 3000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col-reverse md:flex-row w-full mt-3 md:mt-32">
      <div className="w-full md:w-1/2 mt-24 mb-5">
        <h1 className="text-[30px] md:text-[50px] leading-tight font-semibold">
          Unlock Your Financial Future with Tailored Loans!
        </h1>
        <p className="mt-5">
          Embark on a journey towards financial freedom with Direct Bridges
          bespoke loan solutions.
        </p>
        <div className="mt-7">
          <Button
            className="bg-primary text-white rounded-md px-6 py-2.5 outline-[#EAEAEA] outline-1 outline w-fit md:w-36"
            size="lg"
          >
            Get Loan Now
          </Button>
          <Button
            className="text-primary bg-[#F0F3FE] outline-[#DDE3FD] outline-1 outline rounded-md px-6 py-2.5 ml-3 w-fit md:w-36"
            size="lg"
          >
            Pay Now
          </Button>
        </div>
      </div>
      <div className="w-full md:w-1/2 ml-0 md:ml-20">
        <div>
          <Image
            src={EuroBg}
            alt="Euro Background"
            className={`absolute z-30 top-16 left-2 md:left-auto md:top-28 w-[60px] md:w-[120px] ml-0 md:ml-5 transition-transform duration-2000 ${
              rotate ? "rotate-0" : "rotate-90"
            }`}
            style={{
              transform: `rotate(${activeImageIndex * 90}deg)`,
            }}
          />
          <Image
            src={EuroSymbol}
            alt="Euros"
            className="absolute z-40 mt-[68px] ml-2 md:ml-14 md:mt-2 md:w-fit w-[20px]"
          />

          <Image
            src={images[activeImageIndex]}
            width={470}
            alt={`Image ${activeImageIndex + 1}`}
            className={`relative top-20 md:top-5 left-0 md:left-20 z-20 rounded-3xl border-[#395CF5] border-2  transition-opacity duration-1500 ${
              fade ? "opacity-0" : "opacity-100"
            } `}
          />
        </div>
        <Image
          src={GameIcon}
          width={100}
          alt="Game Icon"
          className="hidden md:block absolute -bottom-24 right-0 z-40 w-32"
        />
      </div>
    </div>
  );
};

export default SectionOne;
