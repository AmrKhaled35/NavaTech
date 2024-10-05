// import pages
import Home from './pages/Home';
import Header from './components/Header';
import Explore from './pages/Explore';
import ContactUs from './pages/Contact';
import Forum from './pages/Forum';
import Footer from './components/Footer';
import Login from './pages/Login';
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
// import planets
import Proxima from './pages/Proxima';
import Cancri from './pages/55_Cancri_e';
import Kepler from './pages/Kepler22_b'
import Proxima2 from './pages/Proxima2'
import Mars from './pages/mars'
// import 3d things
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
// import Components
import PlanetInfo from './components/PlanetInfo'
import PlanetInfoC from './components/PlanetInfoC'
import PlanetInfoK from './components/PlanetInfoK';
import PlanetInfoM from './components/PlanetInfoM';
// import Routering
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';


const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  const location = useLocation(); 
  return (
    <div className="App" style={{
      backgroundImage: `url("https://www.elitedangerous.com/_nuxt/img/space.5c802e3.jpg")`,
      backgroundSize: "cover",backgroundPosition: 'center',width: '100%',height: '',margin: 0,padding: 0,overflow: "hidden"
    }}>
      {(location.pathname !== '/Proxima' &&
      location.pathname !== '/Cancri' &&
      location.pathname !== '/Kepler'  &&  
      location.pathname !== '/Forum'  &&  
      location.pathname !== '/Explore' &&  location.pathname !== '/Explore/Proxima2' &&  location.pathname !== '/Explore/Kepler'
      && location.pathname !== '/Explore/Mars') && <Header />}
      <Routes>
        {/* Routes of Normal Pages */}
        <Route path='/' element={<Home />} />
        <Route path='/Explore' element={<Explore />} />
        <Route path='/Forum' element={<Forum />} />
        <Route path='/Contact' element={<ContactUs />} />
        <Route path = '/Login' element ={<Login></Login>}/>
        <Route path ='/SignUp' element = {<SignUp></SignUp>}/>
        <Route path = '/profile' element = {<Profile></Profile>} />
        {/* Routes of 3D Pages */}
        <Route path='/Proxima' element={
          <PlanetInfo>
          <CanvasContainer>
            <Canvas>
              <Suspense fallback={null}>
                <OrbitControls />
                <Proxima />
              </Suspense>
            </Canvas>
          </CanvasContainer>
          </PlanetInfo>
          
        } />
        <Route path='/Explore/Mars' element={
          <PlanetInfoM>
          <CanvasContainer>
            <Canvas>
              <Suspense fallback={null}>
                <OrbitControls />
                <Mars />
              </Suspense>
            </Canvas>
          </CanvasContainer>
          </PlanetInfoM>
          
        } />
          <Route path='/Explore/Proxima2' element={
          <PlanetInfo>
          <CanvasContainer>
            <Canvas>
              <Suspense fallback={null}>
                <OrbitControls />
                <Proxima2 />
              </Suspense>
            </Canvas>
          </CanvasContainer>
          </PlanetInfo>
          
        } />
        <Route path='/Cancri' element={
          <PlanetInfoC>
          <CanvasContainer>
            <Canvas>
              <Suspense fallback={null}>
                <OrbitControls />
                <Cancri />
              </Suspense>
            </Canvas>
          </CanvasContainer>
          </PlanetInfoC>
          
        } />
        <Route path='/Kepler' element={
          <PlanetInfoK>
          <CanvasContainer>
            <Canvas>
              <Suspense fallback={null}>
                <OrbitControls />
                <Kepler />
              </Suspense>
            </Canvas>
          </CanvasContainer>
          </PlanetInfoK>
          
        } />
          <Route path='/Explore/Kepler' element={
          <PlanetInfoK>
          <CanvasContainer>
            <Canvas>
              <Suspense fallback={null}>
                <OrbitControls />
                <Kepler />
              </Suspense>
            </Canvas>
          </CanvasContainer>
          </PlanetInfoK>
          
        } />
      </Routes>

      {(location.pathname !== '/Proxima' &&
        location.pathname !== '/Cancri' && 
        location.pathname !== '/Kepler'  && 
        location.pathname !== '/Forum'  &&  
        location.pathname !== '/Explore' &&  location.pathname !== '/Explore/Proxima2' && 
        location.pathname !== '/Explore/Kepler' && location.pathname !== '/Explore/Mars') && <Footer />}
    </div>
  );
}

function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default WrappedApp;
