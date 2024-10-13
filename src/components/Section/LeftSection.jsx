import Header from "../Header";
import About from "../About";
import Contact from "../Contact";

const LeftSection = () => {

    return (
        <div className="px-5">
            <div className="sticky top-14 grid gap-y-5 lg:grid-rows-[35%_35%_25%] lg:h-[87vh]">
                <Header />
                <About />
                <Contact />
            </div>
        </div>
    );
};
export default LeftSection;