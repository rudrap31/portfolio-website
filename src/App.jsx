import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Scene from "./components/Scene";
import { useState, useEffect } from "react";

function App() {

    const [scrollProgress, setScrollProgress] = useState(0);

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
            <Navbar scrollProgress={scrollProgress} setScrollProgress={setScrollProgress}/>
            <Scene scrollProgress={scrollProgress}/>
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
