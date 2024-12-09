import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Clock5 } from 'lucide-react';


const Footer = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="lg:space-x-40 lg:flex px-3 justify-center w-full bg-black text-center py-10">
        <div >
            <h1 className="text-2xl font-bold text-white">
          <span className="text-vividOrange">St</span>ill You Need Our Support?
        </h1>
        <p className="text-gray-400 mt-2">
          {`Don't wait, make a smart & logical quote here. It's pretty easy.`}
        </p></div>
        
        <div className="mt-4 flex justify-center">
          <input
            type="email"
            placeholder="Enter your Email"
            className="p-2 rounded-s-md"
          />
          <button className="bg-vividOrange text-black p-2 rounded-r-md">
            Subscribe Now
          </button>
        </div>
      </div>
      <div className="w-full bg-black py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
          <div>
            <h2 className="text-lg font-bold mb-4">About Us.</h2>
            <p className="text-gray-400 mb-4">
              Corporate clients and leisure travelers have been relying on
              Groundlink for dependable, safe, and professional chauffeured car
              service in major cities across the world.
            </p>
            <div className="flex items-center">
              <div className="bg-vividOrange flex justify-center items-center p-2 w-16 h-16">
                <Clock5 size={40}  />

              </div>
              <div className="ml-4">
                <p className="text-gray-400">Opening Hours</p>
                <p className="text-white">Mon-Sat: 9:00 - 6:00</p>
                <p className="text-white">Sunday: Closed</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Useful Links</h2>
            <ul className="text-gray-400">
              {['About', 'News', 'Partners', 'Team', 'Menu', 'Contacts'].map(
                (link, index) => (
                  <li key={index} className="mb-2">
                    <Link href="#">{link}</Link>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Help?</h2>
            <ul className="text-gray-400">
              {[
                'FAQ',
                'Term & Conditions',
                'Reporting',
                'Documentation',
                'Support Policy',
                'Privacy',
              ].map((link, index) => (
                <li key={index} className="mb-2">
                  <Link href="#">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

<div>
  <h2 className="text-lg font-bold mb-4">Recent Post</h2>

  {/* Post 1 */}
  <div className="flex mb-4">
    <Image
      src="/img1.jpg" 
      alt="Post image 1"
      className="w-12 h-12 mr-4"
      width={60}
      height={50}
    />
    <div>
      <p className="text-gray-400">26 Dec 2022</p>
      <p className="text-white">Keep Your Business</p>
    </div>
  </div>

  {/* Post 2 */}
  <div className="flex mb-4">
    <Image
      src="/img2.jpg" 
      alt="Post image 2"
      className="w-12 h-12 mr-4"
      width={60}
      height={50}
    />
    <div>
      <p className="text-gray-400">26 Dec 2022</p>
      <p className="text-white">Grow Your Success</p>
    </div>
  </div>

  {/* Post 3 */}
  <div className="flex mb-4">
    <Image
      src="/img3.jpg" 
      alt="Post image 3"
      className="w-12 h-12 mr-4"
      width={60}
      height={50}
    />
    <div>
      <p className="text-gray-400">26 Dec 2022</p>
      <p className="text-white">Drive Innovation</p>
    </div>
  </div>
</div>

        </div>
      </div>
      <div className="w-full bg-vividOrange py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <p className="text-black">
            Copyright © 2022 by Arefan. All Rights Reserved.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
