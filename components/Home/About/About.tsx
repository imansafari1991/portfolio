import SectionHeading from "@/components/Helpers/SectionHeading";
import StackSection from "@/components/Helpers/StackSection";
import { aboutInfo } from "@/data/data";
import Image from "next/image";
import React from "react";


const About = () => {
  return (
    <div className="pt-16 pb-16 bg-[#050709]">
      {/* Section Heading */}
      <SectionHeading>About Me</SectionHeading>
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20">
        {/* Text Content */}
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <h1 className="text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200">
            {aboutInfo.title}
          </h1>
          <p className="mt-6 text-base text-gray-500">
            {aboutInfo.description}
          </p>
          <div className="mt-8">
            <StackSection title="Backend Developer" iconColor={"bg-blue-800"} />
            <StackSection
              title="Frontend Developer"
              iconColor={"bg-orange-800"}
            />
            <StackSection title="Devops" iconColor={"bg-green-800"} />
          </div>
        </div>
        {/* Stats Content */}
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          data-aos-delay="150"
          className="grid grid-cols-2 gap-16 items-center lg:mx-auto"
        >
          {/* 1st stat */}
          <div>
            <Image
              src="/images/customer.png"
              alt="image"
              width={80}
              height={80}
              className="mx-auto"
            />
            <p className="mt-3 font-bold text-xl text-white text-center">
              {aboutInfo.client}
            </p>
            <p className="text-base sm:text-lg text-gray-400 text-center">
              Satisfied Customers
            </p>
          </div>
          <div>
            {/* 2nd stat */}

            <Image
              src="/images/experience.png"
              alt="image"
              width={80}
              height={80}
              className="mx-auto"
            />
            <p className="mt-3 font-bold text-xl text-white text-center">
              {aboutInfo.experience}
            </p>
            <p className="text-base sm:text-lg text-gray-400 text-center">
              Years Experience
            </p>
          </div>
          <div>
            <Image
              src="/images/completed.png"
              alt="image"
              width={80}
              height={80}
              className="mx-auto"
            />
            <p className="mt-3 font-bold text-xl text-white text-center">
              {aboutInfo.project}
            </p>
            <p className="text-base sm:text-lg text-gray-400 text-center">
              Completed Project
            </p>
          </div>
          <div>
            <Image
              src="/images/rocket.png"
              alt="image"
              width={80}
              height={80}
              className="mx-auto"
            />
            <p className="mt-3 font-bold text-xl text-white text-center">
              {aboutInfo.website}
            </p>
            <p className="text-base sm:text-lg text-gray-400 text-center">
              Website Launched
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;