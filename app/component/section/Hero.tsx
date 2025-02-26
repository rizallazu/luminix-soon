"use client";

import React, { useEffect } from "react";
import Services from "../header/Services";
import { cn } from "@/lib/utils";
import { manrope } from "@/lib/font";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="min-h-svh w-full mb-[15svh] relative z-20 top-0 left-0">
      <div className="">
        <Services />
        <h1
          data-aos="zoom-in"
          className={cn(
            manrope.className,
            "text-[9vw] font-extrabold text-white text-center text-nowrap w-full tracking-[0.35rem] md:tracking-[1rem] relative z-20"
          )}
        >
          LUMINIX PIXEL
        </h1>
        <div className="grid grid-cols-12 mt-[7vh]">
          <div
            data-aos="fade-left"
            className="col-span-12 md:col-span-3 p text-white relative z-20 order-2 md:order-1"
          >
            Luminix Pixel - We are an indie team of designers and developers
            committed to enhancing user experiences by leveraging the latest
            advancements in technology, creating innovative and impactful
            solutions.
          </div>
          <div className="col-span-12 md:col-span-6 order-1 md:order-2"></div>
          <div
            data-aos="fade-right"
            className="col-span-12 md:col-span-3 order-3 text-end h4 text-white relative z-20"
          >
            *ESTABLISHED - 2024 MALANG, EAST JAVA
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
