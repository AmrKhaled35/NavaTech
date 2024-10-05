import React from "react";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import MarsMap from '../textures/8k_mars.jpg' ;
import './Proxima.css'
function Mars() {
  const MarsRef =useRef();
  
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    MarsRef.current.rotation.y = elapsedTime / 6; 
  });

  const colorMap = new THREE.TextureLoader().load(MarsMap);
  return (
    <>
    <ambientLight intensity={1.5} />
    <directionalLight color="#ffffff" intensity={1.5} position={[5, 3, 5]} />
    <mesh ref={MarsRef} position={[0, 0, 0]}>
      <icosahedronGeometry args={[1.7, 12]} />
      <meshPhongMaterial
        map={colorMap}
      />
    </mesh>
    <Stars radius={300} depth={60} count={20000} factor={7} fade={true} />
  </>
  )
}

export default Mars