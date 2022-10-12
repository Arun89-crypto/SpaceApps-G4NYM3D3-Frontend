import React from "react";
import Navbar from "../Components/Navbar";
import { HiUserCircle, HiOutlineUserGroup } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { MdSend } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import Message from "../Components/Chat/Messages.Component";
import img from "../bg-images/2.png";
import Chat from "../Components/Chat/Chat.Component";

const ChatPage = () => {
  var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  return (
    <>
      <Navbar />
      <div className="flex ">
        <div className="w-1/3">
          {/* Left Header */}
          <div className="flex justify-between bg-chat_l_bg">
            <div className=" flex items-center text-white text-md font-normal gap-4 p-5">
              <HiUserCircle className="w-12 h-12" />
              <p>My Username</p>
            </div>

            <div className="text-whtie text-lg flex gap-4 items-center px-6">
              <AiOutlinePlus className="text-white w-8 h-8" />
            </div>
          </div>
          <div className="bg-mes_bg py-3 " style={{ height: "79.3vh" }}>
            {/* Search Bar */} 
            <div className="flex items-center gap-4 px-6 py-3 border-2 border-gray-100 rounded-full mx-4 ">
              <FiSearch className="text-white w-5 h-5" />
              <input
                placeholder="Search or Start a new chat"
                className="bg-transparent outline-none text-white w-full "
              />
            </div>
            <hr className="mt-3" />
            <div
              className="overflow-y-scroll flex flex-col"
              style={{ height: "69.3vh" }}
            >
              {a.map((a) => (
                <Message num={a} />
              ))}
            </div>
          </div>
        </div>

        {/* Right component */}
        <Chat />
      </div>
    </>
  );
};

export default ChatPage;
