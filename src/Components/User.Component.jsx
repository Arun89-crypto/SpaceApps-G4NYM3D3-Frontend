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
        <p className="text-lg text-gray-200 font-semibold">Change Username</p>
        <p className="text-lg text-gray-200 font-semibold">Change Email</p>
        <p className="text-lg text-gray-200 font-semibold">Change Password</p>
      </div>
    </div>
  );
};


export default User;