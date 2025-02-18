"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface TeamList {
  name: string;
  job: string;
  img: string;
  hovered: boolean;
}

const TeamList = () => {
  const [teams, setTeams] = useState<TeamList[]>([
    {
      name: "Rizal",
      job: "Founder & Dev",
      img: "/teams/rizal.png",
      hovered: false,
    },
    {
      name: "Fauzi",
      job: "Co-Founder & UI/UX",
      img: "/teams/rizal.png",
      hovered: false,
    },
    {
      name: "Pasudra",
      job: "Graphic Designer",
      img: "/teams/rizal.png",
      hovered: false,
    },
    {
      name: "Arya",
      job: "UI/UX Designer",
      img: "/teams/rizal.png",
      hovered: false,
    },
    {
      name: "Syafik",
      job: "Developer",
      img: "/teams/rizal.png",
      hovered: false,
    },
  ]);

  const handleHoverOver = (name: string) => {
    setTeams((prevTeams) =>
      prevTeams.map((team, i) => ({
        ...team,
        hovered: name === team.name, // Only set hovered true for the hovered team
      }))
    );
  };

  const handleHoverLeave = () => {
    setTeams((prevTeams) =>
      prevTeams.map((team) => ({
        ...team,
        hovered: false, // Reset all to false
      }))
    );
  };
  return (
    <div className="w-full min-h-[400px] lg:min-h-[350px] h-[40svw] flex flex-col lg:flex-row my-10">
      {teams.map((team: TeamList, key: React.Key) => (
        <motion.div
          key={key}
          data-cursor="big"
          data-cursorLabel="See Profile"
          initial={{ width: "20%" }}
          animate={{ width: team.hovered ? "40%" : "20%" }}
          transition={
            team.hovered
              ? {
                  duration: 0.6,
                  ease: "easeIn",
                  easings: ["easeIn", "easeOut"],
                  delay: 0.3,
                }
              : { duration: 0.3, ease: "easeOut" }
          }
          onMouseEnter={() => handleHoverOver(team.name)}
          onMouseLeave={() => handleHoverLeave()}
          className={cn(
            team.hovered ? "min-w-[40%]" : "max-w-1/5",
            "hidden lg:block w-1/5  h-full border-r-[0.5px] border-neutral-500 text-white text-center relative overflow-x-hidden"
          )}
        >
          <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-full px-2 z-10">
            <p className="h3 font-semibold">{team.name}</p>
            <p className="p text-neutral-400">{team.job}</p>
          </div>
          <motion.img
            src="/img/hexateam.svg"
            initial={{
              minWidth: "200px",
              opacity: 0,
              position: "absolute",
              translateX: "40%",
              bottom: 0,
              right: 0,
              zIndex: 3,
            }}
            animate={{
              opacity: team.hovered ? 1 : 0,
              minWidth: "350px",
              width: "40%",
              translateX: team.hovered ? "0%" : "45%",
            }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0 }}
          />
          <motion.img
            src={`/teams/${team.name.toLowerCase()}.png`}
            initial={{
              minWidth: 270,
              width: "20%",
              position: "absolute",
              bottom: 0,
              right: 0,
              objectFit: "cover",
              aspectRatio: 3 / 4,
              objectPosition: "center",
              zIndex: 30,
              translateX: "45%",
              translateY: team.name == "Arya" ? "5%" : 0,
              filter: "brightness(75%)",
            }}
            animate={{
              minWidth: !team.hovered ? "350px" : "375px",
              width: team.hovered ? "47%" : "20%",
              right: team.hovered ? "25%" : 0,
              translateX: team.hovered ? "20%" : "45%",
              filter: team.hovered ? "brightness(100%)" : "brightness(75%)",
            }}
            transition={{ duration: 0.4, ease: "easeInOut", delay: 0.2 }}
            className=""
          />
        </motion.div>
      ))}
      {teams.map((team: TeamList, key: React.Key) => (
        <div
          className="w-full border-b min-h-[120px] h-[20svh] flex justify-between lg:hidden text-neutral-50 overflow-hidden"
          key={key}
        >
          <div className="pt-4">
            <p className="h3 font-semibold">{team.name}</p>
            <p className="p">{team.job}</p>
            <Button size={"sm"} className="bg-primary-400 my-2 text-black">
              See profile
            </Button>
          </div>
          <Image
            alt={`photo of ${team.name}`}
            src={`/teams/${team.name.toLowerCase()}.png`}
            width={0}
            height={0}
            sizes="100"
            className="h-[160%] w-auto translate-x-1/3 -translate-y-[6%]"
          />
        </div>
      ))}
    </div>
  );
};

export default TeamList;
