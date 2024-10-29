import React from "react";
import { Dropdown } from "primereact/dropdown";
// import styles from "./CustomDropdown.module.css";

const CustomDropdown = ({ options, value, onChange, placeholder }) => {
  return (
    <Dropdown
      options={options}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="customDropdown"
      style={{ border: "none" }}
    />
  );
};

export default CustomDropdown;
