import {  Cookie } from 'lucide-react';
import { FaHamburger, FaWineGlassAlt } from 'react-icons/fa';


export default function WhyUs() {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center min-h-screen p-6 lg:p-12 bg-black text-white">

      <div className="lg:w-1/2 lg:pl-12 mt-8 lg:mt-0 text-center lg:text-left">
        <h2 className="text-vividOrange text-lg italic">Why Choose us</h2>
        <h1 className="text-4xl font-bold mt-2">
          <span className="text-vividOrange">Extra</span> ordinary taste <br />
          And Experienced
        </h1>
        <p className="text-gray-400 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
        </p>
        <div className="flex justify-center lg:justify-start mt-6 space-x-4">
          <div className="flex flex-col items-center">
            <div className="bg-vividOrange p-4 rounded-xl">
               <FaHamburger size={32}/>
            </div>
            <span className="mt-2">Fast Food</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-vividOrange p-4 rounded-xl">
              <Cookie size={32} />
            </div>
            <span className="mt-2">Lunch</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-vividOrange p-4 rounded-xl">
              <FaWineGlassAlt size={32} />
            </div>
            <span className="mt-2">Dinner</span>
          </div>
        </div>
        <div className="bg-white text-black p-4 rounded-lg mt-6 inline-block">
          <span className="text-2xl font-bold">30+</span> Years of <br />
          <span className="font-bold">Experienced</span>
        </div>
      </div>
    </div>
  );
}
