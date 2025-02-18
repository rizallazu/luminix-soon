"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { Mesh } from "three";

export default function index() {
  return (
    <div
      className=" w-screen min-h-screen "
    >
      <Canvas className="bg-transparent" resize={{scroll: false}} data-aos="zoom-in">
        <ambientLight intensity={3} />
        <directionalLight position={[3, 3, 1]} />
        <Cube />
      </Canvas>
    </div>
  );
}

function Cube() {
  const mesh = useRef<Mesh>(null!);

  useFrame((state, delta) => {
    mesh.current.rotation.x += delta * 0.5;
    mesh.current.rotation.y += delta * 0.5;
    mesh.current.rotation.z += delta * 0.5;
  });

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[3.5, 3.5, 3.5]} />
      <meshStandardMaterial color={"#5a5a58"} />
    </mesh>
  );
}
