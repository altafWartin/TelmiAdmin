import React, { useState, useEffect, useRef } from "react";

const MonthDropdown = ({ onMonthSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const currentMonthIndex = new Date().getMonth(); // Get the current month index (0-11)

  const [selectedMonth, setSelectedMonth] = useState(monthNames[currentMonthIndex]); // Current month name
  const [selectedMonthValue, setSelectedMonthValue] = useState(currentMonthIndex + 1); // Current month number (1-12)

  const dropdownRef = useRef(null);

  const months = [
    { name: "January", value: 1 },
    { name: "February", value: 2 },
    { name: "March", value: 3 },
    { name: "April", value: 4 },
    { name: "May", value: 5 },
    { name: "June", value: 6 },
    { name: "July", value: 7 },
    { name: "August", value: 8 },
    { name: "September", value: 9 },
    { name: "October", value: 10 },
    { name: "November", value: 11 },
    { name: "December", value: 12 },
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleMonthSelect = (month) => {
    setSelectedMonth(month.name);
    setSelectedMonthValue(month.value);
    setIsOpen(false);
    if (onMonthSelect) {
      onMonthSelect(month.value); // Call the callback with the month value
    }
  };

  // Close the dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative flex items-center justify-center">
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between w-[8.08863rem] h-[2.02956rem] 
                   px-[0.81181rem] py-[1.18175rem] rounded-[0.50738rem] 
                   bg-[rgba(35,_125,_255,_0.10)] text-[#237DFF] font-[Inter] 
                   font-semibold text-[0.71031rem] shadow-[0px_16.236px_40.591px_rgba(191,_21,_108,_0.05)]"
      >
        <span className="">{selectedMonth}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`}
        >
          <path
            d="M16.003 7.59675L10.2553 13.9679C10.0215 14.2407 9.5929 14.2407 9.3591 13.9679L3.61142 7.59675C3.24123 7.18759 3.514 6.52515 4.05954 6.52515L15.5549 6.52515C16.1004 6.52515 16.3732 7.18759 16.003 7.59675Z"
            fill="#237DFF"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full mt-2 w-full bg-white  rounded-lg shadow-lg z-10">
          {months.map((month) => (
            <button
              key={month.value}
              onClick={() => handleMonthSelect(month)}
              className="block w-full px-4 py-2 my-1 text-left text-[#237DFF] hover:bg-[rgba(35,_125,_255,_0.10)] 
                         rounded-lg font-[Inter] font-medium text-[0.71031rem]"
            >
              {month.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default MonthDropdown;
