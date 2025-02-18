"use client";

import { Button } from "@/components/ui/button";
import { Cursor } from "@phosphor-icons/react";
import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";
import { manrope, monaSans } from "@/lib/font";
import Gravity from "./Gravity";
import GravityPillContainer from "./GravityPill";

const index = () => {
  
  return (
    <footer className="h-[90svh] relative z-20 cursor-auto">
      <div className="flex items-center justify-between text-white">
        <div className="s text-neutral-700">
          <p>Get in touch</p>
          <p>Right Now</p>
        </div>
        <div className=" flex items-center gap-2">
          <Image
            alt="logo"
            src={"/img/logo.svg"}
            width={0}
            height={0}
            className="w-auto h-[30px] lg:h-max min-h-[40px] aspect-square grayscale"
          />
          <p className="h4">LUMINIX PIXEL</p>
        </div>
        <div className="s text-neutral-700">
          <p>Available for</p>
          <p>new project</p>
        </div>
      </div>
      <div className="h-[80svh] min-h-[400px] w-full overflow-hidden text-white relative">
        <div className="border-white border w-fit px-7 py-5 h3 relative ml-10 mt-10">
          <Cursor
            className="text-primary-500 absolute -bottom-10 right-1/3 -translate-x-1/4 animate-bounce"
            size={40}
            weight={"fill"}
          />
          Make the most of today. Lets have <br /> a great discussion
          <div className="w-3 aspect-square bg-white absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="w-3 aspect-square bg-white absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"></div>
          <div className="w-3 aspect-square bg-white absolute bottom-0 left-0  -translate-x-1/2 translate-y-1/2"></div>
          <div className="w-3 aspect-square bg-white absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="flex items-end justify-end gap-5">
          <h4 className="h2 font-semibold !mb-0">
            Ready to <br />
            Collaborate?
          </h4>
          <Button className="text-white bg-primary-500 rounded-full">
            Start Project
          </Button>
        </div>
        <div className="h-[200px]">
          <GravityPillContainer />
        </div>
        <h3
          className={cn(
            manrope.className,
            "text-[9vw] font-extrabold text-white text-center text-nowrap w-full tracking-[0.35rem] md:tracking-[1rem] absolute bottom-0 left-0 translate-y-1/2 z-20"
          )}
        >
          LUMINIX PIXEL
        </h3>
      </div>
      <div className="flex justify-between items-center text-neutral-100">
        <p>Based in Malang, East Java Indonesia</p>
        <p>@ Luminix Pixel, All Right Reserved</p>
      </div>
    </footer>
  );
};

export default index;
