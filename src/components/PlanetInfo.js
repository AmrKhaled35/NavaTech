import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import './PlanetInfo.css';

const PlanetInfo = ({ children }) => {
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
                <h2>Proxima Centauri b</h2>
                <p className='d'>Planet Radius: 1.03 x Earth</p>
                <p className='d'>Planet Type:rocky Planet</p>
                <p className='d'>Discovery Method: Radial Velocity</p>
                <p className='d'>Planet Mass: 1.07 Earths</p>
                <p className='d'>Discovery Date: 2016</p>
                <p className='d'>Orbital Radius: 0.04856 AU</p>
                <p className='d'>Orbital Period: 11.2 days</p>
                <p className='d'>Eccentricity: 0.02</p>
                <p className='d'>Distance from Earth: 4 light Years</p>
            </div>
            <div style={{ background: 'black' }}>
                {children}
            </div>
        </div>
    );
};

export default PlanetInfo;
