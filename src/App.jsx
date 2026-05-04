import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Scene from "./components/Scene";
import { useState, useEffect } from "react";
import { Analytics } from '@vercel/analytics/react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function App() {

    const [scrollProgress, setScrollProgress] = useState(0);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = '/imgs/saturn.png';
        img.onload = () => {
            const size = Math.max(img.width, img.height);
            const padding = Math.round(size * 0.15);
            const canvasSize = size + padding * 2;
            const canvas = document.createElement('canvas');
            canvas.width = canvasSize;
            canvas.height = canvasSize;
            const ctx = canvas.getContext('2d');
            // White rounded square background
            const radius = canvasSize * 0.2;
            ctx.beginPath();
            ctx.moveTo(radius, 0);
            ctx.lineTo(canvasSize - radius, 0);
            ctx.quadraticCurveTo(canvasSize, 0, canvasSize, radius);
            ctx.lineTo(canvasSize, canvasSize - radius);
            ctx.quadraticCurveTo(canvasSize, canvasSize, canvasSize - radius, canvasSize);
            ctx.lineTo(radius, canvasSize);
            ctx.quadraticCurveTo(0, canvasSize, 0, canvasSize - radius);
            ctx.lineTo(0, radius);
            ctx.quadraticCurveTo(0, 0, radius, 0);
            ctx.closePath();
            ctx.fillStyle = '#ffffff';
            ctx.fill();
            // Draw purple-tinted saturn on top
            const tintCanvas = document.createElement('canvas');
            tintCanvas.width = img.width;
            tintCanvas.height = img.height;
            const tintCtx = tintCanvas.getContext('2d');
            tintCtx.fillStyle = 'rgb(86, 18, 149)';
            tintCtx.fillRect(0, 0, img.width, img.height);
            tintCtx.globalCompositeOperation = 'destination-in';
            tintCtx.drawImage(img, 0, 0);
            ctx.drawImage(tintCanvas, padding, padding);
            const link = document.querySelector("link[rel~='icon']") || document.createElement('link');
            link.rel = 'icon';
            link.href = canvas.toDataURL('image/png');
            document.head.appendChild(link);
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = "hidden"; // Disable page scrolling

        const handleWheel = (event) => {
            setScrollProgress((prev) =>
                Math.min(Math.max(0, prev + event.deltaY * 0.00125), 3) // Limit between 0 and 3
            );
        };

        let touchStartY = 0;
        const handleTouchStart = (event) => {
            touchStartY = event.touches[0].clientY;
        };
        const handleTouchMove = (event) => {
            const deltaY = touchStartY - event.touches[0].clientY;
            touchStartY = event.touches[0].clientY;
            setScrollProgress((prev) =>
                Math.min(Math.max(0, prev + deltaY * 0.003), 3)
            );
        };

        window.addEventListener("wheel", handleWheel);
        window.addEventListener("touchstart", handleTouchStart, { passive: true });
        window.addEventListener("touchmove", handleTouchMove, { passive: true });
        return () => {
            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchmove", handleTouchMove);
        };
    }, []);

    return (
        <Router>
            <Analytics />
            <Navbar scrollProgress={scrollProgress} setScrollProgress={setScrollProgress} loaded={loaded}/>
            <Scene scrollProgress={scrollProgress} loaded={loaded} setLoaded={setLoaded}/>
            {!loaded && <div className="loading-spinner" />}
            {loaded && scrollProgress < 0.1 && (
                <div className="scroll-indicator">
                    <DotLottieReact
                        src="/animation/Scroll Down.lottie"
                        loop
                        autoplay
                        style={{ width: 44, height: 44 }}
                    />
                </div>
            )}
            {/* <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes> */}
        </Router>
    );
}

export default App;
