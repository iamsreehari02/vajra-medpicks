import React, { useState } from "react";
import { headerDetailData, headerIcons, locations } from "../../utils/data";
import RatingIMG from "../../assets/svg/ratingsIMG.svg";
import CustomButton from "../customButton/CustomButton";
import CustomDropdown from "../customDropdown/CustomDropdown";
import FieldIcon from "../../assets/svg/fieldIcon.svg";
import {
  BUTTON,
  FIELD_NAME,
  HEADER_TITLE,
  IMG_ALT,
  SELECT_LOCATION,
} from "../../constants/Constants";

const Header = ({ activeTab }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const onDropdownChange = (e) => {
    setSelectedOption(e.value);
    console.log("Selected:", e.value);
  };
  return (
    <header className="sticky top-0 bg-mainBG shadow-md py-12 px-8 flex justify-between items-center z-10 w-full">
      <div className="w-1/3 space-y-5">
        <h5 className="capitalize">{activeTab}</h5>
        <h1>{HEADER_TITLE}</h1>
      </div>

      <div className="w-1/2">
        <div className="flex items-center justify-between mb-5">
          <div className="customDropdown flex p-1 items-center gap-3 mr-2">
            <img src={FieldIcon} alt={IMG_ALT.FIELD_ICON} />
            <p>{FIELD_NAME}</p>
          </div>
          <CustomDropdown
            options={locations}
            value={selectedOption}
            onChange={onDropdownChange}
            placeholder={SELECT_LOCATION}
          />
          <div className="flex gap-4">
            {headerIcons.map((icon) => (
              <img
                src={icon.icon}
                alt={IMG_ALT.HEADER_ICONS}
                key={icon.key}
                className="cursor-pointer"
              />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between gap-12">
          {headerDetailData.map((data) => (
            <div
              key={data.id}
              className="space-y-5 flex flex-col justify-center items-center"
            >
              {data.type === "rating" ? (
                <div className="flex items-baseline gap-2 justify-center">
                  {Array.from({ length: 4 }, (_, index) => (
                    <img
                      src={RatingIMG}
                      alt={`Rating ${index + 1}`}
                      key={index}
                      className="w-5 h-5"
                    />
                  ))}
                  <p>{data.title}</p>
                </div>
              ) : (
                <h4 style={{ fontFamily: "Inter" }}>{data.title}</h4>
              )}
              {data.type === BUTTON ? (
                <CustomButton label={data.description} />
              ) : (
                <h4>{data.description}</h4>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
