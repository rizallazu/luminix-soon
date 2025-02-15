"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

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
    <div className="w-full min-h-[400px] lg:min-h-[300px] h-[50svw] flex my-10">
      {teams.map((team: TeamList, key: React.Key) => (
        <motion.div
          key={key}
          initial={{ width: "20%" }}
          animate={{ width: team.hovered ? "45vw" : "20%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          onMouseEnter={() => {
            handleHoverOver(team.name);
          }}
          onMouseLeave={() => {
            handleHoverLeave();
          }}
          className={cn(
            team.hovered ? "min-w-[45vw]" : "max-w-1/5",
            "w-1/5 h-full border-r-[0.5px] border-neutral-500 text-white text-center relative overflow-x-hidden"
          )}
        >
          <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-full px-2">
            <p className="h3 font-semibold">{team.name}</p>
            <p className="p text-neutral-400">{team.job}</p>
          </div>
          <Image
            alt={`Profile of ${team.name}`}
            src={team.img}
            width={0}
            height={0}
            sizes="100"
            className={cn(
              team.hovered
                ? "brightness-100 w-1/2 translate-x-1/3"
                : "brightness-75 w-full right-0 translate-x-[40%]",
              "min-w-[350px] h-auto absolute bottom-0  "
            )}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default TeamList;
