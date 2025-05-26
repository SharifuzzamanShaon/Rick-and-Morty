"use client";
import Image from "next/image";
import {
  FaHeart,
  FaMars,
  FaRobot,
  FaGlobe,
  FaMapMarkerAlt,
  FaListUl,
} from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";

import { FiExternalLink } from "react-icons/fi";
import HttpKit from "@/common/helper/fetchApi/fetchApi";
import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export default function RickSanchezCard({ params }) {
  const router = useRouter();
  const { id } = use(params);
  const [cast, setCast] = useState([]);
  const fetchCast = async () => {
    const data = await HttpKit.fetchCastById(id);
    setCast(data);
  };
  useEffect(() => {
    fetchCast();
  }, [id]);

  return (
    <div className="relative min-h-screen text-white px-4 py-8">
      {/* Background Image Layer */}
      <div className="absolute inset-0 bg-[url('/images/bg-for-view-all-cast.png')] opacity-2 bg-no-repeat bg-cover bg-center brightness-110 z-0" />
      {/* Content Layer */}
      <div className="relative z-10">
        <header className="lg:min-h-[100px] flex flex-col items-center mb-10">
          <Image
            src="/images/Logo.png"
            alt="Site Logo"
            width={140}
            height={140}
            className="mx-auto cursor-pointer"
            onClick={() => router.push("/")}
          />
        </header>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1px_1fr] gap-8 items-start mt-10">
          {/* Left Section */}
          <div className="flex flex-col items-center self-center">
            <h2 className="text-2xl font-semibold text-[#16d9e5] mb-4">
              {cast.name}
            </h2>
            <div className="p-[.5px] rounded-[8px] bg-gradient-to-t from-[#81f72d] to-[#1fdcd2]">
              <div className="rounded-[8px] bg-[#313745] p-6">
                {/* inital spinner */}
                {cast.image ? (
                  <Image
                    src={cast.image}
                    alt={cast.name}
                    width={220}
                    height={220}
                    className="rounded-[8px]"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="w-10 h-10 border-4 border-[#9efe01] border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="vertical-divider" />
          {/* Right Section */}
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-6">
              <InfoBox
                icon={<FaHeart className="text-green-400" />}
                label="Status"
                value={cast.status}
              />
              <InfoBox
                icon={<FaRobot className="text-green-400" />}
                label="Species"
                value={cast.species}
              />
              <InfoBox
                icon={<FaMars className="text-green-400" />}
                label="Gender"
                value={cast.gender}
              />
            </div>

            <DataCard
              icon={<FaEarthAmericas className="text-green-400 text-2xl" />}
              label="Origin"
              value={cast?.origin?.name}
            />
            <DataCard
              icon={<FaMapMarkerAlt className="text-green-400 text-2xl" />}
              label="Last Known Location"
              value={cast?.location?.name}
            />

            <div className="bg-gradient-to-t from-[#81f72d] to-[#1fdcd2] p-[.5px] rounded-[8px]">
              <div className="bg-[#313745] p-4 rounded-[8px]">
                <div className="flex flex-col items-start gap-2 mb-4">
                  <FaListUl className="text-[#06df73] text-xl" />
                  <h3 className="text-md font-medium">Episode(s)</h3>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm overflow-y-auto max-h-40 pr-2">
                  {cast?.episode?.map((episode, index) => (
                    <li
                      key={index}
                      className="text-white-400 text-md lg:text-xl"
                    >
                      {episode.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoBox({ icon, label, value }) {
  return (
    <div className="bg-gradient-to-t from-[#81f72d] to-[#1fdcd2] p-[.5px] rounded-[8px] justify-start">
      <div className="bg-[#313745] p-4 rounded-[8px] text-start space-y-1 ">
        <div className="flex justify-start text-2xl lg:text-3xl">{icon}</div>
        <h3 className="text-sm lg:text-lg  text-[#06df73]">{label}</h3>
        <p className="text-sm lg:text-lg font-medium">{value}</p>
      </div>
    </div>
  );
}

function DataCard({ icon, label, value }) {
  return (
    <div className="bg-gradient-to-t from-[#81f72d] to-[#1fdcd2] p-[.5px] rounded-[8px] my-6">
      <div className="bg-[#313745] p-4 rounded-[8px]">
        <div className="flex justify-between items-center">
          <div>
            {icon}
            <h3 className="text-md text-[#06df73] mt-2">{label}</h3>
          </div>
          <FiExternalLink className="text-white text-xl" />
        </div>
        <p className="text-md lg:text-lg font-medium mt-2">{value}</p>
      </div>
    </div>
  );
}
