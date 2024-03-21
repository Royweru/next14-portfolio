"use client";

import { useModal } from "@/hooks/use-modal";
import { Plus, PlusCircle, PlusSquare } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { MouseEventHandler, useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea } from "../ui/scroll-area";

export const portfolio = [
  {
    id: 1,
    name: "Carpool",
    description:
      "An car sale website,tech stack is Next JS, tailwind,prisma ORM",
    images: [
      "/images/portfolio/carpool1.png",
      "/images/portfolio/carpool2.png",
      "/images/portfolio/carpool3.png",
      "/images/portfolio/carpool4.png",
    ],
  },
  {
    id: 2,
    name: "Cake Recipe",
    description:
      "a cake recipe website,tech stack is Next JS React Tailwind Typescript",
    images: [
      "/images/portfolio/cakes1.png",
      "/images/portfolio/cakes2.png",
      "/images/portfolio/cakes.3.png",
    ],
  },
  {
    id: 3,
    name: "Apartamenti",
    description:
      "A real estate application,tech stack is Next JS, Tailwind, Django on te backend",
    images: [
      "/images/portfolio/apart1.png",
      "/images/portfolio/apart2.png",
      "/images/portfolio/apart3.png",
      "/images/portfolio/apart4.png",
    ],
  },
  {
    id: 4,
    name: "Airbnb clone",
    description:
      "Airbnb clone tech stack includes Next JS Tailwind, Prisma ORM, Typescript",
    images: ["/images/portfolio/bnb1.png", "/images/portfolio/bnb2.png"],
  },
];

export const ShowCase = () => {
  const router = useRouter();
  const { onOpen, onClose } = useModal();

  return (
    <section
      id="portfolio"
      className=" relative w-full px-6 py-2  gap-y-4 bg-white"
    >
      <div className=" flex flex-col gap-y-3 text-center mb-4">
        <h1 className=" text-lg text-green-800 font-semibold font-mono ">
          WORK DISPLAY
        </h1>
        <p className=" text-sm font-bold font-mono text-neutral-500">
          This are some of my various projects, enjoy!
        </p>
      </div>

      <div className="w-full grid md:grid-cols-2 gap-4 ">
        {portfolio.map((portfolio) => (
          <div
            key={portfolio.name}
            className=" relative col-span-1 h-[400px] hover:cursor-pointer hover:opacity-80 group"
          >
            <Image
              fill
              src={portfolio.images?.[1]}
              className="  aspect-square bg-cover bg-center"
              alt=""
            />

            <div
              className=" opacity-0 group-hover:opacity-100 absolute flex justify-center
              w-full bottom-6 text-black"
              onClick={(e)=>{
                e.stopPropagation(),
                onOpen(portfolio)
              }}
            >
              <PlusCircle className=" w-28 h-28" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
