import { useEffect, useState } from 'react';
import { data } from "../components/contents/Header";

const Header = () => {
    // Initialize with localStorage value, defaulting to 'dark' if no value exists
    const [isDarkTheme, setIsDarkTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? savedTheme === 'dark' : true;
    });

    useEffect(() => {
        // Apply the theme class based on the current state
        document.documentElement.classList.toggle('dark', isDarkTheme);
        // Store the user preference in localStorage
        localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
    }, [isDarkTheme]);

    const toggleTheme = () => setIsDarkTheme((prev) => !prev);

    return (
        <div className="flex flex-col gap-2">
            <div className="text-5xl font-semibold text-primary">{data.name}</div>
            <div className="text-2xl font-normal dark:text-secondary">{data.position}</div>
            <div className="text-lg text-quaternary w-5/6">{data.caption}</div>
            <div className="mt-3 flex items-center">
                <a href="#" className="group mr-5">
                    <span className="bg-primary text-gray-200 py-2 px-3 rounded-md outline outline-offset-2 outline-2 outline-primary relative">
                        {data.btnText}
                        <span className="absolute inset-0 border-2 border-primary animate-ping rounded-md" />
                    </span>
                </a>
                <button
                    className="p-2.5 rounded-lg text-sm dark:text-gray-400 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700"
                    onClick={toggleTheme}
                >
                    {/* Light mode icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className={`size-6 ${isDarkTheme ? 'hidden' : 'block'}`}
                    >
                        <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75ZM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0ZM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75ZM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18ZM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59ZM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12ZM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591Z" />
                    </svg>
                    {/* Dark mode icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className={`size-6 ${isDarkTheme ? 'block' : 'hidden'}`}
                    >
                        <path
                            fillRule="evenodd"
                            d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Header;
