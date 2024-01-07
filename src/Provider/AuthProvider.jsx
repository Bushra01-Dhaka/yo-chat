import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";




export const AuthContext = createContext(null);
// const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(false);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            // console.log("current user: ", currentUser);
           
            setLoading(false);
            
        });
        return () => {
            return unSubscribe();
        }
    }, []);

    // const updateUserProfile = (name, photo) => {
    //     return updateProfile(auth.currentUser, {
    //         displayName: name, photoURL: photo
    //       });
    // } ;

    // const googleSignIn = () => {
    //     setLoading(true);
    //    return signInWithPopup(auth, googleProvider); 
    // }

 


    const authInfo = {
           user,
           loading,
           createUser,
           signIn,
           logOut,
        //    updateUserProfile,
        //    googleSignIn
           

    }
    return (
        <AuthContext.Provider value={authInfo}>
              {children}
        </AuthContext.Provider>
    );
};



export default AuthProvider;