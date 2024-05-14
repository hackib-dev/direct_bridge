"use client";

import { LeftWheel, Line, RightWheel } from "../../../assets";
import Image from "next/image";
import { Button } from "../ui/button";

const SectionFive = () => {
  const body =
    " You pay a fixed amount of the revenue you will make from selling your products. Your weekly / monthly pay will never increase during the repayment period";

  return (
    <div className="mt-10 bg-primary bg-cover bg-no-repeat bg-[url('../../assets/images/index/bg-image.png')] px-5 py-10 md:px-20 md:py-16 relative">
      <div className="mb-12 ">
        <Image
          src={LeftWheel}
          alt="left-wheel"
          className="absolute left-0 top-0 md:block hidden"
        ></Image>
        <h1 className="mx-auto text-4xl text-white text-center font-medium w-full md:w-[550px] mb-10 md:mb-10">
          Let&apos;s help you relief your financial burden today
        </h1>
        <Button size="lg" className="bg-white text-primary mx-auto flex">
          Get Started Now
        </Button>

        <Image
          src={RightWheel}
          alt="right-wheel"
          className="absolute right-0 bottom-0 md:block hidden"
        ></Image>
      </div>
    </div>
  );
};

export default SectionFive;
