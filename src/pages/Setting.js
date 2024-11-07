import React, { useState, useEffect } from "react";
import PasswordInput from "../components/PasswordInput"; // Ensure the correct import path
import { resetPassword } from "../api/apiFunctions"; // Ensure the correct import path
import { toast, ToastContainer } from 'react-toastify'; // Import toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toast notifications

const Setting = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState(""); // To store the email from local storage

  // Get email from local storage on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user"); // Retrieve the user string
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser); // Parse the JSON string
        setEmail(user.email); // Access the email property
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Basic validation
    if (newPassword !== confirmPassword) {
      toast.error("New password and confirmation do not match."); // Show error toast
      return;
    }

    const data = {
      email, // Include email in the request data
      oldPassword,
      newPassword,
    };

    try {
      const responseMessage = await resetPassword(data);
      toast.success(responseMessage); // Show success toast
      // Optionally reset form fields
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      toast.error("Error resetting password. Please try again."); // Show error toast
    }
  };

  return (
    <div className="flex w-full justify-center items-center h-screen">
      <div className="w-[32.5rem] h-auto px-[3rem] py-[2rem] flex-shrink-0 rounded-xl bg-gray-100 shadow-lg">
        <h2 className="text-[#333] font-manrope text-[1.5rem] font-semibold leading-[1.875rem] mb-6">
          Change Password
        </h2>
        <form onSubmit={handleSubmit} className="gap-2">
          {/* Old Password Input */}
          <PasswordInput
            title="Old Password" // Changed from title to label
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            placeholder="Enter old password"
          />
          {/* New Password Input */}
          <PasswordInput
            title="New Password" // Changed from title to label
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter new password"
          />
          {/* Confirm Password Input */}
          <PasswordInput
            title="Confirm Password" // Changed from title to label
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm new password"
          />
          {/* Submit Button */}
          <div className="w-full">
            <button
              type="submit"
              className="text-[1rem] [background:linear-gradient(90deg,_#3d8de3,_rgba(61,_141,_227,_0.43))] hover:bg-royalblue-600 text-white font-semibold ml-2 py-2 px-4 rounded"
            >
              Change Password
            </button>
          </div>
        </form>
      </div>
      <ToastContainer /> {/* Include the ToastContainer */}
    </div>
  );
};

export default Setting;
