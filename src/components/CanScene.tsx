import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture, Environment } from "@react-three/drei";
import { useRef, Suspense } from "react";
import * as THREE from "three";

interface RotatingCanProps {
  textureUrl: string;
  color: string;
}

const CanMesh = ({ textureUrl, color }: RotatingCanProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useTexture(textureUrl);

  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.8;
    }
  });

  const hslMatch = color.match(/([\d.]+)\s+([\d.]+)%\s+([\d.]+)%/);
  const threeColor = hslMatch
    ? new THREE.Color().setHSL(
        parseFloat(hslMatch[1]) / 360,
        parseFloat(hslMatch[2]) / 100,
        parseFloat(hslMatch[3]) / 100
      )
    : new THREE.Color("#7fff00");

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <cylinderGeometry args={[0.85, 0.85, 2.4, 64, 1, true]} />
      <meshStandardMaterial
        map={texture}
        side={THREE.DoubleSide}
        metalness={0.6}
        roughness={0.3}
      />
      {/* Top cap */}
      <mesh position={[0, 1.2, 0]}>
        <cylinderGeometry args={[0.85, 0.85, 0.02, 64]} />
        <meshStandardMaterial color="#888" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Bottom cap */}
      <mesh position={[0, -1.2, 0]}>
        <cylinderGeometry args={[0.85, 0.85, 0.02, 64]} />
        <meshStandardMaterial color="#666" metalness={0.9} roughness={0.2} />
      </mesh>
      {/* Rim ring */}
      <mesh position={[0, 1.18, 0]}>
        <torusGeometry args={[0.82, 0.04, 8, 64]} />
        <meshStandardMaterial color="#aaa" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Glow ring */}
      <pointLight position={[0, 0, 2]} intensity={0.5} color={threeColor} distance={5} />
    </mesh>
  );
};

const CanScene = ({ textureUrl, color }: RotatingCanProps) => {
  return (
    <Canvas
      camera={{ position: [0, 0.3, 4], fov: 35 }}
      style={{ width: "100%", height: "100%" }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 4, 5]} intensity={1} />
      <directionalLight position={[-3, 2, -2]} intensity={0.3} />
      <Suspense fallback={null}>
        <CanMesh textureUrl={textureUrl} color={color} />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
};

export default CanScene;
