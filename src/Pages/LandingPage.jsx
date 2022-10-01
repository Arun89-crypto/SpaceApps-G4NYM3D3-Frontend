import React, { useState } from "react";
import Footer from "../Components/Footer";
import SignIn from "../Components/SignIn";
import SignUp from "../Components/SignUp";
import img from "../bg-images/4.jpg";

const LandingPage = ({ signIn, signUp }) => {
  return (
    <>
      <div className="h-screen " style={{ backgroundImage: `url(${img})`,backgroundSize:"contain" }}>
        <div className="">
          <p className="text-white">logo</p>
        </div>
        <div className="text-white">
          <div className="flex justify-end items-center gap-12 px-20 py-24">
            <button
              className="border-2 w-28 h-12 text-white border-log_bt_br hover:bg-log_bt_bg"
              onClick={signIn}
            >
              Login
            </button>
            <button
              className="border-2 w-28 h-12 text-white border-log_bt_br hover:bg-log_bt_bg"
              onClick={signUp}
            >
              Signup
            </button>
          </div>
        </div>
        <div className=" pl-32">
          <p className="text-6xl text-white font-extrabold  w-1/2">
            SAVE THE EARTH FROM ANOTHER CARRINGTON EVENT!
          </p>
        </div>
        <div className=" w-full fixed bottom-0">
          <Footer />
        </div>
      </div>
    </>
  );
};

const DefaultLand = () => {
  const [openSignIn, setOpenSignIn] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);

  const openSignInModel = () => setOpenSignIn(true);
  const openSignUpModel = () => setOpenSignUp(true);
  return (
    <>
      <SignIn isOpen={openSignIn} setIsOpen={setOpenSignIn} />
      <SignUp isOpen={openSignUp} setIsOpen={setOpenSignUp} />
      <LandingPage signIn={openSignInModel} signUp={openSignUpModel} />
    </>
  );
};

export default DefaultLand;
