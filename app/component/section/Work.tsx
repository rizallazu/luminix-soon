import { manrope } from "@/lib/font";
import { cn } from "@/lib/utils";
import React from "react";
import WorkList from "../List/WorkList";

const Work = () => {
  return (
    <section className="min-h-svh w-full my-[10vh]" id="work">
      <h2
        data-aos="fade-left"
        className={cn(
          manrope.className,
          "text-primary-400 p font-semibold  md:tracking-[0.3rem]"
        )}
      >
        Our Work
      </h2>
      <h3 data-aos="fade-left" className="h1 font-bold text-white">
        The next level of product
      </h3>
      <WorkList />
    </section>
  );
};

export default Work;
