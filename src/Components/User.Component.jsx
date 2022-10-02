import React from "react";

const User = () => {
  return (
    <div className="bg-acc_gray w-2/3 pb-36">
      <div className="pl-56 mt-28">
        <p className="text-white font-semibold text-3xl">Settings</p>
      </div>
      <div className=" w-96">
        <hr className="mt-6 " />
      </div>
      <div className="flex flex-col ml-56 mt-12 gap-4">
        <input
          placeholder="Change Username"
          className="w-1/2 outline-none text-lg text-gray-200 font-semibold bg-transparent"
        />
        <input
          placeholder="Change Email"
          className="w-1/2 outline-none text-lg text-gray-200 font-semibold bg-transparent"
        />
        <input
          placeholder="Change Password"
          className="w-1/2 outline-none text-lg text-gray-200 font-semibold bg-transparent"
        />
      </div>
      <div className="flex justify-end w-1/2 pt-12">
        <button className="text-xl font-semibold text-gray-400 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-1 hover:bg-gradient-to-r hover:from-cyan-500 hoverto-blue-500">Submit</button>
      </div>
    </div>
  );
};

export default User;
