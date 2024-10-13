import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from "./contents/About";

const About = () => {
    return (
        <div className="flex flex-col text-3xl dark:text-secondary gap-4 self-center">
            <div>
                <div className="inline-block -rotate-90 mr-5">
                    <FontAwesomeIcon icon={faArrowDown} className="text-lg text-primary rotate-180 animate-bounce" /> {/* ใช้ class rotate */}
                </div>
                {data.tite}
            </div>
            <div className="w-5/6 text-lg text-quaternary">
                {data.content}
            </div>
        </div>
    );
};

export default About;
