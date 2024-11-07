import React, { useEffect, useState } from "react";

const Navbar = ({ group2469, group24691, group24692 }) => {
  const [userData, setUserData] = useState(null); // Set initial state to null

  useEffect(() => {
    const storedUserData = localStorage.getItem("user");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  return (
    <header className="self-stretch rounded-xl [background:linear-gradient(90deg,_#3d8de3,_rgba(61,_141,_227,_0.43))] flex flex-row items-end justify-between pt-[0.625rem] pb-[0.513rem] pr-[0.563rem] pl-[1.375rem] box-border top-[0] z-[99] sticky max-w-full gap-[1.25rem]">
      <div className="h-[4.625rem] w-[85.625rem] relative rounded-xl [background:linear-gradient(90deg,_#3d8de3,_rgba(61,_141,_227,_0.43))] hidden max-w-full" />
      <img
        className="h-[3.175rem] w-[7.063rem] relative object-cover z-[1]"
        loading="lazy"
        alt=""
        src="/image-2023-06-10t12-20-26-626z-1@2x.png"
      />
      <div className="w-[14.313rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.113rem] box-border">
        <div className="self-stretch rounded-xl bg-aliceblue-200 flex flex-row items-start justify-start pt-[0.313rem] px-[1.688rem] pb-[0.375rem] gap-[0.938rem] z-[1]">
          <div className="h-[3.375rem] w-[16.313rem] relative rounded-xl bg-aliceblue-200 hidden" />

          <div className="flex flex-col items-start justify-start pt-[0.094rem] px-[0rem] pb-[0rem]">
            <div className="w-[2.5rem] h-[2.5rem] relative">
            
              <img
                className="absolute top-[0rem] left-[0rem] w-full h-full object-cover z-[4]"
                alt=""
                src={group24692}
              />
            </div>
          </div>
          <div className="h-[2.688rem] flex-1 relative">
            <nav className="m-0 absolute top-[0rem] left-[0rem] flex flex-row items-start justify-start text-left text-[0.875rem] text-darkorange-200 font-heading-heading-4">
              <div className="relative tracking-[0.02em] leading-[1.375rem] font-medium inline-block min-w-[3.688rem] whitespace-nowrap z-[2]">
                {userData ? userData.fullName : "Name"} {/* Fallback if userData is null */}
              </div>
            </nav>
            <nav className="m-0 absolute top-[1.563rem] left-[0rem] flex flex-row items-start justify-start text-left text-[0.75rem] text-background-2 font-heading-heading-4">
              <div className="relative tracking-[0.02em] text-lightslategray-200 leading-[1.125rem] inline-block min-w-[4.875rem] whitespace-nowrap z-[2]">
                {userData ? userData.email : "Email"} {/* Fallback if userData is null */}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
