import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex bg-nav_bg items-center justify-between">
        <div className="flex text-white font-normal text-xl p-6 items-center gap-8">
          <AiOutlineArrowLeft className="w-6 h-6" />
          <p className="font-thin text-gray-400">|</p>
          <Link onClick={() => window.location.reload()} to="/account"><p className="text-md">Account</p></Link>
          <p className="font-thin text-gray-400">|</p>
          <Link to="/chat"><p className="text-md">Chat</p></Link>
          <p className="font-thin text-gray-400">|</p>
          <Link to="/predict"><p className="text-md">Predict</p></Link>
        </div>
        <div className="pr-10">
          <button className="text-white font-normal text-sm  rounded-lg px-6 py-4 shadow-2xl hover:bg-gradient-to-r hover:from-sky-500 hover:to-indigo-500 bg-gradient-to-r from-violet-500 to-fuchsia-500">
            Connect Wallet
          </button>
        </div>
      </div>
    </>
  );
};
export default Navbar;
