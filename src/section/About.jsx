
import React from 'react';
import heroimg from '../assets/images/m1.jpg';
import bgImage from '../assets/images/black bg.png'; // Add the background image for the right section
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  // Import FontAwesomeIcon component
import { faBuilding } from '@fortawesome/free-solid-svg-icons'; 

function App() {
  return (
    <>
    <div className="flex items-center justify-center py-6 min-h-screen bg-[#1b1613]">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">

        {/* Left Section: Image */}
        <div className="md:w-2/4 relative">
          <img src={heroimg} alt="Building" className="object-cover w-full h-[600px]" />
        </div>

        {/* Right Section: Text with Background Image */}
        <div
          className="md:w-2/3 p-8 text-white flex flex-col items-center justify-center relative"
          style={{
            backgroundImage: `url(${bgImage})`,  // Use the background image here
            backgroundColor: 'black',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
        <div className=" text-center">
          <div className=" bg-opacity-60 p-6 rounded-md text-left"> {/* Changed text alignment to text-left */}
            <h1 className="text-4xl  mb-2">
              Strategically Positioned for Growth,<br></br> Elegantly Designed for You
            </h1>
            <br></br>
            <p className="mb-2 text-[17px]">
              At Estrella Avenue, we offer more than just homes; we provide a curated lifestyle
              that caters to every need. With an array of top-tier amenities, our facilities are
              designed to elevate your living experience to new heights. Explore our well-planned
              spaces where luxury meets functionality, ensuring you live in comfort and style
              every day.
            </p>
            <br></br>
            <button className="bg-gradient-to-r from-[#bfa181] to-[#986121] hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#986121] transition-all  text-white  px-6 py-[12px] rounded-[2px] flex items-center hover:bg-[#905f23]">
              {/* Add FontAwesomeIcon for Amenities */}
              <FontAwesomeIcon icon={faBuilding} className="w-5 h-5 mr-2" />
              View Amenities
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
    <br></br>
    <br></br>
    </>
  );
}

export default App;
