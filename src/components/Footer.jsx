import { useState } from "react";
import { faGithub, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from "../components/contents/Footer";

const Footer = () => {
    const [hover, setHover] = useState({});

    const toggleHover = (key, value) => setHover((prev) => ({ ...prev, [key]: value }));

    return (
        <div className="mb-10 flex justify-end text-quaternary">
            <span className="flex items-center space-x-2 mr-5">
                {data.text}
            </span>
            {[faGithub, faReact].map((icon, i) => (
                <a key={i} href={data.link[i]} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon
                        icon={icon}
                        className={`text-lg duration-500 mr-2 ${hover[`exp${i}`] ? "text-primary scale-125" : ""
                            }`}
                        onMouseEnter={() => toggleHover(`exp${i}`, true)}
                        onMouseLeave={() => toggleHover(`exp${i}`, false)}
                    />
                </a>
            ))}
            <a href={data.link[2]} target="_blank" rel="noopener noreferrer">
                <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                    alt="TailwindCSS"
                    className={`w-5 h-5 duration-500 ${hover.exp2 ? "scale-125" : ""
                        }`}
                    onMouseEnter={() => toggleHover("exp2", true)}
                    onMouseLeave={() => toggleHover("exp2", false)}
                />
            </a>
        </div>
    );
};

export default Footer;
