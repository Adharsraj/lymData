// import React from "react";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Text } from "@react-three/drei";

export default function AnimatedSphere() {
    return (
        <group>
            <Sphere visible args={[1, 100, 200]} scale={[3, 3, 3]}>
                <MeshDistortMaterial color="#8352FD" attach="material" distort={0.3} speed={1.5} roughness={0} />
            </Sphere>
            <Text fontSize={0.3} position={[-1, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
                Text Inside Sphere
            </Text>
        </group>
    )
}