import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleCloud() {
  const ref = useRef<THREE.Points>(null);
  
  // Generate particles with proper positions using useMemo
  const particles = useMemo(() => {
    const positions = new Float32Array(5000 * 3);
    const radius = 1.5;
    
    for (let i = 0; i < 5000; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360);
      const phi = THREE.MathUtils.randFloatSpread(360);
      
      positions[i * 3] = radius * Math.sin(theta) * Math.cos(phi);
      positions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
      positions[i * 3 + 2] = radius * Math.cos(theta);
    }
    
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#3b82f6"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function ErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <React.Suspense fallback={<div className="fixed inset-0 -z-10 bg-gray-900" />}>
      {children}
    </React.Suspense>
  );
}

export default function ParticleField() {
  return (
    <div className="fixed inset-0 -z-10">
      <ErrorBoundary>
        <Canvas camera={{ position: [0, 0, 1] }}>
          <ParticleCloud />
        </Canvas>
      </ErrorBoundary>
    </div>
  );
}