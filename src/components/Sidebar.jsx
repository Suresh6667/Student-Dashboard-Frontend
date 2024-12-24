import React from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { RiBookReadFill } from "react-icons/ri";
import { RiBookMarkedLine } from "react-icons/ri";
import { MdHelpOutline } from "react-icons/md";
import { VscPieChart } from "react-icons/vsc";
import { TbSettings2 } from "react-icons/tb";



const Sidebar = () => {
  return (
    <div className="w-80  bg-white flex flex-col px-4 py-6">
    <div className="text-3xl font-bold ml-1 mt-3 mb-8 flex items-center space-x-2">
      <span>
        <img src="/Vector.png" alt="logo" />
      </span>
    </div>
    <nav>
      <ul className="text-xl">
        <li className="py-4 px-4 mb-3 hover:bg-gray-200 rounded-lg flex items-center space-x-2 text-gray-700 cursor-pointer">
          <AiOutlineDashboard className="w-6 h-6" />
          <span className="font-semibold">Dashboard</span>
        </li>
        <li className="py-4 px-4 mb-3 flex items-center space-x-2 bg-gray-200 rounded-lg font-medium cursor-pointer">
          <RiBookReadFill className="w-6 h-6" />
          <span className="font-semibold">Students</span>
        </li>
        <li className="py-4 px-4 mb-3 hover:bg-gray-200 rounded-lg flex items-center space-x-2 text-gray-700 cursor-pointer">
          <RiBookMarkedLine className="w-6 h-6" />
          <span className="font-semibold">Chapter</span>
        </li>
        <li className="py-4 px-4 mb-3 hover:bg-gray-200  rounded-lg flex items-center space-x-2 text-gray-700 cursor-pointer">
          <MdHelpOutline className="w-6 h-6" />
          <span className="font-semibold">Help</span>
        </li>
        <li className="py-4 px-4 mb-3 hover:bg-gray-200 rounded-lg flex items-center space-x-2 text-gray-700 cursor-pointer">
          <VscPieChart className="w-6 h-6" />
          <span className="font-semibold">Reports</span>
        </li>
        <li className="py-4 px-4 mb-3 hover:bg-gray-200 rounded-lg flex items-center space-x-2 text-gray-700 cursor-pointer">
          <TbSettings2 className="w-6 h-6" />
          <span className="font-semibold">Settings</span>
        </li>
      </ul>
    </nav>
  </div>
  );
};

export default Sidebar;
