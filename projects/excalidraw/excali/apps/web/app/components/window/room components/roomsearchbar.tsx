import SearchIcon from "../../icons/searchIcon"

export default function RoomSearchBar () {
    return(
        <div className="bg-gray-100 rounded-4xl p-3 text-gray-700 text-md flex flex-row justify-between">

            <input type="text" placeholder="Search"/>

            <button>
            <SearchIcon />
            </button>
            
        </div>
    )
}