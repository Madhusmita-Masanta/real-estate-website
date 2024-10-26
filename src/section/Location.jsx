import React from 'react';
import { MapPin, Phone } from 'lucide-react';

const connectivityData = [
  { from: 'Trishulia Chowk', distance: '2km' },
  { from: 'High Court', distance: '6.5km' },
  { from: 'Sisu Bhawan', distance: '6km' },
  { from: 'Kiit Square', distance: '12km' },
  { from: 'NH-16', distance: '6.5km' },
  { from: 'Airport', distance: '6km' },
  { from: 'Ashwini Hospital', distance: '7km' },
  { from: 'Sai International', distance: '8km' },
  { from: 'Nandankanan', distance: '6.5km' },
  { from: 'Sri University', distance: '2km' },
  { from: 'Infocity Square', distance: '14km' },
  { from: 'Gayatri Hospital', distance: '1.4km' },
];

const LocationCard = ({ from, distance }) => (
  <div
    className="rounded-lg p-4 shadow-sm text-white flex items-center justify-center"
    style={{
      border: '0.5px solid rgba(184,149,90,255)',
    }}
  >
    <div className="text-sm">{from} - {distance}</div>
  </div>
);

export default function ConnectivitySection() {
  return (
    <div className="min-h-[600px] p-8">
      {/* Main Container */}
      <div className="max-w-8xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl  font-semibold bg-gradient-to-r from-[#bfa181] to-[#986121]  bg-clip-text text-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#986121] transition-all mb-8">
          Check Our Connectivity
        </h2>
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Map Section */}
          <div className=" rounded-lg">
            {/* Google Maps Embed */}
            <div className='bg-black opacity-60'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.993468777554!2d85.84629857439747!3d20.42434998107798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190d45cf1696e3%3A0x10b099126205cce8!2sEstrella%20Avenue%20By%20NextGen%20Homes!5e0!3m2!1sen!2sin!4v1726565487657!5m2!1sen!2sin"
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[330px] bg-[#222] rounded-lg"
            ></iframe>
            </div>

            {/* Location Info */}
            <div className="mt-4 flex flex-row items-center justify-start gap-8 text-white ">
              <div className="flex items-center gap-2 px-4 py-2  rounded-lg ">
                <MapPin size={20} className="text-[#b8955a]" />
                <span >Khapuria, BBSR</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg">
                <Phone size={20} className="text-[#b8955a]" />
                <span>+91 1234567789</span>
              </div>
            </div>



          </div>

          {/* Connectivity Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {connectivityData.map((location, index) => (
              <LocationCard key={index} from={location.from} distance={location.distance} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

