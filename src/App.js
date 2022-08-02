import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import {
  hero,
} from './helpers/data';

function App() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 480);

  const updateMedia = () => {
    if (isMobile < 480) {
      setIsMobile(window.innerWidth < 480);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div className={`w-screen overflow-x-hidden ${open ? 'h-screen overflow-y-hidden' : null}`}>
      <div className='flex items-center h-24' style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px" }}>
        <div className="w-full xl:mx-10">
          <Navbar open={open} setOpen={setOpen} isMobile={isMobile} />
        </div>
      </div>
      <div></div>
      <div className="xl:mx-10 mb-10">
        {hero.map((item, i) => (
          <Hero key={i} data={item.hero} />
        ))}
      </div>
      <div className="border my-6"></div>
      <div className="xl:mx-10">
        <Footer />
      </div>
    </div >
  );
}

export default App;
