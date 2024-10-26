import React, { useEffect } from 'react'
import { useDarkMode } from '../component/DarkModeContext'
import img13 from '../assets/images/img13.png';
import nextgen from '../assets/images/nextgen.jpg';
import nextgen2 from '../assets/images/nextgen2.jpg';
import nextgen3 from '../assets/images/nextgen3.jpg';
import AOS from 'aos'
import 'aos/dist/aos.css'

const PopularAreas = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, [])

  const { darkmode, toggleDark } = useDarkMode();
  return (
    <div>
      <section className={`${darkmode ? 'dark bg-gray-800' : 'light bg-red-100'}lg:w-[95%] w-full h-fit m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-center lg:px-20 px-6 py-20 gap-20`}>

        <div id="top" className='w-full grid lg:grid-cols3 grid-cols-1 justify-center gap-8'>
          <div>
            <h1 data-aos="zoom-in" data-aos-delay="100" className="text-black text-[30px] font-semibold leading-10 mt-4 dark:text-white aos-init aos-animate md:text-right flex justify-end items-end">Modern Living Meets Timeless Design</h1> 
          </div>
          <div className="grid lg:grid-cols-4 col-span-2 grid-cols-1 justify-center  items-center gap-6">

            <div data-aos="zoom-in" data-aos-delay="300" style={{ backgroundImage: `url(${nextgen2})`}} className='h-[400px] bg-cover bg-center rounded-xl'>
            </div>

            <div data-aos="zoom-in" data-aos-delay="500" style={{ backgroundImage: `url(${nextgen3})`}} className='h-[400px] bg-cover bg-center rounded-xl'>
            </div>

            <div data-aos="zoom-in" data-aos-delay="700" style={{ backgroundImage: `url(${nextgen})`}} className='h-[400px] bg-cover bg-center rounded-xl'>
            </div>


            <div data-aos="zoom-in" data-aos-delay="900" style={{ backgroundImage: `url(${img13})`}} className='h-[400px] bg-cover bg-center rounded-xl'>
            </div>
          </div>

          
        </div>
        
        


      </section>
    </div>

  )
}

export default PopularAreas
