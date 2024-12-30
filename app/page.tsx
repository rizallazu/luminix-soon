import { manrope, syncopate } from "@/lib/font";
import { cn } from "@/lib/utils";
import Image from "next/image";
import LetsTalk from "./component/Button/LetsTalk";

export default function Home() {
  return (
    <div
      className={cn(
        manrope.className,
        "w-full max-w-full overflow-x-hidden min-h-svh bg-dark px-5 lg:px-[10vw] py-4 lg:py-[5vh]"
      )}
    >
      <header className="flex justify-between items-center">
        <div className="flex items-center gap-1 py-5">
          <Image
            alt="logo"
            src={"/img/logo.svg"}
            width={0}
            height={0}
            className="w-auto h-[30px] lg:h-[1vw]  min-h-[40px] aspect-video"
          />
          <p
            className={cn(
              syncopate.className,
              "text-[20px] text-white uppercase"
            )}
          >
            Luminix Pixel
          </p>
        </div>

        <LetsTalk />
      </header>
      <main className=""></main>
    </div>
  );
}
