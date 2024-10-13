import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { data1, data2, data3, data4 } from "./contents/Projects";

const Projects = () => {
    const [isMouseEnter, setIsMouseEnter] = useState({});
    const projectData = [data4, data3, data2, data1];
    const handleMouse = (index, state) => setIsMouseEnter({ [`exp${index}`]: state });

    return (
        <div className="flex flex-col gap-y-10 mt-5">
            <div className="dark:text-secondary text-xl">Projects</div>
            {projectData.map((data, index) => {
                const isActive = isMouseEnter[`exp${index}`];
                const textColor = isActive ? "dark:text-primary text-primary " : "dark:text-secondary";
                const bgClass = isActive ? "bg-gray-400 bg-opacity-20" : "";

                return (
                    <div
                        key={index}
                        className={`grid grid-cols-[25%_75%] ${bgClass} px-2 py-6 rounded-md duration-500`}
                        onMouseEnter={() => handleMouse(index, true)}
                        onMouseLeave={() => handleMouse(index, false)}
                    >
                        <div>
                            <span className={isActive ? "text-gray-400" : "text-quaternary"}>{data.date}</span>
                            <img src={data.Image} className="w-4/6 lg:m-5 mt-4 outline-none rounded-md outline-gray-800" />
                        </div>
                        <div className="grid gap-y-4">
                            <div className={`${textColor} text-xl`}>
                                <a href={data.link} target="__blank">
                                    {data.title}
                                    <FontAwesomeIcon
                                        icon={faArrowRight}
                                        className={`text-sm -rotate-45 ml-1 duration-500 ease-out ${isActive ? "transition-transform translate-x-1 -translate-y-1" : ""}`}
                                    />
                                </a>
                            </div>
                            <div className="text-quaternary text-xl">{data.description}</div>
                            <div className="lg:flex text-sm gap-2 grid grid-cols-2">
                                {[data.using1, data.using2, data.using3, data.using4, data.using5, data.using6].map(
                                    (tech, i) =>
                                        tech && (
                                            <div key={i} className={`dark:bg-gray-700 dark:bg-opacity-50 bg-gray-700 bg-opacity-20 px-2 py-1 rounded-md ${isActive ? "text-primary" : "text-quaternary"}`}>
                                                {tech}
                                            </div>
                                        )
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Projects;
