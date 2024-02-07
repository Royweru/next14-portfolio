import { AboutCard } from "@/components/about-card";
import { Avatar } from "@/components/avatar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between h-full
     bg-gradient-to-br  from-emerald-300 via-slate-50 to-cyan-600">
      <div className=" w-full grid grid-cols-1 sm:grid-cols-2 md:gap-5 sm:gap-3 gap-2 px-12">
        <Avatar />
        <AboutCard />
      </div>
    </main>
  );
}
