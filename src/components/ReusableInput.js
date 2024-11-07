// ReusableInput.js
import React from "react";

const ReusableInput = ({ title, placeholder, value, onChange }) => {
  return (
    <div className="flex-1 flex flex-col items-start justify-start pt-[0.25rem]  pb-[1.125rem] box-border gap-[1.375rem] min-w-[19.563rem] max-w-full z-[1] text-left text-[0.875rem] text-darkslategray-200 font-manrope">
      <div className="relative px-[0.5rem]  leading-[1.125rem] uppercase font-semibold inline-block min-w-[6.813rem]">
        {title}
      </div>
      <div className="w-full flex flex-row items-start justify-start py-[0rem] px-[0.5rem] text-silver-200">
        <div className="flex w-full flex-row items-start justify-start relative">
          <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="h-[3.125rem] w-full  rounded-3xs bg-royalblue-500 box-border border-[1px] border-solid border-royalblue-500 py-2 px-4"
          />
        </div>
      </div>
    </div>
  );
};

export default ReusableInput;
