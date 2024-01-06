import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="flex justify-center items-center bg-purple-300 min-h-screen md:p-4">
           <Helmet>
                <title>Yo Chat | Login</title>
            </Helmet>
        <div className="bg-white lg:w-[500px] p-8 rounded-xl shadow-2xl">
          <form>
  
            <div className="text-center p-4">
              <h1 className="text-3xl font-medium">Yo Chat</h1>
              <p className="text-lg">Login</p>
            </div>
  
            <div className="space-y-6 p-6">
              
              <input type="email" 
              name="email" 
              className="border-0 outline-0 border-b-2 w-full pb-2" 
              placeholder="email*" />
              <br />
              <input type="password" 
              name="password" 
              className="border-0 outline-0 border-b-2 w-full pb-2" 
              placeholder="password*" />
              <br />
              <input 
              className="btn btn-block bg-purple-500 hover:bg-purple-700 text-white rounded-lg "
              type="submit" value="Login" />
            </div>
           <div className="text-center">
              <p className="">{`Don't have any account?`} 
              <Link className="font-medium hover:text-purple-500"> Register</Link></p>
           </div>
  
          </form>
        </div>
      </div>
    );
};

export default Login;