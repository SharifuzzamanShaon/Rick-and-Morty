import CastSlider from "@/components/HomePage/CastSlider";
import EpisodeSlider from "@/components/HomePage/EpisodeSlider";
import LocationSlider from "@/components/HomePage/LocationSlider";
import Image from "next/image";
import React from "react";

const Homepage = () => {
  return (
    <div className="relative h-[500px]  bg-cover bg-center brightness-110 contrast-125 bg-[url('/images/home-bg.png')]">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#1b1d29]/90 z-0" />

      {/* Constrained Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto">
        <section className="w-full h-[400px] text-white flex flex-col items-center justify-center relative">
          <div></div>
          {/* Floating Elements */}
          <Image
            src="/images/Logo.png"
            alt="Site Logo"
            width={200}
            height={120}
            className="absolute top-[5%] left-1/2 -translate-x-1/2"
          />
          <Image
            src="/images/bubble.png"
            alt="Bubble"
            width={96}
            height={96}
            className="absolute top-[25%] left-[10%]"
          />
          <Image
            src="/images/portal.png"
            alt="Portal"
            width={96}
            height={96}
            className="absolute top-[22%] left-1/2 -translate-x-1/2"
          />
          <Image
            src="/images/portal-gun.png"
            alt="Portal Gun"
            width={96}
            height={96}
            className="absolute bottom-[15%] right-[10%]"
          />

          {/* Main Heading */}
          <h2 className="text-5xl md:text-7xl font-extrabold text-center leading-tight drop-shadow-lg">
            <span className="italic text-white font-ttblack pr-1.5">THE</span>{" "}
            <span className="text-cyan-400 font-ttblack">RICK &</span>
            <br />
            <span className="text-green-400 font-ttblack">MORTY</span>{" "}
            <span className="italic text-white">WIKI</span>
          </h2>

          {/* Subtitle */}
          <p className="text-center mt-6 text-sm md:text-base text-cyan-300 max-w-md">
            Brilliant but lazy scientist Rick takes his fretful teenage
            grandson, Morty, for wild escapades in other worlds and alternate
            dimensions.
          </p>
        </section>
        <section className="h-[500px]  bg-right bg-no-repeat contrast-125 bg-[url('/images/Spiral-element.png')]">
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
