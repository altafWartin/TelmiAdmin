import React, { useState, useEffect } from "react";
import MultiSelect from "./MultiSelect";
import { fetchAllProfiles, sendNotification } from "../../api/apiFunctions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReusableInput from "../../components/ReusableInput";

const Notifications = () => {
  const [users, setUsers] = useState([]);
  const [notificationText, setNotificationText] = useState("");
  const [notificationTitle, setNotificationTitle] = useState("");
  const [selectedUserIds, setSelectedUserIds] = useState([]);

  console.log("selectedUserIds", selectedUserIds);

  const notifySuccess = () => toast.success("Notification sent successfully!!!");
  const notifyError = (message) => toast.error(message || "Error sending notification");

  const fetchUsers = async () => {
    try {
      const data = await fetchAllProfiles();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
      notifyError();
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle notification title change
  const handleNotificationTitleChange = (event) => {
    const capitalizedValue = event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1);
    setNotificationTitle(capitalizedValue);
  };

  // Handle notification text change
  const handleNotificationTextChange = (event) => {
    const capitalizedValue = event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1);
    setNotificationText(capitalizedValue);
  };

  const handleNotificationSubmit = async (event) => {
    event.preventDefault();

    console.log({
      title: notificationTitle,
      body: notificationText,
      usersIdArray: selectedUserIds,
    });

    // Validate input
    if (!notificationTitle || !notificationText || selectedUserIds.length === 0) {
      notifyError("Please fill in all fields.");
      return;
    }

    try {
      const response = await sendNotification({
        title: notificationTitle,
        body: notificationText,
        usersIdArray: selectedUserIds,
      });

      if (response) {
        notifySuccess();
        
        // Clear input fields after successful submission
        setNotificationTitle("");
        setNotificationText("");
        setSelectedUserIds([]); // Clear selected user IDs here
      } else {
        notifyError("Failed to send notification. Please try again.");
      }
    } catch (error) {
      notifyError("An error occurred while sending the notification.");
    }
  };

  return (
    <section className="flex-1 rounded-xl w-full bg-gray-200 text-darkslategray-200 flex flex-col items-start justify-start pt-[2.125rem] px-[2.125rem] pb-[4.625rem] box-border gap-[0.875rem_0rem] max-w-full text-left text-[1.125rem] font-[Manrope]">
      <ToastContainer className="text-[1rem]" />
      <h1 className="text-black text-[40px] font-semibold">Notification</h1>

      <div className="self-stretch flex flex-row items-start justify-start gap-[1.056rem] max-w-full">
        <div className="flex-1">
          <ReusableInput
            title="Notification Title"
            placeholder="Notification Title"
            value={notificationTitle}
            onChange={handleNotificationTitleChange}
          />
        </div>

        <div className="flex-1">
          <div className="flex-1 flex flex-col items-start justify-start pt-[0.25rem] pb-[1.125rem] box-border gap-[1.375rem] min-w-[19.563rem] max-w-full z-[1] text-left text-[0.875rem] text-darkslategray-200 font-[Manrope]">
            <div className="relative px-[0.5rem] leading-[1.125rem] uppercase font-semibold inline-block min-w-[6.813rem]">
              Select Users
            </div>
            <div className="w-full flex flex-row items-start justify-start py-[0rem] px-[0.5rem] text-silver-200">
              <MultiSelect
                options={users}
                onChange={setSelectedUserIds} // Pass the setter function
                selectedUserIds={selectedUserIds} // Pass the selected IDs as a prop
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-[0.7rem] flex flex-col items-start justify-start gap-2">
        <div className="relative text-[0.875rem] pb-[1.125rem]  px-[0.5rem] leading-[1.125rem] uppercase font-semibold inline-block min-w-[6.813rem]">
          Notification Text
        </div>
        <textarea
          className="w-full h-[10rem] p-2 border border-gray-300 rounded-md"
          placeholder="Notification Text"
          value={notificationText}
          onChange={handleNotificationTextChange}
        />
      </div>

      <button
        onClick={handleNotificationSubmit}
        className="text-[1rem] [background:linear-gradient(90deg,_#3d8de3,_rgba(61,_141,_227,_0.43))] hover:bg-royalblue-600 text-white font-semibold ml-2 py-2 px-4 rounded"
      >
        Send Notification
      </button>
    </section>
  );
};

export default Notifications;
