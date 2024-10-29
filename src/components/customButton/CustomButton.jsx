import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IMG_ALT } from "../../constants/Constants";

const CustomButton = ({
  key,
  label,
  bgColor = "#FF6B00",
  fontColor = "#FFFFFF",
  borderWidth = "2px",
  borderColor = "transparent",
  showArrow = false,
  icon = null,
  onClick,
  minWidth,
}) => {
  return (
    <button
      onClick={onClick}
      key={key}
      style={{
        backgroundColor: bgColor,
        color: fontColor,
        borderWidth: borderWidth,
        borderColor: borderColor,
        borderRadius: "22px",
        minWidth: minWidth,
      }}
      className={`flex items-center justify-start border rounded px-9 py-2 transition duration-200 hover:opacity-90 gap-4`}
    >
      {icon && <img src={icon} alt={IMG_ALT.FOOTER_BUTTON_ICON} />}
      <h4 className="text-center text-sm">{label}</h4>
      {showArrow && <AiOutlineArrowRight className="ml-2" />}
    </button>
  );
};

export default CustomButton;
