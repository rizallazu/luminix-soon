import { manrope, syncopate } from "@/lib/font";
import { cn } from "@/lib/utils";
import Image from "next/image";
import LetsTalk from "./component/Button/LetsTalk";
import { Metadata } from "next";
import MainHeader from "./component/header";
import Hero from "./component/section/Hero";

export const metadata: Metadata = {
  title: "Luminix Pixel Web Studio",
  description: "Create your immersive and next gen web with us!",
  icons: "/img/logo.svg",
};

export default function Home() {
  return (
    <div
      className={cn(
        manrope.className,
        "w-full max-w-full overflow-x-hidden min-h-[200svh] bg-dark px-5 lg:px-[10vw] py-4 lg:py-[5vh] relative"
      )}
    >
      <MainHeader />
      <main className="py-10 lg:py-[10vh]">
        <Hero />
      </main>
    </div>
  );
}
