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
    <div className="relative z-10 mt-10 max-w-full px-4 pb-6">
      <h3 className="text-sm lg:text-md mb-4">Location</h3>
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
              className="relative rounded-[8px] snap-start flex-shrink-0 w-[180px] sm:w-[200px] md:w-[220px] lg:w-[240px] p-[.4px] bg-gradient-to-t from-[#7ff633] to-[#1cdbda] custom-clip"
            >
              <div className="bg-[#384053] rounded-[8px] text-white w-full h-full p-1 custom-clip relative overflow-hidden">
                {/* Optional background overlay */}
                <div className="absolute inset-0 bg-[#424a5f] opacity-20 pointer-events-none custom-clip"></div>

                <div className="relative z-10 py-2 pl-2">
                  <p className="text-[10px] sm:text-xs rounded-[8px] text-gray-400 font-light p-1">
                    #{item.id}
                  </p>
                  <h2 className="text-xs sm:text-sm rounded-[8px] font-light p-1">
                    {item.name}
                  </h2>
                </div>
              </div>
            </div>
        ))}
      </div>
        {/* Lighting Shadow */}
        <div className="lighting-glow"></div>
    </div>
  );
};

export default LocationSlider;
