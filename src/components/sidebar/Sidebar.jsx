import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { sideBarFooterButtons, sidebarTabs } from "../../utils/data";
import LOGO from "../../assets/images/vajraLogo.png";
import { COLORS, IMG_ALT } from "../../constants/Constants";
import CustomButton from "../customButton/CustomButton";
import styles from "./Sidebar.module.css";

const Sidebar = ({ onTabChange, activeTab }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleTabClick = (tab) => {
    onTabChange(tab);
  };

  return (
    <div className="flex h-screen">
      <div
        className={`fixed inset-y-0 left-0 bg-sidebarBGColor text-white p-4 space-y-4 pt-12
                    transform ${isOpen ? "translate-x-0" : "-translate-x-full"} 
                    transition-transform duration-300 md:translate-x-0 md:w-20 lg:w-64 overflow-y-auto`}
      >
        <div className="flex items-center justify-between lg:justify-center">
          <img src={LOGO} alt={IMG_ALT.LOGO} />
          <button
            className="text-white lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FiMenu size={24} />
          </button>
        </div>

        <nav className="space-y-3 pt-6 pb-14 w-fit  mx-auto">
          {sidebarTabs.map((tab) => (
            <div
              key={tab.id}
              className="flex align-middle gap-6 cursor-pointer py-4"
              onClick={() => handleTabClick(tab.key)}
            >
              <img src={tab.icon} alt={tab.alt} />
              <h5
                className={`${activeTab === tab.key ? styles.activeTab : null}`}
              >
                {tab.tabName}
              </h5>
            </div>
          ))}
        </nav>

        <div className="space-y-4">
          {sideBarFooterButtons.map((button) => (
            <CustomButton
              key={button.key}
              label={button.label}
              icon={button.icon}
              bgColor={COLORS.TRANSPARENT}
              fontColor={COLORS.GRAY}
              borderWidth={1}
              borderColor={COLORS.GRAY}
              minWidth={183}
            />
          ))}
        </div>
      </div>

      <div className="flex-1 p-4 md:ml-20 lg:ml-56">
        <button
          className="p-2 text-gray-800 bg-gray-100 rounded md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FiMenu size={24} />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
