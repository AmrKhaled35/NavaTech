import React from "react";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import KeplerMap from '../textures/Kepler.png' ;
import './Proxima.css'
function Kepler() {
  const KeplerRef =useRef();
  
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    KeplerRef.current.rotation.y = elapsedTime / 6; 
  });

  const colorMap = new THREE.TextureLoader().load(KeplerMap);
  return (
    <>
    <ambientLight intensity={1.5} />
    <directionalLight color="#ffffff" intensity={1.5} position={[5, 3, 5]} />
    <mesh ref={KeplerRef} position={[0, 0, 0]}>
      <icosahedronGeometry args={[1.7, 12]} />
      <meshPhongMaterial
        map={colorMap}
      />
    </mesh>
    <Stars radius={300} depth={60} count={20000} factor={7} fade={true} />
  </>
  )
}

export default Kepler