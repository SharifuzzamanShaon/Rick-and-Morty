"use client";
import CastSlider from "@/components/HomePage/CastSlider";
import EpisodeSlider from "@/components/HomePage/EpisodeSlider";
import LocationSlider from "@/components/HomePage/LocationSlider";
import HeroSection from "@/components/HomePage/HeroSection";
import { useRouter } from "next/navigation";

const Homepage = () => {
  const router = useRouter();
  return (
    <div className="relative h-[500px]  bg-cover bg-center brightness-110 contrast-125 bg-[url('/images/home-bg.png')]">
      <div className="absolute inset-0 bg-[#1b1d29]/90 z-0" />
      <div className="relative z-10 max-w-[1200px] mx-auto">
        <HeroSection />
        <section className="h-[500px]  bg-right bg-no-repeat contrast-125 bg-[url('/images/Spiral-element.png')] mt-16">
          <div className="relative z-10  my-4 sm:mt-10">
            <CastSlider />
          </div>
          <div className="relative z-10 mt-16 sm:mt-10 my-4">
            <EpisodeSlider />
          </div>
          <div className="relative z-10 mt-16 sm:mt-10 my-4">
            <LocationSlider />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Homepage;
