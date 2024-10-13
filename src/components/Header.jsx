import React, { useEffect, useState } from 'react';
import { data } from "./contents/header";

const Header = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(() => {
        // Check localStorage for theme preference, default to 'dark' if not set
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? savedTheme === 'dark' : true;
    });

    useEffect(() => {
        // Apply the theme on mount
        document.documentElement.classList.toggle('dark', isDarkTheme);
        // Update localStorage whenever the theme changes
        localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
    }, [isDarkTheme]);

    const toggleTheme = () => {
        setIsDarkTheme(prev => !prev);
    };

    return (
        <div className="flex flex-col gap-2">
            <div className="text-5xl text-primary font-semibold">{data.name}</div>
            <div className="dark:text-secondary  font-normal text-2xl">{data.position}</div>
            <div className="text-quaternary text-lg w-5/6">{data.caption}</div>
            <div className="mt-3 flex items-center">
                <button
                    id="toggle-button"
                    className="text-gray-500 inline-flex dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 m-5"
                    onClick={toggleTheme}
                >
                    {/* Theme toggle icons */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className={`size-6 ${isDarkTheme ? 'hidden' : 'block'}`}
                    >
                        <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className={`size-6 ${isDarkTheme ? 'block' : 'hidden'}`}
                    >
                        <path
                            fillRule="evenodd"
                            d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
                <a href="#" target="__blank">
                    <span className="bg-primary text-gray-200 py-2 px-3 rounded-md outline outline-offset-2 outline-2 outline-primary inline-block relative group">
                        {data.btnText}
                        <span className="absolute inset-0 border-2 border-primary animate-ping rounded-md" />
                    </span>
                </a>
            </div>
        </div>
    );
};

export default Header;
