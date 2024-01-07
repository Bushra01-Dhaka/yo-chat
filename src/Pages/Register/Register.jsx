import { Link, useNavigate } from "react-router-dom";
import { BsImage } from "react-icons/bs";
import { Helmet } from "react-helmet-async";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  
} from "firebase/storage";
import { storage } from "../../Firebase/firebase.config";
import toast from "react-hot-toast";


const Register = () => {
  const [err, setErr] = useState(false);
  const {user,  setUser, createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    console.log(name, email, password, photo);

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log("loggedUser: ",loggedUser);

        // paste storage from firebase
       
       
        const storageRef = ref(storage, name);

        const uploadTask = uploadBytesResumable(storageRef, photo);

        uploadTask.on(
          
          (error) => {
            console.error(error);
            setErr(true);

          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              // console.log("File available at", downloadURL);
              updateUserProfile(result.user, {
                displayName: name, photoURL: downloadURL
              }).then(() => {
                console.log("User Updated")
                setUser({...user, displayName: name, photoURL: downloadURL})
              })
        
             console.log("User",user);
             console.log("User",user);

        toast.success("Sign Up Successfully", {
          style: {
            border: "1px solid #82CD47",
            padding: "16px",
            color: "black",
          },
          iconTheme: {
            primary: "#82CD47",
            secondary: "#fff",
          },
        });
          //after login jekhane jabo
          // navigate(location?.state ? location.state : "/");
          navigate("/");
        
            });
          }
        );

        // ends
      })
      .catch((error) => {
        console.error(error);
        setErr(true);
      });
  };
  return (
    <div className="flex justify-center items-center bg-purple-300 min-h-screen md:p-4">
      <Helmet>
        <title>Yo Chat | Register</title>
      </Helmet>
      <div className="bg-white lg:w-[500px] p-8 rounded-xl shadow-2xl">
        <form onSubmit={handleRegister}>
          <div className="text-center p-4">
            <h1 className="text-3xl font-medium">Yo Chat</h1>
            <p className="text-lg">Register</p>
          </div>

          <div className="space-y-6 p-6">
            <input
              type="text"
              className="border-0 outline-0 border-b-2 w-full pb-2"
              name="name"
              required
              placeholder="display name*"
            />
            <br />
            <input
              type="email"
              name="email"
              required
              className="border-0 outline-0 border-b-2 w-full pb-2"
              placeholder="email*"
            />
            <br />
            <input
              type="password"
              name="password"
              required
              className="border-0 outline-0 border-b-2 w-full pb-2"
              placeholder="password*"
            />
            <br />
            <input
              className="hidden cursor-pointer"
              required
              type="file"
              name="photo"
              id="file"
            />
            <label
              htmlFor="file"
              className="text-purple-500 font-medium flex items-center gap-2"
            >
              {" "}
              <BsImage className="text-2xl"></BsImage> Select an avatar*
            </label>
            <br />
            <input
              className="btn btn-block bg-purple-500 hover:bg-purple-700 text-white rounded-lg "
              type="submit"
              value="Sign Up"
            />
          </div>
          {err && <span>Something went wrong. Failed to Register.</span>}
          <div className="text-center">
            <p className="">
              You do have an account?
              <Link className="font-medium hover:text-purple-500"> Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
