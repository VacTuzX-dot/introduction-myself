import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { data1, data2, data3, data4, data5, data6 , data7 , data8 } from "./contents/Projects";

const Projects = () => {
    const [isHovered, setIsHovered] = useState({});
    const projectData = [data8, data7 ,data6, data5, data4, data3, data2, data1];

    const handleHover = (index, state) => 
        setIsHovered(prev => ({ ...prev, [index]: state }));

    return (
        <div className="flex flex-col gap-y-10 mt-5">
            <div className="dark:text-secondary text-xl">Projects</div>
            {projectData.map((data, index) => {
                const isActive = isHovered[index];
                const textColor = isActive ? "dark:text-primary text-primary" : "dark:text-secondary";
                const bgClass = isActive ? "bg-gray-400 bg-opacity-20" : "";

                return (
                    <div
                        key={index}
                        className={`grid grid-cols-[25%_75%] ${bgClass} px-2 py-6 rounded-md duration-500`}
                        onMouseEnter={() => handleHover(index, true)}
                        onMouseLeave={() => handleHover(index, false)}
                    >
                        <div>
                            <span className={isActive ? "text-gray-400" : "text-quaternary"}>
                                {data.date}
                            </span>
                            <img
                                src={data.Image}
                                className="w-4/6 lg:m-5 mt-4 outline outline-gray-700 rounded-md"
                                alt="Project"
                            />
                        </div>
                        <div className="grid gap-y-4">
                            <div className={`${textColor} text-xl`}>
                                <a href={data.link} target="__blank">
                                    {data.title}
                                    <FontAwesomeIcon
                                        icon={faArrowRight}
                                        className={`text-sm -rotate-45 ml-1 duration-500 ${isActive ? "translate-x-1 -translate-y-1" : ""}`}
                                    />
                                </a>
                            </div>
                            <div className="text-quaternary text-xl">{data.description}</div>
                            <div className="lg:flex grid grid-cols-2 gap-2 text-sm">
                                {[data.using1, data.using2, data.using3, data.using4, data.using5, data.using6]
                                    .filter(Boolean)
                                    .map((tech, i) => (
                                        <div
                                            key={i}
                                            className={`px-2 py-1 rounded-md ${
                                                isActive ? "dark:text-primary text-white" : "text-quaternary"
                                            } dark:bg-gray-700 dark:bg-opacity-50 bg-gray-700 bg-opacity-20`}
                                        >
                                            {tech}
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Projects;
