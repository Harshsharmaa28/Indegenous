const Book = ({data}) => {
    return (
        <div className="border p-5 rounded-lg">
            <h3 className="text-black font-semibold text-lg">
                {data.title}
            </h3>
            <p>
                {data.abstract}
            </p>
        </div>
    )
}

export default Book;