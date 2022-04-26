import React from "react";
import "./ui.css";

export const Button = ({ onClick, disabled, title }) => {
  return (
    <button 
    className= 'button'
    onClick={onClick} 
    disabled={disabled}>
      {title}
    </button>
  );
};
