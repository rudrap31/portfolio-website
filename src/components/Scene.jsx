import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Model = () => {
    const model = useLoader(GLTFLoader, "/space-3dmodel/scene.gltf");
    const modelRef = useRef();

    useEffect(() => {
        if (modelRef.current) {
            modelRef.current.rotation.set(0, -1.1, 0);
        }
    }, [model]);

    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.y += 0.0005; 
        }
    });

    return <primitive object={model.scene} ref={modelRef} />;
}

const Scene = () => {
    

    
    return (
        <div className="container">
            <Canvas camera={{ position: [-0.4, 0.3, 3.2], rotation: [0, 0, 0],fov: 75 }}>
                <ambientLight intensity={7} />
                <Model />
            </Canvas>
        </div>
    );
};

export default Scene;
