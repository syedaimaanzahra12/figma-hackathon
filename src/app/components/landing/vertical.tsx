import { FaPinterest, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function VerticalSocialArea() {
  return (
    <div className=" h-492px flex flex-col justify-between items-center">
      {/* First Vertical Line */}
      <div className="border-l-2 border-gray-300 h-158px"></div>

      {/* Social Media Icons */}
      <div className="flex flex-col items-center space-y-4 px-4">
        <FaFacebookF className="h-6 w-6  hover:text-vividOrange" />
        <FaTwitter className="h-6 w-6 t hover:text-vividOrange" />
        <FaPinterest className="h-6 w-6  hover:text-vividOrange" />
      </div>

      {/* Second Vertical Line */}
      <div className="border-l-2 border-gray-300 h-158px"></div>
    </div>
  );
}

