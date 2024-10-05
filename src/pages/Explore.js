import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import photo1 from '../Imgs/planet1.jpeg';
import photo2 from '../Imgs/planet2.jpeg';
import photo3 from '../Imgs/planet3.jpeg';
import photo4 from '../Imgs/planet4.jpeg';
import vid1 from '../Videos/10125076-hd_1920_1080_30fps.mp4';
import vid2 from '../Videos/11104160-hd_1920_1080_25fps.mp4';
import vid3 from '../Videos/9686535-hd_1920_1080_30fps.mp4';
import vid4 from '../Videos/7959300-hd_1920_1080_30fps.mp4';
import video1 from '../Videos/Earth vs. Super Earth _ Meet Kepler-22b_ A Potential Earth 2.mp4'
import video2 from '../Videos/Exoplanets 101 _ National Geographic.mp4'
import video3 from '../Videos/The Diamond Planet_ 55 Cancri E.mp4'
import video4 from '../Videos/Earth vs. Super Earth _ Meet Kepler-22b_ A Potential Earth 2.mp4'
import './Explore.css';
import HeroExplore from '../components/HeroExplore';
function Explore() {
  const [activeTab, setActiveTab] = useState('3D Planets');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const openModal = (videoSrc) => {
    setCurrentVideo(videoSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVideo(null);
  };

  return (
    <div>
      <div>
        <HeroExplore />
      </div>
      <div className='Esection' style={{ display: 'flex', justifyContent: 'center', marginBottom: '150px' }}>
        <div className='Tapsection' style={{
          marginTop: '120px',
          width: '70%',
          height: '110px',
          backgroundColor: 'rgba(0, 70, 87, 0.5)',
          display: 'flex',
          justifyContent: 'space-around',
          borderRadius: '15px',
        }}>
          <div className='Tapf' style={{
            width: '35%',
            height: '100%',
            borderRadius: '5px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'transparent',
            position: 'relative',
          }}>
            <Link
              style={{
                textDecoration: 'none',
                color: activeTab === '3D Planets' ? 'transparent' : 'white',
                fontSize: '30px',
                background: activeTab === '3D Planets' ? 'linear-gradient(90deg, #3284FF 0%, #18C4FF 100%)' : 'transparent',
                WebkitBackgroundClip: activeTab === '3D Planets' ? 'text' : 'initial',
                WebkitTextFillColor: activeTab === '3D Planets' ? 'transparent' : 'white',
                padding: '10px',
                borderRadius: '5px',
                position: 'relative',
                transition: 'color 0.3s ease',
              }}
              to="#"
              onClick={() => setActiveTab('3D Planets')}
            >
              3D Planets
              {activeTab === '3D Planets' && (
                <div style={{
                  position: 'absolute',
                  bottom: '-20px',
                  left: '60%',
                  transform: 'translateX(-50%)',
                  width: '280%',
                  height: '3px',
                  backgroundColor: 'rgb(50, 132, 255)',
                  borderRadius: '5px',
                  transition: 'transform 0.3s ease',
                }}></div>
              )}
            </Link>
          </div>
          <div style={{
            width: '3px',
            height: '80%',
            backgroundColor: 'white',
            margin: '10px 20px',
          }}></div>

          <div className='Tapl' style={{
            width: '35%',
            height: '100%',
            borderRadius: '5px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'transparent',
            position: 'relative',
          }}>
            <Link
              style={{
                textDecoration: 'none',
                color: activeTab === 'Videos' ? 'transparent' : 'white',
                fontSize: '30px',
                background: activeTab === 'Videos' ? 'linear-gradient(90deg, #3284FF 0%, #18C4FF 100%)' : 'transparent',
                WebkitBackgroundClip: activeTab === 'Videos' ? 'text' : 'initial',
                WebkitTextFillColor: activeTab === 'Videos' ? 'transparent' : 'white',
                padding: '10px',
                borderRadius: '5px',
                position: 'relative',
                transition: 'color 0.3s ease',
              }}
              to="#"
              onClick={() => setActiveTab('Videos')}
            >
              Videos
              {activeTab === 'Videos' && (
                <div style={{
                  position: 'absolute',
                  bottom: '-20px',
                  left: '40%',
                  transform: 'translateX(-50%)',
                  width: '390%',
                  height: '3px',
                  backgroundColor: 'rgb(50, 132, 255)',
                  borderRadius: '5px',
                  transition: 'transform 0.3s ease',
                }}></div>
              )}
            </Link>
          </div>
        </div>
      </div>
      <div style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center" }}>
        <div style={{ width: "70%", height: "700px", display: "flex", justifyContent: "center", flexDirection: "column" }}>
          {activeTab === '3D Planets' && (
            <>
              <div style={{ width: "100%", height: "350px", marginBottom: "25px", display: "flex" }}>
                <div className="card1" style={{ marginLeft: "65px" }}>
                  <img src={photo1} alt="Saturn" />
                  <div className="card-content">
                    <h2><span style={{ color: "rgb(12, 114, 139)" }}>K</span>epler 22b</h2>
                    <p style={{ fontSize: "16px", fontFamily: "sans-serif" }}>A possible ocean world orbiting in the habitable zone—the region around a star where the temperature is right for liquid water</p>
                    <button><Link to="/Explore/Kepler" className='LinkP'>Explore</Link></button>
                  </div>
                </div>
                <div className="card2" style={{ marginLeft: "250px" }}>
                  <img src={photo2} alt="Nebula Planet" />
                  <div className="card-content">
                    <h2> <span style={{ color: "rgb(12, 114, 139)" }}>C</span>ancri_e</h2>
                    <p style={{ fontSize: "16px", fontFamily: "sans-serif" }}>This super hot world is covered in a global ocean of lava and has sparkling skies.</p>
                    <button><Link to="/Cancri" className='LinkP'>Explore</Link></button>
                  </div>
                </div>
              </div>
              <div style={{ width: "100%", height: "350px", marginTop: "25px", display: "flex" }}>
                <div className="card3" style={{ marginLeft: "65px" }}>
                  <img src={photo3} alt="Other Planet" />
                  <div className="card-content">
                    <h2> <span style={{ color: "rgb(12, 114, 139)" }}>P</span>roxima</h2>
                    <p style={{ fontSize: "16px", fontFamily: "sans-serif" }}>At only four light-years away, Proxima Centauri b is our closest known exoplanet neighbor.</p>
                    <button><Link to="/Explore/Proxima" className='LinkP'>Explore</Link></button>
                  </div>
                </div>
                <div className="card3" style={{ marginLeft: "250px" }}>
                  <img src={photo4} alt="Other Planet" />
                  <div className="card-content">
                    <h2> <span style={{ color: "rgb(12, 114, 139)" }}>M</span>ars</h2>
                    <p style={{ fontSize: "16px", fontFamily: "sans-serif" }}>Mars, known as the "Red Planet,"</p>
                    <button><Link to='/Explore/Mars' className='LinkP'>Explore</Link></button>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === 'Videos' && (
            <>
              <div style={{ width: "100%", height: "350px", marginBottom: "25px", display: "flex" }}>
              <div className="card1" style={{ marginLeft: "65px", position: "relative", width: "100%", height: "100%" }}>
                    <video src={video1} autoPlay muted loop style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        <div className="card-content" style={{ position: "absolute", bottom: "10px", left: "0px", color: "white" }}>
                            <h2>Video 1 Title</h2>
                            <p style={{ fontSize: "16px", fontFamily: "sans-serif" }}>Video 1 Description</p>
                          <button onClick={() => openModal(video1)} className='LinkP'>Explore</button>
                        </div>
              </div>
              <div className="card2" style={{ marginLeft: "250px", position: "relative", width: "100%", height: "100%" }}>
                  <video src={video2} autoPlay muted loop style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    <div className="card-content" style={{ position: "absolute", bottom: "10px", left: "10px", color: "white" }}>
                        <h2>Video 2 Title</h2>
                        <p style={{ fontSize: "16px", fontFamily: "sans-serif" }}>Video 2 Description</p>
                        <button onClick={() => openModal(video2)} className='LinkP'>Explore</button>
              </div>
              </div>
              </div>
              <div style={{ width: "100%", height: "350px", marginTop: "25px", display: "flex" }}>
                <div className="card3" style={{ marginLeft: "65px", position: "relative", width: "100%", height: "100%" }}>
                  <video src={video3} autoPlay muted loop style={{ width: "100%", height: "100%" , objectFit: "cover" }} />
                  <div className="card-content" style={{ position: "absolute", bottom: "10px", left: "0px", color: "white" }}>
                    <h2>Video 3 Title</h2>
                    <p style={{ fontSize: "16px", fontFamily: "sans-serif" }}>Video 3 Description</p>
                    <button onClick={() => openModal(video3)} className='LinkP'>Explore</button>
                  </div>
                </div>
                <div className="card3" style={{ marginLeft: "250px", position: "relative", width: "100%", height: "100%" }}>
                  <video src={video4} autoPlay muted loop style={{ width: "100%", height: "100%" , objectFit: "cover" }} />
                  <div className="card-content" style={{ position: "absolute", bottom: "10px", left: "0px", color: "white" }}>
                    <h2>Video 4 Title</h2>
                    <p style={{ fontSize: "16px", fontFamily: "sans-serif" }}>Video 4 Description</p>
                    <button onClick={() => openModal(video4)} className='LinkP'>Explore</button>
                  </div>
                </div>
              </div>
              {isModalOpen && (
              <div className="video-modal-overlay" onClick={closeModal}>
                  <div className="video-modal" style={{backgroundColor :"black"}} onClick={(e) => e.stopPropagation()}>
                    <button className="close-button" onClick={closeModal}>X</button>
                      <video src={currentVideo} controls autoPlay style={{ width: "50%", height: "100%", objectFit: "contain" }} />
                </div>
              </div>
      )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Explore;
