import { useEffect, useState } from 'react';
import axios from 'axios';
import Book from "./Book"
import ToggleButton from './ToggleButton';

const SearchResults = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isAcademic, setisAcademic] = useState(true);
    const [searchKeyword, setSearchKeyword] = useState("");

    const toggleButton = () => {
        setisAcademic(!isAcademic);
      };

      
    const handleSearchInput = async () => {
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://api.gyanibooks.com/search_publication/',
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({
                keyword: searchKeyword,
                limit: 10
            })
        }

        try {
            setLoading(true);
            const response = await axios.request(config);
            console.log(response.data);
            setData(response.data.data);
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    }


    return (
        <div className='w-full flex flex-col items-center justify-center'>
            <div className="flex items-center mt-10 w-full gap-1 max-w-3xl">
                <div className=' w-full flex'>
                    <input onChange={(e) => setSearchKeyword(isAcademic ? "what is" + e.target.value : e.target.value)}
                        type="search" className="font-medium text-center w-full px-4 py-2 h-14 rounded-md bg-blue-100 text-black focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Climate Change" />
                    <div className="flex items-center absolute">
                        <button
                            className={`w-12 h-6 flex items-center justify-center rounded-full ${isAcademic ? 'bg-blue-500' : 'bg-gray-300'
                                }`}
                            onClick={toggleButton}
                        >
                            <div
                                className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform ${isAcademic ? 'translate-x-full' : ''
                                    }`}
                            ></div>
                        </button>
                        <span className="ml-2">{isAcademic ? 'Academic' : 'Non-Academic'}</span>
                    </div>
                </div>

                <button
                    onClick={handleSearchInput}
                    className="flex items-center px-4 py-2 h-14 rounded-md bg-blue-200 text-white hover:bg-blue-500 focus:outline-none hover:focus:ring-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l4.25 4.25a1 1 0 0 0 1.41-1.41L15.5 14zm-6 0a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z" />
                    </svg>
                </button>
            </div>
            <br />
            {loading ? <p className=' font-semibold text-red-500'>Loading...</p> : <div className='flex flex-col gap-5 max-w-3xl'>
                {
                    data ? data?.map((book, idx) => (
                        <Book key={idx} data={book} />
                    ))
                    : <p className=' font-semibold text-red-500'>Error in Fetching data from API !!!</p>
                }
            </div>}
        </div>
    )
}


export default SearchResults;