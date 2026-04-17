import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import Landing from "./Landing";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const Model = ({ scrollProgress, onLoad }) => {
    const model = useLoader(GLTFLoader, "/space-3dmodel/scene.gltf");
    const modelRef = useRef();
    const dragRef = useRef({ isDragging: false, lastX: 0, velocity: 0 });

    useEffect(() => {
        if (modelRef.current) {
            modelRef.current.rotation.set(0, -1.1, 0);
            onLoad?.();
        }
    }, [model]);

    useEffect(() => {
        const onMouseDown = (e) => {
            dragRef.current.isDragging = true;
            dragRef.current.lastX = e.clientX;
        };
        const onMouseMove = (e) => {
            if (!dragRef.current.isDragging || !modelRef.current) return;
            const delta = e.clientX - dragRef.current.lastX;
            const rotation = delta * 0.0025;
            modelRef.current.rotation.y += rotation;
            dragRef.current.velocity = rotation;
            dragRef.current.lastX = e.clientX;
        };
        const onMouseUp = () => {
            dragRef.current.isDragging = false;
        };

        window.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
        return () => {
            window.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
        };
    }, []);

    useFrame(() => {
        if (!modelRef.current || dragRef.current.isDragging) return;

        let normalizedRotation = ((modelRef.current.rotation.y + Math.PI) % (2 * Math.PI)) - Math.PI;

        if (scrollProgress === 0) {
            // auto-rotate + momentum decay
            modelRef.current.rotation.y += 0.0025 + dragRef.current.velocity;
        } else {
            // momentum + lerp to target
            modelRef.current.rotation.y += dragRef.current.velocity;
            let targetRotationY = Math.min(normalizedRotation + scrollProgress * (2.9 - normalizedRotation), 2.9);
            modelRef.current.rotation.y += (targetRotationY - normalizedRotation) * 0.1;
        }

        dragRef.current.velocity *= 0.92; // friction — lower = stops faster
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

const Scene = ({ scrollProgress, loaded, setLoaded }) => {

    return (
        <>
            <Landing scrollProgress={scrollProgress} loaded={loaded} />
            <About scrollProgress={scrollProgress} />
            <Projects scrollProgress={scrollProgress} />
            <Contact scrollProgress={scrollProgress} />
            <div className="container">
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'url(imgs/portfolio-website-screenshot2.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(28px)',
                    transform: 'scale(1.05)',
                    opacity: loaded ? 0 : 1,
                    transition: 'opacity 1.2s ease',
                    pointerEvents: 'none',
                    zIndex: 1,
                }} />
                <Canvas camera={{ position: [-0.4, 0.3, 3.2], fov: 75 }}>
                    <CameraController scrollProgress={scrollProgress} />
                    <ambientLight intensity={7} />
                    <Model scrollProgress={scrollProgress} onLoad={() => setLoaded(true)} />

                </Canvas>
            </div>
        </>)
};

export default Scene;
