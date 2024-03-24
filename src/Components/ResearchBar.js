import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import axios from 'axios'
const ResearchBar = () => {


    let data = JSON.stringify({
        keyword: "ai",
        limit: 10,
    })

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://api.gyanibooks.com/search_publication/',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    }


    useEffect(() => {
        axios.request(config).then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.log(error);
        })
    },[])




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

            <div className="flex items-center mt-10 w-full gap-1 max-w-3xl">
                <input type="text" className=" font-medium text-center w-full px-4 py-2 h-14 rounded-md bg-blue-100 text-black focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Climate Change" />
                <button className="flex items-center px-4 py-2 h-14 rounded-md bg-blue-200 text-white hover:bg-blue-500 focus:outline-none hover:focus:ring-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l4.25 4.25a1 1 0 0 0 1.41-1.41L15.5 14zm-6 0a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z" />
                    </svg>

                </button>
            </div>
        </div>
    );
};

export default ResearchBar;
