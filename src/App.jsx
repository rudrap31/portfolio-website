import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Scene from "./components/Scene";
// import About from "./pages/About";
// import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";

function App() {
    return (
        <Router>
            <Navbar />
            <Scene />
            <Routes>
                <Route path="/" element={<Landing />} />
                {/* <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} /> */}
            </Routes>
            <div className="bob">
                soks
            </div>
        </Router>
    );
}

export default App;
