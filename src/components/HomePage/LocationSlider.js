"use client";
import React, { useEffect, useState, useRef } from "react";
import HttpKit from "@/common/helper/fetchApi/fetchApi";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const LocationSlider = () => {
  const [location, setLocation] = useState([]);
  const sliderRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    fetchLocation();
  }, []);

  const fetchLocation = async () => {
    const data = await HttpKit.fetchAllLocation();
    setLocation(data);
  };

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (sliderRef.current) {
      setIsScrolled(sliderRef.current.scrollLeft > 10);
    }
  };

  return (
    <div className="relative z-10 mt-10 max-w-full px-4">
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-white hover:bg-white text-green-500 p-1.5 sm:p-2 rounded-full"
      >
        <MdArrowBackIosNew size={16} className="cursor-pointer" />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-white hover:bg-white text-green-500 p-1.5 sm:p-2 rounded-full"
      >
        <MdArrowForwardIos size={16} className="cursor-pointer" />
      </button>

      <div
        ref={sliderRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto scrollbar-hide space-x-4 snap-x snap-mandatory px-6 pb-4 scroll-smooth touch-pan-x"
      >
        {location?.map((item, index) => (
          <div
            key={index}
            className="relative snap-start flex-shrink-0 w-[180px] sm:w-[200px] md:w-[220px] lg:w-[240px] bg-[#1D1F27] rounded-xl overflow-hidden p-3 text-white custom-clip-episode"
            >
              <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-tr from-blue-400 to-green-400 opacity-20 pointer-events-none"></div>

            <div className="relative z-10 pt-2">
              <p className="text-xs sm:text-sm text-gray-400 font-light"># {item.id}</p>
              <h2 className="text-sm sm:text-base md:text-lg font-light">{item.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationSlider;
