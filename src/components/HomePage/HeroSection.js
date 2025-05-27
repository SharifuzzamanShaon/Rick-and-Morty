'use client';
import Image from 'next/image';
import { MdOutlinePlayCircleOutline } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import { ttTravelsBlack, ttTravelsLight, ttTravelsRegular, ttTravelsThin } from '@/common/helper/font/font';
export default function HeroSection() {
  const router = useRouter();
  return (
    <section className="w-full lg:h-[400px] h-[300px] pt-8 text-white flex flex-col items-center justify-center relative sm:mb-8">
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
      width={150}
      height={150}
      className="bubble-image"
    />
    <Image
      src="/images/portal.png"
      alt="Portal"
      width={100}
      height={100}
      className="portal-image"
    />

    <Image
      src="/images/gun.png"
      alt="Portal Gun"
      width={150}
      height={150}
      className="portal-gun-image"
    />

    <div className="my-8 sm:mb-4 px-4 sm:px-8">
      <h2 className={"text-4xl sm:text-xl md:text-7xl  text-left sm:text-center lg:text-left leading-snug drop-shadow-2xl tracking-wider sm:tracking-widest uppercase" + ttTravelsBlack.className}>
        <span className={"italic text-white lg:mr-16 sm:mr-5 " + ttTravelsBlack.className}>
          THE
        </span>
        <span className={"text-cyan-400 lg:ml-16 sm:ml-5 " + ttTravelsBlack.className}>
          RICK &
        </span>
        <br />
        <span className={"text-green-400  " + ttTravelsBlack.className}>MORTY</span>
        <span className={"italic text-white " + ttTravelsBlack.className}>WIKI</span>
      </h2>
    </div>
    <div className="accent-background"></div>
    <div className="accent-background-1"></div>
    <div className="accent-background-2"></div>
    {/* Mobile Layout */}
    <div className="flex flex-col gap-4 mt-4 px-4  text-left sm:hidden ">
      {/* Text Content */}
      <p className={" text-cyan-400 max-w-md font-light text-left text-[8px] "+ ttTravelsLight.className}>
        Brilliant but lazy scientist Rick takes his fretful teenage <br></br>
        grandson, Morty, for wild escapades in other worlds and alternate <br></br>
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
          className={"text-white opacity-70 px-3 py-2 rounded-full flex items-center cursor-pointer gap-2 hover:opacity-90 transition-all duration-200 text-[8px]" + ttTravelsRegular.variable}
          style={{
            backgroundImage:
              "linear-gradient(to right, #82f630, rgb(28, 219, 215))",
          }}
        >
          <MdOutlinePlayCircleOutline className={"text-md "+ ttTravelsRegular.variable}/> Watch Now
        </button>
      </div>
      {/* Text Content */}
      <p className={"text-base md:text-sm text-cyan-400 max-w-sm font-medium text-left sm:text-center md:text-left lg:text-left "+ ttTravelsLight.variable}>
        Brilliant but lazy scientist Rick takes his fretful teenage
        grandson, Morty, for wild escapades in other worlds and alternate
        dimensions.
      </p>
    </div>
  </section>
  );
}
