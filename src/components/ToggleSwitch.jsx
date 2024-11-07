import React, { useState, useEffect } from 'react';
import { blockUserProfile } from '../api/apiFunctions'; // Import your API function

const Switcher = ({
    userId, // Pass the userId as a prop
    labelOn = "Unblocked",
    labelOff = "Blocked",
    defaultChecked,
    colorOn = "text-green-500",
    colorOff = "text-red-500"
}) => {
    console.log("defaultChecked", defaultChecked)
    const [isChecked, setIsChecked] = useState("");

    const [loading, setLoading] = useState(false);
    console.log("isChecked", isChecked)
    // Log initial state and props
    useEffect(() => {
        console.log("defaultChecked prop:", defaultChecked);
        setIsChecked(!defaultChecked);
    }, [defaultChecked]); // Update isChecked when defaultChecked changes

    const handleCheckboxChange = async () => {
        setLoading(true); // Start loading state
        const newCheckedState = !isChecked;
        try {
            const message = await blockUserProfile(userId, newCheckedState); // Call API to block/unblock the user
            console.log(message); // Log the success message or handle it as needed
            setIsChecked(newCheckedState); // Update state after successful API call
        } catch (error) {
            console.error('Error blocking/unblocking user:', error); // Handle error
        } finally {
            setLoading(false); // Stop loading state
        }
    };

    return (
        <div className='w-32 flex  justify-end row'> {/* Added padding for better spacing */}

            <label className='relative inline-flex justify-center  cursor-pointer select-none items-center'>
                <input
                    type='checkbox'
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className='sr-only w-full'
                />

                <div className='flex h-[46px] w-[6.3rem] gap-3 items-center justify-center rounded-[0.375rem] bg-white shadow-[0px_0px_2px_0px_rgba(0,0,0,0.25)] border border-gray-300'>
                    <span
                        className={`flex h-9 w-9 items-center justify-center rounded bg-white shadow-[0px_0px_2px_0px_rgba(0,0,0,0.25)] border border-gray-300 ${!isChecked ? 'invisible text-white' : 'text-body-color'}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M5.63606 18.3641C6.47179 19.1998 7.46395 19.8627 8.55588 20.315C9.64782 20.7673 10.8182 21.0001 12.0001 21.0001C13.182 21.0001 14.3523 20.7673 15.4442 20.315C16.5362 19.8627 17.5283 19.1998 18.3641 18.3641C19.1998 17.5283 19.8627 16.5362 20.315 15.4442C20.7673 14.3523 21.0001 13.182 21.0001 12.0001C21.0001 10.8182 20.7673 9.64782 20.315 8.55588C19.8627 7.46395 19.1998 6.47179 18.3641 5.63606C16.6762 3.94822 14.387 3 12.0001 3C9.61309 3 7.32389 3.94822 5.63606 5.63606C3.94822 7.32389 3 9.61309 3 12.0001C3 14.387 3.94822 16.6762 5.63606 18.3641ZM7.80706 17.6071C9.1553 18.6161 10.8221 19.1054 12.5018 18.9852C14.1816 18.865 15.7617 18.1433 16.9525 16.9525C18.1433 15.7617 18.865 14.1816 18.9852 12.5018C19.1054 10.8221 18.6161 9.1553 17.6071 7.80706L14.8281 10.5861C14.6395 10.7682 14.3869 10.869 14.1247 10.8667C13.8625 10.8645 13.6116 10.7593 13.4262 10.5739C13.2408 10.3885 13.1357 10.1377 13.1334 9.87546C13.1311 9.61326 13.2319 9.36066 13.4141 9.17206L16.1921 6.39306C14.8435 5.38667 13.1777 4.89957 11.4994 5.0209C9.82107 5.14223 8.2426 5.86388 7.05283 7.05376C5.86306 8.24365 5.14158 9.8222 5.02042 11.5005C4.89926 13.1788 5.38653 14.8446 6.39306 16.1931L9.17206 13.4141C9.36066 13.2319 9.61326 13.1311 9.87546 13.1334C10.1377 13.1357 10.3885 13.2408 10.5739 13.4262C10.7593 13.6116 10.8645 13.8625 10.8667 14.1247C10.869 14.3869 10.7682 14.6395 10.5861 14.8281L7.80706 17.6071Z" fill="#68E91D" />
                        </svg>
                    </span>
                    <span
                        className={`flex h-9 w-9 items-center justify-center rounded bg-white shadow-[0px_0px_2px_0px_rgba(0,0,0,0.25)] border border-gray-300 ${isChecked ? 'invisible text-white' : 'text-body-color'}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88334 20.6867 5.825 19.9743 4.925 19.075C4.025 18.1757 3.31267 17.1173 2.788 15.9C2.26333 14.6827 2.00067 13.3827 2 12C1.99933 10.6173 2.262 9.31733 2.788 8.1C3.314 6.88267 4.02633 5.82433 4.925 4.925C5.82367 4.02567 6.882 3.31333 8.1 2.788C9.318 2.26267 10.618 2 12 2C13.382 2 14.682 2.26267 15.9 2.788C17.118 3.31333 18.1763 4.02567 19.075 4.925C19.9737 5.82433 20.6863 6.88267 21.213 8.1C21.7397 9.31733 22.002 10.6173 22 12C21.998 13.3827 21.7353 14.6827 21.212 15.9C20.6887 17.1173 19.9763 18.1757 19.075 19.075C18.1737 19.9743 17.1153 20.687 15.9 21.213C14.6847 21.739 13.3847 22.0013 12 22ZM12 20C12.9 20 13.7667 19.8543 14.6 19.563C15.4333 19.2717 16.2 18.8507 16.9 18.3L5.7 7.1C5.15 7.8 4.729 8.56667 4.437 9.4C4.145 10.2333 3.99933 11.1 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20ZM18.3 16.9C18.85 16.2 19.271 15.4333 19.563 14.6C19.8543 13.7667 20 12.9 20 12C20 9.775 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C11.1 4 10.2333 4.145 9.4 4.437C8.56667 4.729 7.8 5.15 7.1 5.7L16.9 16.9Z" fill="#FF4747" />
                        </svg>
                    </span>
                </div>
            </label>
            <span className={`w-full text-center text-body-color font-medium text-sm  ${isChecked ? colorOn : colorOff}`}>
                {isChecked ? labelOn : labelOff}
            </span>
        </div>
    );
};

export default Switcher;
