import ChatNav from "./ChatNav";
import Inputs from "./Inputs";
import Messages from "./Messages";


const Chat = () => {
    return (
        <div className="bg-purple-200 relative h-full bg-transparent bg-opacity-40">
            <ChatNav></ChatNav>
            <Messages></Messages>
            <Inputs></Inputs>
        </div>
    );
};

export default Chat;