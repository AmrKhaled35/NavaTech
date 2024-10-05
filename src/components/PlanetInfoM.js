import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import './PlanetInfoM.css';

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
                <h2>Mars</h2>
                <p className='M'>Planet Radius: 0.532 x Earth</p>
                <p className='M'>Planet Type: Terrestrial</p>
                <p className='M'>Discovery Method: Known since ancient times</p>
                <p className='M'>Planet Mass: 0.107 Earths</p>
                <p className='M'>Orbital Radius: 1.524 AU</p>
                <p className='M'>Orbital Period: 687 days</p>
                <p className='M'>Eccentricity: 0.093</p>
            </div>
            <div style={{ background: 'black' }}>
                {children}
            </div>
        </div>
    );
};

export default PlanetInfoC;
