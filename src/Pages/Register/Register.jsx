import { Link } from "react-router-dom";
import { BsImage } from "react-icons/bs";
import { Helmet } from "react-helmet-async";

const Register = () => {
  return (
    <div className="flex justify-center items-center bg-purple-300 min-h-screen md:p-4">
       <Helmet>
                <title>Yo Chat | Register</title>
            </Helmet>
      <div className="bg-white lg:w-[500px] p-8 rounded-xl shadow-2xl">
        <form>

          <div className="text-center p-4">
            <h1 className="text-3xl font-medium">Yo Chat</h1>
            <p className="text-lg">Register</p>
          </div>

          <div className="space-y-6 p-6">
            <input type="text"
            className="border-0 outline-0 border-b-2 w-full pb-2" 
            name="name"
            placeholder="display name*" />
            <br />
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
            className="hidden cursor-pointer"
            type="file" name="file" id="file" />
            <label htmlFor="file" className="text-purple-500 font-medium flex items-center gap-2" > <BsImage className="text-2xl"></BsImage> Select an avatar*</label>
            <br />
            <input 
            className="btn btn-block bg-purple-500 hover:bg-purple-700 text-white rounded-lg "
            type="submit" value="Sign Up" />
          </div>
         <div className="text-center">
            <p className="">You do have an account? 
            <Link className="font-medium hover:text-purple-500"> Login</Link></p>
         </div>

        </form>
      </div>
    </div>
  );
};

export default Register;
