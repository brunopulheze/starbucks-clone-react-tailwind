import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import {
  hero,
} from './helpers/data';

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div classNameName={`App ${open ? 'border border-black overflow-y-hidden h-screen' : null}`}>
      <div className='flex items-center h-24' style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px" }}>
        <div className="w-full xl:mx-10">
          <Navbar open={open} setOpen={setOpen} />
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
