import { Canvas, useFrame, useLoader } from "@react-three/fiber";
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
        const onMouseMove = (e) => {
            if (!modelRef.current) return;
            const delta = e.clientX - dragRef.current.lastX;
            const rotation = delta * 0.0025;
            modelRef.current.rotation.y += rotation;
            dragRef.current.velocity = rotation;
            dragRef.current.lastX = e.clientX;
        };
        const onMouseUp = () => {
            dragRef.current.isDragging = false;
            document.body.style.cursor = '';
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
        };
        const onMouseDown = (e) => {
            const tag = e.target.tagName.toLowerCase();
            if (tag === 'a' || tag === 'button' || tag === 'input' || tag === 'textarea' || tag === 'label' || e.target.closest('nav, .about, .projects-section, .contact')) return;
            dragRef.current.isDragging = true;
            dragRef.current.lastX = e.clientX;
            document.body.style.cursor = 'grabbing';
            window.addEventListener('mousemove', onMouseMove);
            window.addEventListener('mouseup', onMouseUp);
        };

        window.addEventListener('mousedown', onMouseDown);
        return () => {
            window.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
        };
    }, []);

    useFrame((_, delta) => {
        if (!modelRef.current || dragRef.current.isDragging) return;

        const dt = Math.min(delta, 0.1);
        let normalizedRotation = ((modelRef.current.rotation.y + Math.PI) % (2 * Math.PI)) - Math.PI;

        if (scrollProgress < 0.01) {
            // auto-rotate + momentum decay (0.15 rad/s ≈ 0.0025/frame at 60fps)
            modelRef.current.rotation.y += 0.25 * dt + dragRef.current.velocity;
        } else {
            // momentum + lerp to target
            modelRef.current.rotation.y += dragRef.current.velocity;
            let targetRotationY = Math.min(normalizedRotation + scrollProgress * (2.9 - normalizedRotation), 2.9);
            modelRef.current.rotation.y += (targetRotationY - normalizedRotation) * 0.1;
        }

        dragRef.current.velocity *= Math.pow(0.006, dt); // time-corrected friction
    });

    return <primitive object={model.scene} ref={modelRef} />;
};

const CameraController = ({ scrollProgress }) => {
    useFrame(({ camera }) => {
       let targetY = 0.3 * (1 - scrollProgress) + 0.7 * scrollProgress;
       let targetZ = 3.2 * (1 - scrollProgress) + -0.8 * scrollProgress;
        camera.position.set(-0.4, targetY, targetZ)
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

const Scene = ({ scrollProgress, loaded, setLoaded, onProjectsContainerRef }) => {

    return (
        <>
            <Landing scrollProgress={scrollProgress} loaded={loaded} />
            <About scrollProgress={scrollProgress} />
            <Projects scrollProgress={scrollProgress} onContainerRef={onProjectsContainerRef} />
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
                <Canvas camera={{ position: [-0.4, 0.3, 3.2], fov: 75 }} style={{ pointerEvents: 'none' }} events={() => ({ enabled: false, compute: () => {}, connect: () => {}, disconnect: () => {} })}>
                    <CameraController scrollProgress={scrollProgress} />
                    <ambientLight intensity={7} />
                    <Model scrollProgress={scrollProgress} onLoad={() => setLoaded(true)} />

                </Canvas>
            </div>
        </>)
};

export default Scene;
