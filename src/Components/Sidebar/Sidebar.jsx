import Search from "./Search";
import SideChats from "./SideChats";
import SideNav from "./SideNav";


const Sidebar = () => {
    return (
        <div className="bg-purple-700 text-white h-full overflow-scroll">
           <SideNav></SideNav> 
           <Search></Search>
           <SideChats></SideChats>
        </div>
    );
};

export default Sidebar;