'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {  FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-[8%]">
        <div className="flex items-center justify-between h-16">
        
          <div className="flex-shrink-0">
            <Link href="/">
             
                <Image
                  src="/vitalog.png"
                  alt="Logo"
                  width={120}
                  height={40}
                />
              
            </Link>
          </div>
         
          <div className="block md:hidden z-[60]">
           
              {isMobileMenuOpen ? (
                <FaTimes className="h-10 w-10 text-white" 
                onClick={toggleMobileMenu}
                />
              ) : (
                <FaBars
                onClick={toggleMobileMenu} className="h-10 w-10 text-deepGreen" />
              )}
        
          </div>
        
          <div className="hidden md:block ">
            <div className="flex items-center ml-4 space-x-4">
              <Link href="/contact" className="text-gray-400 hover:text-green-700 px-3 py-2 rounded-md text-xs font-medium">
                  Contact Us
                
              </Link>
              <Link href="/"className="text-gray-400 hover:text-green-700 px-3 py-2 rounded-md text-xs font-medium">
                  FAQ
               
              </Link>
              <Link href="/"className="text-gray-400  hover:text-green-700 px-3 py-2 rounded-md text-xs font-medium">
                  Blog
               
              </Link>
              <Link href="/"className="text-white bg-green-700 hover:text-white-700 px-4 py-2 rounded-md text-xs font-medium">
                  Join our waitlist
                
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-deepGreen z-[40]  flex justify-center items-center">
          <div className="px-2 pb-3 space-y-10 ">
            <Link href="/" className="text-white font-medium text-2xl ">
                Contact Us
            
            </Link>
            <Link href="/" className="text-white font-medium text-2xl block">
                Blog
              
            </Link>
            <Link href="/" className="block text-green-700 bg-white font-bold text-2xl px-2 py-2 rounded-md">
                Join our waitlist
        
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
