import { useEffect, useState } from "react";
import React from 'react';
import './HeroExplore.css'; 
import Photo from   '../Imgs/planet0.jpeg';

export default function HeroExplore() {
    return (
        <section style={{ position: 'relative', height: '800px', top: '0px' }}>
<img
  src={Photo} 
  alt="description"
  style={{
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 'auto',
    height: '100%',
    minWidth: '100%',
    minHeight: '100%',
    objectFit: 'cover',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
    borderRadius: '10px'
  }}
/>

            <div style={{
                display: 'flex',
                flexDirection :"column",
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                textAlign: 'center',
                position: 'relative',
                zIndex: 2,
                color: 'white'
            }}>
                <div>
                    <h1 className="dT">
                        e<span style={{color : "rgb(0,70,87)"}}>x</span>plore the <span style={{color : "rgb(0,70,87)"}}>U</span>niverse in <span style={{color : "rgb(0,70,87)"}}>3D</span>
                    </h1>
                </div>
                <div>
                    <p className="un">Step into a new dimension and discover stunning, interactive 3D planets.</p>
                         <p className="un">Choose your favorite world, explore its textures,and unlock the secrets </p>
                            <p className="un"> of the cosmos—all from your screen.</p>
                </div>
            </div>
        </section>
    );
}
