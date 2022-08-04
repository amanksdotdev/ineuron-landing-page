import React, { useEffect, useState } from "react";
import Image from "next/image";

export const Header = () => {
  return (
    <header id="hero-section" className="py-12">
      <div className="container mx-auto w-11/12 flex flex-col-reverse md:flex-row h-full items-center">
        <div className="md:w-1/2">
          <h1 className="md:text-5xl text-3xl font-extrabold  mt-12 md:leading-snug">
            Highest in quality, affordable in price
          </h1>
          <h4 className="text-[#86868B] max-w-[640px] mt-4">
            Digital Entrepreneurs, YouTubers and content creators provide
            affordable courses across technologies.
          </h4>
          <div className="buttons my-5 flex gap-5">
            <button className="hover:bg-[#5131F3] bg-[#3a10e5] text-white px-6 py-3 rounded font-medium">
              Get started
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <span className="absolute left-[-20px] top-[20px]">
              <Image
                src="/assets/images/photobg.svg"
                alt="pattern"
                height={380}
                width={420}
              />
            </span>
            <Image
              src="/assets/images/bannerphoto.webp"
              height={380}
              width={420}
              objectFit="cover"
              alt="girl working on laptop"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
