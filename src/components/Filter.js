function Filter() {
    return(
        <div className="w-full">
            <select className="bg-gray-200 border-0 w-min">
                <option>Sort by Size</option>
                <option>Sort by Time available</option>
                <option>Sort by Duration available</option>
            </select>
        </div>
    )
}

export default Filter;