"use client";

import Image from "next/image";
import React from "react";
import ChipService from "./ChipService";

const Services = () => {
  return (
    <div className="w-full min-h-[50px] h-[3vh] px-4 py-2 flex items-center gap-5 overflow-hidden relative">
      <div className="absolute aspect-square min-h-[50px] bg-black blur-xl top-0 left-0"></div>
      <ChipService service="Web Design" />
      <ChipService service="Web Design" />
      <ChipService service="Web Design" />
      <ChipService service="Web Design" />
      <ChipService service="Web Design" />
      <ChipService service="Web Design" />
      <ChipService service="Web Design" />
      <ChipService service="Web Design" />
      <ChipService service="Web Design" />
      <ChipService service="Web Design" />
      <ChipService service="Web Design" />
      <ChipService service="Web Design" />
      <div className="absolute aspect-square min-h-[50px] bg-black blur-xl top-0 right-0"></div>
    </div>
  );
};

export default Services;
