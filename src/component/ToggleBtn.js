import React, { useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";

const ToggleBtn = ({ onChange, checked }) => {
    return (
        <div className="toggle__btn">
            <DarkModeToggle
                onChange={onChange}
                checked={checked}
                size={50}
                className="darkMode__toggleBtn"
            />
        </div>
    );
};

export default ToggleBtn