import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Avatar from "./Avatar";

const Main = () => {
  return (
    <>
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
        <color attach="background" args={["#ffffff"]} />
        <OrbitControls />
        <group position-y={-1}>
            <Avatar />
        </group>
        <ambientLight intensity={1} />
      </Canvas>
    </>
  );
};

export default Main;
