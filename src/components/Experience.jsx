import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { data1 } from "./contents/Experience";

const Experience = () => {
    const [isMouseEnter, setIsMouseEnter] = useState({});
    const experienceData = [data1];

    return (
        <div className="flex flex-col gap-y-10 mt-2" id="experience-section">
            <div className="dark:text-secondary text-xl relative group">
                Experience
                <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-20"></div>
            </div>
            
            {experienceData.map((data, index) => (
                <div
                    key={index}
                    className={`grid grid-cols-[25%_75%] transform transition-all duration-500 ease-in-out
                        ${isMouseEnter[`exp${index}`] 
                            ? "bg-gray-400 scale-[1.02] translate-x-2" 
                            : "hover:shadow-lg"
                        } 
                        px-2 py-6 rounded-md bg-opacity-20 hover:bg-opacity-25`}
                    onMouseEnter={() => setIsMouseEnter({ [`exp${index}`]: true })}
                    onMouseLeave={() => setIsMouseEnter({ [`exp${index}`]: false })}
                >
                    <div className="space-y-4">
                        <div>
                            <span className={`relative inline-block ${
                                isMouseEnter[`exp${index}`] 
                                    ? "text-gray-400" 
                                    : "text-quaternary"
                            } transition-colors duration-300`}>
                                {data.date}
                                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300
                                    ${isMouseEnter[`exp${index}`] ? "scale-x-100" : "scale-x-0"}`}>
                                </span>
                            </span>
                        </div>
                        <div className="relative inline-block w-4/6 lg:m-5 mt-4 group">
                            <img
                                src={data.image}
                                className={`w-full rounded-full border-2 border-primary transition-transform duration-500
                                    ${isMouseEnter[`exp${index}`] ? "rotate-12" : ""}`}
                                alt={data.title}
                            />
                            <div className={`absolute inset-0 rounded-full border-2 border-primary 
                                ${isMouseEnter[`exp${index}`] ? "animate-ping" : ""}`}
                            />
                            <div className={`absolute inset-0 rounded-full bg-primary opacity-0 transition-opacity duration-300
                                ${isMouseEnter[`exp${index}`] ? "opacity-10" : ""}`}
                            />
                        </div>
                    </div>

                    <div className="grid gap-y-4">
                        <div className={`${
                            isMouseEnter[`exp${index}`] ? "text-primary" : "dark:text-secondary"
                        } text-xl transform transition-all duration-300`}>
                            <a href={data.link1} 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className="group inline-flex items-center hover:underline decoration-primary"
                            >
                                {data.title}
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    className={`text-sm -rotate-45 ml-1 transition-all duration-500 ease-out
                                        ${isMouseEnter[`exp${index}`] 
                                            ? "transform translate-x-1 -translate-y-1 text-primary" 
                                            : ""}`}
                                />
                            </a>
                        </div>

                        <div className="flex gap-4 text-xl">
                            <a href={data.link1} 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className="transform transition-all duration-300 hover:scale-125"
                            >
                                <FontAwesomeIcon 
                                    icon={faLink} 
                                    className={`text-quaternary transition-colors duration-300 hover:text-primary
                                        ${isMouseEnter[`exp${index}`] ? "animate-bounce" : ""}`}
                                />
                            </a>
                            <a href={data.link2} 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className="transform transition-all duration-300 hover:scale-125"
                            >
                                <FontAwesomeIcon 
                                    icon={faFacebook} 
                                    className={`text-quaternary transition-colors duration-300 hover:text-primary
                                        ${isMouseEnter[`exp${index}`] ? "animate-bounce" : ""}`}
                                />
                            </a>
                        </div>

                        <div className={`text-quaternary text-xl font-md transition-all duration-300
                            ${isMouseEnter[`exp${index}`] ? "translate-x-2" : ""}`}>
                            {data.description}
                        </div>

                        <div className="flex">
                            <div className={`bg-gray-700 bg-opacity-20 dark:bg-opacity-50 px-2 py-1 rounded-md
                                ${isMouseEnter[`exp${index}`] 
                                    ? "dark:text-primary text-white transform scale-110" 
                                    : "text-quaternary"
                                } cursor-default transition-all duration-300 hover:shadow-md`}>
                                {data.status}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Experience;
