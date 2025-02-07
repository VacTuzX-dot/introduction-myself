import Education from "../Education";
import Footer from "../Footer";
import LanguageTools from "../Language&Tools";
import Navbar from "../Navbar";
import Projects from "../Project";
import Text from "../Text";
import Experience from "../Experience";

const RightSection = () => {

    return (
        <div className="grid gap-y-3 px-5">
                        <Navbar />
            <Text />
            <Education />
            <Experience />
            <LanguageTools />
            <Projects />
            <Footer />
        </div>
    );
};
export default RightSection;