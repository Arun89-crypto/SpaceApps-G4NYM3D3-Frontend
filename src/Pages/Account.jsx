import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { ImUserPlus } from "react-icons/im";
import { HiOutlineUserCircle } from "react-icons/hi";
import { GoGift } from "react-icons/go";
import Navbar from "../Components/Navbar";

const Account = () => {
  return (
    <>
    <Navbar />
      <div className="bg-black h-screen flex">
        <div className="w-1/3 pl-8 pt-28">
          <div className="flex items-center text-white text-2xl gap-8 font-semibold">
            <AiOutlineArrowLeft />
            <p>Account</p>
          </div>
          <div className="flex items-center justify-center mt-24">
            <div className="bg-gray-400 rounded-full flex items-center justify-center w-fit p-8 ">
              <ImUserPlus className="text-gray-200 w-20 h-20" />
            </div>
          </div>
          <div className="mt-20 pl-10 flex flex-col gap-6">
            <div className="text-white flex items-center  gap-4">
              <HiOutlineUserCircle className="w-10 h-10 font-thin " />
              <input
                placeholder="User ID"
                className="bg-transparent text-gray-200 font-normal pb-2 w-full text-2xl border-b-2 outline-none "
              />
            </div>
            <div className="text-white flex items-center  gap-4">
              <GoGift className="w-10 h-10 font-thin " />
              <input
                placeholder="My Rewards"
                className="bg-transparent text-gray-200 font-normal pb-2 w-full text-2xl border-b-2 outline-none "
              />
            </div>
          </div>
        </div>
        <div className="bg-acc_gray w-2/3">
          <div className="flex items-center justify-end pr-24 pt-28">
            <button className="text-white font-normal text-sm bg-gray-700 rounded-lg px-6 py-4 shadow-2xl hover:bg-gray-600">
              Connect Wallet
            </button>
          </div>
          <div className="pl-56 mt-28">
            <p className="text-white font-semibold text-3xl">Settings</p>
          </div>
          <div className=" w-96">
            <hr className="mt-6 " />
          </div>
          <div className="flex flex-col ml-56 mt-12 gap-4">
            <p className="text-lg text-gray-200 font-semibold">Change Username</p>
            <p className="text-lg text-gray-200 font-semibold">Change Email</p>
            <p className="text-lg text-gray-200 font-semibold">Change Password</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
