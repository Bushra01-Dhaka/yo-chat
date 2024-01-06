import { Helmet } from "react-helmet-async";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Chat from "../../Components/Chat/Chat";

const Home = () => {
    return (
        <div className="flex justify-center items-center p-6 bg-purple-300 min-h-screen">
            <Helmet>
                <title>Yo Chat | Home</title>
            </Helmet>

           <div className=" border-1 border-white lg:w-[80%] lg:h-[90vh] rounded-xl shadow-2xl overflow-hidden">
           <div className="flex justify-center h-full">
                {/* sidebar */}
                <div className="basis-2/5 h-full ">
                    <Sidebar></Sidebar>
                </div>

                {/* chats section */}
                <div className="flex-1 h-full">
                    <Chat></Chat>
                </div>
            </div>
           </div>
            
        </div>
    );
};

export default Home;