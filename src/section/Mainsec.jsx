
import { useState, useEffect } from "react";

//hero sce
import heroimg from '../assets/images/heroimg.png'; // Ensure the path is correct
import AOS from 'aos';
import 'aos/dist/aos.css';
import WhatsAppButton from '../component/WhatsAppButton';
import CallButton from '../component/CallButton';
//about sec
import img6 from '../assets/images/img6.png'



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
    //hero sec
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 800,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, []);


    //    

    return (
        <>
            <div className="absolute bottom-10 left-4 flex flex-col space-y-4 z-50">
                <WhatsAppButton />
                <CallButton />
            </div>

            {/* Hero Section */}

            <section
                id="hero"
                className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px] bg-cover bg-center flex flex-col justify-center items-center"
                style={{ backgroundImage: `url(${img6})` }}
            >
                {/* Overlay to darken the background image */}
                <div className="absolute inset-0 bg-black opacity-50"></div>

                {/* Heading and Subheading */}
                <div className="relative z-10 text-center px-4">
                    <h1
                        data-aos="zoom-in"
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight"
                    >
                        Find Your Next Home
                    </h1>
                    <p
                        data-aos="zoom-in"
                        className="text-white text-sm sm:text-lg md:text-xl lg:text-1xl mt-4 max-w-3xl mx-auto"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea reiciendis explicabo soluta error alias voluptates hic, doloribus architecto eius, dolorum doloremque voluptatem vel commodi animi nesciunt! Error vero obcaecati nesciunt.
                    </p>
                </div>

                {/* Floating WhatsApp and Call Buttons on Left Side */}
            </section>
            <br></br>
            <br></br>

            {/* About section */}
            <section id="about" className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12 ">
                {/* Left Side (Text Section) */}
                <div className="md:w-1/2 mb-6 md:mb-0">
                    <h2 data-aos="fade-left" className="text-3xl md:text-4xl font-bold text-red-800 mb-4">
                        Who We Are
                    </h2>
                    <p data-aos="fade-right" className="italic text-lg font-semibold text-gray-600 mb-6">
                        “Connecting Dreams and Dwellings.”
                    </p>
                    <p data-aos="fade-up" className="text-gray-700 text-base leading-relaxed">
                        Located just 2 kilometers from Trisulia Chowk, Etrella Avenue is set in a highly strategic location that is quickly becoming one of the most sought-after areas in Cuttack.
                        With the government's Vision 30 plan bringing a 200-feet wide road right to our doorstep, connectivity will soon be unmatched.
                        The upcoming Metro rail line under construction nearby further elevates the appeal, promising swift and seamless travel across the city.
                        These developments not only enhance the quality of life for residents but also position Etrella Avenue as a prime investment opportunity.
                        As the infrastructure around the project grows, so does its value, making Etrella Avenue an intelligent choice for those seeking both a luxurious living experience and significant returns in the near future.
                    </p>
                </div>

                {/* Right Side (Image Section) */}
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src={heroimg}// Update with your image path
                        alt="Etrella Avenue"
                        className="w-full max-w-md rounded-lg shadow-lg"
                    />
                </div>
            </section>







        </>
    );
};

export default Navbar;
