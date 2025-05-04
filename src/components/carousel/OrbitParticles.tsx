
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { PointMaterial, Points } from '@react-three/drei';

interface OrbitParticlesProps {
  color: string;
  count: number;
  active: boolean;
}

export const OrbitParticles = ({ color, count, active }: OrbitParticlesProps) => {
  const pointsRef = useRef<THREE.Points>(null);
  
  // Generate particle positions
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const radius = 3; // Orbit radius
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI * 2;
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      
      temp.push(x, y, z);
    }
    return new Float32Array(temp);
  }, [count]);
  
  useFrame(({ clock }) => {
    if (pointsRef.current && active) {
      pointsRef.current.rotation.x = clock.getElapsedTime() * 0.1;
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.15;
    }
  });
  
  return (
    <>
      <ambientLight intensity={0.5} />
      <Points limit={count} ref={pointsRef}>
        <PointMaterial 
          transparent
          color={color}
          size={0.15}
          sizeAttenuation={true}
          depthWrite={false}
        />
        <bufferAttribute 
          attach="geometry.attributes.position"
          count={count}
          array={particles}
          itemSize={3}
        />
      </Points>
    </>
  );
};
