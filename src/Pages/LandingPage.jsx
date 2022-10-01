import React from "react";
import Footer from "../Components/Footer";
import Bg1 from "../images/Bg1";

const LandingPage = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute">
          <Bg1 />
        </div>
        <div className="absolute">
            <p className="text-white">logo</p>
        </div>
        <div className="text-white z-10 absolute top-24 right-20">
          <div className="flex justify-end items-center gap-12">
            <button className="border-2 w-28 h-12 text-white border-log_bt_br hover:bg-log_bt_bg">Login</button>
            <button className="border-2 w-28 h-12 text-white border-log_bt_br hover:bg-log_bt_bg">Signup</button>
          </div>
        </div>
        <div className="absolute top-80 left-40">
            <p className="text-6xl text-white font-extrabold  w-1/2">SAVE THE EARTH FROM ANOTHER CARRINGTON EVENT!</p>
        </div>
        <div className="absolute top-screen left-0 w-full z-10 " style={{top: '87vh'}}>
            <Footer />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
