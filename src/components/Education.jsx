import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { data1 } from "./contents/Education";
import { data2 } from "./contents/Education";
import { data3 } from "./contents/Education";

const Education = () => {
    const [isMouseEnter, setIsMouseEnter] = useState({});

    return (
        <div className="flex flex-col gap-y-10 mt-2">
            <div className=" dark:text-secondary text-xl">Education</div>
            <div
                className={`grid grid-cols-[25%_75%]  ${isMouseEnter['exp3'] ? "bg-gray-400" : ""} px-2 py-6 rounded-md duration-500 bg-opacity-20`}
                onMouseEnter={() => setIsMouseEnter({ 'exp3': true })}
                onMouseLeave={() => setIsMouseEnter({ 'exp3': false })}
            >
                <div>
                    <div>
                        <span className={` ${isMouseEnter['exp3'] ? "text-gray-400" : "text-quaternary"}`}> {data3.date} </span>
                    </div>
                    <div className="relative inline-block w-4/6 lg:m-5 mt-4">
                        <img
                            src={data3.image}
                            className="w-full rounded-full border-2 border-primary"
                        />
                        <div
                            className={`absolute inset-0 rounded-full border-2 border-primary 
            ${isMouseEnter['exp3'] ? "animate-ping" : ""}`}
                        />
                    </div>
                </div>
                <div className="grid gap-y-4">
                    <div className={` ${isMouseEnter['exp3'] ? "text-primary" : "dark:text-secondary "} text-xl`}>
                        <a href={data1.link1}>
                            {data1.title}
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                className={`text-sm -rotate-45 duration-500 ml-1 ease-out ${isMouseEnter['exp3'] ? "transition-transform translate-x-1 -translate-y-1" : ""}`}
                            />
                        </a>
                    </div>
                    <div className="flex gap-2 text-xl">
                        <a href={data3.link1} target="__blank"> <FontAwesomeIcon icon={faLink} className="text-quaternary hover:scale-125 hover:text-primary duration-500" /> </a>
                        <a href={data3.link2} target="__blank"> <FontAwesomeIcon icon={faFacebook} className="text-quaternary hover:scale-125 hover:text-primary duration-500" /> </a>
                    </div>
                    <div className="text-quaternary text-xl font-md">{data3.descirption}</div>
                    <div>
                        <div className="flex text-sm">
                            <div className={`bg-gray-700 bg-opacity-20 dark:bg-opacity-50 px-2 py-1 rounded-md ${isMouseEnter['exp3'] ? "dark:text-primary text-white" : "text-quaternary"} cursor-default`}>{data3.status}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={`grid grid-cols-[25%_75%]  ${isMouseEnter['exp1'] ? "bg-gray-400" : ""} px-2 py-6 rounded-md duration-500 bg-opacity-20`}
                onMouseEnter={() => setIsMouseEnter({ 'exp1': true })}
                onMouseLeave={() => setIsMouseEnter({ 'exp1': false })}
            >
                <div>
                    <div>
                        <span className={` ${isMouseEnter['exp1'] ? "text-gray-400" : "text-quaternary"}`}> {data1.date} </span>
                    </div>
                    <div className="relative inline-block w-4/6 lg:m-5 mt-4">
                        <img
                            src={data1.image}
                            className="w-full rounded-full border-2 border-primary"
                        />
                        <div
                            className={`absolute inset-0 rounded-full border-2 border-primary 
            ${isMouseEnter['exp1'] ? "animate-ping" : ""}`}
                        />
                    </div>
                </div>
                <div className="grid gap-y-4">
                    <div className={` ${isMouseEnter['exp1'] ? "text-primary" : "dark:text-secondary "} text-xl`}>
                        <a href={data1.link1}>
                            {data1.title}
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                className={`text-sm -rotate-45 duration-500 ml-1 ease-out ${isMouseEnter['exp1'] ? "transition-transform translate-x-1 -translate-y-1" : ""}`}
                            />
                        </a>
                    </div>
                    <div className="flex gap-2 text-xl">
                        <a href={data1.link1} target="__blank"> <FontAwesomeIcon icon={faLink} className="text-quaternary hover:scale-125 hover:text-primary duration-500" /> </a>
                        <a href={data1.link2} target="__blank"> <FontAwesomeIcon icon={faFacebook} className="text-quaternary hover:scale-125 hover:text-primary duration-500" /> </a>
                    </div>
                    <div className="text-quaternary text-xl font-md">{data1.descirption}</div>
                    <div>
                        <div className="flex text-sm">
                            <div className={`bg-gray-700 bg-opacity-20 dark:bg-opacity-50 px-2 py-1 rounded-md ${isMouseEnter['exp1'] ? "dark:text-primary text-white" : "text-quaternary"} cursor-default`}>{data1.status}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={`grid grid-cols-[25%_75%]  ${isMouseEnter['exp2'] ? "bg-gray-400" : ""} px-2 py-6 rounded-md duration-500 bg-opacity-20`}
                onMouseEnter={() => setIsMouseEnter({ 'exp2': true })}
                onMouseLeave={() => setIsMouseEnter({ 'exp2': false })}
            >
                <div>
                    <div>
                        <span className={` ${isMouseEnter['exp2'] ? "text-gray-400" : "text-quaternary"}`}> {data2.date} </span>
                    </div>
                    <div className="relative inline-block w-4/6 lg:m-5 mt-4">
                        <img
                            src={data2.image}
                            className="w-full rounded-full border-2 border-primary bg-gray-300"
                        />
                        <div
                            className={`absolute inset-0 rounded-full border-2 border-primary 
            ${isMouseEnter['exp2'] ? "animate-ping" : ""}`}
                        />
                    </div>
                </div>
                <div className="grid gap-y-4">
                    <div className={` ${isMouseEnter['exp2'] ? "text-primary" : "dark:text-secondary"} text-xl`}>
                        <a href={data2.link1}>
                            {data2.title}
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                className={`text-sm -rotate-45 duration-500 ml-1 ease-out ${isMouseEnter['exp2'] ? "transition-transform translate-x-1 -translate-y-1" : ""}`}
                            />
                        </a>
                    </div>
                    <div className="flex gap-2 text-xl">
                        <a href={data2.link1} target="__blank"> <FontAwesomeIcon icon={faLink} className="text-quaternary hover:scale-125 hover:text-primary duration-500" /> </a>
                        <a href={data2.link2} target="__blank"> <FontAwesomeIcon icon={faFacebook} className="text-quaternary hover:scale-125 hover:text-primary duration-500" /> </a>
                    </div>
                    <div className="text-quaternary text-xl font-md">{data2.descirption}</div>
                    <div>
                        <div className="flex text-sm">
                            <div className={`bg-gray-700 bg-opacity-20 dark:bg-opacity-50 px-2 py-1 rounded-md ${isMouseEnter['exp2'] ? "dark:text-primary text-white" : "text-quaternary"} cursor-default`}>{data2.status}</div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    );
};
export default Education;