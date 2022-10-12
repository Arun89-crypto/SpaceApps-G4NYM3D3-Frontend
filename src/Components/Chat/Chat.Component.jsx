import React from "react";

import { HiUserCircle, HiOutlineUserGroup } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { MdSend } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import img from "../../bg-images/2.png";

const Chat = () => {
  return (
    <>
        <div className="w-2/3">
          <div
            style={{
              backgroundImage: `url(${img})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              opacity: "85%",
              height: "100%",
            }}
          >
            <div className="flex justify-between bg-chat_bg">
              <div className=" flex items-center text-white text-md font-normal gap-4 p-5">
                <HiUserCircle className="w-12 h-12" />
                <p className="text-lg">Private Chat</p>
              </div>

              <div className="text-whtie text-lg flex gap-8 items-center px-6">
                <FiSearch className="text-white w-8 h-8" />
                <HiOutlineUserGroup className="text-white w-8 h-8" />
              </div>
            </div>
            <div className="flex justify-center pt-6 ">
              <p className="text-white text-lg font-semibold backdrop-blur-3xl px-4 py-2 rounded-full ">
                Today{" "}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between fixed bottom-3 ml-28 my-4 w-1/2  bg-chat_l_bg  rounded-full  backdrop-blur-xl px-6">
            <input
              placeholder="Type a Message"
              className=" outline-none text-gray-100   bg-transparent px-6 py-2"
            />
            <MdSend className="text-white mx-4 w-6 h-6" />
          </div>
        </div>
    </>
  );
};

export default Chat;
