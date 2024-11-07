import React, { useEffect, useState } from "react";
import FrameComponent from "../components/Navbar"; // Assuming you have a Navbar component
import { dashboardUserData } from "../api/apiFunctions"; // Adjust the import according to your project structure
import UserBarChart from "../components/UserBarChart";
import ActiveInactiveUsersPieChart from "../components/ActiveInactiveUsersPieChart";
import ToggleButton from "../components/ToggleButton";
import MonthDropdown from "../components/MonthDropdown";
import UserBarChartMonthly from "../components/UserBarChartMonthly";
import RoomsHostedBarChart from "../components/RoomsHostedBarChart";
import Spinner from "react-bootstrap/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";


const DataAnalysis1 = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isYearly, setIsYearly] = useState(true);

  const [selectedmonth, setSelectedmonth] = useState(new Date().getMonth() + 1);
  console.log("selectedmonth", selectedmonth)

  // New function to handle selected month change
  const handleMonthSelect = (month) => {
    setSelectedmonth(month); // Update selected month
    console.log("Selected Month:aaaaaaaaaaaa", month);
  };

  const handleToggleChange = (isYearly) => {
    console.log("Parent Component - isYearly:", isYearly);
    setIsYearly(isYearly);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await dashboardUserData();
        setUserData(data); // Set the fetched data into state
      } catch (err) {
        setError(err); // Set error state if fetching fails
      } finally {
        setLoading(false); // Set loading to false after the fetch is complete
      }
    };

    fetchUserData();
  }, []); // Empty dependency array to run this effect only once when the component mounts

  console.log("userData", userData);

  if (loading) {
    return <div className="w-full flex justify-center items-center h-96">
      <Spinner animation="grow" variant="dark" />
    </div>; // Loading state
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Error state
  }

  return (
    <section className="w-full flex flex-col items-start justify-start pt-[1.563rem] px-[0rem] pb-[0rem] box-border  text-left text-[1.5rem] text-gray-400 font-heading-heading-4 ">
      <div className="self-stretch w-full flex flex-col items-start justify-start gap-[1.313rem] max-w-full">
        <div className="relative w-full font-semibold mq450:text-[1.188rem]">
          Dashboard Overview
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-3 max-w-full text-[1.219rem] text-darkslategray-100 mq700:gap-[1.125rem]">
          <div className="self-stretch rounded-[8.89px] bg-gray-100 shadow-[0px_16.2px_40.59px_rgba(0,_0,_0,_0.1)] flex flex-col items-start justify-start pt-[1.319rem] pb-[1.975rem] pr-[1.619rem] pl-[1.625rem] box-border gap-[1.775rem] max-w-full mq450:pt-[1.25rem] mq450:pb-[1.313rem] mq450:box-border">
            <div className="w-[65.25rem] h-[24.713rem] relative rounded-[8.89px] bg-gray-100 shadow-[0px_16.2px_40.59px_rgba(0,_0,_0,_0.1)] hidden max-w-full" />

            <div className="self-stretch flex flex- items-end justify-start gap-[0.513rem] max-w-full text-[0.913rem] text-lightslategray-100">
              <div className="self-stretch flex   items-start justify-start  ">
                <div className="w-[16rem] flex flex-col items-start justify-start py-[0rem] pr-[1.188rem] pl-[0rem] gap-[1.219rem] text-[0.713rem]">
                  <div className="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[1.213rem] gap-[0.756rem] text-[0.913rem]">
                    <div className="relative font-semibold text-[1.188rem] text-black">
                      Users registered
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[0.194rem]">
                      <div className="relative inline-block min-w-[4.75rem] z-[1]">
                        Total users
                      </div>
                      <b className="relative text-[1.825rem] text-darkslategray-100 z-[1] mq450:text-[1.438rem]">
                        {userData.totalUsers}
                      </b>
                    </div>
                    <div className="relative z-[1] text-royalblue-100">
                      <span className="font-semibold">
                        {userData.percentageChange}
                      </span>
                      <span className="text-lightslategray-100">
                        <span className="font-semibold font-poppins">{` `}</span>
                        <span>than last week</span>
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[0.406rem]">
                    <div className="flex flex-row items-start justify-start gap-[0.456rem]">
                      <i class="bi bi-record-circle-fill text-darkorange-100"></i>

                      <div className="relative inline-block min-w-[3.438rem] shrink-0 [debug_commit:1de1738] z-[1]">
                        Last week
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.563rem] pl-[1.063rem] text-darkslategray-100">
                      <div className="relative font-semibold inline-block min-w-[2.875rem] z-[1]">
                        {userData.lastWeekUsers}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-start justify-start gap-[0.4rem]">
                    <div className="flex flex-row items-start justify-start gap-[0.45rem]">
                      <i class="bi bi-record-circle-fill text-primary"></i>
                      <div className="relative inline-block min-w-[4.938rem] shrink-0 [debug_commit:1de1738] z-[1]">
                        Current Month
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start py-[0rem] pr-[1.063rem] pl-[1.056rem] text-darkslategray-100">
                      <div className="relative font-semibold inline-block min-w-[2.875rem] z-[1]">
                        {userData.currentMonthUsers}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex row justify-end">
                  <div className=" w-full flex justify-end gap-5">
                    {isYearly ? (
                      <MonthDropdown onMonthSelect={handleMonthSelect} /> // Correctly pass the function
                    ) : null}
                    <ToggleButton
                      initialIsYearly={false}
                      onToggleChange={handleToggleChange}
                    />
                  </div>

                  {isYearly ? (
                    <>
                      {" "}
                      <div className="flex justify-end">
                        {" "}
                        <UserBarChartMonthly selectedmonth={selectedmonth} />
                      </div>{" "}
                    </>
                  ) : (
                    <div className="flex justify-end">
                      {" "}
                      <UserBarChart userData={userData} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex  items-start justify-between gap-3 max-w-full text-[1.381rem] text-light-primary">
            {/* RoomsHostedBarChart Container */}
            <div className=" rounded-lg bg-gray-100 shadow-lg flex flex-col items-start justify-start p-6 box-border gap-6 text-2xl text-darkslategray-100 ">
              <RoomsHostedBarChart />
            </div>

            {/* User Data and Pie Chart Container */}
            <div className="flex rounded-lg bg-gray-100 shadow-lg flex-col items-center p-6 box-border text-darkslategray-100 ">
              <h2 className="text-xl font-bold text-center w-full mb-4">
                Total Users: {userData.totalUsers}
              </h2>

              <div className="w-full flex flex-col items-center gap-2">
                <h2 className="text-sm font-bold text-center flex items-center">
                  <i className="bi bi-record-circle-fill text-primary mr-2"></i>
                  Active Users: {userData.activeUsers}
                </h2>
                <h2 className="text-sm font-bold text-center flex items-center">
                  <i className="bi bi-record-circle-fill text-darkorange-100 mr-2"></i>
                  Inactive Users: {userData.inactiveUsers}
                </h2>
              </div>

              <div className="w-full flex justify-center items-center">
                <ActiveInactiveUsersPieChart userData={userData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataAnalysis1;
