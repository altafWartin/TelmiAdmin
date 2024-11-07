import React, { useState, useEffect } from "react";
import group42a from "../Assets/Icons/Group 4.svg";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchAllProfiles } from "../api/apiFunctions";
import Switcher from "../components/ToggleSwitch";
import DeleteUser from "../components/DeleteUser";
import Avatar from "react-avatar"; // or your chosen avatar library

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [shouldFetchData, setShouldFetchData] = useState(true);
  const navigate = useNavigate();

  const notify = (msg) => toast.success(msg);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAllProfiles();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (shouldFetchData) {
      fetchData();
      setShouldFetchData(false); // Reset the fetch flag after fetching data
    }
  }, [shouldFetchData]);

  const handleSuccess = (responseMessage) => {
    setMessage(responseMessage); // Handle success response
    notify("User deleted successfully!"); // Notify on successful deletion
    setShouldFetchData(true); // Re-fetch data after a user is deleted
  };

  return (
    <section className=" rounded-xl w-full bg-gray-200 pb-4 text-darkslategray-200 flex flex-col items-center justify-start box-border  max-w-full text-left text-[1.125rem] font-[Manrope]">
      <ToastContainer className="text-[1rem]" />

      <div className="self-stretch rounded-xl flex flex-col items-start justify-start pt-[1rem] px-[2rem] box-border gap-[1.563rem] max-w-full text-[2.375rem] text-darkslategray-200 font-gilroy ">
        <h1 className="m-0 text-inherit leading-[2.375rem] capitalize font-semibold font-inherit inline-block z-[2]">
          Users
        </h1>

        {loading ? (
          <div className="w-full flex justify-center items-center h-96">
            <Spinner animation="grow" variant="dark" />
          </div>
        ) : (
          <div className="w-full flex flex-col items-center justify-start gap-[1.375rem] overflow-y-auto max-h-[500px] p-2  z-[2]   ">
            {users.map((user) => (
              <div
                key={user._id}
                className="w-full  rounded-sm bg-royalblue-500 shadow-[0px_0px_10px_rgba(0,_0,_0,_0.1)] flex flex-row items-center justify-between py-[0.875rem] pr-[1.875rem] pl-[1.819rem] box-border gap-[1.25rem] text-left text-[1.125rem] text-darkslategray-200 font-heading-heading-4"
              >
                <Link
                  to={`/userList/userProfile/${user._id}`} // Use the user ID as a route parameter                  className="w-full no-underline flex justify-between" // Ensure Link takes full width for clickability
                  className="w-full no-underline flex justify-between" // Ensure Link takes full width for clickability
                >
                  <div className="flex flex-row items-center justify-start py-0 pr-[2.231rem] pl-0 gap-[1.75rem]">
                    <Avatar
                      name={user.fullName}
                      src={user.profilePhoto}
                      size="50"
                      round={true}
                      className="mr-1"
                    />

                    <div className="w-[12.313rem] flex flex-col items-start justify-start  box-border">
                      <div className=" text-[#333] font-inter text-[1.125rem] font-semibold leading-[1.125rem] capitalize whitespace-nowrap ">
                        {user.fullName}
                      </div>
                    </div>
                  </div>

                  <div className="w-[18.313rem] flex flex-col items-start justify-start pt-[1.063rem] pb-0 pr-[1.25rem] pl-0 box-border">
                    <div className=" text-[#333] font-inter text-[1.125rem] font-semibold leading-[1.125rem] capitalize whitespace-nowrap">
                      {user.email}
                    </div>
                  </div>
                </Link>

                <div className="flex w-full justify-end gap-3 items-center">
                  <Switcher userId={user._id} defaultChecked={user.isBlocked} />
                  <DeleteUser
                    userId={user._id}
                    onSuccess={handleSuccess} // Pass the success handler
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default UserList;
