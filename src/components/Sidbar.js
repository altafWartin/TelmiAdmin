import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import userList from "../Assets/Icons/Group 514964.svg"

const Sidbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  const isLinkActive = (path) => {
    return path === activeLink;
  };
  return (
    <div className="w-[17.875rem] gap-[9.625rem] h-[900px] d-flex content-between justify-between rounded-xl bg-background-2 shadow-[0px_4px_50px_rgba(34,_125,_255,_0.1)] flex flex-col items-start pt-[2.625rem] pb-[36.75rem] pr-[1rem] pl-[1.188rem] box-border text-left text-[1.125rem] text-darkslategray-200 font-heading-heading-4 mq900:hidden mq900:pt-[1.688rem] mq900:pb-[23.875rem] mq900:box-border mq450:gap-[1.25rem] mq450:pt-[1.25rem] mq450:pb-[15.5rem] mq450:box-border">
      <div className="self-stretch flex flex-col items-start justify-start ">
        <Link
          to="/"
          onClick={() => handleLinkClick("/")}
          className={`self-stretch mb-3 no-underline rounded-3xs  flex flex-row items-start justify-end  ${isLinkActive("/")
            ? "[background:linear-gradient(90deg,_#3d8de3,_rgba(61,_141,_227,_0.43))] active  pl-5  text-white"
            : "text-black"
            }`} >
          <div className="flex-1  flex flex-row items-start justify-start py-[0.813rem] pr-[0.625rem] pl-[0.938rem] gap-[1rem] z-[1]">
            <img
              className="h-[1.313rem] w-[1.5rem] relative text-white min-h-[1.313rem] z-[1]"
              alt=""
              src="/vector-3.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
              <div className="self-stretch relative leading-[1.125rem] z-[2]">
                Data Analysis
              </div>
            </div>
          </div>
        </Link>


        <Link
          to="/userList"
          onClick={() => handleLinkClick("/userList")}
          className={`self-stretch no-underline rounded-3xs  flex flex-row items-start justify-end py-[0rem] pr-[0.188rem] pl-[0rem] ${isLinkActive("/userList")
            ? "[background:linear-gradient(90deg,_#3d8de3,_rgba(61,_141,_227,_0.43))] active  pl-5  text-white"
            : "text-black"
            }`} >
          <div className="flex-1  flex flex-row items-start justify-start py-[0.813rem] pr-[0.625rem] pl-[0.938rem] gap-[1rem] z-[1]">
            {isLinkActive("/userList") ? <img
              className="h-[1.375rem] w-[1.25rem] relative z-[2]"
              alt=""
              src="/group-514964.svg"
            /> : <img
              className="h-[1.375rem] w-[1.25rem] relative z-[2]"
              alt=""
              src={userList}
            />}

            <div className="flex-1 flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
              <div className="self-stretch relative leading-[1.125rem] z-[2]">
                User list
              </div>
            </div>
          </div>
        </Link>
     
        <Link
          to="/notification"
          onClick={() => handleLinkClick("/notification")}
          className={`self-stretch no-underline rounded-3xs  flex flex-row items-start justify-end py-[0rem] pr-[0.188rem] pl-[0rem] ${isLinkActive("/notification")
            ? "[background:linear-gradient(90deg,_#3d8de3,_rgba(61,_141,_227,_0.43))] active  pl-5  text-white"
            : "text-black"
            }`} >
          <div className="flex-1  flex flex-row items-start justify-start py-[0.813rem] pr-[0.625rem] pl-[0.938rem] gap-[1rem] z-[1]">
            <img
              className="h-[1.125rem] w-[1.25rem] relative min-h-[1.125rem] z-[1]"
              loading="lazy"
              alt=""
              src="/group-2.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
              <div className="self-stretch relative leading-[1.125rem] z-[2]">
                Notification
              </div>
            </div>
          </div>
        </Link>
        <Link
          to="/setting"
          onClick={() => handleLinkClick("/setting")}
          className={`self-stretch no-underline rounded-3xs  flex flex-row items-start justify-end py-[0rem] pr-[0.188rem] pl-[0rem] ${isLinkActive("/setting")
            ? "[background:linear-gradient(90deg,_#3d8de3,_rgba(61,_141,_227,_0.43))] active  pl-5  text-white"
            : "text-black"
            }`} >
          <div className="flex-1  flex flex-row items-start justify-start py-[0.813rem] pr-[0.625rem] pl-[0.938rem] gap-[1rem] z-[1]">
            <img
              className="h-[1.125rem] w-[1.25rem] relative min-h-[1.125rem] z-[1]"
              loading="lazy"
              alt=""
              src="/group-2.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
              <div className="self-stretch relative leading-[1.125rem] z-[2]">
                Setting
              </div>
            </div>
          </div>
        </Link>
      </div>


      <div className="self-stretch  flex flex-row  py-[0rem] pr-[1.125rem] pl-[0.938rem]">
        <div className="flex-1 flex flex-row items-start justify-start gap-[0.938rem]">
          <div className="h-[1.25rem] w-[1.188rem] relative z-[1]">
            <div className="absolute top-[0rem] left-[0rem] rounded-sm box-border w-[0.75rem] h-[1.25rem] border-[1px] border-solid border-darkslategray-200" />
            <div className="absolute top-[0.5rem] left-[0.438rem] rounded-sm bg-background-2 w-[0.438rem] h-[0.25rem] z-[1]" />
            <img
              className="absolute h-2/5 w-[52.63%] top-[30%] right-[0%] bottom-[30%] left-[47.37%] max-w-full overflow-hidden max-h-full z-[2]"
              alt=""
              src="/vector-5.svg"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-[0.063rem] px-[0rem] pb-[0rem]">
            <div className="self-stretch relative leading-[1.125rem] z-[1]">{`Logout `}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidbar;
