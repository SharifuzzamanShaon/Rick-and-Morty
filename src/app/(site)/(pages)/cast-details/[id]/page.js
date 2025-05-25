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
    <div className="min-h-screen bg-[#070d1c] text-white p-8 font-sans relative overflow-hidden">
      <header className="lg:min-h-[100px] flex flex-col items-center mb-10">
        <Image
          src="/images/Logo.png"
          alt="Site Logo"
          width={120}
          height={100}
          className="mx-auto cursor-pointer"
          onClick={() => router.push("/")}
        />
      </header>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start mt-10">
        {/* Left section */}
        <div className="flex flex-col items-center self-center">
          <h2 className="text-2xl font-semibold text-[#06df73] mb-4">
            {cast.name}
          </h2>
          <div className="border border-cyan-400 rounded-md p-5">
            <Image
              src={cast.image}
              alt="Rick Sanchez"
              width={220}
              height={220}
              className="rounded-md"
            />
          </div>
        </div>
        {/* Right section */}
        <div className="space-y-6">
          <div className="grid grid-cols-3 gap-4">
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
            icon={<FaGlobe className="text-green-400" />}
            label="Origin"
            value={cast?.origin?.name}
          />
          <DataCard
            icon={<FaMapMarkerAlt className="text-green-400" />}
            label="Last Known Location"
            value={cast?.location?.name}
          />
          <div className="bg-gradient-to-r from-[#81f72d] to-[#1fdcd2] p-[1px] rounded-md">
            <div className="bg-[#10162b] p-4 rounded-[10px]">
              <div className="flex items-center gap-2 mb-4">
                <FaListUl className="text-[#06df73] text-xl" />
                <h3 className="text-md font-medium">Episode(s)</h3>
              </div>
              <ul className="list-disc list-inside space-y-1 text-sm overflow-y-auto max-h-40 pr-2">
                {cast?.episode?.map((episode, index) => (
                  <li key={index} className="text-white-400 text-md lg:text-xl">
                    {episode.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoBox({ icon, label, value }) {
  return (
    <div className="bg-gradient-to-r from-[#81f72d] to-[#1fdcd2] p-[1px] rounded-md">
      <div className="bg-[#10162b] p-4 rounded-[10px] text-center space-y-1">
        <div className="flex justify-center text-2xl lg:text-3xl">{icon}</div>
        <h3 className="text-sm lg:text-lg  text-[#06df73]">{label}</h3>
        <p className="text-sm lg:text-lg font-medium">{value}</p>
      </div>
    </div>
  );
}

function DataCard({ icon, label, value }) {
  return (
    <div className="bg-gradient-to-r from-[#81f72d] to-[#1fdcd2] p-[1px] rounded-md">
      <div className="bg-[#10162b] p-4 rounded-[10px]">
        <div className="flex justify-between items-center">
          <div>
            {icon}
            <h3 className="text-md text-[#06df73]">{label}</h3>
          </div>
          <FiExternalLink className="text-[#06df73] text-md" />
        </div>
        <p className="text-md lg:text-lg font-medium mt-1">{value}</p>
      </div>
    </div>
  );
}
