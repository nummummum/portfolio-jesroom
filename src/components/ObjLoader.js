import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function ObjLoader({ filename }) {
  const ref = useRef();
  const furnitureSrc = "/gltfs/objects/" + filename + ".gltf";
  const furniture = useLoader(GLTFLoader, furnitureSrc);
  useFrame((state, data) => (ref.current.rotation.y += 0.001));
  return (
    <>
      <primitive ref={ref} object={furniture.scene} position={[0, 0, 0]} />
    </>
  );
}
