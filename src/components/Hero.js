import { useEffect, useState } from "react";
import React from 'react';
import './Hero.css'; 
import Vid from '../Videos/12275372-hd_1920_1028_60fps.mp4';

export default function Hero() {
    return (
        <section style={{ position: 'relative', height: '800px', top: '0px' }}>
            <video 
                autoPlay 
                muted 
                loop 
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
                }}>
                <source src={Vid} type="video/mp4" />
            </video>

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
                    <h1 className="responsive-title">
                        Pla<span style={{color :'rgb(0, 70, 87)'}}>n</span>etary Dete<span style={{color :'rgb(0, 70, 87)'}}>c</span>tive
                    </h1>
                </div>
                <div>
                    <p className="uni">Universe Explorer</p>
                </div>
            </div>
        </section>
    );
}

