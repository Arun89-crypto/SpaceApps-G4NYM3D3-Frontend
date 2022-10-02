import React from "react";
import img from "../bg-images/1.png";
import Navbar from "../Components/Navbar";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";

const RewardsPage = () => {
  var a = [1, 2, 3, 4, 5];
  return (
    <>
      <Navbar />
      <div
        className=""
        style={{
          backgroundImage: `url(${img})`,
          width: "100vw",
          height: "90.3vh",
        }}
      >
        <div className="flex items-center justify-between px-20 pt-20 pb-20">
          <div className="">
            <div className="flex items-center text-white text-2xl gap-8 font-semibold">
              <AiOutlineArrowLeft />
              <p>My Rewards</p>
            </div>
          </div>
          <div className="flex gap-12">
            <div className="text-white flex gap-4 items-center">
              <BiUserCircle className="w-8 h-8" />
              <p className="text-lg">User ID</p>
            </div>
            
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex gap-6 justify-center  backdrop-saturate-200 backdrop-blur-md flex-wrap w-fit px-10 py-14 ">
            {a.map((a) => (
              <div className="bg-white w-48 h-64 rounded-xl "></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RewardsPage;
