import Image from "next/image";

const ChipService = ({ service }: { service: string }) => {
  return (
    <div className="py-1 bg-white/10 rounded-full whitespace-nowrap text-white text-sm hover:bg-white/20 transition-colors flex gap-5 justify-center items-center px-7">
      <Image alt="divide" src={"/img/divider.svg"} width={20} height={20} />
      {service}
    </div>
  );
};

export default ChipService;
