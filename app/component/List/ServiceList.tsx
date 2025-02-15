"use client";

import { ArrowRight } from "@phosphor-icons/react";
import React, { useState } from "react";

interface ServiceList {
  label: string;
  img: string;
}

const ServiceList = () => {
  const [services, setServices] = useState<ServiceList[]>([
    { label: "Mobile App Design", img: "" },
    { label: "Web Design", img: "" },
    { label: "Web Template", img: "" },
    { label: "Custom Web & Mobile Development", img: "" }
  ]);

  return (
    <div className="text-white flex flex-col gap-5 lg:gap-7 mt-10 lg:mt-14">
      {services.map((service: ServiceList, key: React.Key) => (
        <div key={key} className="flex items-center justify-between">
          <p className="h2 text-neutral-400 font-semibold">{service.label}</p>
          <ArrowRight size={32} className="text-neutral-400" />
        </div>
      ))}
    </div>
  );
};

export default ServiceList;
