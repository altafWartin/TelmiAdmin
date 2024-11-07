import React, { useEffect, useState } from 'react'; // Import useState for managing state
import { useParams, useNavigate } from 'react-router-dom'; // Import useParams to extract URL parameters
import DeleteUser from '../components/DeleteUser'; // Import your DeleteUser component
import Switcher13 from '../components/ToggleSwitch'; // Import your Switcher component
import { fetchSingleProfile } from "../api/apiFunctions"; // Import your API function
import Switcher from '../components/ToggleSwitch';
import FriendsDropdown from '../components/FriendsDropdown';
import Avatar from "react-avatar"; // or your chosen avatar library
import HorizontalCardList from '../components/HorizontalCardList';
import RoomsHosted from '../components/RoomsHosted';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faHeart, faEye } from '@fortawesome/free-solid-svg-icons';
import Spinner from "react-bootstrap/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";



const UserProfile = () => {


    const { userId } = useParams(); // Get userId from URL parameters
    const [userData, setUserData] = useState(null); // State to hold user data
    const [friendsCount, setFriendsCount] = useState(0); // Set initial state to 0
    const navigate = useNavigate();
    const [totalLikes, setTotalLikes] = useState(0);
    const [totalViews, setTotalViews] = useState(0);

    console.log("totalLikes", totalLikes, totalViews,)

    // Callback function to receive total likes and views
    const handleRoomData = (likes, views) => {
        setTotalLikes(likes);
        setTotalViews(views);
    };

    console.log(friendsCount, "SLDKFJA;LSKDFJ")
    useEffect(() => {
        const getUserData = async () => {
            try {
                const data = await fetchSingleProfile(userId); // Fetch user data
                setUserData(data.profile); // Update state with user data
                console.log(data.profile)
                if (Array.isArray(data.profile.friends)) {
                    setFriendsCount(data.profile.friends.length); // Get length of friends array
                } else {
                    console.error('Friends data is not an array:', data.friends);
                    setFriendsCount(0); // Set to 0 if not an array
                }
                console.log("Friends Count:", data.friends.length); // Log fetched length
            } catch (error) {
                console.error('Error fetching user data:', error); // Handle errors
            }
        };

        getUserData(); // Call the async function
    }, [userId]); // Re-run effect if userId changes

    const handleSuccess = (responseMessage) => {
        navigate("/userList");
    };


    // Conditional rendering while userData is being fetched
    if (!userData) {
        return <div className="w-full flex justify-center items-center h-96">
            <Spinner animation="grow" variant="dark" />
        </div>; // Show loading state while fetching
    }

    return (
        <section className="  rounded-xl w-full bg-white text-darkslategray-200 p-3 flex flex-col items-start justify-start box-border gap-2 max-w-full text-left text-[1.125rem] font-Manrope">
            <div className="w-full h-[11rem] flex items-center justify-between rounded-lg p-4 bg-white ">
                {/* User Profile Section */}
                <div className="flex gap-2 bg-[#227DFF0D] h-full p-4 rounded-2xl shadow-md items-center">
                    <Avatar
                        name={userData.fullName}
                        src={userData.profilePhoto}
                        size="80"
                        round={true}
                        className="mr-1"
                    />
                    <div className="flex flex-col justify-center">
                        <span className="font-semibold font-[Inter] text-[#0C2333] text-lg">
                            {userData.fullName}
                        </span>
                        <span className="font-semibold font-[Inter] text-[#227DFF] text-sm">
                            {userData.email}
                        </span>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="flex gap-[3.5rem] bg-[#227DFF0D]  shadow-md h-full p-4 rounded-2xl items-center">
                    <div className="flex flex-col items-center">
                        <FontAwesomeIcon icon={faUserFriends} className="text-blue-500 mb-1" />
                        <h3 className="text-blue-500 text-sm">Friends</h3>
                        <p className="text-lg font-semibold">{friendsCount}</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <FontAwesomeIcon icon={faHeart} className="text-red-500 mb-1" />
                        <h3 className="text-red-500 text-sm">Likes</h3>
                        <p className="text-lg font-semibold">{totalLikes}</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <FontAwesomeIcon icon={faEye} className="text-blue-500 mb-1" />
                        <h3 className="text-blue-500 text-sm">Views</h3>
                        <p className="text-lg font-semibold">{totalViews}</p>
                    </div>
                </div>

                {/* Actions Section */}
                <div className="flex gap-4 bg-[#227DFF0D] shadow-md h-full p-4 rounded-2xl items-center justify-end">
                    <Switcher userId={userData._id} defaultChecked={userData.isBlocked} />
                    <DeleteUser userId={userData._id} onSuccess={handleSuccess} />
                </div>
            </div>


            <div className="w-full rounded-lg p-4">
                <div className='flex flex-col gap-2'>
                    <label className="text-[#333] font-inter text-[1.125rem] font-medium normal-case leading-[1.125rem] ">
                        Bio
                    </label>

                    <p className="w-full h-[6rem] text-[#333] px-3 py-2 rounded-sm bg-[#227DFF0D] font-inter text-[1rem] normal-case font-normal leading-[1.5rem]">
                        {userData.bio} {/* Use fetched bio */}
                    </p>
                </div>
                <div>
                    <FriendsDropdown friendsData={userData.friends} />
                </div>
            </div>

            <HorizontalCardList userId={userData._id} />

            <RoomsHosted onRoomData={handleRoomData} userId={userData._id} />


        </section>
    );
};

export default UserProfile;
