import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const Model = ({ scrollProgress }) => {
    const model = useLoader(GLTFLoader, "/space-3dmodel/scene.gltf");
    const modelRef = useRef();

    useEffect(() => {
        if (modelRef.current) {
            modelRef.current.rotation.set(0, -1.1, 0);
        }
    }, [model]);

    useFrame(() => {
        if (modelRef.current) {
            let normalizedRotation = ((modelRef.current.rotation.y + Math.PI) % (2 * Math.PI)) - Math.PI;

            if (scrollProgress === 0) {
                // model continiusly rotates when not scrolling
                modelRef.current.rotation.y += 0.0025;
                console.log(modelRef.current.rotation.y + " / " + normalizedRotation)
            } else {
                // rotation stops at y = 2.9
                let startingRotation = modelRef.current.rotation.y
                let targetRotationY = Math.min(normalizedRotation + scrollProgress * (2.9 - normalizedRotation), 2.9);
                modelRef.current.rotation.y += (targetRotationY - normalizedRotation) * 0.1;
                console.log(modelRef.current.rotation.y + " / " + normalizedRotation)
            }
        }
    });

    return <primitive object={model.scene} ref={modelRef} />;
};

const CameraController = ({ scrollProgress }) => {
    const { camera } = useThree();

    useFrame(() => {
        // Target camera position: [-0.4, 0.7, -0.8]
        // newPosition = startPosition * (1 - scrollValue) + endPosition * scrollValue;

       let targetY = 0.3 * (1 - scrollProgress) + 0.7 * scrollProgress; 
       let targetZ = 3.2 * (1 - scrollProgress) + -0.8 * scrollProgress;

        // moves the camera towards the target position
        camera.position.set(-0.4, targetY, targetZ)
        // tils slightly up
        camera.rotation.x = 0 + scrollProgress * 0.1;
    });

    return null;
};

// for debugging
// const AxesHelper = () => {
//     const helperRef = useRef();

//     useEffect(() => {
//         if (helperRef.current) {
//             helperRef.current.position.set(0, 0, 0); // Set the position
//         }
//     }, []);

//     return <primitive object={new THREE.AxesHelper(5)} ref={helperRef} />;
// };

const Scene = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        document.body.style.overflow = "hidden"; // Disable page scrolling

        const handleWheel = (event) => {
            setScrollProgress((prev) =>
                Math.min(Math.max(0, prev + event.deltaY * 0.00125), 1) // Limit between 0 and 1
            );
        };

        window.addEventListener("wheel", handleWheel);
        return () => window.removeEventListener("wheel", handleWheel);
    }, []);

    return (
        <div className="container">
            <Canvas camera={{ position: [-0.4, 0.3, 3.2], fov: 75 }}>
                <CameraController scrollProgress={scrollProgress} />
                <ambientLight intensity={7} />
                <Model scrollProgress={scrollProgress} />
                {/* <AxesHelper/> */}
            </Canvas>
        </div>
    );
};

export default Scene;
