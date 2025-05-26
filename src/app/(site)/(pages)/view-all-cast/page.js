"use client";
import React, { useEffect, useState } from "react";
import HttpKit from "@/common/helper/fetchApi/fetchApi";
import Image from "next/image";
import { useRouter } from "next/navigation";
const ViewAllCast = () => {
  const router = useRouter();
  const [cast, setCast] = useState([]);
  const fetchAllCast = async () => {
    const data = await HttpKit.fetchAllCast();
    setCast(data);
  };
  useEffect(() => {
    fetchAllCast();
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white px-4 py-8 ">
      <header className="flex flex-col items-center mb-10">
        <Image
          src="/images/Logo.png"
          alt="Site Logo"
          width={140}
          height={80}
          className="mb-2 cursor-pointer"
          onClick={() => router.push("/")}
        />
      </header>

      <section className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl font-semibold text-[#16d9e5] mb-8">The Cast</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5 gap-6">
          {cast.map((character, idx) => (
            <div
              key={idx}
              className="relative p-[.2px] custom-clip bg-gradient-to-t from-[#7ff633] to-[#1cdbda] cursor-pointer rounded-[8px]"
              onClick={() => router.push(`/cast-details/${character.id}`)}
            >
              <div className="p-2 pb-2 bg-[#1e293b] text-white overflow-hidden custom-clip w-full h-full relative rounded-[8px]">
                <div className="absolute inset-0 bg-[#1e293b] opacity-20 pointer-events-none custom-clip z-0"></div>

                <div className="relative z-10 rounded-[8px]">
                  <Image
                    src={character.image}
                    alt={character.name}
                    width={150}
                    height={150}
                    className="rounded-[8px] w-full h-[150px] object-cover"
                  />
                  <p className="mt-2 text-left text-sm font-medium py-2 rounded-[8px]">
                    {character.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ViewAllCast;
