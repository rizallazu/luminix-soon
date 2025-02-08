"use client"

import Image from "next/image";
import React, { useRef } from "react";
import { syncopate } from "@/lib/font";
import { cn } from "@/lib/utils";
import Header from "./Header";
import StickyCursor from "./StickyCursor";

const index = () => {
  const stickyElement:any = useRef(null);

  return (
    <header className="w-full px-5 lg:px-[10vw] py-4 lg:py-[4vwh] flex justify-between items-center fixed top-0 left-0 z-50">
      <div className="flex items-center gap-2 py-5">
        <Image
          alt="logo"
          src={"/img/logo.svg"}
          width={0}
          height={0}
          className="w-auto h-[30px] lg:h-max min-h-[40px] aspect-square"
        />
        {/* <p
          className={cn(
            syncopate.className,
            "p text-white uppercase w-max"
          )}
        >
          Luminix Pixel
        </p> */}
      </div>

      <Header ref={stickyElement}  />
      <StickyCursor stickyElement={stickyElement} />
    </header>
  );
};

export default index;
