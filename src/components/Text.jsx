import { useState } from "react";
import { data } from "./contents/Song";

const Text = () => {
    const [isMouseEnter, setIsMouseEnter] = useState({
        exp1: false,
        exp2: false,
        exp3: false,
    });

    return (
        <div className="grid-rows-2">
            <div className="text-quaternary text-lg" id="top-section">
                Thank you very much for visiting my website! I truly appreciate your time and support. Feel free to explore and contact us if you have any questions. And this is the song I listen to a lot right now.
            </div>

            <div className="flex mt-5 rounded-lg p-5 justify-center relative bg-opacity-20 duration-500 bg-gray-400">
                <div className="relative">
                    {/* Disk Image Positioned in the Background */}
                    <img
                        src="https://shorturl.asia/UZmRq"
                        alt="disk"
                        className="absolute -inset-4 left-12 w-32 h-32 animate-spin"
                        style={{ objectFit: 'cover' }}
                    />

                    {/* Song Image on Top */}
                    <img
                        src={data.image}
                        alt="song"
                        className="w-24 h-24 relative dark:border-2 dark:border-quaternary"
                        style={{ objectFit: 'cover' }}
                    />
                </div>

                <div className="grid grid-3 ml-14">
                    <div
                        className={`dark:text-secondary text-md self-end ${isMouseEnter.exp1 ? "underline" : ""}`}
                        onMouseEnter={() => setIsMouseEnter((prev) => ({ ...prev, exp1: true }))}
                        onMouseLeave={() => setIsMouseEnter((prev) => ({ ...prev, exp1: false }))}
                    >
                        <a href={data.titlelink} target="_blank" rel="noopener noreferrer"> {data.title} </a>
                    </div>
                    <div className="text-quaternary text-sm self-center">
                        <a
                            href={data.artistslink[0]}
                            target="_blank"
                            rel="noopener noreferrer"
                            onMouseEnter={() => setIsMouseEnter((prev) => ({ ...prev, exp2: true }))}
                            onMouseLeave={() => setIsMouseEnter((prev) => ({ ...prev, exp2: false }))}
                            className={isMouseEnter.exp2 ? "underline" : ""}
                        >
                            {data.artists[0]}
                        </a>
                        ,
                        &nbsp;
                        <a
                            href={data.artistslink[1]}
                            target="_blank"
                            rel="noopener noreferrer"
                            onMouseEnter={() => setIsMouseEnter((prev) => ({ ...prev, exp3: true }))}
                            onMouseLeave={() => setIsMouseEnter((prev) => ({ ...prev, exp3: false }))}
                            className={isMouseEnter.exp3 ? "underline" : ""}
                        >
                            {data.artists[1]}
                        </a>
                    </div>
                    <div className="text-quaternary text-sm">
                        on {data.album}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Text;
