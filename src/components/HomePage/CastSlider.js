"use client";
import React, { useEffect, useState, useRef } from "react";
import HttpKit from "@/common/helper/fetchApi/fetchApi";
import Image from "next/image";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { useRouter } from "next/navigation";

const CastSlider = () => {
  const router = useRouter();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    fetchCast();
  }, []);

  useEffect(() => {
    updateArrowVisibility();
    window.addEventListener("resize", updateArrowVisibility);
    return () => window.removeEventListener("resize", updateArrowVisibility);
  }, [cast]);

  const fetchCast = async () => {
    setLoading(true);
    const data = await HttpKit.fetchAllCast();
    setCast(data);
    setLoading(false);
  };

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });

      // Allow time for scroll to settle
      setTimeout(() => {
        updateArrowVisibility();
      }, 300);
    }
  };

  const handleScroll = () => {
    updateArrowVisibility();
  };

  const updateArrowVisibility = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 1); // -1 for rounding errors
    }
  };

  return (
    <div className="relative mt-8 px-6 sm:mt-10">
      <div className="flex items-center mb-4">
        <h3 className="text-sm lg:text-md mb-4">Meet The Cast</h3>
        <button
          onClick={() => router.push("/view-all-cast")}
          className="ml-auto cursor-pointer border border-green-500 px-3 py-1 rounded-md text-sm "
        >
          View All
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="w-10 h-10 border-4 border-green-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          {showLeftArrow && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-white text-green-500 p-1.5 sm:p-2 rounded-full"
            >
              <MdArrowBackIosNew size={16} className="cursor-pointer" />
            </button>
          )}

          <div
            ref={sliderRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto scrollbar-hide space-x-6 snap-x snap-mandatory px-4 pb-4 cursor-grab active:cursor-grabbing"
          >
            {cast?.map((item, index) => (
              <div
                key={index}
                className="relative snap-start flex-shrink-0 w-[140px ] rounded-[8px] sm:w-[160px] md:w-[180px] lg:w-[200px] p-[.2px] bg-gradient-to-tr from-cyan-400 to-teal-400 custom-clip cursor-pointer"
                onClick={() => router.push(`/cast-details/${item.id}`)}
              >
                <div className="bg-[#424a5f] text-white custom-clip p-3 sm:p-4 rounded-[8px] overflow-hidden w-full h-full relative">
                  <div className="absolute inset-0 bg-[#424a5f] opacity-20 pointer-events-none custom-clip z-0 rounded-[8px]"></div>
                  <div className="relative z-10">
                    <Image
                      className="w-full h-[120px] sm:h-[130px] md:h-[140px] lg:h-[150px] object-cover rounded-[8px]"
                      width={150}
                      height={150}
                      src={item.image}
                      alt={item.name}
                    />
                    <div className="pt-3 px-2 sm:px-4">
                      <h2 className="text-sm sm:text-base lg:text-sm text-left truncate rounded-[8px] p-1">
                        {item.name}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {showRightArrow && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-white text-green-500 p-1.5 sm:p-2 rounded-full"
            >
              <MdArrowForwardIos size={16} className="cursor-pointer" />
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default CastSlider;
