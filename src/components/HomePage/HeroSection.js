'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen text-white overflow-hidden flex flex-col items-center justify-center">
      {/* Top Rick and Morty logo */}
      {/* <h1 className="absolute top-8 text-neon-green text-xl font-bold tracking-widest">
        RICK AND MORTY
      </h1> */}
    <div className='absolute top-[5%] left-[45%] w-24 h-24'>
        <Image src="/images/Logo.png" alt='Site Logo' width={100} height={100}/>
    </div>
      {/* Central images */}
      <div className="absolute top-[25%] left-[10%] w-24 h-24">
        <Image src="/images/bubble.png" alt="Goo Blob" width={96} height={96} />
      </div>

      <div className="absolute top-[25%] left-1/2 transform -translate-x-1/2 w-24 h-24">
        <Image src="/images/portal.png" alt="Rick Icon" width={96} height={96} />
      </div>

      <div className="absolute bottom-[15%] right-[10%] w-24 h-24">
        <Image src="/portal-gun.png" alt="Portal Gun" width={96} height={96} />
      </div>
      {/* Main Text */}
      <h2 className="text-6xl md:text-8xl font-extrabold text-center leading-tight z-10">
        <span className="italic text-white drop-shadow-lg font-ttblack pr-1.5">THE</span>{'   '}
        <span className="text-cyan-400 font-ttblack ">RICK &</span>{' '}<br></br>
        <span className="text-green-400">MORTY</span>{' '}
        <span className="italic text-white">WIKI</span>
      </h2>

      {/* Description */}
      <p className="text-center max-w-md mt-6 text-sm text-cyan-300">
        Brilliant but lazy scientist Rick takes his fretful teenage grandson, Morty, for wild escapades in other worlds and alternate dimensions.
      </p>
    </section>
  );
}
