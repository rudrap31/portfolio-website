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
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.fillStyle = 'rgb(86, 18, 149)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.globalCompositeOperation = 'destination-in';
            ctx.drawImage(img, 0, 0);
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

        window.addEventListener("wheel", handleWheel);
        return () => window.removeEventListener("wheel", handleWheel);
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
