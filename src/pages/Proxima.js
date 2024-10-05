import React from "react";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import ProximaMap from '../textures/Proxima.jpg.png' ;
import './Proxima.css'
function Proxima() {
  const ProximaRef =useRef();
  
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    ProximaRef.current.rotation.y = elapsedTime / 6; 
  });

  const colorMap = new THREE.TextureLoader().load(ProximaMap);
  return (
    <>
    <ambientLight intensity={1.5} />
    <directionalLight color="#ffffff" intensity={1.5} position={[5, 3, 5]} />
    <mesh ref={ProximaRef} position={[0, 0, 0]}>
      <icosahedronGeometry args={[1.7, 12]} />
      <meshPhongMaterial
        map={colorMap}
      />
    </mesh>
    <Stars radius={300} depth={60} count={20000} factor={7} fade={true} />
  </>
  )
}

export default Proxima