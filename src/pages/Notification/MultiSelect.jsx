import React, { useState, useRef, useEffect } from 'react';
import Avatar from "react-avatar"; // or your chosen avatar library

const MultiSelect = ({ options, selectedUserIds, onChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAllSelected, setIsAllSelected] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const dropdownRef = useRef(null);

  // Use useEffect to update isAllSelected based on selectedUserIds
  useEffect(() => {
    setIsAllSelected(selectedUserIds.length === options.length);
  }, [selectedUserIds, options.length]);

  const handleSelectAll = () => {
    if (isAllSelected) {
      onChange([]); // Clear selection
    } else {
      onChange(options.map(option => option._id)); // Select all
    }
    setIsAllSelected(!isAllSelected);
  };

  const handleChange = (_id) => {
    const updatedSelection = selectedUserIds.includes(_id)
      ? selectedUserIds.filter(option => option !== _id) // Remove if already selected
      : [...selectedUserIds, _id]; // Add if not selected
    onChange(updatedSelection);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const filteredOptions = options.filter(option =>
    option.fullName && option.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Get the full names of the selected options
  const selectedOptionNames = selectedUserIds
    .map(_id => {
      const option = options.find(option => option._id === _id);
      return option ? option.fullName : '';
    })
    .filter(name => name) // Filter out empty names
    .join(', ');

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div className="border border-gray-200 rounded-lg" onClick={toggleDropdown}>
        <input
          type="text"
          className="h-[3.125rem] w-full rounded-3xs bg-royalblue-500 box-border border-[1px] border-solid border-royalblue-500 py-2 px-4"
          placeholder="Select options..."
          readOnly
          value={selectedOptionNames} // Display selected names here
        />
      </div>

      {isDropdownOpen && (
        <div className="mt-2 w-full absolute border border-gray-200 rounded-lg overflow-hidden max-h-64 overflow-y-auto bg-white">
          <div className="px-4 py-2">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full border border-gray-200 rounded-lg p-2 mb-2"
            />
            <button
              className="w-full text-sm bg-white border border-gray-200 rounded-lg px-4 py-2 text-left"
              onClick={handleSelectAll}
            >
              {isAllSelected ? 'Deselect All' : 'Select All'}
            </button>
          </div>

          {filteredOptions.map(option => (
            <div
              key={option._id}
              className={`flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100 ${selectedUserIds.includes(option._id) ? 'bg-gray-200' : ''}`}
              onClick={() => handleChange(option._id)}
            >
              <Avatar
                name={option.fullName}
                src={option.profilePhoto}
                size="35"
                round={true}
                className="mr-2"
              />
              <span>{option.fullName}</span>
              {selectedUserIds.includes(option._id) && (
                <span className="ml-auto text-blue-600">&#10003;</span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelect;
