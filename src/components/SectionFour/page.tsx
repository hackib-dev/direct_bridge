"use client";
import SectionCard from "../SectionTwo/sectionCard";
import { Line } from "../../../assets";
import Image from "next/image";
import { LpoImage } from "../../../assets";
import { AssetImage } from "../../../assets";

const SectionFour = () => {
  return (
    <div className="mt-10 bg-primary bg-cover bg-no-repeat bg-[url('../../assets/images/index/bg-image.png')] px-5 py-12 md:px-20 md:py-16">
      <div className="mb-12">
        <h1 className="mx-auto text-4xl text-white text-center font-medium w-full md:w-[600px] mb-2">
          Explore our range of loan products designed with you in mind
        </h1>
        <Image src={Line} alt="line" className="mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-3">
        <SectionCard
          title="LPO Financing"
          body="Unleash the potential for growth, secure your supply chain, and seize new opportunities with our tailored solutions. Navigate the world of trade confidently, backed by the support you need to turn your Purchase Orders into business triumphs."
          imageOne={LpoImage}
        />
        <SectionCard
          title="Asset Financing"
          body="Whether you're expanding operations, upgrading equipment, or seizing new opportunities, our tailored financing options empower you to acquire and leverage assets strategically"
          imageTwo={AssetImage}
        />
      </div>
    </div>
  );
};

export default SectionFour;
