import React, { useEffect, useRef, useState } from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import './Home.css';
import video from '../Videos/Untitled video - Made with Clipchamp (3).mp4';
import Photo1 from '../Imgs/earth-milky-way-astronomy-digital-composition-dark-3840x2160-6080.jpg';
import Photo2 from '../Imgs/purple-planet-dark-background-saturn-astronomy-4042x2274-6425.jpg';
import Photo3 from '../Imgs/saturn-outer-space-4096x2160-12084.jpg'

export default function Home() {
  const aboutRef = useRef(null);
  const [isUnderlineVisible, setIsUnderlineVisible] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (aboutRef.current) {
        const sectionTop = aboutRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 190  ) {
          setIsUnderlineVisible(true);
        } else {
          setIsUnderlineVisible(false);
        }
        if (window.scrollY > 400) {
          setShowArrow(true);
        } else {
          setShowArrow(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToHero = () => {
    const heroSection = document.getElementById("hero-section");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div id="hero-section" >
        <Hero />
      </div>
      <section className="section" id='about-section' ref={aboutRef}>
        <div className="blur-box">
          <div className="title-container">
            <h1 className="title"><span style={{ color: "rgb(44, 129, 150)" }}>A</span>bout Us</h1>
            <div className="underline-container" style={{marginBottom :"30px"}}>
            <div className="dot"></div>
              <div className={`underline ${isUnderlineVisible ? 'active' : ''}`}></div>
              <div className="dot"></div>
              
            </div>
          </div>
          <p className="paragraph" style={{marginBottom :"60px"}}>
            In NovaTech Our mission is to immerse you in the wonders of the universe.
            Through the Planetary Detective game, 
            we offer an engaging and entertaining experience, 
            unveiling the mysteries of planets, stars, and galaxies. 
            Discover the vast cosmos while expanding your knowledge,
            all in a way that's as fun as it is fascinating.
          </p>
          <div style={{marginBottom :"120px"}}>
            <video src={video} controls ></video>
          </div>
          <div className="title-container" style={{marginTop : "50px"}}>
            <h1 className="title"><span style={{ color: "rgb(44, 129, 150)" }}>3d </span>Planets</h1>
            <div className="underline-container">
            <div className="dot"></div>
              <div className={`underline ${isUnderlineVisible ? 'active' : ''}`}></div>
              <div className="dot"></div>
            </div>
          </div>
          <div className="planet-cards" style={{marginBottom :"120px"}}>
              <div className="card">
                  <img src={Photo1} alt="Saturn" />
              <div className="card-content">
                  <h2><span style={{color : "rgb(12, 114, 139)"}}>K</span>epler 22b</h2>
                  <p style={{fontSize :"16px" , fontFamily :"sans-serif"}}>A possible ocean world orbiting in the habitable zone—the region around a star where the temperature is right for liquid water</p>
                <button><Link to= "Kepler" className='LinkP'>Explore</Link></button>
              </div>
            </div>
            <div className="card">
              <img src={Photo2} alt="Nebula Planet" />
              <div className="card-content">
                <h2> <span style={{color : "rgb(12, 114, 139)"}}>C</span>ancri_e</h2>
                <p style={{fontSize :"16px" , fontFamily :"sans-serif"}}>This super hot world is covered in a global ocean of lava and has sparkling skies.</p>
                <button><Link to= "Cancri" className='LinkP'>Explore</Link></button>
              </div>
              </div>
              <div className="card">
                <img src={Photo3} alt="Other Planet" />
                <div className="card-content">
                  <h2> <span style={{color : "rgb(12, 114, 139)"}}>P</span>roxima</h2>
                  <p style={{fontSize :"16px" , fontFamily :"sans-serif"}}>At only four light-years away, Proxima Centauri b is our closest known exoplanet neighbor.</p>
                  <button> <Link to= "Proxima" className='LinkP'>Explore</Link></button>
                </div>
              </div>
          </div>
        </div>

      </section>
      {showArrow && (
        <div className="arrow" onClick={scrollToHero} style={{zIndex:"1000"}}>
          <div className="outer-arrow">
            <div className="inner-arrow" />
          </div>
        </div>
      )}
    </div>
  );
}
