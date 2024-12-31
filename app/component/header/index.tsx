import Image from "next/image";
import React from "react";
import LetsTalk from "../Button/LetsTalk";
import { syncopate } from "@/lib/font";
import { cn } from "@/lib/utils";

const index = () => {
  return (
    <header className="w-full px-5 lg:px-[10vw] py-4 lg:py-[4vwh] flex justify-between items-center fixed top-0 left-0">
      <div className="flex items-center gap-2 py-5">
        <Image
          alt="logo"
          src={"/img/logo.svg"}
          width={0}
          height={0}
          className="w-auto h-[30px] lg:h-max min-h-[40px] aspect-square"
        />
        <p
          className={cn(
            syncopate.className,
            "h4 text-white uppercase"
          )}
        >
          Luminix Pixel
        </p>
      </div>

      <LetsTalk />
    </header>
  );
};

export default index;
