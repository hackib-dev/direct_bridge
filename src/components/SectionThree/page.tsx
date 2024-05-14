"use client";

import {
  SectionFourImage,
  SectionFourStar,
  SectionOneImage,
  SectionOneStar,
  SectionThreeImage,
  SectionThreeStar,
  SectionTwoImage,
  SectionTwoStar,
} from "../../../assets";
import SectionCard from "./sectionCard";
import Image from "next/image";

const SectionThree = () => {
  return (
    <div className="p-5 md:p-20">
      <div className="hidden md:block absolute right-0 mt-10">
        <Image src={SectionOneStar} alt="star"></Image>
      </div>
      <h1 className="text-center text-[28px] md:text-[30px] mx-auto font-medium w-full md:w-[500px] md:mb-20 mb-10">
        Explore our range of loan products designed with you in mind
      </h1>

      <div className=" grid grid-cols-1  md:grid-cols-2 gap-10 place-items-center mb-10 md:mb-44">
        <div className="order-2 md:order-1">
          <SectionCard
            title="Get personal loans"
            body="Why wait for Pay-day when you can get paid NOW. Our personal loans are specifically
            designed for SALARY
            EARNERS with flexible repayments ranging from 3 – 12 months to help you cater for those"
            subtitle="Requirements"
            subbody={
              <ul className="list list-disc  text-[#595959] px-4">
                <li>Proof of employment</li>
                <li>Work ID card</li>
                <li>
                  Valid ID (Voter&apos;s card, Driver&apos;s License, NIMC,
                  International Passport)
                </li>
                <li>
                  6 months bank statement (To be sent by your bank to
                  statements@directbridgeng.com OR auhorize us spool it)
                </li>
                <li>**No Guarantor/Collateral Required</li>
              </ul>
            }
            buttonText="Apply Now"
          />
        </div>
        <div className="order-1 md:order-1 ml-0 md:ml-10">
          <Image
            src={SectionOneImage}
            alt="Personal loans"
            className="border-2 border-[#FFC700] rounded-lg"
          ></Image>
        </div>
      </div>

      <div className=" grid grid-cols-1  md:grid-cols-2 gap-10 place-items-center mb-10 md:mb-44">
        <div className="order-2 md:order-2 ml-0 md:ml-10">
          <SectionCard
            title="Access loans for emergency"
            body="Get your quick loan in 6 hours up to N100,000! (after all documentations are submitted). Emergency loans are payable in 30days"
            buttonText="Apply Now"
          />
        </div>
        <div className="order-1 md:order-1">
          <div className="hidden md:block absolute left-0 -mt-16 z-10">
            <Image src={SectionTwoStar} alt="star"></Image>
          </div>
          <Image
            src={SectionTwoImage}
            alt="Personal loans"
            className="relative border-2 border-[#8D83FF] rounded-lg"
          ></Image>
        </div>
      </div>

      <div className=" grid grid-cols-1  md:grid-cols-2 gap-10 place-items-center mb-10 md:mb-44">
        <div className="order-2 md:order-1">
          <SectionCard
            title="Access loans for your business"
            body="Fuel the Growth of Your Business with Ease. Unlock Access to Tailored Loans Tailored to Your Entrepreneurial Vision. Empower Your Business Journey Today."
            subtitle="Requirements"
            subbody={
              <ul className="list list-disc  text-[#595959] px-4">
                <li>
                  Certificate of registration or incorporation (Memorandum of
                  Association & Form Co2)
                </li>
                <li>
                  MD&apos;s Staff ID and any other Valid ID card (National ID,
                  Int. Passport, voters ID etc.)
                </li>
                <li>6 Months corporate bank statement</li>
                <li>Tenure 3 - 6months</li>
                <li>** Guarantor/Collateral could be Requested</li>
              </ul>
            }
            buttonText="Apply Now"
          />
        </div>
        <div className="order-1 md:order-1 ml-0 md:ml-10">
          <div className="hidden md:block absolute right-0 -mt-36 z-10">
            <Image src={SectionThreeStar} alt="star"></Image>
          </div>
          <Image
            src={SectionThreeImage}
            alt="Personal loans"
            className="relative border-2 border-[#FFC700] rounded-lg"
          ></Image>
        </div>
      </div>

      <div className=" grid grid-cols-1  md:grid-cols-2 gap-10 place-items-center mb-10 md:mb-44">
        <div className="order-2 md:order-2 ml-0 md:ml-10">
          <SectionCard
            title="Secure loan for your groups"
            body="Our group loans are available to co-operative societies within a corporate organization. Our interest rate is attractive."
            buttonText="Apply Now"
          />
        </div>
        <div className="order-1 md:order-1">
          <div className="hidden md:block absolute left-0 -mt-44">
            <Image src={SectionFourStar} alt="star"></Image>
          </div>
          <Image
            src={SectionFourImage}
            alt="Personal loans"
            className="relative border-2 border-[#8D83FF] rounded-lg"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
