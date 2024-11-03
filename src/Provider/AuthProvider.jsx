import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";
import { axiosPublic } from "../Hooks/useAxiosPublic";

export const AuthContaxt = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googlePrvider = new GoogleAuthProvider();


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      if (currentUser) {
        const userInfo = { email: currentUser.email };
        axiosPublic.post("/jwt", userInfo)
        .then((res) => {
          console.log(res);
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
                  setLoading(false);
          }
        });
      } else {
        localStorage.removeItem("access-token")
        setLoading(false);
      }
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [axiosPublic]);

  //  google login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googlePrvider);
  };

  // update img name user

  const updateUser = (name, url) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: url,
    });
  };
  // email password register
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // email password login
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   logOut
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    googleLogin,
    logout,
    updateUser,
  };

  return (
    <AuthContaxt.Provider value={authInfo}>{children}</AuthContaxt.Provider>
  );
};
export default AuthProvider;
