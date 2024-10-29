import React from "react";

const AddButton = ({ bgColor, fontColor }) => {
  return (
    <div>
      <button
        className="px-4 py-1 border rounded-full font-bold"
        style={{
          background: bgColor,
          color: fontColor,
          borderColor: fontColor,
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddButton;
