import { manrope, monaSans } from "@/lib/font";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import MainHeader from "./component/header";
import Hero from "./component/section/Hero";
import Footer from "./component/footer";
import Menubar from "./component/menubar";
import Service from "./component/section/Service";
import Work from "./component/section/Work";
import Team from "./component/section/Team";
import Cube from "./cube/components/Cube";

export const metadata: Metadata = {
  title: "Luminix Pixel Web Studio",
  description: "Create your immersive and next gen web with us!",
  icons: "/img/logo.svg",
};

export default function Home() {
  return (
    <>
      <div
        className={cn(
          monaSans.className,
          "w-full max-w-full overflow-x-hidden min-h-[200svh] bg-dark px-5 lg:px-[10vw] py-4 lg:py-[5vh] relative"
        )}
      >
        <MainHeader />
        <main className="py-10 lg:py-[10vh] relative">
          <Hero />
          <div className="w-screen min-h-screen absolute top-0 left-1/2 translate-y-[15vh] -translate-x-1/3 z-0 grid place-content-center ">
            <Cube />
          </div>
          <Service />
          <Work />
          <Team />
          <Menubar />
        </main>
      </div>
      <div className="w-full max-w-full overflow-x-hidden  bg-dark px-5 lg:px-[10vw] py-4 lg:py-[5vh] relative z-[70]">
        <Footer />
      </div>
    </>
  );
}
