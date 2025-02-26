"use client";
import { InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import React from "react";

const SocmedBar = () => {
  return (
    <div className="h-[8vh] py-2 px-5 lg:px-[10vw] w-full flex items-center justify-end text-white gap-4">
      <InstagramLogo size={23} weight="fill" />
      <LinkedinLogo size={23} weight="fill" />
    </div>
  );
};

export default SocmedBar;
