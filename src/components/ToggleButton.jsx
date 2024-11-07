import React, { useState, useEffect } from 'react';

const ToggleButton = ({ initialIsYearly, onToggleChange }) => {
  const [isYearly, setIsYearly] = useState(initialIsYearly);

  const handleToggleChange = () => {
    setIsYearly((prev) => !prev);
  };

  // Notify parent component whenever isYearly changes
  useEffect(() => {
    onToggleChange(isYearly);
  }, [isYearly, onToggleChange]);

  return (
    <div className="border   border-primary">
      <label className='themeSwitcherTwo shadow-card relative inline-flex cursor-pointer select-none items-center justify-center rounded-md bg-white p-1'>
        <input
          type='checkbox'
          className='sr-only'
          checked={isYearly}
          onChange={handleToggleChange}
        />
        <span
          className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${!isYearly ? 'text-primary bg-[#f4f7ff]' : 'text-body-color'
            }`}
        >
          Year
        </span>
        <span
          className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${isYearly ? 'text-primary bg-[#f4f7ff]' : 'text-body-color'
            }`}
        >
          Month
        </span>
      </label>
    </div>
  );
};

export default ToggleButton;
