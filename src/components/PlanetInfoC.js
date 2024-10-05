import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import './PlanetInfoC.css';

const PlanetInfoC = ({ children }) => {
    const [showInfo, setShowInfo] = useState(false);

    const toggleInfoBox = () => {
        setShowInfo(!showInfo);
    };
    

    return (
        <div className="planet-info-container">
            <button className="info-button" onClick={toggleInfoBox}>
                <FontAwesomeIcon icon={faInfoCircle} />
            </button>
            <div className={`info-box ${showInfo ? 'show' : ''}`}>
                <h2>55 Cancri e</h2>
                <p className='C'>Planet Radius: 1.875 x Earth</p>
                <p className='C'>Planet Type:Super Earth</p>
                <p className='C'>Discovery Method: Radial Velocity</p>
                <p className='C'>Planet Mass: 7.99 Earths</p>
                <p className='C'>Discovery Date: 2004</p>
                <p className='C'>Orbital Radius: 0.01544 AU</p>
                <p className='C'>Orbital Period: 0.7 days</p>
                <p className='C'>Eccentricity: 0.05</p>
            </div>
            <div style={{ background: 'black' }}>
                {children}
            </div>
        </div>
    );
};

export default PlanetInfoC;
