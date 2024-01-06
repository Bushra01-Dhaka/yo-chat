import { Link } from "react-router-dom";
import { IoVideocamOutline } from "react-icons/io5";
import { FaRegUser } from 'react-icons/fa';
import { IoIosMore } from "react-icons/io";

const ChatNav = () => {
    return (
        <div>
            <div className="text-gray-200 bg-purple-500 shadow-md flex justify-between p-4">
                <h1>Hamdan</h1>
                <div className="flex items-center gap-4 text-md">
                    <Link><IoVideocamOutline></IoVideocamOutline></Link>
                    <Link><FaRegUser></FaRegUser></Link>
                    <Link><IoIosMore></IoIosMore></Link>
                </div>
            </div>
        </div>
    );
};

export default ChatNav;