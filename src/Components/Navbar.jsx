import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Navbar=()=>{
    return (
        <>
        <div className="flex text-white font-normal text-xl bg-nav_bg p-6 items-center gap-8">
            <AiOutlineArrowLeft className="w-6 h-6"/>
            <p className="font-thin text-gray-400">|</p>
            <p className="text-md">Account</p>
            <p className="font-thin text-gray-400">|</p>
            <p className="text-md">Chat</p>
            <p className="font-thin text-gray-400">|</p>
            <p className="text-md">Predict</p>
        </div>
        </>
    )
}
export default Navbar;