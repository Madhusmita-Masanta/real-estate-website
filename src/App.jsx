import React from 'react'
import { DarkModeProvider } from './component/DarkModeContext'
import Hero from './section/Hero'
import About from './section/About'
import Header from './component/Header'
import PopularAreas from './section/PopularAreas'
import Page from './section/Page'
import Projectdes from './section/Projectdes'
import Floorplan from './section/Floorplan'
import Location from './section/Location'
import Contact from './section/Contact'
import Footer from './component/Footer'
import Facilities from './section/Facilities'
import Sliding from './section/Sliding'
import 'bootstrap/dist/css/bootstrap.min.css';
import Amunities from './section/Amunities'




const App = () => {
  return (
    <>
      <DarkModeProvider>

        <Header />
      
        <section id="home">
          <Hero />
        </section>
        <section id="about">
        <About />
        </section>
        <Facilities />
        <section id="Client">
          <Location />
        </section>

        <section id="Amunities">
          <Amunities />
        </section>
         <section id="Properties">
          <Page />
        </section>
       
        
        <section id="Service">
          <Floorplan />
        </section>
        <section id="Properties">
          <Projectdes />
        </section>
       

         <section id="Contact">
          <Contact />
        </section>


        <section id="Footer">
        <Footer />

        </section>
        
          
       

      </DarkModeProvider>

    </>
  )
}

export default App




