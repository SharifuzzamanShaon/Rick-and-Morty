"use client";
import React, { useEffect, useState, useRef } from 'react'
import HttpKit from '@/common/helper/fetchApi/fetchApi'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
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
      console.log(data);
      
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
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-white text-green-500 p-2 rounded-full"
      >
        <MdArrowBackIosNew size={24} />
      </button> 
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-white text-green-500 p-2 rounded-full"
      >
        <MdArrowForwardIos size={24} />
      </button> 
      <div
        ref={sliderRef}
        className="flex overflow-x-hidden scrollbar-hide space-x-4 snap-x snap-mandatory px-4 pb-4"
      >
        {location?.map((item, index) => (
          <div
            key={index}
            className="snap-start flex-shrink-0 max-w-xs bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-lg p-4"
          >
            <div className="pt-4 text-white">
                <p># {item.id}</p>
              <h2 className="text-lg font-semibold">{item.name}</h2>
            </div>
          </div>
        ))}
      </div>
  </div>
  )
}

export default LocationSlider