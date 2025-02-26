import { manrope } from "@/lib/font";
import { cn } from "@/lib/utils";
import { InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import SocmedBar from "./components/SocmedBar";

export default function page() {
  return (
    <div className="w-full min-h-screen bg-dark text-white">
      <main>
        <div className="w-full min-h-[92vh] flex justify-center items-center">
          <h1 className={cn(manrope.className, "h1")}>Coming Soon</h1>
        </div>
        <SocmedBar />
      </main>
    </div>
  );
}
