import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    console.log(isOpen)

    return (
        <nav class="navbar">
            <h3 id="logo">rudra</h3>
            <input type="checkbox" id="sidebox_active"></input>
            <label for="sidebox_active" class="open_sidebar_button"> 
                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
            </label>

            <div class="nav_links">
                <label for="sidebox_active" class="close_sidebar_button">
                    <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                </label>
                
                <a href="#">about.</a>
                <a href="#">projects.</a>
                <a href="#">contact.</a>
            </div>
        </nav>
    );
};

export default Navbar;
