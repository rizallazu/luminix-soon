"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "@phosphor-icons/react";
import React from "react";

const LetsTalk = () => {
  return (
    <Button
      className="flex items-center gap-1 px-3 py-2 rounded-full bg-transparent text-white"
      variant={"outline"}
    >
      <span>Lets talk</span>
      <ArrowUpRight />
    </Button>
  );
};

export default LetsTalk;
