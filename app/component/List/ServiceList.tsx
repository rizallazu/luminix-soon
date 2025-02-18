"use client";

import { ArrowRight } from "@phosphor-icons/react";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ServiceList {
  label: string;
  img: string;
}

const ServiceList = () => {
  const [seeImage, setSeeImage] = useState<string>("");
  const [services, setServices] = useState<ServiceList[]>([
    { label: "Mobile App Design", img: "" },
    { label: "Web Design", img: "" },
    { label: "Web Template", img: "" },
    { label: "Custom Web & Mobile Development", img: "" },
  ]);

  const onHover = (key: string) => {
    setSeeImage(key.toLowerCase());
  };

  return (
    <div className="text-white flex flex-col gap-5 lg:gap-7 mt-10 lg:mt-14">
      {services.map((service: ServiceList, key: React.Key) => (
        <div
          data-aos="fade-left"
          key={key}
          data-cursor="big"
          data-cursorLabel="Click"
          onMouseOver={() => onHover(service.label)}
          onMouseLeave={() => setSeeImage("")}
          className="flex items-center justify-between text-neutral-400 hover:text-primary-400 max-h-[100px] overflow-hidden"
        >
          <p className="h2  font-semibold">{service.label}</p>
          <motion.div
            initial={{
              opacity: 0,
              width: 0,
              height: 0,
              overflow: "hidden",
            }}
            animate={{
              opacity: seeImage == service.label.toLowerCase() ? 1 : 0,
              width: 100,
              height: 100,
              objectFit: "cover"
            }}
            transition={{
              duration: 0.4,
              ease: "backInOut",
              delay: 0.2
            }}
          >
            <Image
              alt={service.label}
              src={"/img/hexateam.svg"}
              width={100}
              height={100}
              sizes="100"
            />
          </motion.div>
          <ArrowRight size={32} className="" />
        </div>
      ))}
    </div>
  );
};

export default ServiceList;
