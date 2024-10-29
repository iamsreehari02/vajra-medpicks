// src/components/miniCard/MiniCard.js
import React from "react";
import notWorkingIcon from "../../assets/svg/notWorkingIcon.svg";
import CustomButton from "../customButton/CustomButton";
import styles from "./MiniCard.module.css";
import { BUTTON_LABEL, COLORS } from "../../constants/Constants";
import AddButton from "../addButton/AddButton";

const MiniCard = ({ count, status, title }) => {
  return (
    <div
      style={{ minHeight: "130px" }}
      className={`${
        status === "Not working" ? styles.notWorking : ""
      } bg-white p-5 `}
    >
      <div className="flex items-center justify-between">
        <h4 className="text-xl font-bold">{count}</h4>
        {status === "Not working" ? (
          <img src={notWorkingIcon} alt="Not working icon" />
        ) : title === "Discarded" ? null : (
          //   <CustomButton
          //     label={BUTTON_LABEL.ADD}
          //     bgColor={COLORS.TRANSPARENT}
          //     borderWidth={1}
          //     fontColor={COLORS.PRIMARY_COLOR}
          //     borderColor={COLORS.PRIMARY_COLOR}
          //   />
          <AddButton
            bgColor={COLORS.TRANSPARENT}
            fontColor={COLORS.PRIMARY_COLOR}
            borderColor={COLORS.PRIMARY_COLOR}
          />
        )}
      </div>
      <h5 className="mt-8">{title || status}</h5>
    </div>
  );
};

export default MiniCard;
