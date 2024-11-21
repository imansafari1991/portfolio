import SectionHeading from "@/components/Helpers/SectionHeading";
import { servicesData } from "@/data/data";
import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="pt-16 pb-16 bg-[#050709]">
      {/* Section Heading */}
      <SectionHeading>Services</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-[80%] mx-auto items-center mt-20">
        {servicesData.map((service, i) => (
          <div
            data-aos="fade-left"
            data-aos-anchor-placement="top-center"
            data-aos-delay={`${i * 50}`}
            key={service.id}
          >
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
