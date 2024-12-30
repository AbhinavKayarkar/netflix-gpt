import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/errorpage");
      });
  };
  return (
    <div className="flex justify-between">
      <div>
        <div className="absolute bg-gradient-to-b from-black w-full z-50">
          <img
            className="h-20 mx-12 "
            src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="netflix-logo"
          />
        </div>
      </div>

      {user && (
        <div className=" flex mt-5 pr-5 z-50">
          <img className="w-12 h-12" src={user?.photoURL} alt="profile-img" />
          <button onClick={handleSignOut} className="cursor-pointer">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
