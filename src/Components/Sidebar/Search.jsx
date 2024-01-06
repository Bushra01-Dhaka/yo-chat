
const Search = () => {
    return (
        <div className="">
            <div>
                <input 
                className="border-0 border-b-2 border-gray-500 w-[100%] m-2 p-2 bg-transparent outline-0"
                placeholder="Find a user"
                type="text" name=""  />
            </div>
            <div className="flex items-center gap-1 p-2 hover:bg-purple-800 cursor-pointer">
            <img 
            className="w-[50px] h-[50px] rounded-[50px] object-cover p-1  border-2 border-white "
            src="https://i.ibb.co/vmzMSLn/music.jpg" />
            <div>
                <h2 className="text-white font-medium text-md">Hamdan</h2>
                <p className="text-gray-300">Hi 🖐️</p>
            </div>
            </div>
        </div>
    );
};

export default Search;