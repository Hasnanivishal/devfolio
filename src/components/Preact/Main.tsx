import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Avatar from "./Avatar";
import Office from "./Office";

const Main = () => {
  return (
    <>
     <Canvas shadows  camera={{ position: [-1.9, 2.2, -4.2], fov: 33 }}>
        <color attach="background" args={["#000000"]} />
        {/* <OrbitControls target={[0, 0, 0]}/> */}
        <group >
          <Office />
          <group
            name="CharacterSpot"
            // red, blue, green
            position={[-0.204, 0.1, -0.79]}
            rotation={[-3.004, 0.256, -3.103]}
          >
            <Avatar />
          </group>
        </group>
        <ambientLight intensity={1} />
      </Canvas>
    </>
  );
};

export default Main;
