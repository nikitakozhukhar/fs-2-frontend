import React from "react";
import "./CheckBox.css";

interface CheckBoxProps {
  id: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({ id }) => {
  return (
    <div className="checkbox-wrapper-3">
      <input type="checkbox" id={`cbx-${id}`} />
      <label htmlFor={`cbx-${id}`} className="toggle">
        <span></span>
      </label>
    </div>
  );
};

export default CheckBox;
