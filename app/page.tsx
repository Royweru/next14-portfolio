import { AboutCard } from "@/components/about-card";
import { Avatar } from "@/components/avatar";
import { ShowCase } from "@/components/portfolio/showcase";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { ProfileCard } from "@/components/profile-card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between ">
       <ProfileCard />
      <div>
      <ShowCase />
      </div>
      <Footer />
    </main>
  );
}
