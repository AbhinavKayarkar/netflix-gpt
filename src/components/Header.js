import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUsers, removeUser } from "../utils/Slices/userSlice";
import { NETFLIX_LOGO } from "../utils/constants";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/errorpage");
      });
  };

  // useEffect for onAuthStateChange
  useEffect(() => {
    const unsubscirbe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUsers({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });

    // clean up function for unsubscirbe
    return () => unsubscirbe();
  }, []);

  return (
    <div className="absolute flex justify-between bg-gradient-to-b from-black w-full">
      <div className="z-50">
        <img className="h-20 mx-16" src={NETFLIX_LOGO} alt="netflix-logo" />
      </div>

      {user && (
        <div className="flex mt-5 pr-5  text-white">
          <img className="w-12 h-12" src={user?.photoURL} alt="profile-img" />
          <div>
            <p>{user?.displayName}</p>
            <button onClick={handleSignOut} className="cursor-pointer">
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
