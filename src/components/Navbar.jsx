import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect, useRef } from 'react';

const sections = [
    { id: "top-section", label: "Top" },
    { id: "education-section", label: "Education" },
    { id: "lan_tools-section", label: "Language & Tools" },
    { id: "projects-section", label: "Projects" },
];

const Navbar = () => {
    const [hoveredSection, setHoveredSection] = useState(null);
    const [activeSection, setActiveSection] = useState(null);
    const sectionRefs = useRef({});

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, { threshold: 0.6 });

        sections.forEach(({ id }) => {
            const section = document.getElementById(id);
            if (section) {
                sectionRefs.current[id] = section;
                observer.observe(section);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    const handleClick = (sectionId) => {
        const positions = {
            "top-section": 0,
            "education-section": 265,  // Start of Education section
            "lan_tools-section": 910,   // Start of Language & Tools section
            "projects-section": 1170,    // Start of Projects section
        };

        if (positions[sectionId] !== undefined) {
            smoothScrollTo(positions[sectionId], 800);
        }
    };

    const smoothScrollTo = (target, duration) => {
        const start = window.scrollY;
        const distance = target - start;
        let startTime = null;

        function easing(t) {
            return t * (2 - t);
        }

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;

            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            const easedProgress = easing(progress);

            window.scrollTo(0, start + distance * easedProgress);

            if (progress < 1) {
                requestAnimationFrame(animation);
            }
        }

        requestAnimationFrame(animation);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            // Determine which section is currently active based on scroll position
            if (scrollY >= 0 && scrollY < 265) {
                setActiveSection("top-section");
            } else if (scrollY >= 265 && scrollY < 910) {
                setActiveSection("education-section");
            } else if (scrollY >= 910 && scrollY < 1170) {
                setActiveSection("lan_tools-section");
            } else if (scrollY >= 1170) {
                setActiveSection("projects-section");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="lg:flex sticky top-14 justify-center items-center bg-gray-700 dark:bg-black bg-opacity-50 dark:bg-opacity-50 rounded-md hidden z-50 p-0.5">
            {sections.map(({ id, label }) => (
                <div
                    key={id}
                    onClick={() => handleClick(id)}
                    className="cursor-pointer"
                    role="button"
                    tabIndex={0}
                    onMouseEnter={() => setHoveredSection(id)}
                    onMouseLeave={() => setHoveredSection(null)}
                >
                    <div className="text-secondary text-xl mr-8 flex flex-col items-center">
                        <FontAwesomeIcon icon={faArrowDown} className={`${hoveredSection === id || activeSection === id ? "" : "hidden"} text-sm new-arrow text-primary`} />
                        <div className={`${hoveredSection === id || activeSection === id ? "translate-y-1" : ""} duration-500 ease-out`}>{label}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Navbar;
