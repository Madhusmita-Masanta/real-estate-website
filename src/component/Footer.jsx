
import React from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai'; // Import the arrow up icon

import { Phone, Mail, MapPin } from 'lucide-react'; // Added MapPin for location
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'; // Added social icons with glow effect
import logo from '../assets/images/logo.jpg';

export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <footer className="text-white py-12 px-4 md:px-8 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Contact Section */}
        <div className="space-y-6">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Estrella Avenue Logo"
              className="h-14"
            />
          </div>

          {/* Contact Info */}
          <p className="text-gray-300 text-sm">Reach out to us for all your needs.</p>

          <div className="space-y-3">
            <div className="flex items-center font-bold space-x-2">
              <Phone size={16} className="text-[#BFA181]" />
              <span>9000-914-614</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={16} className="text-[#BFA181]" />
              <span>sales.nextgenhomes@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={16} className="text-[#BFA181]" />
              <span>Trisulia, Cuttack</span>
            </div>
          </div>

          {/* Social Media Icons with Glow Effect */}
          <div className="flex space-x-4 pt-4">
            <a href="#" className="flex items-center border border-[#BFA181] py-[10px] px-[10px]  shadow-lg hover:bg-bg-gradient-to-r from-[#bfa181] to-[#986121] hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#986121] transition-allhover:text-white transition-colors">
              <FaInstagram className="w-5 h-5" />
              <div className="absolute inset-0 rounded-md bg-[#BFA181] opacity-0 transition-opacity hover:opacity-100 blur-md"></div>
            </a>
            <a href="#" className="flex items-center border border-[#BFA181] py-[10px] px-[10px]  shadow-lg hover:bg-bg-gradient-to-r from-[#bfa181] to-[#986121] hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#986121] transition-allhover:text-white transition-colors">
              <FaFacebookF className="w-5 h-5" />
              <div className="absolute inset-0 rounded-md bg-[#BFA181] opacity-0 transition-opacity hover:opacity-100 blur-md"></div>
            </a>
            <a href="#" className="flex items-center border border-[#BFA181] py-[10px] px-[10px]  shadow-lg hover:bg-bg-gradient-to-r from-[#bfa181] to-[#986121] hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#986121] transition-allhover:text-white transition-colors">
              <FaLinkedinIn className="w-5 h-5" />
              <div className="absolute inset-0 rounded-md bg-[#BFA181] opacity-0 transition-opacity hover:opacity-100 blur-md"></div>
            </a>
          </div>
        </div>

        {/* Top Links Section */}
        <div>
          <h3 className="bg-gradient-to-r from-[#bfa181] to-[#986121]  bg-clip-text text-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#986121] transition-all text-[25px] font-semibold mb-4">Top Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-[#BFA181]">Home</a></li>
            <li><a href="#Client" className="hover:text-[#BFA181]">Location</a></li>
            <li><a href="#Service" className="hover:text-[#BFA181]">Facilities</a></li>
            <li><a href="#about" className="hover:text-[#BFA181]">About us</a></li>
            <li><a href="#Amenities" className="hover:text-[#BFA181]">Amenities</a></li>
          </ul>
        </div>

        {/* Useful Links Section */}
        <div>
          <h3 className="bg-gradient-to-r from-[#bfa181] to-[#986121]  bg-clip-text text-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#986121] transition-all text-[25px] font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#BFA181]">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-[#BFA181]">Privacy Policy</a></li>
            <li><a href="#Properties" className="hover:text-[#BFA181]">Project Description</a></li>
            <li><a href="#Contact" className="hover:text-[#BFA181]">Contact us</a></li>
          </ul>
        </div>

        {/* Search Section */}
        <div>
          <h3 className="bg-gradient-to-r from-[#bfa181] to-[#986121]  bg-clip-text text-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#986121] transition-all text-[25px] font-semibold mb-4">Search Here</h3>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-3 rounded-md bg-white text-black"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#BFA181] p-2 rounded">
              <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-8 border-t border-gray-100" />

      {/* Footer Note */}
      <footer className=" text-white py-2">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          {/* Footer Note */}
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} All rights reserved. Estrella Avenue. Designed by Kreative Kaka.</p>

          {/* "Go to Top" Button */}
          <div className="flex justify-end items-center mt-4 space-x-2">
            <button
              onClick={scrollToTop} // Function to scroll to top
              className="flex items-center border border-[#BFA181] py-[10px] px-[10px] rounded-full shadow-lg hover:bg-bg-gradient-to-r from-[#bfa181] to-[#986121] hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#986121] transition-allhover:text-white transition-colors"
            >
              <AiOutlineArrowUp className="text-[#BFA181] w-4 h-4" /> {/* Icon */}
            </button>
            <p className="text-white">Go To Top</p> {/* Text outside button */}
          </div>



          {/* Disclaimer */}
          <div className="mt-6 text-white-400 text-[14px] leading-relaxed max-w-6xl mx-auto">
            <p>
              Disclaimer: This website is conceptual and not a legal offering by the Company and is to be used for general information only.
              All plans, specifications, artistic renderings, and images as shown in this brochure are indicative and subject to change
              as may be decided by the company or directed by any competent authority in the best interests of the development. Furniture
              and furnishings do not form a part of the offering. Room sizes indicated are structural sizes and actual sizes may vary due
              to finishes. Areas mentioned are subject to change after finalization of services and structural design. Any interested party
              should verify all the information, terms of sales, etc., independently with the Company prior to any decision.
            </p>
          </div>
        </div>
      </footer>



    </footer>
  );
}
