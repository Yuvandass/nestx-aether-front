
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Torus, Float, Text3D, Center } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const RotatingBox = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Box ref={meshRef} position={position} args={[1, 1, 1]}>
        <meshStandardMaterial 
          color="#00ffff" 
          emissive="#003333"
          roughness={0.1}
          metalness={0.8}
        />
      </Box>
    </Float>
  );
};

const FloatingSphere = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });

  return (
    <Sphere ref={meshRef} position={position} args={[0.8, 32, 32]}>
      <meshStandardMaterial 
        color="#ff00ff" 
        emissive="#330033"
        roughness={0.1}
        metalness={0.8}
      />
    </Sphere>
  );
};

const FloatingTorus = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.008;
      meshRef.current.rotation.z += 0.008;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={2} floatIntensity={1}>
      <Torus ref={meshRef} position={position} args={[1, 0.3, 16, 100]}>
        <meshStandardMaterial 
          color="#ffff00" 
          emissive="#333300"
          roughness={0.1}
          metalness={0.8}
        />
      </Torus>
    </Float>
  );
};

const Scene3D = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
        <pointLight position={[-10, -10, 5]} intensity={0.5} color="#ff00ff" />
        
        <RotatingBox position={[-4, 2, -2]} />
        <FloatingSphere position={[4, -1, -3]} />
        <FloatingTorus position={[0, 3, -5]} />
        <RotatingBox position={[6, 1, -4]} />
        <FloatingSphere position={[-3, -2, -6]} />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default Scene3D;
