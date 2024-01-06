import { Link } from "react-router-dom";
import { IoVideocamOutline } from "react-icons/io5";
import { FiUserPlus } from "react-icons/fi";
import { IoIosMore } from "react-icons/io";

const ChatNav = () => {
    return (
        <div>
            <div className="text-gray-200 bg-purple-500 shadow-md flex justify-between items-center h-[70px] p-4">
                <h1 className="text-white cursor-pointer">Hamdan</h1>
                <div className="flex items-center gap-4 text-md hover:text-white text-xl">
                    <Link><IoVideocamOutline className="hover:font-bold"></IoVideocamOutline></Link>
                    <Link><FiUserPlus className="hover:font-bold"></FiUserPlus></Link>
                    <Link><IoIosMore className="hover:font-bold"></IoIosMore></Link>
                </div>
            </div>
        </div>
    );
};

export default ChatNav;