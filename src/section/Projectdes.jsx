
import React from 'react';
import heroimg from '../assets/images/page2.jpg';
import bgImage from '../assets/images/black bg3.png'; // Add the background image for the right section
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  // Import FontAwesomeIcon component
import { faBuilding } from '@fortawesome/free-solid-svg-icons'; 

function App() {
  return (
    <>
    <div className="flex items-center justify-center py-6 min-h-screen bg-[#1b1613]">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">

        
        {/* Right Section: Text with Background Image */}
        <div
          className="md:w-1/2 p-8 text-white flex flex-col items-center justify-center relative"
          style={{
            backgroundImage: `url(${bgImage})`,  // Use the background image here
            backgroundColor: 'black',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
        <div className=" ">
  <div className="bg-opacity-60 p-6 rounded-md text-left">
    <h1 className="text-4xl mb-2">
    A Home That Shines with <br /> Luxury and Promise 
    </h1>
    <br />
    <p className="mb-2 text-[17px]">
    Secure your luxurious lifestyle today with Estrella Avenue, where elegance meets convenience in every detail. With limited units available, now is the time to seize the opportunity and invest in a home that promises a rich living experience and excellent returns.

As you step into Estrella Avenue, you’re not just entering a home—you’re becoming part of a growing, vibrant community. In the dance of bricks and dreams, houses transform into homes, and neighborhoods start weaving stories of connection, luxury, and happiness.
    </p>
    <br />
    {/* Centered Button */}
    <div className="flex justify-left">
      <button className="bg-gradient-to-r from-[#bfa181] to-[#986121] hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#986121] transition-all text-white px-6 py-2 rounded-[2px] flex items-center hover:bg-[#905f23] px-6 py-[12px]">
        {/* Add FontAwesomeIcon for Amenities */}
        <FontAwesomeIcon icon={faBuilding} className="w-5 h-5 mr-2" />
        View Amenities
      </button>
    </div>
  </div>
</div>

        </div>

         {/* Left Section: Image */}
         <div className="md:w-2/4 relative">
          <img src={heroimg} alt="Building" className="object-cover w-full h-[600px]" />
        </div>
      </div>
    </div>
    <br></br>
    <br></br>
    </>
  );
}

export default App;
