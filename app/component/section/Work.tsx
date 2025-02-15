import { manrope } from "@/lib/font";
import { cn } from "@/lib/utils";
import React from "react";
import ServiceList from "../List/ServiceList";
import WorkList from "../List/WorkList";

const Work = () => {
  return (
    <section className="min-h-svh w-full" id="work">
      <h2
        className={cn(
          manrope.className,
          "text-primary-400 p font-semibold  md:tracking-[0.3rem]"
        )}
      >
        Our Work
      </h2>
      <h3 className="h1 font-bold text-white">The next level of product</h3>
      <WorkList />
    </section>
  );
};

export default Work;
