import React from "react";
import "./ui.css";

export const Input = ({ max, defaultValue, onChange }) => {
  return (
    <input
    className = 'input'
    type="number"
    min="1"
    max= {max}
    defaultValue={defaultValue}
    onChange={onChange}
  />
  );
};
