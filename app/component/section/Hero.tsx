"use client";

import React, { useEffect } from "react";
import Services from "../header/Services";
import { cn } from "@/lib/utils";
import { manrope, syncopate } from "@/lib/font";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="min-h-svh w-full">
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
          Luminix Pixel is a dynamic digital agency committed to enhancing user
          experiences by leveraging the latest advancements in technology,
          ensuring innovative and impactful solutions.
        </div>
        <div
          className="col-span-12 md:col-span-6 order-1 md:order-2"
          data-aos="zoom-in"
        >
          <Image
            alt="cube"
            src={"/img/cube.png"}
            width={0}
            height={0}
            sizes="100"
            className="md:min-w-[600px] w-[80vw] md:w-[140] relative top-[10vh] md:-top-[10vh] -translate-y-1/2 md:-translate-y-1/4 -translate-x-1/2 left-1/2 animate"
          />
        </div>
        <div
          data-aos="fade-right"
          className="col-span-12 md:col-span-3 order-3 text-end h4 text-white relative z-20"
        >
          *ESTABLISHED - 2024 MALANG, EAST JAVA
        </div>
      </div>
    </section>
  );
};

export default Hero;
