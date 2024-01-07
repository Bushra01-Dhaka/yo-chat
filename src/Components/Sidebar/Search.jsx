
const Search = () => {
    return (
        <div className="">
            <div>
                <input 
                className="border-0 border-b-2 border-gray-500 w-[80%] m-2 p-2 bg-transparent outline-0"
                placeholder="Find a user"
                type="text" name=""  />
            </div>
            <div className="flex items-center gap-1 p-2 hover:bg-purple-800 cursor-pointer">
            <img 
            className="w-[40px] h-[40px] rounded-[40px] lg:w-[50px] lg:h-[50px] lg:rounded-[50px] object-cover p-1  border-2 border-white "
            src="https://i.ibb.co/vmzMSLn/music.jpg" />
            <div>
                <h2 className="text-white font-medium text-sm lg:text-md">Hamdan</h2>
                <p className="text-gray-300 invisible lg:visible">Hi 🖐️</p>
            </div>
            </div>
        </div>
    );
};

export default Search;