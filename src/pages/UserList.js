import React, { useState, useEffect } from 'react';
import group42a from "../Assets/Icons/Group 4.svg";
import { Link, useNavigate } from "react-router-dom"; // Importing useNavigate hook
import Spinner from 'react-bootstrap/Spinner';

import 'bootstrap/dist/css/bootstrap.min.css';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = useState(true); // Loading state

  const [userId, setUserId] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [profiles, setProfiles] = useState([]);
  const navigate = useNavigate(); // Initializing the useNavigate hook

  const notify = () => toast.success("User delete successfully!!!");
  const block = () => toast.success("User Blocked Successfully!!!");
  const handleOpen = (userId) => {
    setShowModal(true)

    setUserId(userId); // Set the userId in state when opening the modal
    console.log(userId);
  };

  const handleClose = () => setShowModal(false)

  const [showModal, setShowModal] = React.useState(false);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://3.15.166.99:8000/api/getAllProfiles', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // Add any other headers if required
          },
          // Add any request body if required
        });
        const data = await response.json();
        setUsers(data.users); // Assuming data is an array of user objects
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false); // Set loading to false when data is fetched or error occurs
      }
    };

    fetchData();
  }, [users]);



  const fetchSingleProfile = async (userId) => {
    try {
      const accessToken = localStorage.getItem("accessToken");

      const response = await fetch(
        'http://3.15.166.99:8000/api/getSingleProfile',
        {
          method: 'POST', // Use POST method
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({ _id: userId }), // Send _id in the request body
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch single profile");
      }

      const data = await response.json();
      navigate(`/userProfile`, { state: { profile: data } });

      console.log("Single Profile:", data);
      // Handle the fetched single profile data as needed
    } catch (error) {
      console.error("Error fetching single profile:", error);
    }
  };


  const deleteUserProfile = async (userId) => {
    try {
      const accessToken = localStorage.getItem("accessToken");   
      console.log(access);
      if (!accessToken) {
        throw new Error("Access token not found in local storage");
      }
      console.log("userId", userId);
      const response = await fetch(     
        "http://3.15.166.99:8000/api/deleteUser",
        {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
            authorization: `${accessToken}`,
          },
          body: JSON.stringify({ userId }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
        notify();
        setErrorMessage("");

        fetchData(); // Fetch updated user list after deletion
      } else {
        setMessage("");
        setErrorMessage(data.message || "An error occurred");
      }
    } catch (error) {
      setMessage("");
      setErrorMessage("Network error occurred");
    }
  };


  const blockUserProfile = async (userId) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        throw new Error("Access token not found in local storage");
      }

      const response = await fetch("http://3.15.166.99:8000/api/blockUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `${accessToken}`,
        },
        body: JSON.stringify({ userId }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
        block();
        setErrorMessage("");

        fetchData(); // Fetch updated user list after deletion
      } else {
        setMessage("");
        setErrorMessage(data.message || "An error occurred");
      }
    } catch (error) {
      setMessage("");
      setErrorMessage("Network error occurred");
    }
  };





  return (
    <section className=" w-full flex-1 flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] box-border max-w-[calc(100%_-_326px)] text-left text-[1.5rem] text-gray-400 font-heading-heading-4 mq900:max-w-full">
      <ToastContainer className="text-[1rem]" />
      <div className='z-50'>

        <>
          {showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/* content */}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/* header */}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <h3 className="text-3xl font-semibold">Action</h3>
                      <button
                        className="p-1 ml-auto border-0 float-right bg-transparent  text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => handleClose(false)}
                      >
                        X
                      </button>


                    </div>

                    {/* footer */}
                    <div className="flex items-center  justify-end p-6  border-t  border-solid border-blueGray-200 rounded-b ">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-4 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => {
                          deleteUserProfile(userId);
                          handleClose(); // Close the modal after deleting

                        }}
                      >
                        Delete User
                      </button>
                      <button
                        className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => {
                          blockUserProfile(userId);
                          handleClose(); // Close the modal after deleting
                        }}
                      >
                        Block User
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </>

      </div>
      <div className=" w-full self-stretch flex flex-col items-start justify-start gap-[0.438rem] max-w-full">
        <div className=" w-full self-stretch rounded-xl bg-background-2 flex flex-col items-start justify-start pt-[2.375rem] pb-[2.438rem] pr-[2.044rem] pl-[2.056rem] box-border gap-[1.563rem] max-w-full text-[2.375rem] text-darkslategray-200 font-gilroy mq900:pt-[1.563rem] mq900:pb-[1.563rem] mq900:box-border mq450:pt-[1.25rem] mq450:pb-[1.25rem] mq450:box-border">
          <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap">
            <div className="flex flex-col items-start justify-start pt-[0.438rem] px-[0rem] pb-[0rem]">
              <h1 className="m-0 h-[2rem] relative text-inherit leading-[2.375rem] capitalize font-semibold font-inherit inline-block shrink-0 min-w-[5.938rem] z-[2] mq900:text-[1.875rem] mq900:leading-[1.875rem] mq450:text-[1.438rem] mq450:leading-[1.438rem]">
                users
              </h1>
            </div>
            <div className="rounded-3xs overflow-x-auto flex flex-row items-start justify-start py-[1rem] px-[1.025rem] gap-[0.813rem] z-[1] text-[1.125rem] border-[0.6px] border-solid border-background-2">
              <div className="h-[2.875rem] w-[12.025rem] relative rounded-3xs box-border shrink-0 hidden border-[0.6px] border-solid border-background-2" />
              <div className="relative leading-[0.75rem] capitalize inline-block min-w-[4.106rem] z-[1]">
                sort by :
              </div>
              <div className="relative leading-[0.75rem] capitalize inline-block min-w-[3.625rem] z-[1]">
                recent
              </div>
              <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
                <img
                  className="w-[0.481rem] h-[0.25rem] relative z-[1]"
                  alt=""
                  src="/vector-11.svg"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-start justify-start gap-[1.375rem] max-w-full z-[2]">
            {loading ? (
              <div className="flex justify-center ml-[450px] items-center h-96">
                <Spinner animation="grow" variant="dark" />
              </div>



            ) : (
              users.map((user) => (
                <div key={user._id} className="w-full rounded-sm bg-royalblue-500 shadow-[0px_0px_10px_rgba(0,_0,_0,_0.1)] flex flex-row items-start justify-between py-[0.875rem] pr-[1.875rem] pl-[1.819rem] box-border gap-[1.25rem] text-left text-[1.125rem] text-darkslategray-200 font-heading-heading-4">
                  {/* Your user data display components */}
                  <div onClick={() => fetchSingleProfile(user._id)}
                    className='w-full flex justify-between cursor-pointer'>
                    <div
                      className="flex flex-row items-start justify-start py-[0rem] pr-[2.831rem] pl-[0rem] gap-[2.75rem]"
                    // style={frameDivStyle}
                    >
                      <img
                        className="h-[3.25rem] w-[3.144rem] relative rounded-[50%] object-cover z-[1]"
                        loading="lazy"
                        alt=""
                        src={user.profilePhoto}
                      />
                      <div className="flex flex-col items-start justify-start pt-[1.063rem] px-[0rem] pb-[0rem]">
                        <div className="relative leading-[1.125rem] capitalize font-semibold inline-block min-w-[6.5rem] z-[1]">
                          {user.fullName}
                        </div>
                      </div>
                    </div>
                    <div
                      className="w-[15.313rem] flex flex-col items-start justify-start pt-[1.063rem] pb-[0rem] pr-[1.25rem] pl-[0rem] box-border"
                    // style={frameDiv1Style}
                    >
                      <div className="relative leading-[1.125rem] capitalize whitespace-nowrap z-[1]">
                        {user.email}
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() => handleOpen(user._id)}
                    className="flex w-1/5 justify-end items-end flex-col pt-[0.813rem] px-[0rem] pb-[0rem]"
                  >
                    <img
                      className="w-[0.375rem] text-gray-400 h-[1.625rem] relative object-contain z-[1]"
                      loading="lazy"
                      alt=""
                      src={group42a}
                    />
                  </div>

                </div>
              ))
            )}


          </div>
        </div>
      </div>
    </section >

  );
};

export default UserList;
