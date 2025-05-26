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
      <h3 className="text-sm lg:text-md mb-4">Episode</h3>
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
                className="relative rounded-[8px] snap-start flex-shrink-0 w-[180px] sm:w-[200px] md:w-[220px] lg:w-[240px] p-[.3px] bg-gradient-to-t from-[#7ff633] to-[#1cdbda] custom-clip"
              >
                <div className="bg-[#424a5f] rounded-[8px] text-white w-full h-full p-1 custom-clip relative overflow-hidden">
                  {/* Optional background overlay */}
                  <div className="absolute inset-0 bg-[#424a5f] opacity-20 pointer-events-none custom-clip"></div>

                  <div className="relative z-10 pt-2 pl-2">
                    <p className="text-[10px] sm:text-xs rounded-[8px] text-gray-400 font-light p-1">
                      {item.episode}
                    </p>
                    <h2 className="text-xs sm:text-sm rounded-[8px] font-light p-1">
                      {item.name}
                    </h2>
                  </div>
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
