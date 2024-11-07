import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { deleteUserProfile } from '../api/apiFunctions'; // Import your API function

const DeleteUser = ({ userId, onSuccess }) => {
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [showDialog, setShowDialog] = useState(false); // State to control dialog visibility
    const navigate = useNavigate();

    const handleDeleteUser = async () => {
        setLoading(true); // Start loading state
        try {
            const responseMessage = await deleteUserProfile(userId); // API call to delete the user
            if (onSuccess) {
                onSuccess(responseMessage); // Invoke success callback, if provided
                navigate("/userList");
            }
        } catch (error) {
            setErrorMessage("Network error occurred"); // Handle error appropriately
        } finally {
            setLoading(false); // Stop loading state
            setShowDialog(false); // Close dialog after action
        }
    };

    return (
        <div className='flex justify-end'>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>} {/* Display error message */}
            <button
                onClick={() => setShowDialog(true)} // Open dialog on button click
                disabled={loading}  // Disable button while loading
                className={`bg-transparent mr-[-12px] ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <g filter="url(#filter0_d_2001_1151)">
                        <rect x="2" y="2" width="36" height="36" rx="5" fill="white" />
                        <path d="M30.5 8H25.25L23.75 6.5H16.25L14.75 8H9.5V11H30.5M11 30.5C11 31.2956 11.3161 32.0587 11.8787 32.6213C12.4413 33.1839 13.2044 33.5 14 33.5H26C26.7956 33.5 27.5587 33.1839 28.1213 32.6213C28.6839 32.0587 29 31.2956 29 30.5V12.5H11V30.5Z" fill="#EF4D4D" />
                    </g>
                    <defs>
                        <filter id="filter0_d_2001_1151" x="0" y="0" width="40" height="40" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset />
                            <feGaussianBlur stdDeviation="1" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2001_1151" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2001_1151" result="shape" />
                        </filter>
                    </defs>
                </svg>
            </button>

            {/* Confirmation Popup */}
            {showDialog && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-4 shadow-lg">
                        <h2 className="text-lg font-bold">Confirm Deletion</h2>
                        <p>Are you sure you want to delete this user?</p>
                        <div className="mt-4 flex justify-end">
                            <button
                                onClick={() => setShowDialog(false)} // Close dialog on cancel
                                className="mr-2 bg-gray-200 text-gray-700 px-4 py-2 rounded"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleDeleteUser} // Confirm deletion
                                disabled={loading} // Disable button while loading
                                className={`bg-red-600 text-white px-4 py-2 rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                {loading ? "Deleting..." : "Delete"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DeleteUser;
