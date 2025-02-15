import { manrope } from "@/lib/font";
import { cn } from "@/lib/utils";
import React from "react";
import ServiceList from "../List/ServiceList";

const Service = () => {
  return (
    <section className="min-h-svh w-full" id="service">
      <h2 className={cn(manrope.className, "text-primary-400 p font-semibold  md:tracking-[0.3rem]")}>
        Our Service
      </h2>
      <h3 className="h1 font-bold text-white">
        We turn your ideas <br />
        into stunning visuals.
      </h3>
      <ServiceList />
    </section>
  );
};

export default Service;
