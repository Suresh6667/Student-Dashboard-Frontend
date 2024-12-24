// frontend/student-dashboard/src/components/Navbar.jsx

import React from 'react';
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuSettings2, LuMessageSquareMore  } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className="flex items-center p-6 space-x-10 bg-gray-100 rounded-xl">
      <div className="flex bg-white p-4 w-2/3 space-x-4 rounded-lg cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input className="bg-white outline-none w-4/5 font-semibold" type="text" placeholder="Search your course" />
      </div>
    <div className="flex items-center space-x-8">
      <AiOutlineQuestionCircle className="w-6 h-6 text-gray-500 cursor-pointer" />
      <LuMessageSquareMore  className="w-6 h-6 text-gray-500 cursor-pointer" />
      <LuSettings2 className="w-6 h-6 text-gray-500 cursor-pointer" />
      <IoMdNotificationsOutline className="w-6 h-6 text-gray-500 cursor-pointer" />
      <img
        src="/Avatar Image.png"
        alt="Profile"
        className="w-10 h-10 rounded-full"
      />
      <div className="font-semibold text-xl">Adeline H. Dancy</div>
    </div>
  </div>
);
};

export default Navbar;
