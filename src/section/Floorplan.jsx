
import React, { useState } from 'react';
import floor1 from '../assets/images/31.png';
import floor2 from '../assets/images/38.png';
import floor3 from '../assets/images/32.png';
import floor4 from '../assets/images/33.png';
import floor5 from '../assets/images/34.png';
import floor6 from '../assets/images/35.png';
import floor7 from '../assets/images/37.png';
import floor8 from '../assets/images/9.png';
import floor9 from '../assets/images/36.png';
import samplePdf from '../assets/images/FloorPlan.pdf'; // Path to your PDF file

const Service = () => {
  const types = ['Type 1', 'Type 2', 'Type 3', 'Type 4', 'Type 5', 'Type 6', 'Type 7', 'Type 8', 'Type 9'];
  const [activeTab, setActiveTab] = useState(types[0]);
  const [showForm, setShowForm] = useState(false); // State to control form visibility
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const typeImages = {
    'Type 1': floor1,
    'Type 2': floor2,
    'Type 3': floor3,
    'Type 4': floor4,
    'Type 5': floor5,
    'Type 6': floor6,
    'Type 7': floor7,
    'Type 8': floor8,
    'Type 9': floor9,
  };

  // Define your descriptions here with line breaks
  const typeDescriptions = {
    'Type 1': `West Facing<br><br>4BHK Duplex<br><br>GF-1131<br>FF - 888<br>Headroom - 150<br><br>Total Builtup Area - 2169 Sqft- 2169 Sqft.`,
    'Type 2': `East Facing<br><br>3BHK Duplex<br><br>GF - 944<br>FF - 944<br>Headroom - 160<br><br>Total Built-up Area - 2048 Sqft.`,
    'Type 3': `South Facing<br><br>4BHK Duplex<br><br>Ground Floor - 1131 Sqft.<br>First Floor - 888 Sqft.<br>Headroom - 150 Sqft<br><br>Total Built-up Area - 2169 Sqft.`,
    'Type 4': `North Facing<br><br>3BHK Duplex<br><br>GF-998 <br>FF - 1017<br>Headroom - 150Sqft<br><br>Total Built-up Area - 2165 Sqft.`,
    'Type 5': `South Facing<br><br>3BHK Duplex<br><br>GF-810 <br>FF - 810<br>HEADROOM-150<br><br>Total Builtup Area -  1770 Sqft.`,
    'Type 6': `South Facing<br><br>3BHK Duplex<br><br>GF-838 <br>FF - 838<br>Headroom - 150<br><br>Total Builtup Area -  1826 Sqft.`,
    'Type 7': `North Facing<br><br>3BHK Duplex<br><br>GF- 849<br>FF -849<br>Headroom - 180<br><br>Total Built Up area- 1878`,
    'Type 8': `South Facing<br><br>5BHK Duplex<br><br>GF- 1131<br>FF - 1131<br>Headroom - 160<br><br>Total Built Up area - 2242 Sqft.`,
    'Type 9': `South Facing<br><br>5BHK Duplex<br><br>GF- 1131 <br>FF - 1131<br>Headroom - 160<br><br>Total Built Up area- 2422`,

    
  };
  

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setShowForm(false); // Close the form after submission

    // Automatically trigger the PDF download
    const link = document.createElement('a');
    link.href = samplePdf;
    link.download = 'FloorPlan.pdf';
    link.click();
  };

  return (
    <>
      <div className="min-h-screen p-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <header className="text-center mb-10">
            <h1 className="text-[45px] font-serif mb-4 bg-gradient-to-r from-[#bfa181] to-[#986121] bg-clip-text text-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#986121] transition-all">
              Thoughtfully Designed Spaces, Crafted for Luxury Living
            </h1>
            <p className="text-gray-300 text-[15px]">
            The Type 3 Floor Plan at Estrella Avenue offers expansive residential units equipped with modern amenities. From spacious parking and lush green areas to efficient elevators and top-tier security, every feature is designed to enhance your lifestyle. Sustainable elements and panoramic views combine to offer a life of opulence and comfort. Estrella Avenue is your urban oasis where luxury meets convenience.
            </p>
          </header>

          <br></br>

          {/* Tab navigation for types */}
          <div className="text-center mb-8">
            {types.map((type) => (
              <button
                key={type}
                className={`px-4 py-2 text-lg font-medium mx-2 rounded-lg ${activeTab === type ? 'bg-white text-black' : 'text-white'} transition-colors duration-300`}
                onClick={() => setActiveTab(type)}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Content Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Image Section */}
            <div className="shadow-lg rounded-lg">
              <img
                style={{ boxShadow: '0 0 20px rgba(206,183,128,255)' }}
                src={typeImages[activeTab]}
                alt={`Blueprint for ${activeTab}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Descriptive Section */}
            <div className="p-[45px] border border-[#a27133] rounded-lg text-white shadow-lg">
              <h2 className="text-3xl font-semibold mb-4 text-white">
                {activeTab}
              </h2>
              <p className="mb-4 text-[#ffffffb3]">
                <span dangerouslySetInnerHTML={{ __html: typeDescriptions[activeTab] }} />
              </p>

              {/* Button to show form */}
              <button
                className="bg-gradient-to-r from-[#bfa181] to-[#986121] hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#986121] transition-all text-black px-4 py-2 font-medium hover:bg-[#bfa981] transition-colors duration-300"
                onClick={() => setShowForm(true)}
              >
                DOWNLOAD FLOOR PLAN
              </button>
            </div>
          </div>

          {/* Modal Form */}
          {showForm && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="relative bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-semibold mb-4">Fill out the form</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block text-gray-700">Name</label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input
                      type="email"
                      className="w-full p-2 border rounded"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full p-2 border rounded"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div className="flex justify-between">
                    {/* Submit button */}
                    <button type="submit" className="bg-gradient-to-r from-[#bfa181] to-[#986121] hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#986121] transition-all text-white px-6 py-2 rounded hover:bg-[#A47D66]">
                      Submit & Download
                    </button>

                    {/* Close button */}
                    <button
                      type="button"
                      className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                      onClick={() => setShowForm(false)}
                    >
                      Close
                    </button>
                  </div>
                </form>
                {/* Close icon button */}
                <button className="absolute top-2 right-2 text-gray-600" onClick={() => setShowForm(false)}>
                  &#x2715;
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <br></br>
    </>
  );
};

export default Service;
