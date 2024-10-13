import { data  } from "./contents/Language&Tools";

const LanguageTools = () => {
    return (
        <div className="flex flex-col gap-y-10">
            <div className="dark:text-secondary text-xl">Language & Tools</div>
            <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
                {data.map((tool, index) => (
                    <div
                        key={index}
                        className="text-quaternary flex flex-row-reverse items-center justify-between dark:bg-gray-700 dark:bg-opacity-50 px-2 py-1.5 rounded-md  outline outline-offset-2 outline-2 dark:outline-gray-800 outline-primary hover:text-primary relative group"
                    >
                        <span className="absolute inset-0 border-2 border-opacity-0 hover:border-opacity-100 border-primary hover:animate-ping rounded-md duration-500" />
                        <span className="ml-2">{tool.name}</span>
                        <img src={tool.link} className="w-8 h-8" alt={tool.name} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LanguageTools;
