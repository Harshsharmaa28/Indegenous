import { useEffect, useState } from 'react';
import axios from 'axios';
import Book from "./Book"

const SearchResults = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isAcademic, setAcademic] = useState(false);
    const [searchKeyword, setSearchKeyword] = useState("ai");

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
                <input onChange={(e) => setSearchKeyword(e.target.value + isAcademicc ? " academic" : " non academic" )}
                    type="search" className="font-medium text-center w-full px-4 py-2 h-14 rounded-md bg-blue-100 text-black focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Climate Change" />
                <button
                    onClick={handleSearchInput}
                    className="flex items-center px-4 py-2 h-14 rounded-md bg-blue-200 text-white hover:bg-blue-500 focus:outline-none hover:focus:ring-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l4.25 4.25a1 1 0 0 0 1.41-1.41L15.5 14zm-6 0a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z" />
                    </svg>
                </button>
            </div>

            <div className='flex flex-col gap-5'>
                {
                    data && data?.map((book, idx) => (
                        <Book key={idx} data={book} />
                    ))
                }
            </div>
        </div>
    )
}


export default SearchResults;