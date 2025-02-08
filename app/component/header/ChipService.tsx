import Image from "next/image";
import React from "react";

type Props = {
  service: string;
};

const ChipService = ({ service }: Props) => {
  return (
    <div className="flex items-center gap-3 text-white min-w-max">
      <Image alt="divide" src={"/img/divider.svg"} width={20} height={20} />
      <span className="m w-full">{service}</span>
    </div>
  );
};

export default ChipService;
