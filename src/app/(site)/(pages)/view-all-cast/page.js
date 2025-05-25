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
            className="mb-2"
          />
        </header>

        <section className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-semibold text-cyan-300 mb-8">
            The Cast
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5 gap-6">
            {cast.map((character, idx) => (
              <div
                key={idx}
                className="relative p-2 pb-2 bg-[#1e293b] border border-cyan-600 rounded-lg text-white cursor-pointer overflow-hidden custom-clip"
                onClick={() => router.push(`/cast-details/${character.id}`)}
              >
                <Image
                  src={character.image}
                  alt={character.name}
                  width={150}
                  height={150}
                  className="rounded-md w-full h-[150px] object-cover"
                />
                <p className="mt-2 text-left text-sm font-medium py-2">
                  {character.name}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
  
  );
};

export default ViewAllCast;
