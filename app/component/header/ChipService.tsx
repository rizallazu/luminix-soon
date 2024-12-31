import Image from "next/image";
import React from "react";

type Props = {
  service: string;
};

const ChipService = ({ service }: Props) => {
  return (
    <div className="flex items-center gap-3 text-white w-fit min-w-[150px]">
      <Image alt="divide" src={"/img/divider.svg"} width={20} height={20} />
      <span className="m">{service}</span>
    </div>
  );
};

export default ChipService;
