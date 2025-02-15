import { manrope } from "@/lib/font";
import { cn } from "@/lib/utils";
import React from "react";
import TeamList from "../List/TeamList";

const Team = () => {
  return (
    <section className="min-h-svh w-full" id="team">
      <h2
        className={cn(
          manrope.className,
          "text-primary-400 p font-semibold  md:tracking-[0.3rem] text-center"
        )}
      >
        Our Team
      </h2>{" "}
      <h3 className="h1 font-bold text-white text-center">Meet our talented teams</h3>
      <TeamList />
    </section>
  );
};

export default Team;
