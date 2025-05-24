"use client";
import React, { useEffect, useState, useRef } from "react";
import HttpKit from "@/common/helper/fetchApi/fetchApi";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import Image from "next/image";

const EpisodeSlider = () => {
  const [episode, setEpisode] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    fetchEpisode();
  }, []);

  const fetchEpisode = async () => {
    const data = await HttpKit.fetchAllEpisode();
    setEpisode(data);
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
    <div className="relative z-10 mt-10">
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-white hover:bg-white text-green-500 p-2 rounded-full"
      >
        <MdArrowBackIosNew size={24} />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-white hover:bg-white text-green-500 p-2 rounded-full"
      >
        <MdArrowForwardIos size={24} />
      </button>
      <div
        ref={sliderRef}
        className="flex overflow-x-hidden scrollbar-hide space-x-4 snap-x snap-mandatory px-4 pb-4"
      >
        {episode?.map((item, index) => (
          <div
            key={index}
            className="relative snap-start flex-shrink-0 max-w-xs bg-[#1D1F27] rounded-xl overflow-hidden p-4 text-white custom-clip-episode"
          >
            {/* Gradient border overlay */}
            <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-tr from-blue-400 to-green-400 opacity-20 pointer-events-none"></div>

            {/* Content */}
            <div className="relative z-10 pt-4">
              <p className="text-sm text-gray-300">{item.episode}</p>
              <h2 className="text-xl font-semibold">{item.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EpisodeSlider;
