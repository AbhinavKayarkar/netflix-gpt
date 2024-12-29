import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidfield } from "../utils/validate";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [errMsg, setErrMsg] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const mobile = useRef(null);
  const fullName = useRef(null);

  const handleButtonClick = () => {
    let message = null;
    if (!isSignUp) {
      message = checkValidfield(email.current.value, password.current.value);
    } else {
      message = checkValidfield(
        email.current.value,
        password.current.value,
        mobile.current.value
      );
    }

    setErrMsg(message);
  };

  return (
    <div>
      <Header />

      {/* background Image for login page */}
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_large.jpg"
          alt="bg-img"
        />
      </div>

      {/* login form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 bg-black absolute mx-auto right-0 left-0 my-36  text-white p-12 rounded-lg bg-opacity-80"
      >
        <p className="text-2xl p-2">{!isSignUp ? "Sign In" : "Sign Up"}</p>
        {isSignUp && (
          <>
            <input
              ref={fullName}
              type="text"
              className="p-2 m-2 bg-slate-700 w-full rounded-lg opacity-80"
              placeholder="Full Name"
            ></input>
            <input
              ref={mobile}
              type="tel"
              className="p-2 m-2 bg-slate-700 w-full rounded-lg opacity-80"
              placeholder="Mobile"
            ></input>
          </>
        )}
        <input
          ref={email}
          type="text"
          className="p-2 m-2 bg-slate-700 w-full rounded-lg opacity-80"
          placeholder="Email"
        ></input>
        <input
          ref={password}
          type="password"
          className="p-2 m-2 bg-slate-700 w-full rounded-lg  opacity-80"
          placeholder="Password"
        ></input>

        <p className="text-red-500 m-2">{errMsg}</p>

        <button
          onClick={handleButtonClick}
          className="bg-red-600 p-2 ml-2 my-2 w-full rounded-lg"
        >
          {!isSignUp ? "Sign In" : "Sign Up"}
        </button>
        <p className="w-full text-center text-xs m-2">OR</p>
        <p
          className="p-2 m-2 w-full text-sm cursor-pointer"
          onClick={() => setIsSignUp(!isSignUp)}
        >
          New to Netflix? Sign up now.
        </p>
      </form>
    </div>
  );
};

export default Login;
