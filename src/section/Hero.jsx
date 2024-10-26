import { useState, useEffect } from 'react';
import heroImg from '../assets/images/heroimg.png';
import heroimg5 from '../assets/images/img5.png';
import heroImg3 from '../assets/images/img2.png';
import WhatsAppButton from '../component/WhatsAppButton';
import CallButton from '../component/CallButton';

const HeroSection = () => {
  const images = [heroImg, heroimg5, heroImg3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Automatically transition to the next slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <>
      <div style={{ backgroundColor: 'black' }}>
        <div className="w-full h-screen bg-black overflow-hidden">
          {/* Image Slides */}
          <div className="relative h-full w-full flex items-center justify-center">
            {images.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={img}
                  alt={`Slide ${index}`}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>

          {/* Overlay with full-width background */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <div className="bg-black bg-opacity-25 w-full flex flex-col items-center py-6">
              <h1 className="text-4xl md:text-5xl text-white mb-4">
                Where Dreams Take Root in Luxury!
              </h1>
              <p className="text-white mb-8 text-lg">
                Experience the grandeur of Estrella Avenue, where every home is a masterpiece,<br /> blending luxury, nature, and convenience.
              </p>

              {/* Navigation Dots */}
              <div className="flex justify-center items-center space-x-3 mt-4">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all focus:outline-none ${
                      index === currentIndex ? 'bg-[#cf8c27] opacity-100' : 'bg-white opacity-50'
                    }`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 right-8 flex space-x-4">
          <WhatsAppButton />
          <CallButton />
        </div>
      </div>
      <br />
    </>
  );
};

export default HeroSection;
