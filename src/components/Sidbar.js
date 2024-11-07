import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom"; // Import useNavigate
import { ReactComponent as DataIcon } from "../Assets/Icons/Vector.svg";
import { ReactComponent as SettingIcon } from "../Assets/Icons/settingicon.svg";
import userList from "../Assets/Icons/Group 514964.svg";

const Sidbar = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear the token or any other relevant data
    navigate("/"); // Navigate to the home screen
  };

  return (
    <div className="h-[75vh] sticky d-flex flex-col justify-between rounded-xl bg-background-2 shadow-[0px_4px_50px_rgba(34,_125,_255,_0.1)] p-4 box-border text-left text-[1.rem] text-darkslategray-200 font-heading-heading-4 ">
      <div className="self-stretch flex flex-col items-start justify-start ">
        {/* Data Analysis Link */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `self-stretch mb-2 no-underline rounded-3xs flex flex-row items-start justify-end ${
              isActive
                ? "[background:linear-gradient(90deg,_#3d8de3,_rgba(61,_141,_227,_0.43))] active text-white"
                : "text-black"
            }`
          }
        >
          <div className="flex-1 flex flex-row items-start justify-start py-[0.813rem]  px-[1.538rem] gap-[1rem] z-[1]">
            <DataIcon className="w-5 h-5 fill-current " />
            <div className="flex-1 flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
              <div className="self-stretch w-32 relative leading-[1.125rem] z-[2]">
                Data Analysis
              </div>
            </div>
          </div>
        </NavLink>

        {/* User List Link */}
        <NavLink
          to="/userList"
          className={({ isActive }) =>
            `self-stretch no-underline rounded-3xs flex flex-row items-start justify-end py-[0rem] pr-[0.188rem] pl-[0rem] ${
              isActive
                ? "[background:linear-gradient(90deg,_#3d8de3,_rgba(61,_141,_227,_0.43))] active pl-5 text-white"
                : "text-black"
            }`
          }
        >
          <div className="flex-1 flex flex-row items-start justify-start py-[0.813rem] px-[1.538rem] gap-[1rem] z-[1]">
            <i className="bi bi-people"></i>
            <div className="flex-1 flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
              <div className="self-stretch relative leading-[1.125rem] z-[2]">
                User List
              </div>
            </div>
          </div>
        </NavLink>

        {/* Notification Link */}
        <NavLink
          to="/notification"
          className={({ isActive }) =>
            `self-stretch no-underline rounded-3xs flex flex-row items-start justify-end py-[0rem] pr-[0.188rem] pl-[0rem] ${
              isActive
                ? "[background:linear-gradient(90deg,_#3d8de3,_rgba(61,_141,_227,_0.43))] active pl-5 text-white"
                : "text-black"
            }`
          }
        >
          <div className="flex-1 flex flex-row items-start justify-start py-[0.813rem] px-[1.538rem] gap-[1rem] z-[1]">
            <i className="bi bi-bell"></i>{" "}
            <div className="flex-1 flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
              <div className="self-stretch relative leading-[1.125rem] z-[2]">
                Notification
              </div>
            </div>
          </div>
        </NavLink>

        {/* Setting Link */}
        <NavLink
          to="/setting"
          className={({ isActive }) =>
            `self-stretch no-underline rounded-3xs flex flex-row items-start justify-end py-[0rem] pr-[0.188rem] pl-[0rem] ${
              isActive
                ? "[background:linear-gradient(90deg,_#3d8de3,_rgba(61,_141,_227,_0.43))] active pl-5 text-white"
                : "text-black"
            }`
          }
        >
          <div className="flex-1 flex flex-row items-start justify-start py-[0.813rem] px-[1.538rem] gap-[1rem] z-[1]">
            <i className="bi bi-sliders"></i>{" "}
            <div className="flex-1 flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
              <div className="self-stretch relative leading-[1.125rem] z-[2]">
                Setting
              </div>
            </div>
          </div>
        </NavLink>
      </div>

      {/* Logout Section */}
      <div className="flex flex-row py-0 px-[1.538rem] items-center gap-3 cursor-pointer" onClick={handleLogout}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1"
          />
        </svg>
        <div className="leading-5 pt-[1px]">{`Logout `}</div>
      </div>
    </div>
  );
};

export default Sidbar;
