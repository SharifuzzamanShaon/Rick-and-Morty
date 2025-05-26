'use client';

import Image from 'next/image';
import { MdOutlinePlayCircleOutline } from 'react-icons/md';
import { useRouter } from 'next/navigation';

export default function HeroSection() {
  const router = useRouter();
  return (
    <section className="w-full lg:h-[400px] h-[300px] pt-8 text-white flex flex-col items-center justify-center relative">
    <header className="lg:min-h-[60px]  flex flex-col items-center lg:mt-10 mt-10 sm:mt-10">
      <Image
        src="/images/Logo.png"
        alt="Site Logo"
        width={140}
        height={120}
        className="mx-auto cursor-pointer"
        onClick={() => router.push("/")}
      />
    </header>

    <Image
      src="/images/bubble.png"
      alt="Bubble"
      width={96}
      height={96}
      className="bubble-image"
    />
    <Image
      src="/images/portal.png"
      alt="Portal"
      width={96}
      height={96}
      className="portal-image"
    />

    <Image
      src="/images/gun.png"
      alt="Portal Gun"
      width={150}
      height={150}
      className="portal-gun-image"
    />

    <div className="my-8 px-4 sm:px-8">
      <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-left sm:text-center md:text-left lg:text-left leading-snug sm:leading-tight drop-shadow-2xl tracking-wider sm:tracking-widest uppercase">
        <span className="italic text-white mr-4 sm:mr-10 font-extrabold">
          THE
        </span>
        <span className="text-cyan-400 ml-2 sm:ml-10 font-extrabold">
          RICK &
        </span>
        <br />
        <span className="text-green-400 font-extrabold">MORTY</span>{" "}
        <span className="italic text-white font-extrabold">WIKI</span>
      </h2>
    </div>
    <div className="accent-background"></div>
    <div className="accent-background-2"></div>
    {/* Mobile Layout */}
    <div className="flex flex-col gap-4 mt-4 px-4  text-left sm:hidden mb-16">
      {/* Text Content */}
      <p className="text-xs text-cyan-400 max-w-md font-medium text-left">
        Brilliant but lazy scientist Rick takes his fretful teenage
        grandson, Morty, for wild escapades in other worlds and alternate
        dimensions.
      </p>

      {/* Button */}
      <div>
        <button
          className="text-white opacity-50 px-3 py-2 rounded-full flex items-center cursor-pointer gap-2 hover:opacity-90 transition-all duration-200"
          style={{
            backgroundImage:
              "linear-gradient(to right, #82f630, rgb(28 219 215 / 77%))",
          }}
        >
          <MdOutlinePlayCircleOutline className="text-md" /> Watch Now
        </button>
      </div>
    </div>
    {/* Desktop / Tablet Layout (button beside text) */}
    <div className="hidden sm:flex flex-row items-center justify-between gap-4 mt-6 px-4 text-left h-full">
      {/* Button */}
      <div>
        <button
          className="text-white opacity-80 px-3 py-2 rounded-full flex items-center cursor-pointer gap-2 hover:opacity-90 transition-all duration-200"
          style={{
            backgroundImage:
              "linear-gradient(to right, #82f630, rgb(28, 219, 215))",
          }}
        >
          <MdOutlinePlayCircleOutline className="text-md" /> Watch Now
        </button>
      </div>
      {/* Text Content */}
      <p className="text-base md:text-sm text-cyan-400 max-w-sm font-medium text-left sm:text-center md:text-left lg:text-left">
        Brilliant but lazy scientist Rick takes his fretful teenage
        grandson, Morty, for wild escapades in other worlds and alternate
        dimensions.
      </p>
    </div>
  </section>
  );
}
