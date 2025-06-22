
import { Canvas } from '@react-three/fiber';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const TechCube = ({ position, color }: { position: [number, number, number], color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.8, 0.8, 0.8]} />
      <meshStandardMaterial 
        color={color} 
        emissive={color}
        emissiveIntensity={0.2}
        roughness={0.1}
        metalness={0.9}
      />
    </mesh>
  );
};

const TechSection = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-slide-in-left">
            <h2 className="text-5xl md:text-6xl font-orbitron font-bold">
              <span className="gradient-text">Quantum-Powered</span>
              <br />
              <span className="text-white">Technology</span>
            </h2>
            
            <p className="text-xl text-gray-400 leading-relaxed">
              Our AI agents leverage quantum computing principles and advanced neural architectures 
              to deliver unprecedented performance and intelligence.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 rounded-full bg-primary glow"></div>
                <span className="text-lg text-gray-300">Quantum Neural Networks</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 rounded-full bg-secondary glow"></div>
                <span className="text-lg text-gray-300">Adaptive Learning Algorithms</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 rounded-full bg-accent glow"></div>
                <span className="text-lg text-gray-300">Real-time Processing</span>
              </div>
            </div>
          </div>
          
          <div className="relative h-96 animate-slide-in-right">
            <Canvas 
              camera={{ position: [0, 0, 8], fov: 50 }}
              dpr={[1, 2]}
            >
              <ambientLight intensity={0.4} />
              <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
              <pointLight position={[-10, -10, 5]} intensity={0.5} color="#ff00ff" />
              
              <TechCube position={[-2, 1, 0]} color="#00ffff" />
              <TechCube position={[2, -1, 0]} color="#ff00ff" />
              <TechCube position={[0, 0, -2]} color="#ffff00" />
              <TechCube position={[-1, -1.5, 1]} color="#00ff00" />
              <TechCube position={[1.5, 1.5, -1]} color="#ff6600" />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSection;
