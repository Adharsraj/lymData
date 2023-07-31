// import React from "react";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

export default function AnimatedSphere() {
    return (
            <Sphere visible args={[1, 100, 200]} scale={[2.5, 2.5, 2.5]}>
                <MeshDistortMaterial color=" #bcbcbc" attach="material" distort={0.3} speed={1.5} roughness={0} />
            </Sphere>
    )
}