'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {  Float } from '@react-three/drei';
import * as THREE from 'three';
import { useScroll } from '@/hooks/use-scroll';

function Model({ scrollY }: { scrollY: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Adjust rotation based on scroll position
    const rotation = scrollY * 0.002;
    meshRef.current.rotation.y = rotation;
    meshRef.current.rotation.x = rotation * 0.5;
    
    // Change scale based on scroll position
    const scale = 1 + scrollY * 0.0005;
    meshRef.current.scale.set(scale, scale, scale);
  });

  return (
    <Float 
      speed={2} 
      rotationIntensity={0.5} 
      floatIntensity={0.5}
    >
      <mesh ref={meshRef}>
        <octahedronGeometry args={[2,0]}  />
        <meshStandardMaterial 
          color="#8ec5ff" 
          metalness={0.001} 
          roughness={100} 
          wireframe={true}
          

        />
      </mesh>
    </Float>
  );
}

export default function Element3D() {
  const { scrollY } = useScroll();

  return (
    <div className="canvas-container --background-rgb">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <Model scrollY={scrollY} />
      </Canvas>
    </div>
  );
}