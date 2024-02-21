"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";


export const portfolio = [
    {
      name: "Carpool",
      images: [
        "/images/portfolio/carpool1.png",
        "/images/portfolio/carpool2.png",
        "/images/portfolio/carpool3.png",
        "/images/portfolio/carpool4.png",
      ],
    },
    {
      name: "Cake Recipe",
      images: [
        "/images/portfolio/cakes1.png",
        "/images/portfolio/cakes2.png",
        "/images/portfolio/cakes.3.png",
      ],
    },
    {
      name: "Apartamenti",
      images: [
        "/images/portfolio/apart1.png",
        "/images/portfolio/apart2.png",
        "/images/portfolio/apart3.png",
        "/images/portfolio/apart4.png",
      ],
    },
    {
      name: "Airbnb clone",
      images: ["/images/portfolio/bnb1.png", "/images/portfolio/bnb2.png"],
    },
  ];

export const ShowCase = () => {
   const router = useRouter()
  return (
    <section id="portfolio" className=" relative w-full px-6 py-2  gap-y-4 bg-white">
      <div className=" flex flex-col gap-y-3 text-center mb-4">
        <h1 className=" text-lg text-green-800 font-semibold font-mono ">
          WORK DISPLAY
        </h1>
        <p className=" text-sm font-bold font-mono text-neutral-500">
          This are some of my various projects, enjoy!
        </p>
      </div>

      <div className="w-full grid md:grid-cols-2 gap-2 ">
        {portfolio.map(portfolio=>(
            <div key={portfolio.name} className=" relative col-span-1 h-[500px]">
              <Image
               fill
               src={portfolio.images?.[1]}
               className="  aspect-square bg-cover bg-center"
               alt=""
               />
            </div>
        ))}
      </div>
    
  
    </section>
  );
};
