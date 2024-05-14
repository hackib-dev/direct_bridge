"use client";
import SectionCard from "./sectionCard";
import { Line } from "../../../assets";
import Image from "next/image";

const SectionTwo = () => {
  const body =
    " You pay a fixed amount of the revenue you will make from selling your products. Your weekly / monthly pay will never increase during the repayment period";

  return (
    <div className="mt-10 bg-primary bg-cover bg-no-repeat bg-[url('../../assets/images/index/bg-image.png')] px-5 py-12 md:px-20 md:py-16">
      <div className="mb-12">
        <h1 className="mx-auto text-4xl text-white text-center font-medium w-full md:w-[350px] mb-2">
          Reasons why people choose us
        </h1>
        <Image src={Line} alt="line" className="mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-3">
        <SectionCard title="Tailored Solutions" body={body} />
        <SectionCard title="Competitive Rates" body={body} />
        <SectionCard title="Transparent Process" body={body} />
      </div>
    </div>
  );
};

export default SectionTwo;
