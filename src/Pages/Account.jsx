import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import { AiOutlineArrowLeft } from "react-icons/ai";
import { ImUserPlus } from "react-icons/im";
import { HiOutlineUserCircle } from "react-icons/hi";
import { GoGift } from "react-icons/go";
import Navbar from "../Components/Navbar";
import img from "../bg-images/3.png";
import User from "../Components/User.Component";
import Reward from "../Components/Reward.Component";

const Account = () => {
  const { tabName } = useParams();
  return (
    <>
      <Navbar />
      <div style={{ backgroundImage: `url(${img})` }}>
        <div className=" flex ">
          <div className="w-1/3 pl-8 pt-28 pb-36">
            <div className="flex items-center text-white text-2xl gap-8 font-semibold">
              <p className="pl-8">Account</p>
            </div>
            <div className="flex items-center justify-center mt-24">
              <div className="bg-gray-400 rounded-full flex items-center justify-center w-fit p-8 ">
                <ImUserPlus className="text-gray-200 w-20 h-20" />
              </div>
            </div>
            <div className="mt-20 pl-10 flex flex-col gap-6">
              <Link to="/account/user">
                <div className="text-white flex items-center  gap-4">
                  <HiOutlineUserCircle className="w-10 h-10 font-thin " />
                  <p className="bg-transparent text-gray-200 font-normal pb-2 w-full text-2xl border-b-2 outline-none hover:cursor-pointer">
                    User ID
                  </p>
                </div>
              </Link>
              <Link to="/account/reward">
                <div className="text-white flex items-center  gap-4">
                  <GoGift className="w-10 h-10 font-thin " />
                  <p className="bg-transparent text-gray-200 font-normal pb-2 w-full text-2xl border-b-2 outline-none hover:cursor-pointer">
                    My Rewards
                  </p>
                </div>
              </Link>
            </div>
          </div>
          {tabName === "user" && <User />}
          {tabName === "reward" && <Reward />}
        </div>
      </div>
    </>
  );
};

export default Account;
