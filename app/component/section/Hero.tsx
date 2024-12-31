"use client";

import React from "react";
import Services from "../header/Services";
import { cn } from "@/lib/utils";
import { manrope, syncopate } from "@/lib/font";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="min-h-svh w-full">
      <Services />
      <h1
        className={cn(
          manrope.className,
          "text-[9vw] font-extrabold text-white text-center text-nowrap w-full tracking-[1rem] relative z-20"
        )}
      >
        LUMINIX PIXEL
      </h1>
      <div className="grid grid-cols-12 mt-[7vh]">
        <div className="col-span-3 p text-white relative z-20">
          Luminix Pixel is a dynamic digital agency committed to enhancing user
          experiences by leveraging the latest advancements in technology,
          ensuring innovative and impactful solutions.
        </div>
        <div className="col-span-6">
            <Image alt="cube" src={"/img/cube.png"} width={0} height={0} sizes="100" className="min-w-[600px] w-[140] relative -top-[10vh] -translate-y-1/4 -translate-x-1/2 left-1/2 animate" />
        </div>
        <div className="col-span-3 text-end h4 text-white relative z-20">
          *ESTABLISHED - 2024 MALANG, EAST JAVA
        </div>
      </div>
    </section>
  );
};

export default Hero;
