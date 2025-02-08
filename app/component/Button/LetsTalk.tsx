"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "@phosphor-icons/react";
import React from "react";

const LetsTalk = () => {
  return (
    <Button
      className="flex items-center gap-1 px-3 py-2 rounded-full bg-transparent text-white hover:text-white hover:bg-primary-400 duration-300 hover:border-primary-400"
      variant={"outline"}
    >
      <span>Lets talk</span>
      <ArrowUpRight />
    </Button>
  );
};

export default LetsTalk;
