import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function RoomLoader({ filename }) {
  const roomSrc = "/gltfs/rooms/" + filename + ".gltf";
  const ref = useRef();
  const room = useLoader(GLTFLoader, roomSrc);
  useFrame((state, data) => (ref.current.rotation.y += 0.001));
  return (
    <>
      <primitive
        ref={ref}
        object={room.scene}
        position={[0, -2, 0]}
        scale={[0.8, 0.8, 0.8]}
      />
    </>
  );
}
