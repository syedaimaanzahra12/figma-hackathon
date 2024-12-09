import React from "react";
import VerticalSocialArea from "./vertical";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-wrap mt-8 pb-16 lg:flex-row justify-center items-center">
      {/* Vertical social area */}
      <div className="hidden md:block">
        <VerticalSocialArea />
        </div>
      

      {/* Banner text */}
      <div className="my-8 px-4 w-full md:w-3/4 lg:w-1/2 xl:w-[29.5rem]">
        <h3 className="text-lg md:text-2xl xl:text-3xl text-vividOrange font-serif italic text-center lg:text-left">
          Its Quick & Amusing!
        </h3>
        <h2 className="text-center lg:text-left mt-4">
          <span className="text-vividOrange text-4xl md:text-5xl xl:text-6xl font-bold">
            Th<span className="text-white">e Art of speed food Quality</span>
          </span>
        </h2>
        <p className="mt-4 text-sm md:text-base xl:text-lg text-center lg:text-left">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
          veritatis excepturi atque placeat.
        </p>
        <div className="flex justify-center lg:justify-start">
          <button className="bg-vividOrange rounded-full h-12 w-32 md:h-14 md:w-40 xl:h-15 xl:w-46 mt-4 text-white">
            See Menu
          </button>
        </div>
      </div>

      {/* Banner pic */}
      <div className="w-full lg:w-auto flex justify-center">
        <Image
          src="/Hero.png"
          alt="food pic"
          height={700}
          width={800}
          className="w-full max-w-md md:max-w-2xl lg:max-w-3xl xl:w-[54.8625rem] xl:h-[41.875rem]"
        />
      </div>
    </div>
  );
};

export default Hero;
