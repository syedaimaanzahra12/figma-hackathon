import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className=" mt-16 pb-16 h-auto max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-center items-start md:gap-y-6 lg:gap-32">
      
      {/* Left Section */}
      <section className="w-auto lg:w-[29.5rem] mx-4 space-y-4">
        <h2 className="text-lg md:text-2xl xl:text-3xl font-serif text-vividOrange italic text-center lg:text-left">About us</h2>
        <h2>
          <span className="text-vividOrange text-4xl lg:text-5xl font-bold">
            We
            <span className="text-white"> Create the best foody product</span>
          </span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
          velit cum eligendi totam saepe est. Ducimus, ab! Dicta aperiam eos nam
          voluptate ea sit accusamus modi beatae nobis. Quisquam, dolorum?
        </p>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="mr-2">✔</span>
            High-quality ingredients
          </li>
          <li className="flex items-start">
            <span className="mr-2">✔</span>
            Fast and friendly service
          </li>
          <li className="flex items-start">
            <span className="mr-2">✔</span>
            Cozy dining atmosphere
          </li>
        </ul>
        <button className="bg-vividOrange rounded-full h-15 w-46">Read more</button>
      </section>

      {/* Right Section */}
      <section className="mt-4 mx-4 lg:mx-0 lg:mt-0 lg:w-[660px] grid grid-cols-1 md:grid-cols-1 gap-4">
        <div className="mb-2">
          <Image
            src="/pic1.jpg"
            alt="Wide Product"
            width={800}
            height={500}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/pic2.jpg"
            alt="Product 2"
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
          <Image
            src="/pic3.jpg"
            alt="Product 3"
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </div>
  );
}
