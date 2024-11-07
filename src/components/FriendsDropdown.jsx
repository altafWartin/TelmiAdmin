import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from "react-avatar";


const FriendsDropdown = ({ friendsData }) => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const dropdownRef = useRef(null); // Reference for the dropdown

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const navigateToProfile = (id) => {
        navigate(`/userList/userProfile/${id}`);
    };

    // Close dropdown if clicking outside of it
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
        <div className=" inline-block text-left" ref={dropdownRef}>
            <div>
                <button
                    onClick={toggleDropdown}
                    className="inline-flex items-center justify-between w-full rounded-lg px-4 py-2 bg-[#227DFF0D] text-[#333] hover:bg-[#c4d4ea] focus:outline-none"
                >
                    Friends List
                    <span className="ml-2 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 33 34" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M17.4721 22.097C17.2143 22.3548 16.8646 22.4996 16.5 22.4996C16.1354 22.4996 15.7857 22.3548 15.5279 22.097L7.74948 14.3186C7.61816 14.1918 7.51341 14.04 7.44134 13.8723C7.36928 13.7045 7.33135 13.5241 7.32976 13.3415C7.32818 13.159 7.36297 12.9779 7.4321 12.8089C7.50124 12.6399 7.60334 12.4864 7.73244 12.3573C7.86154 12.2282 8.01506 12.1261 8.18405 12.057C8.35303 11.9878 8.53409 11.9531 8.71666 11.9546C8.89923 11.9562 9.07966 11.9942 9.24741 12.0662C9.41517 12.1383 9.56689 12.243 9.69373 12.3744L16.5 19.1806L23.3062 12.3744C23.5656 12.1239 23.9129 11.9853 24.2734 11.9884C24.6339 11.9916 24.9788 12.1362 25.2337 12.3911C25.4887 12.646 25.6333 12.9909 25.6364 13.3514C25.6395 13.712 25.5009 14.0593 25.2505 14.3186L17.4721 22.097Z" fill="#666666" />
                        </svg>
                    </span>
                </button>
            </div>
            {isOpen && (
               <ul className="absolute mt-2 w-64 max-h-[15rem] overflow-y-auto overflow-x-hidden rounded-md flex flex-col shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                   {friendsData.map((friend, index) => (
                       <li
                           key={friend._id}
                           onClick={() => navigateToProfile(friend._id)}
                           className="flex flex-col justify-start items-start py-2 text-gray-700 hover:bg-gray-200 cursor-pointer"
                       >
                           <div className="w-full  flex items-center space-x-3 ">
                               <Avatar
                                   name={friend.fullName}
                                   src={friend.profilePhoto}
                                   size="30"
                                   round={true}
                               />
                               <span className="w-44 text-sm font-medium truncate">
                                   {friend.fullName}
                               </span>
                           </div>
                       </li>
                   ))}
               </ul>
            )}
        </div>
    );
};

export default FriendsDropdown;
