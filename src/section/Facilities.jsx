import React from 'react';
import projectImage from '../assets/images/img5.png';

function ProjectHighlights() {
  return (
    <>
    <div className='min-h-[600px]'>
      <h1 className="text-4xl bg-gradient-to-r from-[#bfa181] to-[#986121]  bg-clip-text text-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#986121] transition-all ml-16 text-gradient font-bold ">Project Highlights</h1>
      <div className=" text-white py-12 px-6 flex justify-center items-center">
        <div className="max-w-8xl w-full flex flex-col md:flex-row items-start justify-between">
          
          {/* Left Section */}
          <div className=" rounded-lg p-4 w-full md:w-1/2 flex justify-center items-center">
            <a 
              href="https://www.youtube.com/watch?v=YOUR_VIDEO_ID" 
              target="_blank"
              rel="noopener noreferrer" 
            >
              <div className="relative rounded-md" style={{ boxShadow: '0 0 20px rgba(206,183,128,255)' }}>
                <img 
                  src={projectImage} 
                  alt="Project" 
                  className="w-full h-full object-cover rounded-md" 
                />
              </div>
            </a>
          </div>

          {/* Right Section */}
          <div className="mt-8 md:mt-0 md:ml-8 w-full md:w-1/2">
            <ul className="list-disc space-y-2 pl-5 ">
              <li>Seamless connectivity with the upcoming metro rail, placing every corner of Bhubaneswar just minutes away from your doorstep.</li>
              <li>Effortless commutes via the under-construction 200-feet ring road, linking NH-16, Barang, and Trisulia, Cuttack, for a swift and scenic drive every day.</li>
              <li>Prime location perks with top-tier educational institutions, prestigious universities, and advanced hospitals all within a short 20-minute radius.</li>
              <li>Endless entertainment as restaurants, malls, and theatres beckon within just 15 minutes, ensuring you’re never far from life’s pleasures.</li>
              <li>Exponential growth potential thanks to the upcoming JSW integrated EV manufacturing plant, set to generate 40,000+ jobs and supercharge the local economy—just 10 minutes away.</li>
              <li>Elevated living with 20+ world-class amenities, offering a lifestyle of luxury, leisure, and comfort in every square foot.</li>
              <li>Unbeatable pricing during the pre-launch phase, delivering duplex luxury at the price of an apartment, a rare opportunity you won’t want to miss.</li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default ProjectHighlights;
