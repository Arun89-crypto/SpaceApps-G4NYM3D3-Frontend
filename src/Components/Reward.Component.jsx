import React from "react";
import img from "../bg-images/1.png";
import Navbar from "./Navbar";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";

const Reward = () => {
  var a = [1, 2, 3, 4, 5];
  return (
    <>
      <div
        className="w-2/3"
        style={{
          backgroundImage: `url(${img})`,
          // width: "80vw",
          // height: "80vh",
        }}
      >
        <div className="flex items-center justify-between px-20 pt-20 pb-20 flex-wrap">
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
          <div className="flex gap-6 justify-center  backdrop-saturate-200 backdrop-blur-md flex-wrap w-fit px-8 py-6 ">
            {a.map((a) => (
              <div className="bg-white w-40 h-56 rounded-xl "></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Reward;
