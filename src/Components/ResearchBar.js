import { useEffect, useState } from 'react';
import SearchResults from "./SearchResults"


const ResearchBar = () => {
    const [selectedButton, setSelectedButton] = useState("Research");
    const [field, setfield] = useState(false);

    


    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
    };
    //https://serpapi.com/search.json?engine=google&q=Coffee

    return (
        <div className="flex flex-col justify-center items-center px-4 py-4 mt-40">
            <div className="flex justify-between items-center w-full max-w-3xl h-16 bg-gray-100 rounded-xl ">
                <button
                    onClick={() => handleButtonClick("Sumarize")}
                    className={`text-blue-400 font-bold text-xl rounded-md focus:outline-none flex-1 ${selectedButton === "Sumarize" ? 'hover:bg-blue-500 hover:text-white' : ''}`}
                    style={{
                        backgroundColor: selectedButton === "Sumarize" ? "rgb(59,130,256)" : "",
                        color: selectedButton === "Sumarize" ? "#fff" : "",
                        height: selectedButton === "Sumarize" ? "100%" : "",
                    }}
                >
                    Sumarize
                </button>
                <button
                    onClick={() => handleButtonClick("Elaborate")}
                    className={`text-blue-400 font-bold text-xl rounded-md focus:outline-none flex-1 ${selectedButton === "Elaborate" ? 'hover:bg-blue-500 hover:text-white' : ''}`}
                    style={{
                        backgroundColor: selectedButton === "Elaborate" ? "rgb(59,130,256)" : "",
                        color: selectedButton === "Elaborate" ? "#fff" : "",
                        height: selectedButton === "Elaborate" ? "100%" : "",
                    }}
                >
                    Elaborate
                </button>
                <button
                    onClick={() => handleButtonClick("Research")}
                    className={`text-blue-400 font-bold text-xl rounded-md focus:outline-none flex-1 ${selectedButton === "Research" ? 'hover:bg-blue-500 hover:text-white' : ''}`}
                    style={{
                        backgroundColor: selectedButton === "Research" ? "rgb(59,130,256)" : "",
                        color: selectedButton === "Research" ? "#fff" : "",
                        height: selectedButton === "Research" ? "100%" : "",
                    }}
                >
                    Research
                </button>

                <button
                    onClick={() => handleButtonClick("Chat with PDF")}
                    className={`text-blue-400 font-bold text-xl rounded-md focus:outline-none flex-1 ${selectedButton === "Chat with PDF" ? 'hover:bg-blue-500 hover:text-white' : ''}`}
                    style={{
                        backgroundColor: selectedButton === "Chat with PDF" ? "rgb(59,130,256)" : "",
                        color: selectedButton === "Chat with PDF" ? "#fff" : "",
                        height: selectedButton === "Chat with PDF" ? "100%" : "",
                    }}
                >
                    Chat with PDF
                </button>
            </div>

            <SearchResults/>
        </div>
    );
};

export default ResearchBar;
