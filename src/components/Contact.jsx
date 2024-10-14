import { faDiscord, faFacebook, faInstagram , faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from "./contents/Contact";

const Contact = () => {

    return (
        <div className="flex items-end gap-7 text-3xl dark:text-quaternary">
            <a href={data.facebook} target="__blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className="hover:scale-125 hover:text-primary duration-500" />
            </a>
            <a href={data.instagram} target="__blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="hover:scale-125 hover:text-primary duration-500" />
            </a>
            <a href={data.discord} target="__blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faDiscord} className="hover:scale-125 hover:text-primary duration-500" />
            </a>
            <a href={data.github} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="hover:scale-125 hover:text-primary duration-500"/>
            </a>
        </div>
    );
};
export default Contact;