"use client";
import React, { useEffect, useState, useRef } from "react";
import HttpKit from "@/common/helper/fetchApi/fetchApi";
import Image from "next/image";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { useRouter } from "next/navigation";

const CastSlider = () => {
  const router = useRouter();
  const [cast, setCast] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    fetchCast();
  }, []);

  const fetchCast = async () => {
    const data = await HttpKit.fetchAllCast();
    setCast(data);
  };

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative mt-8 px-6">
      {/* Header */}
      <div className="flex items-center mb-4">
        <h3 className="text-2xl font-bold mb-4">Meet The Cast</h3>
        <button
          onClick={() => router.push("/view-all-cast")}
          className="ml-auto cursor-pointer border border-green-500 px-3 py-2"
        >
          View All
        </button>
      </div>

      {/* Left Arrow (hidden on mobile) */}
      <button
        onClick={() => scroll("left")}
        className="hidden sm:block absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white text-green-500 p-2 rounded-full"
      >
        <MdArrowBackIosNew size={24} />
      </button>

      {/* Scrollable Cast Cards */}
      <div
        ref={sliderRef}
        className="flex overflow-x-auto scrollbar-hide space-x-8 snap-x snap-mandatory px-4 pb-4 cursor-grab active:cursor-grabbing"
      >
        {cast?.map((item, index) => (
          <div
            key={index}
            className="snap-start flex-shrink-0 w-[200px] bg-[#1e293b] border border-cyan-600 rounded-lg text-white p-4 custom-clip"
          >
            <Image
              className="w-full h-[150px] object-cover"
              width={150}
              height={150}
              src={item.image}
              alt={item.name}
            />
            <div className="pt-4 px-4">
              <h2 className="text-lg font-semibold">{item.name}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Right Arrow (hidden on mobile) */}
      <button
        onClick={() => scroll("right")}
        className="hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white text-green-500 p-2 rounded-full"
      >
        <MdArrowForwardIos size={24} />
      </button>
    </div>
  );
};

export default CastSlider;
