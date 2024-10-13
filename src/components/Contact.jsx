import { faDiscord, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from "./contents/Contact";

const Contact = () => {

    return (
        <div className="flex items-end gap-7 text-3xl dark:text-quaternary">
            <a href={data.facebook} target="__blank">
                <FontAwesomeIcon icon={faFacebook} className="hover:scale-125 hover:text-primary duration-500" />
            </a>
            <a href={data.instagram} target="__blank">
                <FontAwesomeIcon icon={faInstagram} className="hover:scale-125 hover:text-primary duration-500" />
            </a>
            <a href={data.discord} target="__blank">
                <FontAwesomeIcon icon={faDiscord} className="hover:scale-125 hover:text-primary duration-500" />
            </a>
        </div>
    );
};
export default Contact;