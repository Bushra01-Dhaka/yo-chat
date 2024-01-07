import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import { Outlet } from "react-router-dom";


const MainLayout = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            {
                user ? <Home></Home>
                :
                <Register></Register>
            }
            
        </div>
    );
};

export default MainLayout;