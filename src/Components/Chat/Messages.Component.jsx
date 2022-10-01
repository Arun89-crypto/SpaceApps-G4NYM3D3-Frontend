import React from "react";
import { FaUserSecret } from "react-icons/fa";

const Message = (props) => {
  return (
    <>
      <div className="flex items-center justify-between p-4">
        <div className="text-white flex gap-6 items-center ">
          <div>
            <FaUserSecret className="w-10 h-10 border-white border-2 rounded-full" />
          </div>
          <div className="flex flex-col items-start">
            <p className="text-md text-gray-200 ">Person {props.num}</p>
            <p className="font-light text-gray-300 text-sm">
              Hey, how are you doing?
            </p>
          </div>
        </div>
        <div>
          <p className="font-light text-gray-300 text-sm">Time Stamp</p>
        </div>
      </div>
      <hr />
    </>
  );
};
export default Message;
