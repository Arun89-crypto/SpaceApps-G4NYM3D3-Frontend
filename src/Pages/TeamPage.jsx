import React from "react";
import img from "../bg-images/1.png";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import Navbar from "../Components/Navbar";

const TeamPage = () => {
  var a = [1, 2, 3, 4, 5, 6];
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
        <div className="px-20 pt-32 pb-20">
          <div className="flex items-center text-white text-2xl gap-8 font-semibold">
            <AiOutlineArrowLeft />
            <p>Team Members</p>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          {a.map((a) => (
            <div className="flex gap-8 items-center text-white font-bold text-2xl px-40 ">
              <p>{a}.</p>
              <p>Member {a}</p>
              <BsLinkedin className="w-7 h-7" />
              <BsGithub className="w-8 h-8" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TeamPage;
