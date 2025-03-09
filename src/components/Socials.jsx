import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";


const Socials = () => {
    return (
        <div className="social-icons">
            <a href="https://www.instagram.com/yourprofile">
                <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" aria-label="LinkedIn">
                <FaLinkedin />
            </a>
            <a href="https://github.com/yourprofile" target="_blank" aria-label="GitHub">
                <FaGithub />
            </a>
        </div>
    );
};

export default Socials;
