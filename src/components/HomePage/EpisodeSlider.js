"use client";
import React, { useEffect, useState, useRef } from "react";
import HttpKit from "@/common/helper/fetchApi/fetchApi";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const EpisodeSlider = () => {
  const [episode, setEpisode] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const sliderRef = useRef(null);

  useEffect(() => {
    fetchEpisode();
  }, []);

  const fetchEpisode = async () => {
    const data = await HttpKit.fetchAllEpisode();
    setEpisode(data);
    setIsLoading(false);
  };

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
<div className="relative z-10 mt-10 max-w-full px-4">
  {isLoading ? (
    <div className="flex justify-center items-center h-40">
      <div className="w-10 h-10 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  ) : (
    <>
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
        className="flex overflow-x-auto scrollbar-hide space-x-4 snap-x snap-mandatory px-6 pb-4 scroll-smooth touch-pan-x"
      >
        {episode.map((item, index) => (
          <div
            key={index}
            className="relative snap-start flex-shrink-0 w-[180px] sm:w-[200px] md:w-[220px] lg:w-[240px] bg-[#1D1F27] rounded-xl overflow-hidden p-3 text-white custom-clip-episode"
          >
            <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-tr from-blue-400 to-green-400 opacity-20 pointer-events-none"></div>

            <div className="relative z-10 pt-2">
              <p className="text-xs sm:text-sm text-gray-400 font-light">
                {item.episode}
              </p>
              <h2 className="text-sm sm:text-base md:text-lg font-light">
                {item.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </>
  )}
</div>

  );
};

export default EpisodeSlider;
