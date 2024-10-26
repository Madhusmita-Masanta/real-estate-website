import { useState } from 'react';
import heroImg1 from '../assets/images/swimming.jpg';
import heroImg2 from '../assets/images/Gazebo.png';
import heroImg3 from '../assets/images/ClubHouse.jpg';
import heroImg4 from '../assets/images/jogging.png';
import heroImg5 from '../assets/images/Kidsplay.png';
import heroImg6 from '../assets/images/GYM.png';
import heroImg8 from '../assets/images/Temple.jpg';
import heroImg9 from '../assets/images/Lotus.jpg';
import heroImg10 from '../assets/images/Yoga.jpg';
import heroImg11 from '../assets/images/Star.jpg';
import heroImg12 from '../assets/images/Cricket.jpg';
import heroImg13 from '../assets/images/EVCharging.jpg';
import heroImg14 from '../assets/images/Security.jpg';
import heroImg15 from '../assets/images/Badminton.jpg';

import WhatsAppButton from '../component/WhatsAppButton';
import CallButton from '../component/CallButton';

const HeroSection = () => {
  const images = [
    heroImg1, heroImg2, heroImg3, heroImg4, heroImg5,
    heroImg6, heroImg8, heroImg9, heroImg10,
    heroImg11, heroImg12, heroImg13, heroImg14, heroImg15,
  ];

  const texts = [
    { heading: "Swimming Pool", paragraph: "Dive into relaxation and enjoy the tranquil waters in our luxurious swimming pool, designed for both leisure and fitness." },
    { heading: "Gazebo Seating Area", paragraph: "A serene outdoor space where you can unwind and enjoy peaceful moments with friends and family in comfort." },
    { heading: "Club House", paragraph: "A social hub for all ages, offering recreational activities, indoor games, and a place to connect with neighbors." },
    { heading: "Jogging Track", paragraph: "Keep fit and active on our dedicated jogging track, surrounded by lush greenery for an energizing workout." },
    { heading: "Kids Play Area", paragraph: "A safe and fun-filled space designed to spark creativity and keep the little ones entertained for hours." },
    { heading: "Gym", paragraph: "Fully equipped with modern equipment to cater to all your fitness needs, from cardio to strength training." },
    { heading: "Temple", paragraph: "A peaceful sanctuary where you can connect with your spiritual side and find inner peace close to home." },
    { heading: "Lotus Garden", paragraph: "Walk amidst blooming lotus flowers in this beautifully landscaped garden, a true escape into nature’s beauty." },
    { heading: "Yoga Pavilion", paragraph: "Find your zen at our open-air yoga pavilion, a tranquil space dedicated to meditation and wellness practices." },
    { heading: "Star Gazing Area", paragraph: "A dedicated space to marvel at the night sky, offering a perfect setting for a quiet night under the stars." },
    { heading: "Box Cricket", paragraph: "Enjoy the thrill of cricket in a compact format that’s perfect for quick, fun matches with friends and family." },
    { heading: "EV Charging Station", paragraph: "Environmentally friendly electric vehicle charging stations for the convenience of your sustainable lifestyle." },
    { heading: "24x7 Security", paragraph: "Your safety is our priority, with round-the-clock security ensuring peace of mind for you and your loved ones." },
    { heading: "Badminton Court", paragraph: "A professional-grade court for all skill levels—whether you’re a beginner or a seasoned player, it’s game on!" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      <div style={{ backgroundColor: 'black' }}>
        <div className="relative w-full h-screen bg-black overflow-hidden">
          {/* Image Slides */}
          <div className="relative h-full w-full flex items-center justify-center">
            {images.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
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
                {texts[currentIndex].heading}
              </h1>
              <p className="text-white mb-8 text-lg">
                {texts[currentIndex].paragraph}
              </p>

              {/* Navigation Arrows Below Paragraph */}
              <div className="flex justify-center space-x-4 mt-4">
                <button
                  onClick={prevSlide}
                  className="bg-gradient-to-r from-[#bfa181] to-[#986121] hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#986121] transition-all text-white  p-2 hover:bg-[#905f23] transition"
                >
                  &lt; {/* Left arrow */}
                </button>
                <button
                  onClick={nextSlide}
                  className="bg-gradient-to-r from-[#bfa181] to-[#986121] hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#986121] transition-all text-white  p-2 hover:bg-[#905f23] transition"
                >
                  &gt; {/* Right arrow */}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 right-8 flex space-x-4">
          <WhatsAppButton />
          <CallButton />
        </div>
      </div>
      
      <br></br><br></br>
    </>
  );
};

export default HeroSection;
