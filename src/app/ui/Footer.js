import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-deepGreen block md:flex flex-row gap-[2rem] lg:flex flex-row gap-[5rem] items-center px-10 xl:gap-[10rem]">
        <div className="mr-20 md:mx-10 lg:mx-20 py-20">
          <Image src="/vitalog2.png" alt="vitalog" height={50} width={150} />
          <p className="text-xs text-white py-4 font-semiBold">
            Empowering Health Dialogue and Support
          </p>
          <div className="flex flex-row gap-2">
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-solid border-gray-500 border-1 rounded-full p-2 text-gray-500 hover:text-white hover:border-white"
            >
              <FaFacebookF className="text-xs" />
            </Link>
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-solid border-gray-500 border-1 rounded-full p-2 text-gray-500 text-lg hover:text-white hover:border-white"
            >
              <FaInstagram className="text-xs" />
            </Link>
            <Link
              href="https://www.twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-solid border-gray-500 border-1 rounded-full p-2 text-gray-500 text-lg hover:text-white hover:border-white"
            >
              <FaTwitter className="text-xs" />
            </Link>
            <Link
              href="https://www.LinkedIn.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-solid border-gray-500 border-1 rounded-full p-2 text-gray-500 text-lg hover:text-white hover:border-white"
            >
              <FaLinkedinIn className="text-xs" />
            </Link>
          </div>
        </div>
        <div className="mt-[-2rem] text-white block gap-[0rem] ml-[0rem] mb-[0rem] pb-2 md:flex flex-row gap-[2rem] lg:flex flex-row gap-[2.8rem] mb-10 xl:gap-[10rem]">
          <div className="pb-4 lg:pb-0">
            <h2 className="font-semibold text-xl md:text-[15px] lg:text-[15px] mt-[15px] pb-2 text-left">
              Quick Links
            </h2>
            <ul className="text-xs text-left">
              <li className="px-1 py-1">Home</li>
              <li className="px-1 py-1">Blog</li>
              <li className="px-1 py-1">Contact</li>
            </ul>
          </div>
          <div className="pb-4 lg:pb-0">
            <h2 className="font-semibold text-xl mt-0 md:text-[15px] mt-[-25px] lg:text-[15px] mt-[15px] pb-2 text-left">
              VitaloG
            </h2>
            <ul className="text-xs text-left">
              <li className="px-1 py-1">Client Support</li>
              <li className="px-1 py-1">Careers</li>
              <li className="px-1 py-1">Pre-Register</li>
            </ul>
          </div>
          <div className="pb-4 lg:pb-0">
            <h2 className="font-semibold text-xl md:text-[15px] mt-[-25px] lg:text-[15px] mt-[15px] pb-2 text-left">
              Information
            </h2>
            <ul className="text-xs text-left">
              <li className="py-1">Privacy Policy</li>
              <li className="py-1">Terms & Condition</li>
              <li className="py-1">FAQ</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
