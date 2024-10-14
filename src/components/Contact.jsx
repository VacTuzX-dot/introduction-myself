import { faDiscord, faFacebook, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from "./contents/Contact";

const Contact = () => (
    <div className="flex items-end gap-7 text-3xl dark:text-quaternary">
        {["facebook", "instagram", "discord", "github"].map((platform) => (
            <a 
                key={platform} 
                href={data[platform]} 
                target="_blank" 
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon 
                    icon={{ facebook: faFacebook, instagram: faInstagram, discord: faDiscord, github: faGithub }[platform]} 
                    className="hover:scale-125 hover:text-primary duration-500" 
                />
            </a>
        ))}
    </div>
);

export default Contact;
