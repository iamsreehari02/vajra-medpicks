import React from "react";
import { FaBell, FaCog, FaUser } from "react-icons/fa"; // Placeholder icons

const Header = ({ activeTab }) => {
  return (
    <header className="sticky top-0 bg-white shadow-md p-4 flex justify-between items-center z-10">
      {/* Left Side - Active Tab and Heading */}
      <div>
        <h5 className="text-lg font-semibold text-gray-800">{activeTab}</h5>
        <h1 className="text-2xl font-bold">Welcome to Your Dashboard</h1>
      </div>

      {/* Right Side - Icons */}
      <div className="flex space-x-4">
        <div className="cursor-pointer">
          <FaBell size={24} />
        </div>
        <div className="cursor-pointer">
          <FaCog size={24} />
        </div>
        <div className="cursor-pointer">
          <FaUser size={24} />
        </div>
      </div>
    </header>
  );
};

export default Header;
