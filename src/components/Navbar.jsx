const Navbar = ({ scrollProgress, setScrollProgress }) => {
    const handleAbout = (targetValue) => {
        const duration = 800;  // milliseconds
        const startValue = scrollProgress;
        const startTime = performance.now();

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            
            const currentValue = startValue + (targetValue - startValue) * easeProgress;
            
            setScrollProgress(currentValue);

            // Continue animation if not finished
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    };

    return (
        <nav className="navbar">
            <a href="#" className="logo" onClick={() => handleAbout(0)}>rudra</a>
            <input type="checkbox" id="sidebox_active"></input>
            <label htmlFor="sidebox_active" className="open_sidebar_button">
                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000000">
                    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                </svg>
            </label>

            <div className="nav_links">
                <label htmlFor="sidebox_active" className="close_sidebar_button">
                    <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000000">
                        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                    </svg>
                </label>

                {/* Works both ways: Increases or decreases scrollProgress smoothly */}
                <a href="#" onClick={() => handleAbout(0.9)}>about.</a>
                <a href="#" onClick={() => handleAbout(1.8)}>projects.</a>
                <a href="#" onClick={() => handleAbout(2.4)}>contact.</a>
            </div>
        </nav>
    );
};

export default Navbar;
