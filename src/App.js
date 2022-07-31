import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import {
  hero,
} from './helpers/data';

function App() {
  return (
    <div classNameName="App">
      <div style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px" }}>
        <div className="xl:mx-40">
          <Navbar />
        </div>
      </div>
      <div></div>
      <div className="xl:mx-40">
        {hero.map((item, i) => (
          <Hero key={i} data={item.hero} />
        ))}
      </div>
      <div className="border my-6"></div>
      <div className="xl:mx-40">
        <Footer />
      </div>
    </div >
  );
}

export default App;
