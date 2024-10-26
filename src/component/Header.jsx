import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from '../assets/images/logo.jpg';

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleScroll = (event, sectionId) => {
    event.preventDefault();

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg" style={{ backgroundColor: '#1b1613' }}>
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-12 w-30 mr-2" src={logo} alt="Logo" />
          </div>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex ml-14 space-x-12 text-sm">
            <a
              href="#home"
              onClick={(e) => handleScroll(e, 'home')}
              className="text-white group relative"
            >
              Home
              <span className="absolute left-0 bottom-0 w-0 h-px bg-[#f0d090] transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="text-white group relative">
                About Us
                <span className="absolute left-0 bottom-0 w-0 h-px bg-[#f0d090] transition-all duration-300 group-hover:w-full"></span>
              </a>
            
            <a
              href="#Amunities"
              onClick={(e) => handleScroll(e, 'Amunities')}
              className="text-white group relative"
            >
              Amenities
              <span className="absolute left-0 bottom-0 w-0 h-px bg-[#f0d090] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#Service"
              onClick={(e) => handleScroll(e, 'Service')}
              className="text-white group relative"
            >
              Floor Plans
              <span className="absolute left-0 bottom-0 w-0 h-px bg-[#f0d090] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#Properties"
              onClick={(e) => handleScroll(e, 'Properties')}
              className="text-white group relative"
            >
              Project Description
              <span className="absolute left-0 bottom-0 w-0 h-px bg-[#f0d090] transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a
              href="#Contact"
              onClick={(e) => handleScroll(e, 'Contact')}
              className="text-white group relative"
            >
              Contact Us
              <span className="absolute left-0 bottom-0 w-0 h-px bg-[#f0d090] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </ul>

          {/* Mobile Menu Button */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar} style={{ color: "#ebdfa5" }}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-slate-900 w-full p-12 flex flex-col items-center space-y-6 lg:hidden" style={{ backgroundColor: '#1b1613' }}>
            <ul className="flex flex-col items-center space-y-6 text-sm">
              <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="text-white group relative">
                Home
                <span className="absolute left-0 bottom-0 w-0 h-px bg-[#f0d090] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="text-white group relative">
                About Us
                <span className="absolute left-0 bottom-0 w-0 h-px bg-[#f0d090] transition-all duration-300 group-hover:w-full"></span>
              </a>
              
              <a href="#Amunities" onClick={(e) => handleScroll(e, 'Amunities')} className="text-white group relative">
                Amenities
                <span className="absolute left-0 bottom-0 w-0 h-px bg-[#f0d090] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
              href="#Service"
              onClick={(e) => handleScroll(e, 'Service')}
              className="text-white group relative"
            >
              Floor Plans
              <span className="absolute left-0 bottom-0 w-0 h-px bg-[#f0d090] transition-all duration-300 group-hover:w-full"></span>
            </a>
              <a href="#Properties" onClick={(e) => handleScroll(e, 'Properties')} className="text-white group relative">
                Project Description
                <span className="absolute left-0 bottom-0 w-0 h-px bg-[#f0d090] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#Contact" onClick={(e) => handleScroll(e, 'Contact')} className="text-white group relative">
                Contact Us
                <span className="absolute left-0 bottom-0 w-0 h-px bg-[#f0d090] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
