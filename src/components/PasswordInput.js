// PasswordInput.js
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const PasswordInput = ({ title, placeholder, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex-1 flex flex-col items-start justify-start pt-[0.25rem] pb-[1.125rem] box-border gap-[0.8rem] min-w-[19.563rem] max-w-full z-[1] text-left text-[0.875rem] text-darkslategray-200 font-manrope">
      <div className="relative px-[0.5rem] leading-[1.125rem] uppercase font-semibold inline-block min-w-[6.813rem]">
        {title}
      </div>
      <div className="w-full flex flex-row items-start justify-start py-[0rem] px-[0.5rem] text-silver-200">
        <div className="flex w-full flex-row items-start justify-start relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="h-[3.125rem] w-full rounded-3xs bg-royalblue-500 box-border border-[1px] border-solid border-royalblue-500 py-2 px-4"
          />
          <span
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <FontAwesomeIcon icon={faEyeSlash} className="w-5 h-5" />
            ) : (
              <FontAwesomeIcon icon={faEye} className="w-5 h-5" />
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PasswordInput;
