import Image from "next/image";

const ChipService = ({ service }: { service: string }) => {
  return (
    <div className="bg-white/10 rounded-full whitespace-nowrap text-white text-sm hover:bg-white/20 transition-colors flex gap-3 justify-center items-center py-1 px-4 lg:py-3 lg:px-7">
      <Image alt="divide" src={"/img/divider.svg"} width={20} height={20} />
      {service}
    </div>
  );
};

export default ChipService;
