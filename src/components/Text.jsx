import { useState } from "react";
import { data } from "./contents/Song";

const Text = () => {
    const [isHovered, setIsHovered] = useState({ exp1: false, exp2: false, exp3: false });

    const handleHover = (exp, state) =>
        setIsHovered((prev) => ({ ...prev, [exp]: state }));

    return (
        <div className="grid-rows-2">
            <div className="text-quaternary text-lg" id="top-section">
                Thank you very much for visiting my website! I truly appreciate your time and support. 
                Feel free to explore and contact us if you have any questions. 
                And this is the song I listen to a lot right now.
            </div>

            <div className="flex mt-5 rounded-lg p-5 justify-center relative bg-opacity-20 duration-500 bg-gray-400">
                {/* Disk Image in the Background */}
                <div className="relative">
                    <img
                        src="https://shorturl.asia/UZmRq"
                        alt="disk"
                        className="absolute -inset-4 left-12 w-32 h-32 animate-spin object-cover"
                    />
                    {/* Song Image */}
                    <img
                        src={data.image}
                        alt="song"
                        className="w-24 h-24 relative dark:border-1 dark:border-quaternary object-cover"
                    />
                </div>

                <div className="grid grid-3 ml-14">
                    {/* Song Title */}
                    <div
                        className={`dark:text-secondary text-md self-end ${isHovered.exp1 ? "underline" : ""}`}
                        onMouseEnter={() => handleHover('exp1', true)}
                        onMouseLeave={() => handleHover('exp1', false)}
                    >
                        <a href={data.titlelink} target="_blank" rel="noopener noreferrer">
                            {data.title}
                        </a>
                    </div>

                    {/* Artists List */}
                    <div className="text-quaternary text-sm self-center">
                        {data.artists.map((artist, index) => (
                            <span key={index}>
                                <a
                                    href={data.artistslink[index]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onMouseEnter={() => handleHover(`exp${index + 2}`, true)}
                                    onMouseLeave={() => handleHover(`exp${index + 2}`, false)}
                                    className={isHovered[`exp${index + 2}`] ? "underline" : ""}
                                >
                                    {artist}
                                </a>
                                {index < data.artists.length - 1 && ", "}
                            </span>
                        ))}
                    </div>

                    {/* Album Info */}
                    <div className="text-quaternary text-sm">
                        on {data.album}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Text;
