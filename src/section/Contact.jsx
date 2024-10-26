import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useDarkMode } from '../component/DarkModeContext';
import { handleNewContactsData } from '../DatabaseConfig';
// Import relevant icons from react-icons
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

function Contact() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [bookASiteVisit, setBookASiteVisit] = useState("NO");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleNewContactsData(name, number, message, bookASiteVisit);
  };

  const { darkmode } = useDarkMode();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex items-center justify-center py-16 px-6 sm:px-8 lg:px-10">
      <div className="max-w-7xl w-full shadow-lg rounded-lg flex flex-col md:flex-row md:space-x-12  ">
        {/* Left Side - Contact Form */}
        <div className="flex-1 p-10 border-[1px] border-gradient ">
          <h2 className="text-3xl font-bold mb-8 text-white">Get in touch</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input

                  id="name"
                  name="name"
                  type="text"
                  required
                  className="appearance-none rounded-md w-full px-4 py-3 border border-[#BFA181] placeholder-[#3d3c3b] text-black bg-[#f0e8df] focus:outline-none focus:ring-[#986121] focus:border-[#986121] sm:text-sm"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)} value={name}
                />
              </div>
              <div>
                <label htmlFor="number" className="sr-only">Contact no</label>
                <input
                  id="number"
                  name="number"
                  type="number"
                  required
                  className="appearance-none rounded-md w-full px-4 py-3 border border-[#BFA181] placeholder-[#3d3c3b] text-blaack bg-[#f0e8df] focus:outline-none focus:ring-[#986121] focus:border-[#986121] sm:text-sm"
                  placeholder="Contact no"
                  onChange={(e) => setNumber(e.target.value)} value={number}
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="appearance-none rounded-md w-full px-3 py-3 border border-[#BFA181] placeholder-[#3d3c3b] text-blaack bg-[#f0e8df] focus:outline-none focus:ring-[#986121] focus:border-[#986121] sm:text-sm"
                placeholder="Message"
                onChange={(e) => setMessage(e.target.value)} value={message}
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-[#bfa181] to-[#986121] hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#986121] transition-all"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Right Side - Contact Information */}
        <div className="flex-1 p-10 text-white border-[1px] border-gradient">
          <h2 className="text-3xl font-bold mb-8">Contact us</h2>
          <ul className="space-y-6">
            <li className="flex items-center">
              <FiPhone className="text-[#BFA181] h-6 w-6 mr-3" />
              <span>9000-914-614</span>
            </li>
            <li className="flex items-center">
              <FiMail className="text-[#BFA181] h-6 w-6 mr-3" />
              <span>sales.nextgenhomes@gmail.com</span>
            </li>
            <li className="flex items-center">
              <FiMapPin className="text-[#BFA181] h-6 w-6 mr-3" />
              <span>Trisulia, Cuttack</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
