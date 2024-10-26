
import React from 'react';
import heroimg from '../assets/images/page1.jpg';
import bgImage from '../assets/images/black bg2.png'; // Add the background image for the right section
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
  <div className="bg-opacity-60 p-6 rounded-md text-center">
    <h1 className="text-4xl mb-2">
      Designed for a Life of <br /> Comfort and Leisure
    </h1>
    <br />
    <p className="mb-2 text-[17px]">
      At Estrella Avenue, we offer more than just homes; we provide a curated lifestyle that caters to every need. With an array of top-tier amenities, our facilities are designed to elevate your living experience to new heights. Explore our well-planned spaces where luxury meets functionality, ensuring you live in comfort and style every day.
    </p>
    <br />
    {/* Centered Button */}
    <div className="flex justify-center">
      <button className="bg-gradient-to-r from-[#bfa181] to-[#986121] hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#986121] transition-all text-white px-6 py-2 rounded-[2px] flex items-center hover:bg-[#905f23] px-6 py-[20px]">
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
