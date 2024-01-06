import { IoIosAttach, IoMdSend } from "react-icons/io";
import { MdOutlineAddAPhoto } from "react-icons/md";

const Inputs = () => {
    return (
        <div className="p-4 bg-white absolute bottom-0 w-full">
            <div className="flex justify-between items-center">
                <input type="text"
                className="border-0 outline-0" 
                placeholder="Type Something..."
                />
                <div className="flex items-center gap-2">
                    <input className="hidden cursor-pointer" type="file" name="file" id="file" />
                    <label htmlFor="file">
                        <IoIosAttach className="text-xl text-gray-500 cursor-pointer"></IoIosAttach>
                    </label>

                    <input className="hidden cursor-pointer" type="file" name="photo" id="photo" />
                    <label htmlFor="photo">
                      <MdOutlineAddAPhoto className="text-xl text-gray-500 cursor-pointer"></MdOutlineAddAPhoto>
                    </label>

                    <div>
                      <button className="btn btn-sm rounded-md shadow-md bg-purple-600 hover:bg-purple-700 text-white border-0"><IoMdSend></IoMdSend></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inputs;