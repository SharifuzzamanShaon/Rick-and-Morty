"use client";
import CastSlider from "@/components/HomePage/CastSlider";
import EpisodeSlider from "@/components/HomePage/EpisodeSlider";
import LocationSlider from "@/components/HomePage/LocationSlider";
import Image from "next/image";
import React from "react";
import "@/app/globals.css";
import { MdOutlinePlayCircleOutline } from "react-icons/md";

import { useRouter } from "next/navigation";

const Homepage = () => {
  const router = useRouter();
  return (
    <div className="relative h-[500px]  bg-cover bg-center brightness-110 contrast-125 bg-[url('/images/home-bg.png')]">
      <div className="absolute inset-0 bg-[#1b1d29]/90 z-0" />
      <div className="relative z-10 max-w-[1200px] mx-auto">
        <section className="w-full lg:h-[400px] h-[300px] sm:my-16 text-white flex flex-col items-center justify-center relative">
          <header className="lg:min-h-[60px]  flex flex-col items-center lg:mt-10 mt-10">
            <Image
              src="/images/Logo.png"
              alt="Site Logo"
              width={120}
              height={100}
              className="mx-auto cursor-pointer"
              onClick={() => router.push("/")}
            />
          </header>
          <Image
            src="/images/bubble.png"
            alt="Bubble"
            width={96}
            height={96}
            className="absolute top-[18%] left-[25%] sm:left-[20%] md:left-[15%] lg:left-[10%] sm:top-[20%]"
          />
          <Image
            src="/images/portal.png"
            alt="Portal"
            width={96}
            height={96}
            className="absolute top-[28%] left-[45%] -translate-x-1/2 sm:left-[40%] md:left-[35%] lg:left-[30%] sm:top-[30%]"
          />
          <Image
            src="/images/portal-gun.png"
            alt="Portal Gun"
            width={96}
            height={96}
            className="absolute bottom-[15%] right-[10%] sm:right-[5%] md:right-[10%] lg:right-[15%]"
          />
          <div className="my-8 ">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-ttblack text-left sm:text-center leading-tight drop-shadow-lg tracking-wide sm:tracking-wider">
            <span className="italic text-white mr-4 sm:mr-10 font-ttblack">
              THE
            </span>
            <span className="text-cyan-400 ml-2 sm:ml-10 font-ttblack">
              RICK &
            </span>
            <br />
            <span className="text-green-400 font-ttblack">MORTY</span>{" "}
            <span className="italic text-white font-ttblack">WIKI</span>
          </h2>
          </div>  
          {/* Mobile Layout (button below text) */}
          <div className="flex flex-col gap-4 mt-4 px-4  text-left sm:hidden">
            {/* Text Content */}
            <p className="text-sm text-cyan-400 max-w-md font-ttregular text-left sm:text-center md:text-left lg:text-left">
              Brilliant but lazy scientist Rick takes his fretful teenage
              grandson, Morty, for wild escapades in other worlds and alternate
              dimensions.
            </p>

            {/* Button */}
            <div>
              <button
                className="text-white px-3 py-2 rounded-full flex items-center gap-2 hover:opacity-90 transition-all duration-200"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #82f630, rgb(28, 219, 215))",
                }}
              >
                <MdOutlinePlayCircleOutline className="text-md" /> Watch Now
              </button>
            </div>
          </div>

          {/* Desktop / Tablet Layout (button beside text) */}
          <div className="hidden sm:flex flex-row items-center justify-between gap-4 mt-6 px-4 text-left h-full">
            {/* Button */}
            <div>
              <button
                className="text-white px-3 py-2 rounded-full flex items-center gap-2 hover:opacity-90 transition-all duration-200"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #82f630, rgb(28, 219, 215))",
                }}
              >
                <MdOutlinePlayCircleOutline className="text-md" /> Watch Now
              </button>
            </div>
            {/* Text Content */}
            <p className="text-base md:text-sm text-cyan-400 max-w-md font-ttregular text-left sm:text-center md:text-left lg:text-left">
              Brilliant but lazy scientist Rick takes his fretful teenage
              grandson, Morty, for wild escapades in other worlds and alternate
              dimensions.
            </p>
          </div>
        </section>
        <section className="h-[500px]  bg-right bg-no-repeat contrast-125 bg-[url('/images/Spiral-element.png')] mt-10">
          <div className="relative z-10  my-4">
            <CastSlider />
          </div>
          <div className="relative z-10 mt-10 my-4">
            <EpisodeSlider />
          </div>
          <div className="relative z-10 mt-10 my-4">
            <LocationSlider />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Homepage;
